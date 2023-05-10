import { TextInputField, TextInputFieldProps } from "./TextInputField";

type StackedTextInputFieldProps = TextInputFieldProps;

export const StackedTextInputField: React.FC<StackedTextInputFieldProps> = ({
  name,
  label,
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
      <TextInputField name={name} />
    </div>
  );
};
