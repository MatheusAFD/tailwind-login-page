import { Input } from "./components/Input";

import { CheckList } from "./components/CheckList";

export function App() {
  return (
    <>
      <main className="flex justify-center pt-10 sm:pt-10 lg:items-center h-screen bg-[#151515] font-['Sans-serif'] ">
        <form
          action=""
          className="grid grid-cols-1 justify-center items-center min-w-[240px] w-[80%] lg:w-[50%] lg:flex  text-[#999999] h-[50%] lg:h-[55%] max-w-xl  border-[0.5px] rounded lg:max-w-4xl"
        >
          <div className="bg-[#111111] w-full h-full rounded">
            <h1 className="pt-10 pb-4 pl-5 font-black text-[1.15rem] text-left text-white">
              Join millions of people prototyping what’s next
            </h1>
            <CheckList />
          </div>

          <div className="bg-[#ffffff] w-full h-[100%] lg:h-full text-[#000000]  flex flex-col items-center pb-5">
            <h1 className="text-2xl pt-10 font-black">Sign in and enjoy!</h1>
            <p className="text-xs font-medium pt-2 text-[#999999]">
              Get a free account, no credit card required
            </p>

            <Input title="Google" type="google" />
            <Input title="Github" type="github" />
          </div>
        </form>
      </main>
    </>
  );
}
