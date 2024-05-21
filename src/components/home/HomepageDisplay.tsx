import { ChatboxContainer } from "./ChatboxContainer";

export const HomepageDisplay = () => {
  return (
    <>
      <div className="flex flex-col gap-y-5 justify-center items-center w-[90%] md:w-[70%] m-auto mt-10 text-white text-center text-lg">
        <h1 className="text-white font-bold text-[3.5rem] capitalize">
          Just Tell Me{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Anything
          </span>
        </h1>
        <div>
        <p>...and maybe I&#39;ll have the right words</p>
        <p>
          Gwakenem means &#34;just tell me&#34; in Igbo, a language of one of the major
          ethnic groups in Nigeria
        </p>
        </div>
        <p className="font-semibold text-base mt-6">
          Disclaimer: I&apos;m not a substitute for professional therapy or
          counseling. What I can do is provide support, listening ears, and just be your little confidant.
        </p>
      </div>
      <ChatboxContainer />
    </>
  );
};
