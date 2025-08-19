import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useDeleteListing = () => {
    return useMutation({mutationFn: async (id: string) => {
        const response = await axios.delete(`https://689d89abce755fe69788ea77.mockapi.io/users/${id}`);
        return response.data
    },
    onSuccess: () => {
        return  useQuery({queryKey: ["listings"]})}
    })}