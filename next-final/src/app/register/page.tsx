"use client";

import Link from "next/link"
import { useRegisterInfo } from "@/hooks/useRegisterInfo"

type Register = {
    name: string;
    email: string;
    password: string;
}

const registerPage = () => {
    const{mutate: registerList} = useRegisterInfo()

    const registerInfo = (formData: FormData) => {
        registerList({
            name: String(formData.get("name")),
            email: String(formData.get("email")),
            password: String(formData.get("password")),
            passwordConfirm: String(formData.get("passwordConfirm"))
        })

    }
    return(
        <>
            <header>
                <nav className="text-center font-bold cursor-pointer mt-5">
                    <Link href="../" className="border-2 py-3 px-6 mt-2 rounded-xl hover:bg-white hover:text-black duration-500 ease-in">
                    Home</Link></nav>
            </header>
            <form className="flex justify-center font-sans mt-10 mb-30" action={registerInfo}>
                <div className="mt-2 flex-col bg-white text-black w-100 h-100 rounded-3xl text-center">
                    <h1 className="text-center font-extrabold text-lg">REGISTER</h1>
                    <div className="flex-col mt-5">
                        <h3 className="font-bold mb-3">Name</h3>
                        <input className="bg-gray-300 py-3 px-6 rounded-2xl outline-0"type="text" id="name" name="name" required placeholder="Enter your name..."/>
                        <h3 className="font-bold mb-3">Email</h3>
                        <input className="bg-gray-300 py-3 px-6 rounded-2xl outline-0"type="text" id="email" name="email" required placeholder="Enter your email..."/>
                        <h3 className="font-bold my-3">Password</h3>
                        <input className="bg-gray-300 py-3 px-6 rounded-2xl outline-0"type="password" id="password" name="password" required placeholder="Enter your password..."/>
                        <h3 className="font-bold my-3">Confirm Password</h3>
                        <input className="bg-gray-300 py-3 px-6 rounded-2xl outline-0"type="password" id="passwordConfirm" name="passwordConfirm" required placeholder="Confirm your password..."/>
                    </div>
                    <button type="submit" className="mt-2 bg-black text-white hover:font-bold cursor-pointer px-4 rounded-2xl">Enter</button>
                    <p>Already have an account?<a href="/login"><b>Log in</b></a></p>
                </div>
                    
            </form>
         </>
    )
}

export default registerPage