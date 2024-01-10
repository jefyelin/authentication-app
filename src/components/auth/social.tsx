import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT_URL } from "@/routes";
import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

enum Provider {
  GOOGLE = "google",
  GITHUB = "github",
}

export const Social = () => {
  const handleSignIn = (provider: Provider) => {
    signIn(provider, { callbackUrl: DEFAULT_LOGIN_REDIRECT_URL });
  };

  return (
    <div className="flex w-full items-center gap-x-2">
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => handleSignIn(Provider.GOOGLE)}
      >
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => handleSignIn(Provider.GITHUB)}
      >
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  );
};
