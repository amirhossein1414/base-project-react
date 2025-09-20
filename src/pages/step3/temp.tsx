import { zodResolver } from "@hookform/resolvers/zod";
import { TextField } from "@mui/material"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod";

// ✅ Zod schema with automatic type inference
const schema = z.object({
    name: z.string().nonempty("نام الزامی است"),
    email: z.string().email("ایمیل معتبر نیست"),
    country: z.string().nonempty("کشور را انتخاب کنید"),
});

type FormValues = z.infer<typeof schema>;

const amir = () => {

    const {
        handleSubmit,
        control,
        reset,
    } = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues: { name: "", email: "", country: "" },
    });

    return <Controller
        name="name"
        control={control}
        render={({ field, fieldState }) => (
            <TextField
                InputProps={{
                    style: { fontFamily: 'iransans', fontSize: 18 },
                }}
                InputLabelProps={{
                    style: { fontFamily: 'iransans' },
                }}
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

    {/* Email */ }
    <Controller
        name="email"
        control={control}
        render={({ field, fieldState }) => (
            <TextField
                InputProps={{
                    style: { fontFamily: 'iransans', fontSize: 18 },
                }}
                InputLabelProps={{
                    style: { fontFamily: 'iransans' },
                }}
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
}