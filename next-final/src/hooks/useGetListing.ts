import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const  fetchList = async () => {
    const response = await axios.get("https://689d89abce755fe69788ea77.mockapi.io/users")
    return response.data
}

export const useGetListing = () => {
    return useQuery({queryKey: ["listings"], queryFn: fetchList})
}

