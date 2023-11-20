// import { HeaderLayoutOnly } from '@/components/Layout';
import {
  AdminDefaultLayout,
  AdminRole,
  WebDefaultLayout,
  PublicRole,
} from "../components";
import {
  SignIn,
  SignUp,
  Recoverpw,
  LockScreen,
  ConfirmMail,
  Home,
} from "../pages";

import {
  AddProductManagement,
  ListProductManagement,
  DeleteProductManagement,
  EditProductManagement,
  Dashboard,
  AddUser,
  UsersList,
  UsersProfile,
  AdminsRole,
  Map,
  Schedule,
} from "../admin";
import ProductDetail from "../pages/product/productDetail.jsx";

// const USER_TYPES = {
//   PUBLIC: "public User",
//   NORMAL_USER: "Normal User",
//   ADMIN_USER: "Admin User",
// };

// const CURRENT_USER_TYPE = USER_TYPES.ADMIN_USER;

const publicRoutes = [
  {
    path: "user",
    element: (
      <PublicRole>
        <WebDefaultLayout />
      </PublicRole>
    ),
    children: [
      { path: "", element: <h1>ssss</h1> },
      { path: "signup", element: <SignUp /> },
      { path: "signin", element: <SignIn /> },
      { path: "recoverpw", element: <Recoverpw /> },
      { path: "lockscreen", element: <LockScreen /> },
      { path: "confirmmail", element: <ConfirmMail /> },
      { path: "home", element: <Home /> },
      { path: "product-detail/:id", element: <ProductDetail /> },
    ],
  },
];

const privateRoutes = [
  {
    path: "admin",
    element: (
      <AdminRole>
        <AdminDefaultLayout />
      </AdminRole>
    ),
    children: [
      { path: "", element: <h1></h1> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "users-profile", element: <UsersProfile /> },
      { path: "list-users", element: <UsersList /> },
      { path: "add-users", element: <AddUser /> },
      { path: "admin-role", element: <AdminsRole /> },
      { path: "add-products", element: <AddProductManagement /> },
      { path: "delete-products", element: <DeleteProductManagement /> },
      { path: "edit-products", element: <EditProductManagement /> },
      { path: "list-products", element: <ListProductManagement /> },
      { path: "map", element: <Map /> },
      { path: "schedule", element: <Schedule /> },
    ],
  },
];

export { publicRoutes, privateRoutes };
