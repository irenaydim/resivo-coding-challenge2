import { render } from '@testing-library/react';
import { Door } from '@/models/Door';
import { DoorDetail } from './DoorDetail';

const door: Door = {
  id: '63f637c9f3c48a124616044b',
  name: 'Building Main Entrance',
  apartmentName: 'n/a',
  buildingName: 'Bahnhofstrasse 10A',
  connectionType: 'wired',
  connectionStatus: 'offline',
  lastConnectionStatusUpdate: '2023-08-01T15:53:43.213',
};

describe('DoorDetail', () => {
  it('should render correctly', () => {
    const { container } = render(<DoorDetail door={door} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
