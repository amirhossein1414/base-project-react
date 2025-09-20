/* import React from "react"; */
import { useForm, Controller } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField, Button, MenuItem, Box, Typography } from "@mui/material";

// ✅ Zod schema with automatic type inference
const schema = z.object({
    name: z.string().nonempty("نام الزامی است"),
    email: z.string().email("ایمیل معتبر نیست"),
    country: z.string().nonempty("کشور را انتخاب کنید"),
});

// ✅ Create a TypeScript type directly from the schema
type FormValues = z.infer<typeof schema>;

export default function Step3() {
    const {
        handleSubmit,
        control,
        reset,
    } = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues: { name: "", email: "", country: "" },
    });

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log("Form Data:", data);
        reset();
    };

    return (
        <>
            <Typography
                variant="h6"
                sx={{ fontFamily: 'iransans', mb: 2 }}
            >
                اطلاعات مصوبه
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                sx={{ width: '100%', mx: "auto", mt: 4, display: "flex", gap: "2rem" }}
            >
                <Controller
                    name="country"
                    control={control}
                    render={({ field, fieldState }) => (
                        <TextField
                            {...field}
                            select
                            label="از محل"
                            fullWidth
                            margin="normal"
                            error={!!fieldState.error}
                            helperText={fieldState.error?.message}
                            style={{ width: '25rem' }}
                            // 🔹 جهت و فونت برای کل سلکت
                            SelectProps={{
                                sx: {
                                    fontFamily: 'iransans',
                                    fontSize: 18,
                                    direction: 'rtl',   // راست به چپ
                                    textAlign: 'right'  // متن تراز راست
                                },
                                MenuProps: {
                                    PaperProps: {
                                        sx: {
                                            fontFamily: 'iransans',
                                            direction: 'rtl',
                                            textAlign: 'right'
                                        }
                                    }
                                }
                            }}
                            InputProps={{
                                style: { fontFamily: 'iransans', fontSize: 18 },
                            }}
                            InputLabelProps={{
                                style: { fontFamily: 'iransans' },
                            }}
                        >
                            <MenuItem value="IR">از محل قرض الحسنه ویژه</MenuItem>
                            <MenuItem value="US">از محل تبصره ای</MenuItem>
                            <MenuItem value="A">از محل تکلیفی</MenuItem>
                            <MenuItem value="B">مصوبات خاص</MenuItem>
                            <MenuItem value="C">از محل وجوه اداره شده</MenuItem>
                        </TextField>
                    )}
                />
            </Box>
        </>
    );
}