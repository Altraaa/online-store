type Buttontypes = {
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
  label?: string;
  variant?: "contained" | "outlined" | "icon";
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

  const contained =
    "bg-red-500 py-2 w-full px-5 text-sm rounded-xl font-semibold text-white hover:bg-red-700";

  const outlined =
    "border-2 gap-2 py-2 w-full text-sm px-5 rounded-xl font-semibold inline-flex text-black justify-center items-center text-center border-2 border-red-500 text-sm hover:bg-red-700 hover:text-white ";

  const icon = "text-2xl"

  const styles: string[] = [];

  if (variant == "contained") {
    styles.push(contained);
  }

  if (variant == "outlined") {
    styles.push(outlined);
  }

  if (variant == "icon") {
    styles.push(icon);
  }

  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={`${styles.join(
          " "
        )} transition-all ease-in-out duration-300  ${className} `}
      >
        {children}
        {label}
      </button>
    </>
  );
};

export default Button;
