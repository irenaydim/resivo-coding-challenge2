import { render } from '@testing-library/react';
import { Door } from '@/models/Door';
import { DoorList } from './DoorList';

jest.mock('next/router', () => require('next-router-mock'));

const doors: Door[] = [
  {
    id: '63f637c9f3c48a124616044b',
    name: 'Building Main Entrance',
    apartmentName: 'n/a',
    buildingName: 'Bahnhofstrasse 10A',
    connectionType: 'wired',
    connectionStatus: 'offline',
    lastConnectionStatusUpdate: '2023-08-02T15:55:43.213',
  },
];

describe('DoorList', () => {
  it('should render correctly', () => {
    const { container } = render(<DoorList doors={doors} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
