import { BsCheck } from "react-icons/bs";

export function ItemCheckList(props: { title: string; description: string }) {
  return (
    <div className="flex items-start flex-col ">
      <div className="flex">
        <BsCheck size={24} />
        <p>{props.title}</p>
      </div>
      <p className="text-xs mb-4 pl-3">{props.description}</p>
    </div>
  );
}
