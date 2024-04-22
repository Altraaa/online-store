import Link from "next/link";

type AuthLayoutProps = {
  description?: string;
  title?: string;
  label?: string;
  children?: React.ReactNode;
  link: string;
  authQuestion?: string;
  linkText?: string;
};

const AuthLayout = (props: AuthLayoutProps) => {
  const { description, title, label, children, link, authQuestion, linkText } = props;

  return (
    <div className="h-[520px] w-[900px] flex justify-center bg-white shadow-xl backdrop-blur-lg rounded-2xl border-2 border-red-600">
      <div className="w-1/2 flex flex-col h-full bg-red-100 rounded-2xl justify-center items-center">
        <p className="text-lg">{description}</p>
        <h1 className="text-3xl font-bold">{title}</h1>
      </div>
      <div className="w-1/2 flex flex-col h-full justify-center px-20">
        <h1 className="text-3xl font-bold mb-4 inline-flex justify-center">
          {label}
        </h1>
        {children}
        <div className="flex items-center w-full justify-center mt-4">
          <p className="text-sm">{authQuestion}</p>
          <div className="ml-1">
            <Link href={link}>
              <span className="after:content-[''] text-red-500 text-sm after:block after:absolute md:after:h-[1px] xl:after:h-[2px] after:bg-red-600 after:w-0 after:transition-all after:duration-300 md:hover:after:w-[39px] lg:hover:after:w-[40px] xl:hover:after:w-[60px] 2xl:hover:after:w-[80px] transition-all ease-in-out duration-300">
                {linkText}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
