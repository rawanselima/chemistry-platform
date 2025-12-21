import Textarea from "./Textarea";
import Input from "./Input";
import Label from "./Label";
import Select from "./Select";
import { useForm, FormProvider } from "react-hook-form";

interface formProps {
  children: React.ReactNode;
  style?: string;
  onSubmit?: (data: any) => void | any;
  options?: any; // To pass defaultValues and other useForm options
}
const Form = ({ children, style, onSubmit, options }: formProps) => {
  const method = useForm(options);

  return (
    <FormProvider {...method}>
      <form
        className={style}
        onSubmit={method.handleSubmit(onSubmit || (() => {}))}
      >
        {children}
      </form>
    </FormProvider>
  );
};

Form.Input = Input;
Form.Label = Label;
Form.Select = Select;
Form.Textarea = Textarea;

export default Form;
