import * as React from 'react';

import { cn } from '@/lib/utils';

interface FormProps extends React.ComponentProps<'form'> {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  disabled?: boolean;
}

function Form({
  className,
  onSubmit,
  disabled = false,
  children,
  ...props
}: FormProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!disabled && onSubmit) {
      onSubmit(event);
    }
  };

  return (
    <form
      className={cn(
        'flex flex-col gap-4',
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        disabled && 'pointer-events-none opacity-50',
        className,
      )}
      onSubmit={handleSubmit}
      data-disabled={disabled}
      {...props}
    >
      {children}
    </form>
  );
}

export { Form };