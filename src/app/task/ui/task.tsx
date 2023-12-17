import Image from "next/image";
import CheckIcon from "@/../public/icons/check.svg";
import DeleteIcon from "@/../public/icons/delete.svg";
import { TaskType } from "@/models/task";
import { useDispatch } from "react-redux";
import { checkTask, deleteTask } from "@/store/slices/taskSlice";
import clsx from "clsx";
const Task: React.FC<TaskType> = (props) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(checkTask(props.id))}
      className="w-full flex items-center rounded-xl py-3.5 cursor-pointer px-4 hover:bg-[#F8F8F8] transition group flex-row-reverse justify-between"
    >
      <div className="flex items-center gap-x-5 flex-row-reverse">
        <button className="w-6 h-6 rounded-full flex items-center justify-center border-2 border-black">
          {props.status && <Image src={CheckIcon} alt="check icon" />}
        </button>
        <span className={clsx(props.status && "line-through transition")}>
          {props.name}
        </span>
      </div>
      <button
        onClick={() => dispatch(deleteTask(props.id))}
        className="hidden transtion group-hover:block"
      >
        <div className="w-6 h-6 rounded-full flex items-center justify-center border-2 border-black">
          <Image src={DeleteIcon} alt="delete icon" />
        </div>
      </button>
    </div>
  );
};

export default Task;
