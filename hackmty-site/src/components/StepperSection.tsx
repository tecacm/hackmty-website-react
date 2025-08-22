import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import CenteredArrowPopover from './CenteredArrowPopover';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const steps = ['Pre-register at registration.hackmty.com (It is mandatory for all four team members to pre-register and fill in the required information.)', 'You will receive a confirmation email for your pre-registration. After this you can add your team members under the Friends tab.', 'In the following days, you will receive an email confirming your invitation to the hackathon. (only one team member needs to confirm the invite).'];

export default function StepperSection() {
  const [activeStep, setActiveStep] = React.useState(0);

  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const theme = useTheme();
  var isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleStepHover = (event: React.MouseEvent<HTMLElement>, index: number) => {
    setActiveStep(index);
    setAnchorEl(event.currentTarget);
    console.log("hovered " + index)
    setOpen(true);
  };

  const handlePopoverClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };

  return (
    <Box sx={
      { width: '100%', color: 'black', scale: 2, marginTop: '2vh', justifyContent: isMobile ? 'center' : 'flex-start', alignItems: 'flex-start'}} 
      display={'flex'} paddingY={'2vh'} component={'a'} href='https://registration.hackmty.com/auth/register/' target="_blank" rel="noopener noreferrer">
        <Stepper activeStep={activeStep} orientation={isMobile ? "vertical" : "horizontal"} sx={{width: isMobile ? 'auto' : '100%'}}>
        {steps.map((label, index) => (
          <Step key={label} completed={false}>
            <StepLabel
              sx={{ color: 'purple', cursor: 'pointer' }}
              onMouseEnter={(e) => handleStepHover(e, index)}
            >
            </StepLabel>
          </Step>
        ))}
      </Stepper>


      <CenteredArrowPopover
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
      >
        {steps[activeStep]}
      </CenteredArrowPopover>
    </Box>
  );
}
