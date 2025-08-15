"use client"

import { useGetListing } from "@/hooks/useGetListing"

const TestPage = () => {
    const {data: listings ,isLoading: akoto, isError, error, isFetching} = useGetListing();

    if(akoto) {
        return <p className="animate-spin w-[20px]">loading...</p>
    }

    
    if(isError) {
        return <p>error: {error.message}</p>
    }


  return (
    <div>
        <pre className="">{JSON.stringify(listings,null,4)}</pre>
        {/* <div>
            {listings.map(listing => {
                return <div key={listing.id} className="flex flex-col gap-2 border border-red-500 mb-2">
                    <p className="text-sm text-green-300">{listing.title}</p>
                    <p className="text-sm text-green-300">{listing.company}</p>
                    <p className="text-sm text-green-300">{listing.location}</p>
                    <p className="text-sm text-green-300">{listing.description}</p>
                </div>
            })}
        </div> */}
    </div>
  )
}

export default TestPage