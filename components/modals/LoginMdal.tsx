import useLoginModal from "@/hooks/useLoginModal";
import { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";
import useRegisterModal from "@/hooks/useRegisterModal";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
const LoginMdal = () => {
  const loginModal = useLoginModal();
  const registerModa = useRegisterModal();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const onToggle = useCallback(() => {
    if (isLoading) {
      return;
    }
    loginModal.onClose();
    registerModa.onOpen();
  }, [isLoading, registerModa, loginModal]);
  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        toast.error(result.error);
      } else {
        toast.success("Signed in");
        loginModal.onClose();
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }, [email, password, loginModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Email"
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoading}
      />
      <Input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isLoading}
      />
    </div>
  );
  const footerContent = (
    <div className="text-neutral-400 text-center mt-2">
      <p>
        You not registered{" "}
        <span
          onClick={onToggle}
          className="text-white cursor-pointer underline"
        >
          Sign Up
        </span>
      </p>
    </div>
  );
  return (
    <Modal
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Sign-in"
      body={bodyContent}
      onClose={loginModal.onClose}
      disabled={isLoading}
      footer={footerContent}
      onSubmit={onSubmit}
    />
  );
};

export default LoginMdal;
