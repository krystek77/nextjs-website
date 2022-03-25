import React from 'react';
export default function useModal() {
  const [message, setMessage] = React.useState('');
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(function () {
      setIsOpen(false);
      setMessage('');
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [message]);
  return {
    isOpen,
    setIsOpen,
    message,
    setMessage,
  };
}
