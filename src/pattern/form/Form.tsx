import Input from "./Input";
import Label from "./Label";
import Select from "./Select";
import { FormContext } from "./useFormContext";

interface formProps {
  children: React.ReactNode;
}

const Form = ({ children }: formProps) => {
  const logic = null;
  return (
    <FormContext.Provider value={logic}>
      <form>{children}</form>
    </FormContext.Provider>
  );
};

Form.Input = Input;
Form.Label = Label;
Form.Select = Select;

export default Form;
