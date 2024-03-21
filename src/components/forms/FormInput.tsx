import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormikHandlers } from "formik";
import { HTMLInputTypeAttribute } from "react";

interface FormInputProps {
  name: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  onChange: FormikHandlers["handleChange"];
  onBlur: FormikHandlers["handleBlur"];
  value: string;
  isError: boolean;
  error: string | undefined;
}

const FormInput: React.FC<FormInputProps> = ({
  name,
  onBlur,
  onChange,
  placeholder,
  type,
  value,
  error,
  isError,
}) => {
  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor={name} className={isError ? "text-red-600" : ""}>
        {name}
      </Label>
      <Input
        placeholder={placeholder}
        name={name}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {isError ? <div className="text-xs text-red-500">{error}</div> : null}
    </div>
  );
};

export default FormInput