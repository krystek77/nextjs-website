import React from "react";
export default function useModal(time = 2000) {
  const [message, setMessage] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(function () {
      setIsOpen(false);
      setMessage("");
    }, time);
    return () => {
      clearTimeout(timer);
    };
  }, [message, time]);
  return {
    isOpen,
    setIsOpen,
    message,
    setMessage,
  };
}
