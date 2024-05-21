export const Signup = () => {
  return (
    <>
      <div className="flex flex-col lg:w-[50%] w-[90%] m-auto mt-10 text-white text-center gap-y-6">
        <h1 className="text-xl font-bold">
          Create an account to start chatting with your AI therapist
        </h1>

        <form className="flex flex-col p-3 gap-y-4">
          <input
            type="email"
            placeholder="Enter email"
            className="bg-transparent border rounded-lg focus:outline-purple-500 p-4"
          />
          <input
            type="password"
            placeholder="Enter password"
            className="bg-transparent border rounded-lg focus:outline-purple-500 p-4"
          />
          <button
            type="submit"
            className="bg-purple-500 rounded-lg p-4 font-bold">
            Sign up
          </button>
        </form>
      </div>
    </>
  );
};
