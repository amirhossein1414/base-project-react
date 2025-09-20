import { createTheme } from '@mui/material/styles';
import rtlPlugin from '@mui/stylis-plugin-rtl';
import { prefixer } from 'stylis';
import createCache from '@emotion/cache';

export const appTheme = () =>
    createTheme({
        direction: 'rtl',
    });

export const appCacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});