import React from 'react';
export default function useModal(time = 0) {
  const [message, setMessage] = React.useState('');
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(function () {
      if (timer > 0) {
        setIsOpen(false);
        setMessage('');
      }
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
