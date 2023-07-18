import {
  Home,
  Detail
} from '../../container/pages'

const AppRoutes = [
  {
    id: 0,
    path: '/',
    element: <Home />
  },
  {
    id: 1,
    path: '/detail/:id',
    element: <Detail />
  }
];

export default AppRoutes