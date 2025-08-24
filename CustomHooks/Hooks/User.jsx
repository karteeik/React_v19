import { useFetch } from "./useFetch"

export const User = () => {

    const {data, loading, error} = useFetch("https://jsonplaceholder.typicode.com/users");

    if(loading) return <h1>Loading</h1>;
    if(error) return <h1>error: {error}</h1>;

    return (
        <>
            <ul>
                {data.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </>
    )
}