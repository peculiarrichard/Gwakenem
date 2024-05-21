"use client";

import Link from "next/link";
import { LuSend } from "react-icons/lu";
import { useState } from "react";
import { runChat } from "@/services/run-chat";
import { Message } from "@/models/messageModel";

export const ChatboxContainer = () => {
  const [msgs, setMsgs] = useState<Message[]>([]);
  const [errMsg, setErrMsg] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleRunChat = async (e: React.FormEvent<HTMLFormElement>) => {
    runChat(e, setLoading, setErrMsg, setMsgs, msgs);
  };

  return (
    <>
      <div className="w-[85%] relative lg:w-[70%] m-auto border rounded-2xl justify-between overflow-y-auto bg-[#203030] h-[40rem] space-y-20 text-white my-10 p-3 border-violet-500 flex flex-col">
        <div className="flex justify-between items-center">
          <Link href="/feedback" className="hover:text-pink-500">
            Give feedback
          </Link>
          <button
            className="border p-1 bg-black border-purple-500 rounded-lg hover:text-gray-500"
            onClick={() => setMsgs([])}>
            Clear chat
          </button>
        </div>

        <div className="flex flex-col gap-y-3">
          {msgs && msgs.length > 0 ? (
            msgs.map((m, i) => (
              <div
                className={`${
                  m.sender === "sender"
                    ? "self-end md:flex-row-reverse"
                    : "self-start md:flex-row"
                } flex flex-col gap-2 items-start mb-3`}
                key={i}>
                <>
                  <div className="bg-white text-black rounded-full p-2">
                    {m.sender === "sender" ? "You" : "Gwakenem"}
                  </div>
                  <div
                    dangerouslySetInnerHTML={{ __html: m.content }}
                    className={`${
                      m.sender === "sender"
                        ? "bg-gray-700 rounded-l-full rounded-br-2xl"
                        : "bg-gray-900 rounded-r-2xl rounded-tl-xl"
                    } px-4 py-3 border `}></div>
                </>
              </div>
            ))
          ) : (
            <div className="m-auto text-xl text-center md:text-3xl">
              <p>Gwakenem, how are you feeling today?</p>
            </div>
          )}
          {loading && (
            <div className="flex flex-col md:flex-row gap-2 items-start mb-3 self-start">
              <div className="bg-white text-black rounded-full p-2">
                Gwakenem
              </div>
              <div className={`p-1 border bg-gray-900 `}>typing...</div>
            </div>
          )}
          {errMsg && <div className="text-red-500">{errMsg}</div>}
        </div>
        <form
          className="sticky bottom-0 z-10 bg-inherit m-auto border border-white rounded-lg flex w-full py-2 px-1 items-center justify-between"
          onSubmit={handleRunChat}>
          <textarea
            name="message"
            rows={3}
            placeholder="start typing..."
            className="w-[90%] text-white bg-transparent focus:outline-none px-1"></textarea>
          <button className="w-[10%]">
            <LuSend color="white" size={25} />
          </button>
        </form>
      </div>
    </>
  );
};
