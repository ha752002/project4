// import { HeaderLayoutOnly } from '@/components/Layout';
import Home from "../pages/Home";
// import Following from '@/pages/Following';
// import Upload from '@/pages/Upload';
import Dashboard from "../admin/Dashboard/";
// import ProductManagement from '@/admin/ProductManagement';
// import CategoryManagement from '@/admin/CategoryManagement';

// web minh an
const publicRoutes = [
  { path: "/", component: Home },
  { path: "", component: Home },
  // { path: '/following', component: Following },
  // { path: '/upload', component: Upload, layout: HeaderLayoutOnly },
];

// admin
const privateRoutes = [
  { path: "/dashboard", component: Dashboard },
  // { path: '/productManagement', component: ProductManagement }
  // { path: '/upload', component: Upload, layout: HeaderLayoutOnly },
];

export { publicRoutes, privateRoutes };
