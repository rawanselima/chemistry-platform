import { createContext, useContext } from "react";
import type { UseFormReturn } from "react-hook-form";

export const FormContext = createContext<UseFormReturn<any> | null>(null);
const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) throw new Error("useFormContext must be used within <Form>");
  return context;
};

export default useFormContext;
