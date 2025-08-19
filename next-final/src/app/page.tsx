import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-[url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExejFrZzdna2xhZ205eHdtYnUyYmk2YnN2OXVyZGo5ZDU5c3N5NW5pOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/TxVVB6PfWMjE4/200.webp')]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Link href="/login"><button 
        className="border-white border-2 text-3xl rounded-2xl px-10 py-5 font-bold cursor-pointer hover:bg-amber-50 hover:text-black transition duration-700 ease-initial">
          Get Started</button></Link>
      </main>
      
    </div>
  );
}
