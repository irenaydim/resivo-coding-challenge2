import { render } from '@testing-library/react';
import { ConnectionStatus as ConnStatus } from '@/models/ConnectionStatus';
import ConnectionStatus from './ConnectionStatus';

const connectionStatus: ConnStatus = 'offline';

describe('ConnectionStatus', () => {
  it('should render correctly', () => {
    const { container } = render(<ConnectionStatus status={connectionStatus} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
