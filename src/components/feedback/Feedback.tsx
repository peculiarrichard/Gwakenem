"use client";

import Link from "next/link";
import { useState } from "react";
import { collectFeedback } from "@/services/collect-feedback";

export const Feedback = () => {
  const [feedBack, setFeedBack] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [errMsg, setErrMsg] = useState<string>("");

  const handleCollectFeedback = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    collectFeedback(feedBack, setLoading, setErrMsg);
    setFeedBack("");
  };
  return (
    <>
      <div className="flex flex-col lg:w-[50%] w-[90%] m-auto mt-10 text-white text-center gap-y-6">
        <h1 className="text-xl font-bold">
          I&#39;ll love to hear your thoughts about this application
        </h1>

        <form
          className="flex flex-col p-3 gap-y-4"
          onSubmit={handleCollectFeedback}>
          <input
            type="text"
            placeholder="What do you think?"
            className="bg-transparent border rounded-lg focus:outline-purple-500 p-4"
            value={feedBack}
            onChange={(e) => setFeedBack(e.target.value)}
          />
          <button
            type="submit"
            className="bg-purple-500 rounded-lg p-4 font-bold">
            {loading ? "Submitting..." : "Submit"}
          </button>
          {errMsg && <p className="text-red-500 mt-3">{errMsg}</p>}
        </form>

        <p>Or shoot me an email here: pecullozie@gmail.com</p>
        <Link href="/" className="text-purple-500">
          Go to home
        </Link>
      </div>
    </>
  );
};
