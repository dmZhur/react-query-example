import { AppLayout } from '@/components';
import {
  CreateUser,
  ProductDetails,
  Products,
} from '@/views';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route path="/" element={<Products />} />
      <Route path="/login" element={<CreateUser />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Route>
  )
);

export function RoutingProvider() {
  return <RouterProvider router={router} />;
}
