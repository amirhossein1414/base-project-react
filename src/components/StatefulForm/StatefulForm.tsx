import { useForm, Controller } from 'react-hook-form';
import { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import type { ZodType } from 'zod';

interface StatefulFormProps<T> {
  schema: ZodType<T>;
  initialState: T;
  storeSetter: (field: keyof T, value: any) => void;
  children: (control: any) => React.ReactNode;
  onSubmit?: (data: T) => void;
}

export function StatefulForm<T>({
  schema,
  initialState,
  storeSetter,
  children,
  onSubmit
}: StatefulFormProps<T>) {

  const { control, handleSubmit, watch, reset } = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues: initialState,
    mode: 'onTouched',
  });

  // اتصال فرم به Zustand
  const watchAllFields = watch();
  useEffect(() => {
    Object.entries(watchAllFields).forEach(([key, value]) => {
      storeSetter(key as keyof T, value);
    });
  }, [watchAllFields, storeSetter]);

  const submitHandler = handleSubmit((data) => {
    if(onSubmit) onSubmit(data);
    reset();
  });

  return <form onSubmit={submitHandler}>{children(control)}</form>;
}
