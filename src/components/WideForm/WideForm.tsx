import Grid from '@mui/material/Grid';
import { Box, Typography } from '@mui/material';
import type { ReactNode } from 'react';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import { appCacheRtl, appTheme } from '../Theme';
import React, { useEffect } from 'react';
import { step3Schema, step3Store, type Step3Model } from '../../pages/Step3/Step3.state';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { FieldValues } from "react-hook-form";

interface WideFormProps<T extends FieldValues> {
  title?: string;
  onSubmit?: () => void;
  children?: ReactNode;
  formActions?: (formApi: {
    handleSubmit?: Function;
    control?: any;
    reset?: Function;
    watch?: Function;
  }) => void;
  defaultValues?: T
}

export function WideForm<T extends FieldValues>({ onSubmit, children, title, formActions, defaultValues }: WideFormProps<T>) {

  const { handleSubmit, control, reset, watch } = useForm<Step3Model>({
    resolver: zodResolver(step3Schema),
    defaultValues: defaultValues,
    mode: 'onTouched',
  });

  const watchAllFields = watch();
  const { setField } = step3Store();

  useEffect(() => {
    Object.entries(watchAllFields).forEach(([key, value]) => {
      setField(key as keyof typeof watchAllFields, value);
    });
  }, [watchAllFields, setField]);

  useEffect(() => {
    if (formActions) {
      formActions({ handleSubmit, control, reset, watch });
    }
  }, [formActions, handleSubmit, control, reset, watch]);

  /* const onSubmit = handleSubmit((data) => {
    console.log('Form Data:', data);
    reset();
  }); */

  const kids = React.Children.toArray(children);

  return (
    <>
      {title && (
        <Typography variant="h6" sx={{ fontFamily: 'iransans', mb: 1 }}>
          {title}
        </Typography>
      )}

      <CacheProvider value={appCacheRtl}>
        <ThemeProvider theme={appTheme()}>
          <Box component="form" onSubmit={onSubmit} sx={{ width: '100%', mx: 'auto', mb: 2 }}>
            <Grid container spacing={{ xs: 2, md: 5, lg: 10 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              {kids.map((child, index) => (
                <Grid key={index} size={{ xs: 6, sm: 6, md: 5 }}>
                  {child}
                </Grid>
              ))}
            </Grid>
          </Box>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}
