// import { HeaderLayoutOnly } from '@/components/Layout';
import Home from "../pages/Home";
// import Following from '@/pages/Following';
// import Upload from '@/pages/Upload';
import Dashboard from "../admin/Dashboard";
import ProductManagement from "../admin/ProductManagement";
import AdminDefaultLayout from "../components/Layout/AdminDefaultLayout";
import WebDefaultLayout from "../components/Layout/WebDefaultLayout";
// import SignUp from "../pages/auth/sign-up";
// import SignIn from "../pages/auth/sign-in";
import SignIn from "../pages/auth/signIn";
import SignUp from "../pages/auth/signUp";
import Recoverpw from "../pages/auth/recoverpw";
import LockScreen from "../pages/auth/lock-screen";
import ConfirmMail from "../pages/auth/confirm-mail";
import AddUser from "../admin/AddUserManagement";
import UsersList from "../admin/UserListManagement";
import UsersProfile from "../admin/UserProfileManagement";
import AdminsRole from "../admin/AdminRoleManagement";

const publicRoutes = [
  {
    path: "user",
    element: <WebDefaultLayout />,
    children: [
      { path: "", element: <h1>ssss</h1> },
      { path: "signup", element: <SignUp /> },
      { path: "signin", element: <SignIn /> },
      { path: "recoverpw", element: <Recoverpw /> },
      { path: "lockscreen", element: <LockScreen /> },
      { path: "confirmmail", element: <ConfirmMail /> },
    ],
  },
];

const privateRoutes = [
  {
    path: "admin",
    element: <AdminDefaultLayout />,
    children: [
      { path: "", element: <h1></h1> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "product-management", element: <ProductManagement /> },
      { path: "users-profile", element: <UsersProfile /> },
      { path: "list-users", element: <UsersList /> },
      { path: "add-users", element: <AddUser /> },
      { path: "admin-role", element: <AdminsRole /> },
    ],
  },
];

export { publicRoutes, privateRoutes };
