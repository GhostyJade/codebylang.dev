export default function Search({
    placeholder,
}: {
    placeholder?: string;
}): JSX.Element {
    return (
        <input
            className="rounded-md border border-red-500"
            type="text"
            placeholder={placeholder}
        />
    );
}
