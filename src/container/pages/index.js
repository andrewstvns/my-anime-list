import { lazy } from 'react';

const Home = lazy(() => import('./Home'));
const Detail = lazy(() => import('./Detail'));

export { Home, Detail };