"use client";
import { filterStatus } from "@/models/filter";
import { changeStatus } from "@/store/slices/filterSlice";
import { RootStore } from "@/store/store";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
const Filters = () => {
  const status = useSelector((state: RootStore) => {
    return state.filterSlice.status;
  });
  const remains = useSelector((state: RootStore) => {
    return state.taskReducer.tasks.length;
  });
  const dispatch = useDispatch();
  return (
    <div className="w-full flex text-[#999] pt-2.5 mt-1 text-xs flex-row-reverse justify-between">
      <div className="flex items-center gap-x-2">
        <span>تسک مانده</span>
        <span className="text-black font-medium">{remains}</span>
      </div>
      <ul className="flex items-center gap-x-3 cursor-pointer flex-row-reverse">
        <li
          onClick={() => dispatch(changeStatus("ALL" as filterStatus))}
          className={clsx(status === "ALL" ? "text-black" : "text-[#999]")}
        >
          همه
        </li>
        <li
          onClick={() => dispatch(changeStatus("UNDONE" as filterStatus))}
          className={clsx(status === "UNDONE" ? "text-black" : "text-[#999]")}
        >
          تکمین نشده
        </li>
        <li
          onClick={() => dispatch(changeStatus("DONE" as filterStatus))}
          className={clsx(status === "DONE" ? "text-black" : "text-[#999]")}
        >
          تکمیل شده
        </li>
      </ul>
    </div>
  );
};

export default Filters;
