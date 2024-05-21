import Link from "next/link";

export const Nav = () => {
  return (
    <>
      <nav className="w-[90%] flex justify-between items-center h-32 text-white m-auto">
        <Link
          href="/"
          className="font-bold text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 flex flex-col">
          gwakenem{" "}
          <span className="text-sm text-white md:ms-14">your AI therapist</span>
        </Link>
        {/* <Link
          href="/signup"
          className="text-xl border border-purple-500 p-2 rounded-lg hover:text-pink-500">
          {" "}
          Sign Up
        </Link> */}
      </nav>
    </>
  );
};
