"use client";
import { resolve } from "path";
import { useState, useEffect } from "react";

type User ={
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string
}

export default function UsersClient(){
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect (() => {
        
        async function fetchUsers() {
            await new Promise((resolve) => setTimeout(resolve,2000))
            try{
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                )
                if (!response.ok) throw new Error("Failed to fetch users")
                const data = await response.json()
                setUsers(data)
            } catch (err) {
                setError("Failed to fetch users")
                if (err instanceof Error){
                    setError(`Failed to fetch users: ${err.message}`)
                }
            } finally{
                setLoading(false)
            }
        }
        fetchUsers()
    }, [])
    if (loading) return <div>Loading...</div>
    if (error) return <div>{error}</div>;

    return(
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} ({user.email})
                </li>
            ))}
        </ul>
    )
}