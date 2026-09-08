// src/components/Modal.tsx
import { useEffect } from "react";
import css from "./Modal.module.css"
import { createPortal } from "react-dom";

interface ModalProps {
    onClose: () => void;
    children: React.ReactNode;
}
export default function Modal({ onClose, children }: ModalProps) {
    

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        
        if (e.target === e.currentTarget) {
            onClose();
        }
    }

    useEffect(() => {
        const handleKeyDownClick = (e:KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
                }
        }
        document.addEventListener("keydown", handleKeyDownClick);
        document.body.style.overflow = "hidden";
         
        return () => {
            document.removeEventListener("keydown", handleKeyDownClick);
            document.body.style.overflow = "";
        }

        },[onClose])
  return createPortal (
          <div
      className={css.backdrop}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
    >
      <div className={css.modal}>
        <button className={css.closeButton} onClick={onClose} aria-label="Close modal">
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body

  );
}
