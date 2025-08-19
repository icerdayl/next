"use client";

import Link from "next/link";

import { useGetListing } from "@/hooks/useGetListing";
import { usePostListing} from "@/hooks/usePostListing";
import { useDeleteListing } from "@/hooks/useDeleteListing";
import { useUpdateListing } from "@/hooks/useUpdateListing";


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
    const {mutate: updateList} = useUpdateListing()
gi
    const handleUpdate = (formValue: FormData) => {
        updateList({
            titleUp: formValue.get('titleUp'),
            tagsUp: formValue.get('tagsUp'),
            companyUp: formValue.get('companyUp'),
            emailUp: formValue.get('emailUp'),
            websiteUp: formValue.get('websiteUp'),
            locationUp: formValue.get('locationUp'),
            descriptionUp: formValue.get('descriptionUp')
        })
    }

    const updatePost = (listing:Listing) => {
        return(
            <div className="fixed w-50 bg white">
                <div>
                    <h1 className="font-extrabold">Hello</h1>
                </div>
                <form action={handleUpdate}>
                    <input type="text" value={listing.title} name="titleUp"/>
                    <input type="text" value={listing.tags} name="tagsUp"/>
                    <input type="text" value={listing.company} name="companyUp"/>
                    <input type="text" value={listing.email} name="emailUp"/>
                    <input type="text" value={listing.website} name="websiteUp"/>
                    <input type="text" value={listing.location} name="locationUp"/>
                    <input type="text" value={listing.description} name="descriptionUp"/>
                    <button type="submit">SUMBIT</button>
                </form>
            </div>
        )
        console.log("CLICKED")
    }

    const deletePost = (id: string) => {
        deleteList(id)
    }

    const addPost = (formData: FormData) => {
        postList({
            title: formData.get('title'),
            tags: formData.get('tags'),
            company: formData.get('company'),
            email: formData.get('email'),
            website: formData.get('website'),
            location: formData.get('location'),
            description: formData.get('description')
        })

    }


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
                    <Link href="../" className="border-2 py-3 px-6 mt-2 rounded-xl hover:bg-white hover:border-none hover:text-black duration-500 ease-in">
                    Home</Link></nav>
            </header>
            <form action={addPost}className="flex-col justify-between text-center mt-5 flex-1">
                <div className="">
                <input className="mr-2 bg-white placeholder:text-gray-400 pr-5 pl-1 py-1.5 rounded-lg text-black outline-none"type="text" id="title" name="title" required placeholder="Enter the title..."/>
                <input className="mr-2 bg-white placeholder:text-gray-400 pr-5 pl-1 py-1.5 rounded-lg text-black outline-none"type="text" id="tags" name="tags" required  placeholder="Enter the tags..."/>
                <input className="mr-2 bg-white placeholder:text-gray-400 pr-5 pl-1 py-1.5 rounded-lg text-black outline-none"type="text" id="company" name="company" required placeholder="Enter the company..."/>
                <input className="mr-2 bg-white placeholder:text-gray-400 pr-5 pl-1 py-1.5 rounded-lg text-black outline-none"type="text" id="email" name="email" required placeholder="Enter the email..."/>
                </div>
                <div className="mt-4">
                <input className="mr-2 bg-white placeholder:text-gray-400 pr-5 pl-1 py-1.5 rounded-lg text-black outline-none"type="text" id="website" name="website" required placeholder="Enter the website..."/>
                <input className="mr-2 bg-white placeholder:text-gray-400 pr-5 pl-1 py-1.5 rounded-lg text-black outline-none"type="text" id="location" name="location" required placeholder="Enter the location..."/>
                <input className="mr-2 bg-white placeholder:text-gray-400 pr-5 pl-1 py-1.5 rounded-lg text-black outline-none"type="text" id="description" name="description" required  placeholder="Enter the description..."/>
                <button type="submit" className="mr-41 bg-white text-black font-bold px-3 py-1.5 rounded-lg hover:bg-gray-800 hover:text-white transition duration-300 ease-in cursor-pointer">Enter</button>
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
                        <Link href="/edit"><button className="hover:text-amber-200 cursor-pointer">Edit</button></Link>
                        <button className="hover:text-red-400 cursor-pointer" onClick={() => deletePost(listing.id.toString())}>Delete</button>
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