import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Link href="/main"><button 
        className="border-white border-2 rounded-2xl px-10 py-5 font-bold hover:bg-amber-50 hover:text-black transition duration-700 ease-in">
          Get Started</button></Link>
      </main>
      
    </div>
  );
}
