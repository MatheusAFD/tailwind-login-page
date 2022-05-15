interface Input {
  bgUrl: string;
}

export function Input(props: Input) {
  return (
    <>
      <input
        type="button"
        value="Sign in With Github"
        className={`shadow-lg mt-7 px-12 py-3 text-[0.9rem] cursor-pointer scale-100 hover:scale-110 ease-in duration-100 bg-[url('${props.bgUrl}')]  bg-no-repeat bg-contain bg-[center_left_1rem]`}
      />
    </>
  );
}
