export const SetUserName = () => {
  return (
    <>
      <div className="flex flex-col lg:w-[50%] w-[90%] m-auto mt-10 text-white text-center gap-y-6">
        <h1 className="text-xl font-bold">
          Choose a username, it doesn&#39;t have to be your real name
        </h1>

        <form className="flex flex-col p-3 gap-y-4">
          <input
            type="email"
            placeholder="Enter username"
            className="bg-transparent border rounded-lg focus:outline-purple-500 p-4"
          />
          <button
            type="submit"
            className="bg-purple-500 rounded-lg p-4 font-bold">
            Set Username
          </button>
        </form>
      </div>
    </>
  );
};
