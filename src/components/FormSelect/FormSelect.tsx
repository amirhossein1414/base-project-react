
import { Controller, } from "react-hook-form";
import { TextField, MenuItem } from "@mui/material";
import type { TextFieldProps } from "@mui/material";
import type { Control, FieldValues, Path } from "react-hook-form";


interface FormSelectProps<T extends FieldValues> {
    name: Path<T>;
    control: Control<T>;
    label: string;
    options: { value: string; label: string }[];
    maxWidth?: string | number;
    textFieldProps?: TextFieldProps;
}

export function FormSelect<T extends FieldValues>({
    name,
    control,
    label,
    options,
    maxWidth,
    textFieldProps,
}: FormSelectProps<T>) {
    return (
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
                        width: '100%',
                        maxWidth: maxWidth ?? '35rem',
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
    );
}
