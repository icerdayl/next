import Link from "next/link"

const loginPage = () => {
    return(
        <div>
            <header>
                <nav className="text-center font-bold cursor-pointer mt-5">
                    <Link href="../" className="border-2 py-3 px-6 mt-2 rounded-xl hover:bg-white hover:text-black duration-500 ease-in hover:border-none">
                    Home</Link></nav>
            </header>
            <form className="flex justify-center font-sans mt-30 mb-30">
                <div className="mt-4 flex-col bg-white text-black w-100 h-80 rounded-3xl text-center">
                    <h1 className="text-center font-extrabold text-lg">LOG IN</h1>
                    <div className="flex-col mt-5">
                        <h3 className="font-bold mb-3">Email</h3>
                        <input className="bg-gray-300 py-3 px-6 rounded-2xl outline-0"type="text" id="email" name="email" required placeholder="Enter your email..."/>
                        <h3 className="font-bold my-3">Passowrd</h3>
                        <input className="bg-gray-300 py-3 px-6 rounded-2xl outline-0"type="text" id="password" name="password" required placeholder="Enter your password..."/>
                    </div>
                    <Link href="/main"><button type="submit" className="mt-2 bg-black text-white hover:font-bold cursor-pointer px-4 rounded-2xl transition ease-in duration-500">Enter</button></Link>
                    <p>Don't have an account yet? <a href="/register"><b>Register Now</b></a></p>
                </div>
                    
            </form>
         </div>
    )
}

export default loginPage