import React from "react";
import {
    Box,
    Stepper,
    Step,
    StepLabel,
} from "@mui/material";
import Step3 from "../step3/Step3";
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';

const steps = ["مشخصات مشتری", "اطلاعات درخواست", "تایید اطلاعات محصول", "تایید اطلاعات درخواست"];

export default function StepperExample() {
    const [activeStep, setActiveStep] = React.useState(2);

    const handleStep = (step: number) => () => {
        setActiveStep(step);
    };

    return (
        <div style={{ width: '100%' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <LayersOutlinedIcon fontSize="large" style={{ color: '#ce986d' }} />
                <h3 style={{ color: '#59815c', maxWidth: 'max-content' }} className="iransans" >ثبت درخواست تسهیلات</h3>
            </span>

            <Stepper nonLinear activeStep={activeStep}>
                {steps.map((label, index) => (
                    <Step key={label} className="iransans">
                        <StepLabel onClick={handleStep(index)}>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            <Box sx={{ mt: 4 }}>
                {activeStep === 0 && (
                    <Step3 />
                )}
                {activeStep === 1 && (
                    <Step3 />
                )}
                {activeStep === 2 && (
                    <Step3 />
                )}
                {activeStep === 3 && (
                    <Step3 />
                )}
            </Box>
        </div>
    );
}