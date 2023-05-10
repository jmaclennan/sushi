import { Spinner } from "@/components/Spinner";
import { StackedTextAreaField } from "@/components/form/StackedTextAreaField";
import { StackedTextInputField } from "@/components/form/StackedTextInputField";
import type { FormState, UseFormReset } from "react-hook-form";
import type { ContactFormValues } from "./useContactForm";

type ContactFormFieldsProps = {
  handleReset: () => void;
  isSubmitting?: boolean;
  success?: boolean;
};

export const ContactFormFields: React.FC<ContactFormFieldsProps> = ({
  handleReset,
  isSubmitting,
  success,
}) => {
  return (
    <div className="flex flex-col space-y-2 max-w-md">
      <div className="max-w-xs">
        <StackedTextInputField name="name" label="Name" />
      </div>
      <div className="max-w-xs">
        <StackedTextInputField name="email" label="Email" />
      </div>
      <div className="max-w-xs">
        <StackedTextInputField name="phone" label="Phone" />
      </div>
      <div>
        <StackedTextAreaField name="message" label="Message" classes="h-32" />
      </div>
      <div className="flex pt-3 justify-start space-x-4">
        <button type="submit" className="button min-w-[200px]">
          {isSubmitting ? <Spinner /> : "Submit"}
        </button>
      </div>
    </div>
  );
};
