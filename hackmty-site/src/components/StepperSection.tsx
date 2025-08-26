import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import CenteredArrowPopover from './CenteredArrowPopover';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

type StepperSectionProps = {
  steps: string[];
  url?: string;
};

const DEFAULT_URL = 'https://registration.hackmty.com/auth/register/';

export default function StepperSection({ steps, url = DEFAULT_URL }: StepperSectionProps) {
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

  // Render helper: bold segments wrapped in **like this**
  const renderWithBold = (text: string) => {
    if (!text || !text.includes('**')) return text;
    const parts = text.split('**');
    return parts.map((part, idx) =>
      idx % 2 === 1 ? (
        <strong key={idx}>{part}</strong>
      ) : (
        <React.Fragment key={idx}>{part}</React.Fragment>
      )
    );
  };

  return (
    <Box sx={
      { width: '100%', color: 'black', scale: 2, marginTop: '2vh', justifyContent: isMobile ? 'center' : 'flex-start', alignItems: 'flex-start'}} 
      display={'flex'} paddingY={'2vh'}>
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
        <Box
          component={'a'}
          sx={{
            color: 'inherit', // Inherit color from parent
            textDecoration: 'none', // Remove underline if needed
          }}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          
        >
            {steps && steps.length > 0 ? renderWithBold(steps[activeStep]) : ''}
        </Box>
      </CenteredArrowPopover>
    </Box>
  );
}
