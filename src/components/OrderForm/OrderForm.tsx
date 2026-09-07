
interface OrderFormProps{
    onsubmit:(name:string)=>void
}


export default function OrderForm({onsubmit}:OrderFormProps) {
    const handleSubmit = (formData:FormData) => {
        const username = formData.get("username") as string;
        onsubmit(username);
    }

    return (
        <form action={handleSubmit}>
            <input type="text" name="username" />
            <button type="submit">submit</button>

        </form>
    )
}