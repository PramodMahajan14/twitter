import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";
import { signIn } from "next-auth/react";
import axios from "axios";
import { toast } from "react-hot-toast";

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onToggle = useCallback(() => {
    if (isLoading) return;

    registerModal.onClose();
    loginModal.onOpen();
  }, [isLoading, registerModal, loginModal]);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      await axios.post("/api/register", {
        email,
        password,
        username,
        name,
      });

      toast.success("Account created");

      await signIn("credentials", {
        email,
        password,
        redirect: false, // Optional: avoids auto navigation
      });

      registerModal.onClose();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }, [email, password, username, name, registerModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        disabled={isLoading}
      />
      <Input
        placeholder="User Name"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        disabled={isLoading}
      />
      <Input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoading}
      />
      <Input
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isLoading}
      />
    </div>
  );

  const footerContent = (
    <div className="text-neutral-400 text-center mt-2">
      <p>
        Already have an account{" "}
        <span
          onClick={onToggle}
          className="text-white cursor-pointer underline"
        >
          Sign In
        </span>
      </p>
    </div>
  );

  return (
    <Modal
      isOpen={registerModal.isOpen}
      title="Create an Account"
      actionLabel="Sign Up"
      body={bodyContent}
      footer={footerContent}
      onClose={registerModal.onClose}
      disabled={isLoading}
      onSubmit={onSubmit}
    />
  );
};

export default RegisterModal;
