import { TextAreaField, TextAreaFieldProps } from "./TextAreaField";

type StackedTextInputFieldProps = TextAreaFieldProps;

export const StackedTextAreaField: React.FC<StackedTextInputFieldProps> = ({
  name,
  label,
  classes,
}) => {
  return (
    <div className="flex flex-col space-y-2">
      <label
        className="text-sm text-neutral-700"
        aria-label={label}
        htmlFor={label}
      >
        {label}:
      </label>
      <TextAreaField name={name} classes={classes} />
    </div>
  );
};
