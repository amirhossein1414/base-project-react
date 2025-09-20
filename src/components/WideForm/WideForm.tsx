import Grid from '@mui/material/Grid';
import { Box, Typography } from '@mui/material';
import type { ReactNode } from 'react';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import { appCacheRtl, appTheme } from '../Theme';
import React from 'react';

interface WideFormProps {
  title?: string;
  onSubmit: () => void;
  children: ReactNode;
}

export function WideForm({ onSubmit, children, title }: WideFormProps) {
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
