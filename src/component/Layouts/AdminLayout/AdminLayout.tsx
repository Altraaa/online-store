import Sidebar from "@/component/fragments/Sidebar/Sidebar";
import { title } from "process";

type AdminProps = {
  children: React.ReactNode;
};

const ListItem = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: "bxs-dashboard",
  },
  {
    title: "Products",
    url: "/admin/products",
    icon: "bx-store-alt"
  },
  {
    title: "List Users",
    url: "/admin/users",
    icon: "bxs-user-rectangle"
  }
];
const AdminLayout = (props: AdminProps) => {
  const { children } = props;
  return (
    <div>
      <Sidebar lists={ListItem} />
      {children}
    </div>
  );
};

export default AdminLayout;
