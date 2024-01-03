import { BsCheckCircle } from "react-icons/bs";

interface FormSuccessProps {
  message?: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;

  return (
    <div className="flex items-center gap-x-2 rounded-md bg-emerald-500/10 p-3 text-sm text-emerald-700">
      <BsCheckCircle className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};
