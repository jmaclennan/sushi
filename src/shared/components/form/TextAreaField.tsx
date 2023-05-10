import { useFormContext } from "react-hook-form";
import { twMerge } from "tailwind-merge";

export type TextAreaFieldProps = {
  name: string;
  label?: string;
  classes?: string;
};

export const TextAreaField: React.FC<TextAreaFieldProps> = ({
  name,
  label,
  classes,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const fieldError = errors[name];

  return (
    <div className="flex flex-col space-y-2">
      <textarea
        className={twMerge(
          "px-2 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent",
          fieldError && "ring-2 ring-error",
          classes
        )}
        placeholder={label}
        aria-invalid={fieldError ? "true" : "false"}
        id={name}
        {...register(name)}
      />
      {fieldError && (
        <span className="text-error" role="alert">
          {fieldError?.message?.toString() || " "}
        </span>
      )}
    </div>
  );
};
