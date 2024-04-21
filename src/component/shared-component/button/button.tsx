type Buttontypes = {
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
  label?: string;
  variant?: "contained" | "outlined";
};

const Button = (props: Buttontypes) => {
  const {
    type,
    onClick,
    label,
    children,
    className,
    variant = "contained",
  } = props;

  const contained = "bg-red-500 text-white hover:bg-red-700";

  const outlined =
    "border-2 gap-2 inline-flex text-black justify-center items-center text-center border-2 border-red-500 text-sm hover:bg-red-700 hover:text-white ";

  const styles: string[] = [];

  if (variant == "contained") {
    styles.push(contained);
  }

  if (variant == "outlined") {
    styles.push(outlined);
  }

  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={`${styles.join(
          " "
        )} w-full py-2 px-5 rounded-xl font-semibold transition-all ease-in-out duration-300 text-sm ${className} `}
      >
        {children}
        {label}
      </button>
    </>
  );
};

export default Button;
