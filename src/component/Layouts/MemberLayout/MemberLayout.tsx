import Sidebar from "@/component/fragments/Sidebar/Sidebar";

type MemberProps = {
  children: React.ReactNode;
  label: string;
};

const ListItem = [
  {
    title: "Dashboard",
    url: "/member",
    icon: "bxs-dashboard",
  },
  {
    title: "Profile",
    url: "/member/profile",
    icon: "bxs-user-account",
  },
  {
    title: "Orders",
    url: "/member/orders",
    icon: "bx-cart-alt",
  },
];
const MemberLayout = (props: MemberProps) => {
  const { children, label } = props;
  return (
    <div className="flex">
      <Sidebar label="Member Page" lists={ListItem} />
      <div className="w-full py-10 px-12 space-y-4">
          <h1 className="text-3xl font-semibold">{label}</h1>
        {children}
      </div>
    </div>
  );
};

export default MemberLayout;
