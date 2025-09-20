import React, { useEffect, useRef } from "react";
import {
    Box,
    Stepper,
    Step,
    StepLabel
} from "@mui/material";
import type { StepIconProps } from "@mui/material";
import Step3 from "../Step3/Step3";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

const steps = [
    "مشخصات مشتری",
    "اطلاعات درخواست",
    "تایید اطلاعات محصول",
    "تایید اطلاعات درخواست"
];

const CustomStepIcon: React.FC<StepIconProps & { activeStep: number }> = (props) => {
    const { active, completed, icon, activeStep } = props;

    if (active) return <EditIcon style={{ color: "#59815c" }} />;

    if (completed) return <CheckCircleIcon style={{ color: "#59815c" }} />;

    return <RadioButtonUncheckedIcon style={{ color: "#59815c" }}></RadioButtonUncheckedIcon>;
};

export default function StepperExample() {
    const [activeStep, setActiveStep] = React.useState(2);

    const handleStep = (step: number) => () => {
        setActiveStep(step);
    };

    const stepperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!stepperRef.current) return;

        stepperRef.current.querySelectorAll('.mui-active-step').forEach(el => {
            el.classList.remove('mui-active-step');
        });

        const activeIconContainers = stepperRef.current.querySelectorAll(
            '.MuiStepLabel-iconContainer.Mui-active'
        );

        const firstActive = Array.from(activeIconContainers).length > 0 ? activeIconContainers[0] as HTMLElement : undefined;
        if (firstActive === undefined) {
            return;
        }

        (firstActive?.parentNode?.parentNode as HTMLElement).classList.add('mui-active-step');

    }, [activeStep]);

    return (
        <div style={{ width: "100%" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <LayersOutlinedIcon fontSize="large" style={{ color: "#ce986d" }} />
                <h3 style={{ color: "#59815c", maxWidth: "max-content" }} className="iransans">
                    ثبت درخواست تسهیلات
                </h3>
            </span>

            <Stepper ref={stepperRef} nonLinear activeStep={activeStep}>
                {steps.map((label, index) => (
                    <Step key={label} className="iransans" completed={index < activeStep}>
                        <StepLabel
                            onClick={handleStep(index)}
                            StepIconComponent={(props) => <CustomStepIcon {...props} activeStep={activeStep} />}
                        >
                            {label}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>

            <Box sx={{ mt: 4 }}>
                {activeStep === 0 && <Step3 />}
                {activeStep === 1 && <Step3 />}
                {activeStep === 2 && <Step3 />}
                {activeStep === 3 && <Step3 />}
            </Box>
        </div>
    );
}