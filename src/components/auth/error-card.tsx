import CardWrapper from "@/components/auth/card-wrapper";
import { BsExclamationTriangle } from "react-icons/bs";

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Ops! Something went wrong."
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
    >
      <div className="flex w-full items-center justify-center">
        <BsExclamationTriangle className="h-4 w-4 text-red-700" />
      </div>
    </CardWrapper>
  );
};
