import { useRouter } from 'next/router';
import Head from 'next/head';
import { useGetDoorByIdQuery } from '@/ui/apiSlice';
import { isPageQueryParamString } from '@/ui/lib/isPageQueryParamString';
import { Layout } from '@/ui/layout/Layout';
import { DoorDetail } from '@/ui/components/DoorDetail';

export default function DoorDetailPage() {
  const router = useRouter();

  const { doorId } = router.query;

  const { data: door, isSuccess, isFetching, isLoading, isError, error } = useGetDoorByIdQuery(doorId as string, {
    skip: !isPageQueryParamString(doorId),
  });

  return (
    <>
      <Head>
        <title>Door detail: {door?.name}</title>
        <meta name="description" content={`door ${door?.name} detail`} />
      </Head>
      <Layout title={door?.name} isSuccess={isSuccess} isFetching={isFetching} isLoading={isLoading} isError={isError} error={error}>
        {isSuccess && <DoorDetail door={door} />}
      </Layout>
    </>
  );
}
