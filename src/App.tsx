import { Input } from "./components/Input";

export function App() {
  return (
    <>
      <main className="flex justify-center items-center h-screen bg-slate-900 ">
        <form
          action=""
          className="flex flex-col justify-center items-center w-[80%] lg:w-1/4 bg-slate-800 text-white h-[50%] lg:h-2/3 max-w-[80%] rounded font-sans"
        >
          <Input inputName={"Login"} inputType="text" />
          <Input inputName={"Password"} inputType="password" />

          <input
            type="submit"
            value="Sign in"
            className="block mt-5 text-center w-[220px] bg-slate-200 text-slate-900 rounded p-2
              hover:bg-slate-400 cursor-pointer"
          />
        </form>
      </main>
    </>
  );
}
