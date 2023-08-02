import { ConnectionStatus as ConnStatus } from "@/models/ConnectionStatus"
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import PowerRoundedIcon from '@mui/icons-material/PowerRounded';
import PowerOffRoundedIcon from '@mui/icons-material/PowerOffRounded';

interface ConnectionStatusProps {
  status: ConnStatus;
}

const ConnectionStatus = ({ status }: ConnectionStatusProps) => {
  return <Stack direction='row' alignItems='center'>
    {status === 'online' ? <PowerRoundedIcon fontSize="small" color="success" /> : <PowerOffRoundedIcon fontSize="small" color="error" />}
    <Typography color={status === 'online' ? "success.main" : "error.main"}>{status}</Typography>
  </Stack>
}

export default ConnectionStatus
