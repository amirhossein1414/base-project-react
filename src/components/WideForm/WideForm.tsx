import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import type { ReactNode } from 'react';
import { appCacheRtl, appTheme } from '../Theme';

interface WideFormProps {
  title?: string;
  onSubmit: () => void;
  children: ReactNode; // اینجا فیلدهای فرم می‌آیند
}

export function WideForm({ onSubmit, children, title }: WideFormProps) {
  return (
    <>
      <Typography variant="h6" sx={{ fontFamily: 'iransans', mb: 1 }}>
        {title}
      </Typography>
      <CacheProvider value={appCacheRtl}>
        <ThemeProvider theme={appTheme()}>
          <Box
            component="form"
            onSubmit={onSubmit}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              width: '100%',
              mx: 'auto',
              mb: 2
            }}
          >
            {children}
          </Box>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}
