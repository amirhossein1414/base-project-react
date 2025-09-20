import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import type { ReactNode } from 'react';
import { appCacheRtl, appTheme } from '../Theme';

interface WideFormProps {
  onSubmit: () => void;
  children: ReactNode; // اینجا فیلدهای فرم می‌آیند
}

export function WideForm({ onSubmit, children }: WideFormProps) {
  return (
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
          }}
        >
          {children}
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
}
