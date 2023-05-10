import type { PropsWithChildren } from "react";
import { FormProvider } from "react-hook-form";
import { ContactFormFields } from "./ContactFormFields";
import { useContactForm } from "./useContactForm";

export const ContactForm: React.FC<PropsWithChildren> = ({ children }) => {
  const {
    form,
    form: { handleSubmit, formState },
    onSubmit,
    isSubmitting,
    success,
    error,
  } = useContactForm();

  const handleReset = () => {
    form.reset(undefined, { keepDirty: false, keepErrors: false });
  };

  if (success) {
    return <div>the form was submitted successfuly</div>;
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {children}
        <ContactFormFields
          handleReset={handleReset}
          isSubmitting={isSubmitting}
        />
        {error && <span className="error">{error}</span>}
      </form>
    </FormProvider>
  );
};
