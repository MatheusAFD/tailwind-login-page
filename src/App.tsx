export function App() {
  return (
    <>
      <main className="flex justify-center items-center h-screen">
        <form
          action=""
          className="flex flex-col justify-center items-center w-2/3 lg:w-1/4 bg-slate-900 text-white h-2/3 rounded"
        >
          <div className="w-1/1">
            <label htmlFor="user__login" className="block border-b-2">
              Login
            </label>
            <input
              type="text"
              id="user__login"
              className="border border-slate-700 border rounded bg-slate-700 mt-3 w-1/1 py-1 pl-1"
            />
          </div>

          <div className="w-1/1 mt-5">
            <label htmlFor="user__password" className="block  border-b-2">
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
