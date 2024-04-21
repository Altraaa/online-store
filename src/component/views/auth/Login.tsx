import Button from "@/component/shared-component/button/button";
import TextField from "@/component/shared-component/textfield/textField";
import { signIn } from "next-auth/react";
import Link from "next/link";
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
      <div className="h-[520px] w-[900px] flex justify-center bg-white shadow-xl backdrop-blur-lg rounded-2xl border-2 border-red-600">
        <div className="w-1/2 flex flex-col h-full bg-red-100 rounded-2xl justify-center items-center">
          <p className="text-lg">Hi Beloved Customers, welcome back to</p>
          <h1 className="text-3xl font-bold">Altraa Store</h1>
        </div>
        <div className="w-1/2 flex flex-col h-full justify-center px-20">
          <h1 className="text-3xl font-bold mb-4 inline-flex justify-center">
            Login
          </h1>
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
            {error && <p className="text-red-500">{error}</p>}
            <div className="w-full flex  mt-1">
              <Button type="submit">
                {isLoading ? "Loading..." : "Login"}
              </Button>
            </div>
            <div className="w-full gap-4 flex items-center">
              <hr className="w-1/2" />
              <p>or</p>
              <hr className="w-1/2" />
            </div>
            <div className="w-full">
              <Button
                type="button"
                onClick={() =>
                  signIn("google", { callbackUrl, redirect: false })
                }
                variant="outlined"
              >
                <i className="bx text-3xl bxl-google"></i> Login With Google
              </Button>
            </div>
            <div className="flex items-center w-full justify-center mt-2">
              <p className="text-sm">
                Don{"'"}t have an account? {""}{" "}
              </p>
              <div className="ml-1">
                <Link href={"/auth/register"}>
                  <span className="after:content-[''] text-red-500 text-sm after:block after:absolute md:after:h-[1px] xl:after:h-[2px] after:bg-red-600 after:w-0 after:transition-all after:duration-300 md:hover:after:w-[39px] lg:hover:after:w-[40px] xl:hover:after:w-[60px] 2xl:hover:after:w-[80px] transition-all ease-in-out duration-300">
                    Sign up here!
                  </span>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
