"use client";
import { TaskType } from "@/models/task";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "@/store/store";
import Task from "./task";
import { filterStatus } from "@/models/filter";
import { useAppSelector } from "@/hooks/storeHooks";
const TasksContainer = () => {
  const tasks: TaskType[] = useAppSelector((state) => state.taskReducer.tasks);
  const filter: filterStatus = useAppSelector((state) =>
    state.filterSlice.status
  );
  const taskFiltered = tasks.filter((value) => {
    if (filter === "UNDONE") {
      if (!value.status) {
        return true;
      } else {
        return false;
      }
    }
    if (filter === "DONE") {
      if (value.status) {
        return true;
      } else {
        return false;
      }
    }
    if (filter === "ALL") {
      return true;
    }
  });
  return (
    <div className="flex py-7 flex-col text-black">
      {taskFiltered.length === 0
        ? <span className="m-auto">یادداشت‌ای وجود ندارد</span>
        : taskFiltered.map((value, index) => <Task {...value} key={index} />)}
    </div>
  );
};

export default TasksContainer;
