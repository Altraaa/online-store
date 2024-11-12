import Button from "@/component/shared-component/button/button";
type CardProps = {
  children?: React.ReactNode;
  title?: string;
  desc?: string;
  label?: string;
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  variant?: "contained" | "outlined" | "icon";
};

const Card = (props: CardProps) => {
  const { label, type, className, variant, desc, title, children } = props;
  return (
    <div
      className={`bg-white shadow-lg rounded-lg overflow-hidden ${className}`}
    >
      {children}
      <div className="p-6 space-y-2 ">
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="text-gray-700 text-sm md:min-h-36 lg:min-h-32 xl:min-h-44">{desc}</p>
        <div className="pt-2">
          <Button label={label} type={type} variant={variant} />
        </div>
      </div>
    </div>
  );
};

export default Card;
