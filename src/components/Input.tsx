import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
interface Input {
  title: string;
  type: string;
}

export function Input(props: Input) {
  return (
    <>
      <button
        type="button"
        value="Sign in With Github"
        className={`shadow-lg mt-7 px-12 py-3 text-[0.9rem] cursor-pointer scale-100 hover:scale-110 ease-in duration-100 bg-no-repeat bg-contain bg-[center_left_1rem] flex`}
      >
        {props.type == "google" ? (
          <FcGoogle size={24} className="mr-4" />
        ) : (
          <BsGithub size={24} className="mr-4" />
        )}
        Sign in with {props.title}
      </button>
    </>
  );
}
