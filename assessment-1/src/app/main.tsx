import { NextRequest } from "next/server";
import Link from "next/link";
import { revalidatePath } from "next/cache";

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
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch("https://689d89abce755fe69788ea77.mockapi.io/users");
  const users = await response.json();
  console.log(users);

  async function deleteUser(request: NextRequest, {params}:{params:{id:string}}){
    "use server";
    const {id} = params
    const response = await fetch(
      `https://689d89abce755fe69788ea77.mockapi.io/users/${id}`,
      {
        method: "DELETE",
      }
    );
    const newUser = await response.json();
    console.log(newUser)
  }

  async function addUser(formData: FormData) {
    "use server";
    const title = formData.get("title");
    const tags = formData.get("tags");
    const company = formData.get("company");
    const email = formData.get("email");
    const website = formData.get("website");
    const location = formData.get("location");
    const description = formData.get("description");
    const res = await fetch(
      "https://689d89abce755fe69788ea77.mockapi.io/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title , tags, company, email, website, location, description}),
      }
    );
    const newUser = await res.json();
    console.log(newUser);
    revalidatePath("/");
  }

  return (
    <>
      <form action={addUser} className="flex-col">
        <div className="">
          <input type="text" name="title" required placeholder="Enter the title..."/>
          <input type="text" name="tags" required placeholder="Enter the tags..."/>
          <input type="text" name="company" required placeholder="Enter the company..."/>
          <input type="text" name="email" required placeholder="Enter the email..."/>
        </div>
        <div>
          <input type="text" name="website" required placeholder="Enter the website..."/>
          <input type="text" name="location" required placeholder="Enter the location..."/>
          <input type="text" name="description" required placeholder="Enter the description..."/>
          <button type="submit">Enter</button>
        </div>
      </form>
      <ul className="space-y-4 p-4">
        {users.map((user: User) => (
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
    </>
  );

    
}
