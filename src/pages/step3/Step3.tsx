/* import React from "react"; */
import { useForm, Controller } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField, Button, MenuItem, Box } from "@mui/material";

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
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ width: '100%', mx: "auto", mt: 4 }}
        >
            {/* Name */}
            <Controller
                name="name"
                control={control}
                render={({ field, fieldState }) => (
                    <TextField
                        {...field}
                        label="نام"
                        fullWidth
                        margin="normal"
                        error={!!fieldState.error}
                        helperText={fieldState.error?.message}
                        style={{ width: '25rem' }}
                    />
                )}
            />

            {/* Email */}
            <Controller
                name="email"
                control={control}
                render={({ field, fieldState }) => (
                    <TextField
                        {...field}
                        label="ایمیل"
                        fullWidth
                        margin="normal"
                        error={!!fieldState.error}
                        helperText={fieldState.error?.message}
                        style={{ width: '25rem' }}
                    />
                )}
            />

            {/* Country dropdown */}
            <Controller
                name="country"
                control={control}
                render={({ field, fieldState }) => (
                    <TextField
                        {...field}
                        select
                        label="کشور"
                        fullWidth
                        margin="normal"
                        error={!!fieldState.error}
                        helperText={fieldState.error?.message}
                        style={{ width: '25rem' }}
                    >
                        <MenuItem value="IR">ایران</MenuItem>
                        <MenuItem value="US">آمریکا</MenuItem>
                        <MenuItem value="DE">آلمان</MenuItem>
                    </TextField>
                )}
            />

            <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
                ارسال
            </Button>
        </Box>
    );
}