import Link from "next/link";

type User = {
  id: number;
  title: string;
  tags: string;
  company: string;
  email: string;
  website: string;
  location: string;
  description: string
};

export default async function UsersServer() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch("https://689d89abce755fe69788ea77.mockapi.io/users");
  const users: User[] = await response.json();
  console.log(users);

  return (
    <ul className="space-y-4 p-4">
      {users.map((user) => (
        <li
          key={user.id}
          className="flex-col p-4 bg-white shadow-md rounded-lg text-gray-700"
        >
          <div className="font-bold flex justify-between">{user.title} 
            <div className="flex gap-5">
                <button>Edit</button>
                <button className="hover:text-red-500 cursor-pointer">Delete</button>
            </div>
          </div>
          <div className="text-sm">
            <div>{user.tags}</div>
            <div>{user.email}</div>
            <div>{user.company}</div>
            <div>Email: {user.website}</div>
            <div>Location: {user.location}</div>
            <div>Job Description: {user.description}</div>
          </div>
        </li>
      ))}
    </ul>
  );


}
