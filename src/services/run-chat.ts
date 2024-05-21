import { Message } from "@/models/messageModel";

export const runChat = async (
  e: React.FormEvent<HTMLFormElement>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setErrMsg: React.Dispatch<React.SetStateAction<string>>,
  setMsgs: React.Dispatch<React.SetStateAction<Message[]>>,
  msgs: Message[]
) => {
  e.preventDefault();
  const message = e.currentTarget.message.value;
  const newMessage: Message = {
    content: message,
    sender: "sender",
  };
  setMsgs([...msgs, newMessage]);
  e.currentTarget.message.value = "";
  setLoading(true);

  try {
    const res = await fetch("/api/start-chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    if (res.ok) {
      const { text } = await res.json();
      const resMessage: Message = {
        content: text,
        sender: "receiver",
      };
      setMsgs([...msgs, newMessage, resMessage]);
    }
  } catch (err) {
    setErrMsg("Error: failed to respond at this time. Please try again later.");
    console.error(err);
  } finally {
    setLoading(false);
  }
};
