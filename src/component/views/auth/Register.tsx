import AuthLayout from "@/component/Layouts/AuthLayout/AuthLayout";
import Button from "@/component/shared-component/button/button";
import TextField from "@/component/shared-component/textfield/textField";
import authServices from "@/services/auth/services";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

const RegisterView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { push } = useRouter();
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");
    const form = event.target as HTMLFormElement;
    const data = {
      email: form.email.value,
      fullname: form.fullname.value,
      password: form.password.value,
      phone: form.phone.value,
    };

    const result = await authServices.registerAccount(data);

    if (result.status === 200) {
      form.reset();
      setIsLoading(false);
      push("/auth/login");
    } else {
      setIsLoading(false);
      setError("Invalid Email or Password");
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center bg-red-300 items-center">
      <AuthLayout
        description="Hi Visitors, Welcome to our Website"
        title="Altraaa Store"
        label="Register"
        link="/auth/login"
        linkText="Sign In here!"
        authQuestion="Already have an account?"
      >
        <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
          <TextField
            name="fullname"
            type="text"
            label="Username"
            placeholder="Enter your Username"
          />
          <TextField
            name="email"
            type="email"
            label="Email"
            placeholder="Enter your Email"
          />
          <TextField
            name="password"
            type="password"
            label="Password"
            placeholder="Enter your Password"
          />
          <TextField
            name="phone"
            type="number"
            label="Phone"
            placeholder="Enter your Phone"
          />
          {error && (
            <p className="text-red-500 inline-flex justify-center py-2">
              {error}
            </p>
          )}
          <div className="w-full py-2">
            <Button type="submit">
              {isLoading ? "Loading..." : "Register"}
            </Button>
          </div>
        </form>
      </AuthLayout>
    </div>
  );
};

export default RegisterView;
