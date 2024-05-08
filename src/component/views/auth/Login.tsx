import AuthLayout from "@/component/Layouts/AuthLayout/AuthLayout";
import Button from "@/component/shared-component/button/button";
import TextField from "@/component/shared-component/textfield/textField";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

const LoginView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { push, query } = useRouter();
  const callbackUrl: any = query.callbackUrl || "/";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");
    const form = event.target as HTMLFormElement;
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: form.email.value,
        password: form.password.value,
        callbackUrl,
      });
      if (!res?.error) {
        setIsLoading(false);
        form.reset();
        push(callbackUrl);
      } else {
        setError("Invalid email or password");
        setIsLoading(false);
      }
    } catch (error) {
      setError("Invalid email or password");
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center bg-red-300 items-center">
      <AuthLayout
        description="Hi Visitors, Welcome Back to"
        title="Altraaa Store"
        label="Login"
        link="/auth/register"
        error={error}
        linkText="Sign Up here!"
        authQuestion="Don't have an account?"
      >
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col space-y-4"
        >
          <TextField
            name="email"
            label="Email"
            type="email"
            placeholder="Email"
          />
          <TextField
            name="password"
            label="Password"
            type="password"
            placeholder="Password"
          />
          {error && (
            <p className="text-red-500 inline-flex justify-center">{error}</p>
          )}
          <div className="w-full flex  mt-1">
            <Button type="submit">{isLoading ? "Loading..." : "Login"}</Button>
          </div>
          <div className="w-full gap-4 flex items-center">
            <hr className="w-1/2 border-t-red-200 border-t-2" />
            <p>or</p>
            <hr className="w-1/2 border-t-red-200 border-t-2" />
          </div>
          <div className="w-full">
            <Button
              type="button"
              onClick={() => signIn("google", { callbackUrl, redirect: false })}
              variant="outlined"
            >
              <i className="bx text-3xl bxl-google"></i> Login With Google
            </Button>
          </div>
        </form>
      </AuthLayout>
    </div>
  );
};

export default LoginView;
