import * as React from "react";
import { Popper, Paper, Typography, ClickAwayListener } from "@mui/material";
import { styled } from "@mui/material/styles";

const ArrowDiv = styled("div")(({ theme }) => ({
  position: "absolute",
  width: "1em",
  height: "1em",
  boxSizing: "border-box",
  background: theme.palette.background.paper,
  zIndex: 0,
}));

interface HoverPopperProps {
  open: boolean;
  anchorEl: HTMLElement | null;
  onClose: () => void;
  children: React.ReactNode;
  maxWidth?: number;
}

export default function CenteredArrowPopover({
  open,
  anchorEl,
  onClose,
  children,
  maxWidth = 400,
}: HoverPopperProps) {
  const [placement, setPlacement] = React.useState<string>("bottom");
  const popperRef = React.useRef<any>(null);

  React.useEffect(() => {
    if (popperRef.current && open) {
      const updatePlacement = () => {
        const popperInstance = popperRef.current;
        if (popperInstance && popperInstance.state) {
          setPlacement(popperInstance.state.placement);
        }
      };

      // Check placement after a brief delay to ensure popper has calculated position
      const timeoutId = setTimeout(updatePlacement, 10);
      
      return () => clearTimeout(timeoutId);
    }
  }, [open, anchorEl]);

  const getArrowStyles = () => {
    const isTop = placement.startsWith("top");
    
    if (isTop) {
      return {
        bottom: -8,
        left: "50%",
        transform: "translateX(-50%) rotate(45deg)",
      };
    } else {
      return {
        top: -8,
        left: "50%",
        transform: "translateX(-50%) rotate(45deg)",
      };
    }
  };

  return (
    <ClickAwayListener onClickAway={onClose}>
      <Popper
        ref={popperRef}
        sx={{ zIndex: 5 }}
        open={open && Boolean(anchorEl)}
        anchorEl={anchorEl}
        placement="bottom"
        modifiers={[
          {
            name: "offset",
            options: { offset: [-5, 10] },
          },
          {
            name: "preventOverflow",
            options: { padding: 8 },
          },
          {
            name: "flip",
            enabled: true,
          },
          {
            name: "updatePlacement",
            enabled: true,
            phase: "afterWrite",
            fn: ({ state }) => {
              setPlacement(state.placement);
            },
          },
        ]}
      >
        <Paper
          sx={{
            position: "relative",
            p: 2,
            maxWidth,
            whiteSpace: "normal",
            wordBreak: "break-word",
          }}
        >
          <ArrowDiv style={getArrowStyles()} />
          {typeof children === "string" ? (
            <Typography sx={{fontSize:'1.1rem'}}>{children}</Typography>
          ) : (
            children
          )}
        </Paper>
      </Popper>
    </ClickAwayListener>
  );
}