import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { ConnectionType as ConnType } from "@/models/ConnectionType";
import ElectricalServicesRoundedIcon from '@mui/icons-material/ElectricalServicesRounded';
import SensorsRoundedIcon from '@mui/icons-material/SensorsRounded';

interface ConnectionTypeProps {
  type: ConnType;
}

const ConnectionType = ({ type }: ConnectionTypeProps) => {
  return <Stack direction='row' alignItems='center' gap={0.5}>
    {type === 'wired' ? <ElectricalServicesRoundedIcon fontSize="small" /> : <SensorsRoundedIcon fontSize="small" />}
    <Typography>{type}</Typography>
  </Stack>
}

export default ConnectionType
