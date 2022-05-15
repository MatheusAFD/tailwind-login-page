export function App() {
  return (
    <>
      <main className="flex justify-center items-center h-screen bg-slate-900 ">
        <form
          action=""
          className="flex flex-col justify-center items-center w-[80%] lg:w-1/4 bg-slate-800 text-white h-[50%] lg:h-2/3 max-w-[80%] rounded font-sans"
        >
          <div className="w-1/1 relative">
            <label
              htmlFor="user__login"
              className="block before:content-[''] before:max-w-[23%] before:w-[100%] before:h-1 before:bg-[#ffffff] before:absolute  before:top-0 before:left-0 mt-1 "
            >
              Login
            </label>
            <input
              type="text"
              id="user__login"
              className="border-slate-700 border rounded bg-slate-700 mt-3 w-1/1 py-1 pl-1"
            />
          </div>

          <div className="w-1/1 mt-5 relative">
            <label
              htmlFor="user__password"
              className="block before:content-[''] before:max-w-[36%] before:w-[100%] before:h-1 before:bg-[#ffffff] before:absolute  before:top-0 before:left-0 mt-1 "
            >
              Password
            </label>
            <input
              type="password"
              id="user__password"
              className="border border-slate-700 rounded bg-slate-700 mt-3 py-1 pl-1"
            />
            <input
              type="submit"
              value="Sign in"
              className="block mt-5 text-center w-full bg-slate-200 text-slate-900 rounded p-2
              hover:bg-slate-400 cursor-pointer"
            />
          </div>
        </form>
      </main>
    </>
  );
}
