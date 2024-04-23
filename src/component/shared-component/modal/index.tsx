import { ClassNames } from "@emotion/react";
import { Dispatch, useEffect, useRef } from "react";

type ModalProps = {
  children?: React.ReactNode;
  onClose?: any;
  className?: string;
};

const Modal = (props: ModalProps) => {
  const { children, onClose, className } = props;
  const ref: any = useRef();
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);
  return (
    <div className="fixed w-full top-0 h-screen z-50 bg-black bg-opacity-35 flex justify-center items-center">
      <div
        ref={ref}
        className={`bg-white flex flex-col space-y-5 rounded-2xl p-10 w-[60vh] max-h-[100vh] max-w[100vw] ${className}}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
