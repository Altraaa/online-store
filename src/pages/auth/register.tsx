import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

const Register = () => {
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

    const result = await fetch("/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

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
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="h-[470px] w-[900px] flex justify-center bg-white shadow-xl backdrop-blur-lg rounded-2xl border-2 border-red-600">
        <div className="w-1/2 flex flex-col h-full bg-red-100 rounded-2xl justify-center items-center">
          <p className="text-lg">Hi Visitors, Welcome to our Website</p>
          <h1 className="text-3xl font-bold">Altraa Store</h1>
        </div>
        <div className="w-1/2 flex flex-col h-full justify-center px-20">
          <h1 className="text-3xl font-bold mb-4 inline-flex justify-center">
            Register
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
            <div className="flex gap-1 flex-col">
              <label htmlFor="fullname" className="text-sm">
                Username
              </label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                className="border-2 text-sm px-2 py-1 outline-red-600 rounded-xl"
                placeholder="Username"
              />
            </div>
            <div className="flex gap-1 flex-col">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="border-2 text-sm px-2 py-1 outline-red-600 rounded-xl"
                placeholder="Email"
              />
            </div>
            <div className="flex gap-1 flex-col">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="border-2 text-sm px-2 py-1 outline-red-600 rounded-xl"
                placeholder="Password"
              />
            </div>
            <div className="flex gap-1  flex-col">
              <label htmlFor="phone" className="text-sm">
                Phone
              </label>
              <input
                type="number"
                name="phone"
                id="phone"
                className="border-2 text-sm px-2 py-1 outline-red-600 rounded-xl"
                placeholder="Phone"
              />
            </div>
            {error && <p className="text-red-500 inline-flex justify-center py-2">{error}</p>}
            <div className="w-full">
              <button
                type="submit"
                className="w-full py-2 px-5 bg-red-500 hover:bg-red-700 text-white rounded-xl font-semibold hover:ease-in-out hover:duration-300 ease-in-out duration-300"
              >
                {isLoading ? "Loading..." : "Register"}
              </button>
            </div>
            <div className="flex items-center w-full justify-center mt-2">
              <p className="text-sm">Already have an account? {""} </p>
              <div className="ml-1">
                <Link href={"/auth/login"}>
                  <span className="after:content-[''] text-red-500 text-sm after:block after:absolute md:after:h-[1px] xl:after:h-[2px] after:bg-red-600 after:w-0 after:transition-all after:duration-300 md:hover:after:w-[39px] lg:hover:after:w-[40px] xl:hover:after:w-[60px] 2xl:hover:after:w-[80px] transition-all ease-in-out duration-300">
                    Sign in here!
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

export default Register;
