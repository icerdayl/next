"use client";

import Link from "next/link";
import { useGetListing } from "@/hooks/useGetListing";
import { usePostListing} from "@/hooks/usePostListing";
import { useDeleteListing } from "@/hooks/useDeleteListing";

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
    const {mutate: postList} = usePostListing()
    const {mutate: deleteList} = useDeleteListing()

    const deletePost = (id: string) => {
        deleteList(id)
    }

    // const addPost = (formData: FormData) => {
    //     postList({
    //         title: formData.get('name'),
    //         tags: formData.get('tags'),
    //         company: formData.get('company'),
    //         email: formData.get('email'),
    //         website: formData.get('website'),
    //         location: formData.get('location'),
    //         description: formData.get('description')
    //     })

    // }


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
                <nav className="text-center font-bold cursor-pointer mt-5">
                    <Link href="../" className="border-2 py-3 px-6 mt-2 rounded-xl hover:bg-white hover:text-black duration-500 ease-in">
                    Home</Link></nav>
            </header>
            <form className="flex-col justify-between text-center mt-5">
                <div className="">
                <input className="mr-2 "type="text" id="title" name="title" required placeholder="Enter the title..."/>
                <input className="mr-2 "type="text" id="tags" name="tags" required  placeholder="Enter the tags..."/>
                <input className="mr-2 "type="text" id="company" name="company" required placeholder="Enter the company..."/>
                <input className="mr-2 "type="text" id="email" name="email" required placeholder="Enter the email..."/>
                </div>
                <div className="mt-4">
                <input className="mr-2 "type="text" id="website" name="website" required placeholder="Enter the website..."/>
                <input className="mr-2 "type="text" id="location" name="location" required placeholder="Enter the location..."/>
                <input className="mr-2 "type="text" id="description" name="description" required  placeholder="Enter the description..."/>
                <button type="submit" className="hover:font-bold cursor-pointer">Enter</button>
                </div>
            </form>
            <ul className="space-y-4 p-4">
                {(listings ?? []).map((listing: Listing) => (
                <li
                    key={listing.id}
                    className="flex-col p-4 bg-white shadow-md rounded-lg text-gray-700 hover:text-white hover:bg-gray-700 duration-500 ease-in  "
                >
                    <div className="font-bold flex justify-between">{listing.title} 
                    <div className="flex gap-5">
                        <button className="hover:text-amber-200 cursor-pointer">Edit</button>
                        <button className="hover:text-red-400 cursor-pointer" >Delete</button>
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