import Textarea from "./Textarea";
import Input from "./Input";
import Label from "./Label";
import Select from "./Select";
import { FormContext } from "./useFormContext";

interface formProps {
  children: React.ReactNode;
  style?: string;
}

const Form = ({ children, style }: formProps) => {
  const logic = null;
  return (
    <FormContext.Provider value={logic}>
      <form className={style}>{children}</form>
    </FormContext.Provider>
  );
};

Form.Input = Input;
Form.Label = Label;
Form.Select = Select;
Form.Textarea = Textarea;

export default Form;
