import FrontPageRouteCharts from '../ui/front-page-charts';
import { Suspense } from 'react';

import { auth } from '@/auth';

import HomePageImage from '../ui/home-page-image';

export default async function Home() {
  const session = await auth();
  const user = session?.user || null;

  return (
    <>
      <Suspense fallback={<div className="text-white">Loading...</div>}>
        <HomePageImage user={user} />
      </Suspense>
      <div className="mb-10">
        <Suspense fallback={<div className="text-white">Loading...</div>}>
          <FrontPageRouteCharts />
        </Suspense>
      </div>
    </>
  );
}