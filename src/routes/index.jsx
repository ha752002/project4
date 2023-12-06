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
import { PromotionPage } from "../pages/index.jsx";

// user
const publicRoutes = [
  {
    path: "",
    element: (
      <PublicRole>
        <WebDefaultLayout />
      </PublicRole>
    ),
    children: [
      { path: "", element: <Home /> },
      { path: "signup", element: <SignUp /> },
      { path: "signin", element: <SignIn /> },
      { path: "recoverpw", element: <Recoverpw /> },
      { path: "lockscreen", element: <LockScreen /> },
      { path: "confirmmail", element: <ConfirmMail /> },
      { path: "home", element: <Home /> },
      { path: "promotionPage", element: <PromotionPage /> },
      { path: "product-detail/:id", element: <ProductDetail /> },
    ],
  },
];

// admin
const privateRoutes = [
  {
    path: "admin",
    element: (
      <AdminRole>
        <AdminDefaultLayout />
      </AdminRole>
    ),
    children: [
      { path: "", element: <Dashboard /> },
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
