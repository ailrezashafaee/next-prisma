import Image from "next/image";
import DeleteIcon from "@/../public/icons/delete.svg";
interface taskProps {
  label: string;
  status: boolean;
}
const Task: React.FC<taskProps> = (props) => {
  return (
    <div className="w-full flex items-center rounded-xl py-3.5 px-4 hover:bg-[#F8F8F8] transition group flex-row-reverse justify-between">
      <div className="flex items-center gap-x-5 flex-row-reverse">
        <div className="w-6 h-6 rounded-full border-2 border-black">
        </div>
        <span>{props.label}</span>
      </div>
      <button className="hidden transtion group-hover:block">
        <div className="w-6 h-6 rounded-full flex items-center justify-center border-2 border-black">
          <Image src={DeleteIcon} alt="delete icon" />
        </div>
      </button>
    </div>
  );
};

export default Task;
