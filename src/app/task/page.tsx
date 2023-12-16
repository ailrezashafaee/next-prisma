import Task from "./ui/task";

const TaskPage = () => {
  return (
    <div className="text-xl bg-white relative w-[600px] max-w-[600px]  p-4 rounded-xl shadow-[0px_3px_16px_0px_rgba(0,0,0,0.06)]">
      <div className="flex flex-col text-black">
        <Task label="this is task" status />
      </div>
    </div>
  );
};

export default TaskPage;
