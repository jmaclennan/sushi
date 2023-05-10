import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import axios from 'axios';

const phoneRegex = new RegExp(
  /^[\s\d()+-]{10,}$/
);

export type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [reseponseError, setResponseError] = useState(null);
  
  const defaultValues = {
    name: '',
    email: '',
    phone: undefined,
    message: '',
  }
  
  const schema = z.object({
    name: z.string().min(2, { message: 'Requires at least 2 characters'}),
    email: z.string().email(),
    phone: z.union([z.string().regex(phoneRegex, { message: 'Invalid phone number'}), z.string().length(0)]),
    message: z.string(),
  })

  const form = useForm<ContactFormValues>({ defaultValues, resolver: zodResolver(schema) });
  const onSubmit = (formData: ContactFormValues) => {
    const url = '/';
    setIsSubmitting(true);
  
    const urlEncodedFormData = new URLSearchParams(formData).toString();
  
    axios.post(url, urlEncodedFormData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      validateStatus: (status) => {
        return status >= 200 && status < 300
      }
    })
    .then(response => {
      setIsSubmitting(false);
      setSuccess(true);
    })
    .catch(error => {
      if (error.response.status >= 400 && error.response.status < 500) {
        setResponseError(error.message);
        setIsSubmitting(false);
      }
      console.error(error.response.data);
    });
  }
  return {
    form,
    onSubmit,
    isSubmitting,
    success,
    error: reseponseError,
  }
}