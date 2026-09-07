
interface SearchFormProps{
    onSubmit:(topic:string)=>void
}


export default function SearchForm({onSubmit}:SearchFormProps) {
    const handleSearch = (formData:FormData) => {
        const topic = formData.get("topic") as string;

        if (topic.trim() === "") {
            alert("pleace enter a topic");
            return;
        }
        onSubmit(topic);
    }

    return (
        <form action={handleSearch}>
            <input type="text" name="topic" />
            <button type="submit">Search</button>

        </form>
    )
}