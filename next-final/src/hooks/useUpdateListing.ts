import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useUpdateListing = () => {
    return useMutation({mutationFn: async ({id,updatedList}:{id:string, updatedList: any}) => {
        const response = await axios.put(`https://689d89abce755fe69788ea77.mockapi.io/users/${id}`, updatedList);
        return response.data
    },
    onSuccess: () => {
        return  useQuery({queryKey: ["listings"]})}
    })}