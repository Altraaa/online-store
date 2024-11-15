import Sidebar from "@/component/fragments/Sidebar/Sidebar";
import { title } from "process";

type AdminProps = {
  label: string;
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
  const { children, label } = props;
  return (
    <div className="flex">
      <Sidebar label="Admin Page" lists={ListItem} />
      <div className="w-full py-10 px-12 space-y-4">
        <h1 className="text-3xl font-semibold">{label}</h1>
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
