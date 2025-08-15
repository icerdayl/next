"use client";

import Link from "next/link";

import { useGetListing } from "@/hooks/useGetListing";

type Listing = {
    id: number;
    title: string;
    tags: string;
    company: string;
    email: string;
    website: string;
    location: string;
    description: string
}

const LandingPage = () => {
    const {data: listings, isLoading, isError, error} = useGetListing()

    if (isLoading){
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
            </div>
        )
    }

    if(isError){
        return(
            <div>
                <h1 className="text-red-600 font-bold text-6xl text-center align-middle animate-pulse">Error: {error.message}</h1>
            </div>
        )
    }

    return(
         <>
            <header>
                <nav className="text-center font-bold cursor-pointer"><Link href="../">Home</Link></nav>
            </header>
            <form className="flex-col justify-between text-center mt-3">
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
                {(listings ?? []).map((listing: Listing) => (
                <li
                    key={listing.id}
                    className="flex-col p-4 bg-white shadow-md rounded-lg text-gray-700"
                >
                    <div className="font-bold flex justify-between">{listing.title} 
                    <div className="flex gap-5">
                        <button>Edit</button>
                        <button className="hover:text-red-500 cursor-pointer">Delete</button>
                    </div>
                    </div>
                    <div className="text-sm">
                    <div>{listing.tags}</div>
                    <div>{listing.email}</div>
                    <div>{listing.company}</div>
                    <div>Email: {listing.website}</div>
                    <div>Location: {listing.location}</div>
                    <div>Job Description: {listing.description}</div>
                    </div>
                </li>
                ))}
            </ul>
         </>
    )
}

export default LandingPage