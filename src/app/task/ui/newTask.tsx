"use client";
import NoteIcon from "@/../public/icons/note.svg";
import AddIcon from "@/../public/icons/add.svg";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { addTask } from "@/store/slices/taskSlice";
const NewTask = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().max(30, "Task must be mostly 30 characters").required(
        "این فیلد نمیتواند خالی باشد",
      ),
    }),
    onSubmit: (values) => {
      dispatch(addTask(values.name));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="w-full flex items-center p-4 rounded-xl bg-[#F8F8F8] flex-row-reverse gap-x-3 text-right">
        <Image alt="note icon" src={NoteIcon} />
        <input
          id="name"
          type="text"
          className="bg-transparent focus:outline-none focus:border-none w-full text-black font-medium text-right placeholder:text-[#BEBEBE]"
          placeholder="متن خود را وارد کنید..."
          {...formik.getFieldProps("name")}
        />
        <button
          type="submit"
          className={clsx(
            "transition",
            formik.values.name.length > 0 ? "block" : "hidden",
          )}
        >
          <div className="w-6 h-6 rounded-full flex items-center justify-center border-2 border-black">
            <Image src={AddIcon} alt="add icon" />
          </div>
        </button>
      </div>
      {formik.touched.name && formik.errors.name
        ? (
          <span className="text-right text-sm text-red-300 self-end">
            {formik.errors.name}
          </span>
        )
        : null}
    </form>
  );
};

export default NewTask;
