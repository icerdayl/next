import { Author } from "./author";

type Posts = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export default async function PostSequential(){
     const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts: Posts[] = await response.json();

    const filteredPosts = posts.filter((post) => post.id %10 === 1)

    return(
        <ul className="space-y-4 p-4">
            <h1>BLOG POST</h1>
            {filteredPosts.map((post) => (
                <li 
                key={post.id}
                className="p-4 bg-white shadow-md rounded-lg text-gray-700"
                >
                    <div className="font-bold">{post.userId}</div>
                    <div className="text-sm">
                        <div>UserId: {post.id}</div>
                        <div>Title: {post.title}</div>
                        <div>Body: {post.body}</div>
                        <Author userId={post.userId}/>
                    </div>
                </li>
            ))}
        </ul>
    )
}