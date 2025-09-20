
import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import { CircularProgress, Box } from '@mui/material';
import { createPortal } from 'react-dom';

// Context برای کنترل loader
interface LoaderContextType {
    show: () => void;
    hide: () => void;
}

const LoaderContext = createContext<LoaderContextType | undefined>(undefined);

export const appLoader = () => {
    const context = useContext(LoaderContext);
    if (!context) throw new Error('useLoader must be used within LoaderProvider');
    return context;
};

// Provider
export const LoaderProvider = ({ children }: { children: ReactNode }) => {
    const [loading, setLoading] = useState(false);

    const show = () => setLoading(true);
    const hide = () => setLoading(false);

    return (
        <LoaderContext.Provider value={{ show, hide }}>
            {children}
            {loading &&
                createPortal(
                    <Box
                        sx={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100vw',
                            height: '100vh',
                            bgcolor: 'rgba(0,0,0,0.5)',
                            zIndex: 9999,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <CircularProgress size={60} sx={{ color: '#fff' }} />
                    </Box>,
                    document.body
                )}
        </LoaderContext.Provider>
    );
};
