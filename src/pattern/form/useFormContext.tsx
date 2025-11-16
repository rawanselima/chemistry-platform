import { createContext, useContext } from "react";

export const FormContext = createContext(null);
const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) throw new Error("useFormContext must be used within <Form>");
  return context;
};

export default useFormContext;
