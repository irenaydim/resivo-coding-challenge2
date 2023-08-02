import Head from 'next/head';
import { useGetAllDoorsQuery } from '@/ui/apiSlice';
import { DoorList } from '@/ui/components/DoorList';
import { Layout } from '@/ui/layout/Layout';

export default function DoorListPage() {
  const { data: doors = [], isSuccess, isLoading, isFetching, isError, error } = useGetAllDoorsQuery();

  return (
    <>
      <Head>
        <title>Door list</title>
        <meta name="description" content="door list" />
      </Head>
      <Layout title="Doors" isSuccess={isSuccess} isLoading={isLoading} isError={isError} error={error} isFetching={isFetching}>
        <DoorList doors={doors} />
      </Layout>
    </>
  );
}
