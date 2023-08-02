import { render } from '@testing-library/react';
import { ErrorText } from './ErrorText';

jest.mock('next/router', () => require('next-router-mock'));

const errorText = 'Custom error ...'
const emptyErrorText = ''


describe('Error text', () => {
  it('should render "Custom error ..."', () => {
    const { container } = render(<ErrorText>{errorText}</ErrorText>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render "Something went wrong ..."', () => {
    const { container } = render(<ErrorText>{emptyErrorText}</ErrorText>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
