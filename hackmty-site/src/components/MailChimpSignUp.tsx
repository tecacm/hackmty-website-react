import { useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  FormHelperText,
} from "@mui/material";

declare global {
  interface Window {
    fnames: string[];
    ftypes: string[];
    jQuery: any;
    $mcj: any;
  }
}

function MailChimpSignUp() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js";
    script.type = "text/javascript";
    script.async = true;
    script.onload = () => {
      (function ($: any) {
        window.fnames = ['EMAIL', 'FNAME', 'LNAME', 'ADDRESS', 'PHONE'];
        window.ftypes = ['email', 'text', 'text', 'address', 'phone'];
      })(window.jQuery);
      (window as any).$mcj = window.jQuery.noConflict(true);
    };
    document.body.appendChild(script);
  }, []);
  
  
  return (
    <Box
      component="div"
      sx={{
        backgroundColor: "white",
        maxWidth: "50%",
        p: 3,
        borderRadius: 2,
        boxShadow: 2,
      }}
    >
      <Box component="style">
        {`
          #mce-success-response {
            color:rgb(83, 16, 90); /* MUI's "success.main" green, or any visible color */
          }

          #mce-error-response {
            color: red;
          }
        `}
      </Box>
      <form
        action="https://hackmty.us11.list-manage.com/subscribe/post?u=2c6139b5fc5593464d870966a&amp;id=92e5e32473&amp;f_id=00f09fe0f0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        target="_blank"
        noValidate
      >
        <Typography variant="h5" gutterBottom fontWeight={700} color="primary" textTransform='uppercase'>
          Sign up for Updates on HackMTY
        </Typography>
        <FormHelperText>
          <span style={{ color: "red" }}>*</span> indicates required
        </FormHelperText>

        <TextField
          required
          fullWidth
          type="email"
          label="Email Address"
          name="EMAIL"
          id="mce-EMAIL"
          margin="normal"
        />

        {/* Mailchimp tags */}
        <input type="hidden" name="tags" value="9327593" />

        {/* Honeypot field for spam bots */}
        <Box sx={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
          <input
            type="text"
            name="b_2c6139b5fc5593464d870966a_92e5e32473"
            tabIndex={-1}
          />
        </Box>

        {/* Responses */}
        <div id="mce-responses" className="clear">
          <div id="mce-error-response" className="response" style={{ display: "none" }}></div>
          <div id="mce-success-response" className="response" style={{ display: "none" }}></div>
        </div>

        <Box mt={2}>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            name="subscribe"
            id="mc-embedded-subscribe"
            sx={{paddingY:'1.3vh'}}
          >
            Subscribe
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default MailChimpSignUp;