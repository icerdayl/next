import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";

export const usePostListing = () => {
    return useMutation({mutationFn: async (newListing: any) => {
        const response = await axios.post('http://127.0.0.1:8000/api/listings/all', newListing);
        return response.data
    },
    onSuccess: () => {
        return  useQuery({queryKey: ["listings"]})}
    })}






// export const usePostListing = () => {
//     return useMutation({mutationFn: async (newListing) => {
//         const response = await axios.post('http://127.0.0.1:8000/api/listings/all', newListing);
//         return response.data
//     },
//     onSuccess: () =>{
//         return useQuery({queryKey: ["listings"]})
//     }})

// }
