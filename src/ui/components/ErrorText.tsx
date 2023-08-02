import { Stack, Typography } from '@mui/material';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';

interface ErrorTextProps {
  children: string
}

export const ErrorText = ({ children }: ErrorTextProps) => {
  return <Stack justifyContent="center" alignItems="center" direction="row" gap={1}>
    <ErrorRoundedIcon color="error" />
    <Typography component="p" color="error.main">{children || 'Something went wrong ...'}</Typography>
  </Stack>
}
