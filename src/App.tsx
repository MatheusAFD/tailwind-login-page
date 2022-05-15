import { Input } from "./components/Input";

export function App() {
  return (
    <>
      <main className="flex justify-center pt-10 sm:pt-10 lg:items-center h-screen bg-[#151515] font-['Sans-serif']">
        <form
          action=""
          className="grid grid-cols-1 justify-center items-center w-[80%] lg:w-[50%] lg:flex   text-[#999999] h-[50%] lg:h-[55%] max-w-[100%]  border-[0.5px] rounded"
        >
          <div className="bg-[#111111] w-full h-full rounded">
            <h1 className="pt-10 pb-4 pl-5 font-black text-[1.15rem] text-left text-white">
              Join millions of people prototyping what’s next
            </h1>
            <div className="pl-5">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p>Ask Anywhere</p>
              </div>
              <p className="text-xs mb-4 pl-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </p>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p>Ask Anywhere</p>
              </div>
              <p className="text-xs mb-4 pl-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </p>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p>Ask Anywhere</p>
              </div>
              <p className="text-xs mb-4 pl-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </p>
            </div>
          </div>
          <div className="bg-[#ffffff] w-full h-[100%] lg:h-full text-[#000000]  flex flex-col items-center pb-5">
            <h1 className="text-2xl pt-10 font-black">Sign in and enjoy!</h1>
            <p className="text-xs font-medium pt-2 text-[#999999]">
              Get a free account, no credit card required
            </p>
            <Input bgUrl="../icons/google-color.svg" />
            <Input bgUrl="../icons/github.svg" />
          </div>
        </form>
      </main>
    </>
  );
}
