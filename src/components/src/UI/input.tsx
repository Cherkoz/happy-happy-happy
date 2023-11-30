import { useFormContext, Controller } from 'react-hook-form';
import { Label, TextInput, TextInputProps } from 'flowbite-react';

interface ControlledInputProps extends TextInputProps {
  name: string;
  label?: string;
}

export function ControlledInput({ name, label, type }: ControlledInputProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange, ref }, fieldState: { error } }) => {
        return (
          <div>
            {label && <Label>{label}</Label>}
            <TextInput
              value={value}
              onChange={onChange}
              ref={ref}
              type={type}
              color={error && 'failure'}
              helperText={
                <div className={'mt-[-6px] first-letter:capitalize'}>{error && error.message}</div>
              }
            />
          </div>
        );
      }}
    />
  );
}
