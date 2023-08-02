import { PropsWithChildren } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { AppBar } from '@/ui/layout/AppBar';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { SerializedError } from '@reduxjs/toolkit';
import { Loader } from '../components/Loader';
import { HttpError } from 'http-errors';
import { useMemo } from 'react';
import { ErrorText } from '../components/ErrorText';

interface LayoutProps {
  title?: string;
  isError: boolean;
  isFetching: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  error?: FetchBaseQueryError | SerializedError | HttpError;
}

export function Layout({ title, isError, isFetching, isLoading, isSuccess, error, children }: PropsWithChildren<LayoutProps>) {
  const errorText = useMemo(() => isError && error 
    ? (error as HttpError).data?.error?.message || (error as FetchBaseQueryError).data || (error as SerializedError).message 
    : '',
  [isError, error])

  return (
    <>
      <AppBar />
      <Container component="main" sx={{ p: 3 }}>
        {!!title && (
          <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
            {title}
          </Typography>
        )}
        {isSuccess
          ? children
          : isFetching || isLoading
            ? <Loader /> 
            : <ErrorText>{errorText}</ErrorText>}
      </Container>
    </>
  );
}
