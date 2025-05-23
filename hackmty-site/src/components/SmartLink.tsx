import { HashLink } from 'react-router-hash-link';
import { Box, type BoxProps } from '@mui/material';

interface SmartLinkProps extends BoxProps {
  href: string;
  children: React.ReactNode;
}

export const SmartLink: React.FC<SmartLinkProps> = ({ href, children, ...boxProps }) => {
  const isExternal = href.startsWith('http') || href.startsWith('//');

  if (isExternal) {
    return (
      <Box
        component="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...boxProps}
      >
        {children}
      </Box>
    );
  }

  return (
    <Box component={HashLink} to={href} {...boxProps}>
      {children}
    </Box>
  );
};
