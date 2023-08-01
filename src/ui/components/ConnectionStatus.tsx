import { ConnectionStatus as ConnStatus } from "@/models/ConnectionStatus"
import Typography from '@mui/material/Typography';

interface ConnectionStatusProps {
  status: ConnStatus;
}

const ConnectionStatus = ({ status }: ConnectionStatusProps) => {
  return <Typography color={status === 'online' ? "success.main" : "error.main"}>{status}</Typography>
}

export default ConnectionStatus
