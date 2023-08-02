import Typography from '@mui/material/Typography';
import { Door } from '@/models/Door';
import { DetailPageContainer } from '@/ui/layout/DetailPageContainer';
import { DetailPageItem } from '@/ui/layout/DetailPageItem';
import ConnectionStatus from './ConnectionStatus';
import { getLocaleString } from '@/lib/dateTime';
import ConnectionType from './ConnectionType';

interface DoorDetailProps {
  door: Door;
}

export function DoorDetail({ door }: DoorDetailProps) {
  return (
    <DetailPageContainer>
      <DetailPageItem label="ID">
        <Typography>{door.id}</Typography>
      </DetailPageItem>
      <DetailPageItem label="Apartment name">
        <Typography>{door.apartmentName}</Typography>
      </DetailPageItem>
      <DetailPageItem label="Building">
        <Typography>{door.buildingName}</Typography>
      </DetailPageItem>
      <DetailPageItem label="Connection type">
        <ConnectionType type={door.connectionType} />
      </DetailPageItem>
      <DetailPageItem label="Connection status">
        <ConnectionStatus status={door.connectionStatus} />
      </DetailPageItem>
      <DetailPageItem label="Last connection status update">
        <Typography>{getLocaleString(door.lastConnectionStatusUpdate)}</Typography>
      </DetailPageItem>
    </DetailPageContainer>
  );
}
