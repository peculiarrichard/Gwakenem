export const collectFeedback = async (
  feedback: string,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setErrMsg: React.Dispatch<React.SetStateAction<string>>
) => {
  if (!feedback) {
    setErrMsg("Please enter your feedback");
    return;
  }
  setLoading(true);
  try {
    const res = await fetch("/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ feedback }),
    });
    const data = await res.json();
    alert(data.message);
  } catch (error: any) {
    setErrMsg(error.message);
  } finally {
    setLoading(false);
  }
};
