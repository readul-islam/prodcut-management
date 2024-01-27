import { Field } from "formik";
import { FC } from "react";
interface IProps {
  type: string;
  label: string;
  style?: string;
  name: string;
}
const Input: FC<IProps> = ({ type, label, style, name }) => {
  return (
    <div className="relative ">
      <Field
        name={name}
        type={type}
        id={`hs-hero-4${label}`}
        className={`  ${
          style && style
        } peer p-4 block w-full border-b  border-gray-200 border-opacity-50 focus:rounded-lg text-sm placeholder:text-transparent disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-900
        focus:pt-6
        focus:pb-2
        [&:not(:placeholder-shown)]:pt-6
        [&:not(:placeholder-shown)]:pb-2
        autofill:pt-6
        autofill:pb-2 `}
        placeholder="Doe"
      />
      <label
        htmlFor={`hs-hero-4${label}`}
        className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
peer-focus:text-xs
peer-focus:-translate-y-1.5
peer-focus:text-gray-500
peer-[:not(:placeholder-shown)]:text-xs
peer-[:not(:placeholder-shown)]:-translate-y-1.5
peer-[:not(:placeholder-shown)]:text-gray-500"
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
