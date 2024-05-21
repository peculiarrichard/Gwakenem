import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="w-[90%] m-auto mt-32 mb-6 bottom-0 flex flex-col md:flex-row items-center justify-between text-white">
        <p className="text-white text-center">© {currentYear} Gwakenem. All rights reserved.</p>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <p>Developed by <Link href="https://twitter.com/peculiarichard" target="_blank" rel="noreferrer" className="text-purple-500" >@peculiarrichard</Link></p>
      </footer>
    </>
  )
}