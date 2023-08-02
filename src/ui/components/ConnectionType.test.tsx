import { render } from '@testing-library/react';
import { ConnectionType as ConnType } from '@/models/ConnectionType';
import ConnectionType from './ConnectionType';

const connectionType: ConnType = 'wired';

describe('ConnectionType', () => {
  it('should render correctly', () => {
    const { container } = render(<ConnectionType type={connectionType} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
