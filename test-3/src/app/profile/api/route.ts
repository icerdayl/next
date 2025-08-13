import { type NextRequest } from "next/server"
import { headers } from "next/headers"

export async function GET(request:NextRequest){
    const headersList = await headers()
    console.log(headersList.get("Authorization"))
    return new Response("Profile API")
}