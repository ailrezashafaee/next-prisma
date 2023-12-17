import TasksContainer from "./ui/tasks";
import NewTask from "./ui/newTask";
import CheckAll from "@/../public/icons/checkAll.svg";
import Image from "next/image";
import Filters from "./ui/filter";
const TaskPage = () => {
  return (
    <div className="text-xl flex flex-col overflow-hidden bg-white max-h-[464px] relative w-[600px] max-w-[600px]  p-4 rounded-xl shadow-[0px_3px_16px_0px_rgba(0,0,0,0.06)]">
      <NewTask />
      <div className="w-full flex-row-reverse flex text-xs text-[#999] mt-5 mb-2.5 items-center justify-between">
        <button className="flex hover:text-black items-center gap-x-2">
          <span>تکمیل همه تسک‌ها</span>
          <Image alt="check all icon" src={CheckAll} />
        </button>
        <button className="hover:text-black">حذف تکمیل‌شده‌ها</button>
      </div>
      <hr />
      <div className="w-full my-2.5 overflow-y-scroll no-scrollbar">
        <TasksContainer />
      </div>
      <hr />
      <Filters />
    </div>
  );
};

export default TaskPage;
