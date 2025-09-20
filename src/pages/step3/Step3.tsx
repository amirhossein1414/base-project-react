
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Typography } from "@mui/material";
import { FormSelect } from "../../components/FormSelect/FormSelect";

const schema = z.object({
    fromPlace: z.string().nonempty("از محل"),
});

type FormValues = z.infer<typeof schema>;

export default function Step3() {
    const { handleSubmit, control, reset, watch } = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues: { fromPlace: "" },
    });

    const formData = watch(); // گرفتن کل فرم realtime

    const onSubmit = (data: FormValues) => {
        console.log("Form Data:", data);
        reset();
    };

    return (
        <>
            <Typography variant="h6" sx={{ fontFamily: "iransans", mb: 2 }}>
                اطلاعات مصوبه
            </Typography>

            <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                sx={{ width: "100%", mx: "auto", mt: 4, display: "flex", flexDirection: "column", gap: "1.5rem" }}
            >
                <FormSelect
                    name="fromPlace"
                    control={control}
                    label="از محل"
                    options={[
                        { value: "IR", label: "از محل قرض الحسنه ویژه" },
                        { value: "US", label: "از محل تبصره ای" },
                        { value: "A", label: "از محل تکلیفی" },
                        { value: "B", label: "مصوبات خاص" },
                        { value: "C", label: "از محل وجوه اداره شده" },
                    ]}
                />
            </Box>
        </>
    );
}
