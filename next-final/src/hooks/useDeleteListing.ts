import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useDeleteListing = () => {
    return useMutation({mutationFn: async (id: string) => {
        const response = await axios.delete(`http://127.0.0.1:8000/api/listings/all/${id}`);
        return response.data
    },
    onSuccess: () => {
        return  useQuery({queryKey: ["listings"]})}
    })}