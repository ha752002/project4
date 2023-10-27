// import { HeaderLayoutOnly } from '@/components/Layout';
import Home from "../pages/Home";
// import Following from '@/pages/Following';
// import Upload from '@/pages/Upload';
import Dashboard from "../admin/Dashboard";
import ProductManagement from "../admin/ProductManagement";
import AdminDefaultLayout from "../components/Layout/AdminDefaultLayout";
// import CategoryManagement from '@/admin/CategoryManagement';

// web minh an
const publicRoutes = [
  { path: "/", component: Home },
  { path: "", component: Home },
  // { path: '/following', component: Following },
  // { path: '/upload', component: Upload, layout: HeaderLayoutOnly },
];

// admin
// const privateRoutes = [
//   {
//     path: "/admin",
//     component: Dashboard,
//     children: [
//       { path: "/dashboard", component: Dashboard },
//       { path: "/ProductManagement", component: ProductManagement },
//     ],
//   },

//   // { path: '/upload', component: Upload, layout: HeaderLayoutOnly },
// ];

const privateRoutes = [
  {
    path: "admin",
    element: <AdminDefaultLayout />,
    children: [
      { path: "", element: <h1></h1> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "product-management", element: <ProductManagement /> },
    ],
  },
];

export { publicRoutes, privateRoutes };
