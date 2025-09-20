
import { Controller, } from "react-hook-form";
import { TextField, MenuItem } from "@mui/material";
import type { TextFieldProps } from "@mui/material";
import type { Control, FieldValues, Path } from "react-hook-form";
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, } from '@mui/material/styles';
import { appCacheRtl, appTheme } from "../Theme";


interface FormSelectProps<T extends FieldValues> {
    name: Path<T>;
    control: Control<T>;
    label: string;
    options: { value: string; label: string }[];
    width?: string | number;
    textFieldProps?: TextFieldProps;
}

export function FormSelect<T extends FieldValues>({
    name,
    control,
    label,
    options,
    width,
    textFieldProps,
}: FormSelectProps<T>) {
    return (
        <CacheProvider value={appCacheRtl}>
            <ThemeProvider theme={appTheme}>
                <div dir="rtl">
                    <Controller
                        name={name}
                        control={control}
                        render={({ field, fieldState }) => (
                            <TextField
                                {...field}
                                select
                                label={label}
                                fullWidth
                                margin="normal"
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                                sx={{
                                    width: width ?? "35rem",
                                    fontFamily: "iransans",
                                    ...textFieldProps?.sx,
                                }}
                                SelectProps={{
                                    sx: {
                                        fontFamily: "iransans",
                                        fontSize: 18,
                                        direction: "rtl",
                                        textAlign: "right",
                                    },
                                    MenuProps: {
                                        PaperProps: {
                                            sx: {
                                                fontFamily: "iransans",
                                                direction: "rtl",
                                                textAlign: "right",
                                            },
                                        },
                                    },
                                }}
                                InputProps={{
                                    sx: { fontFamily: "iransans", fontSize: 18 },
                                    ...(textFieldProps?.InputProps ?? {}),
                                }}
                                InputLabelProps={{
                                    sx: { fontFamily: "iransans" },
                                    ...(textFieldProps?.InputLabelProps ?? {}),
                                }}
                                {...textFieldProps}
                            >
                                {options.map((opt) => (
                                    <MenuItem key={opt.value} value={opt.value}>
                                        {opt.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        )}
                    />
                </div>
            </ThemeProvider>
        </CacheProvider>

    );
}
