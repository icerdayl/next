import { axiosApi } from "@/app/lib/axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useUpdateListing = () => {
    const queryClient=useQueryClient()
    return useMutation({mutationFn: async (updatedList: any) => {
        const response = axiosApi.put(`/listings/${updatedList.id}`, updatedList);
        return response
    },
    onSuccess: () => {
        return  queryClient.invalidateQueries({queryKey: ["listings"]})}
    })}