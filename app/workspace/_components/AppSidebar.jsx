import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import {
  Book,
  Compass,
  LayoutDashboard,
  PencilLineIcon,
  UserCircle2Icon,
  WalletCards,
} from "lucide-react";
import Image from "next/image";

const SIdeBarOptions = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/#",
  },
  {
    title: "My Learning",
    icon: Book,
    path: "/workspace/my-courses",
  },
  {
    title: "Explore Courses",
    icon: Compass,
    path: "/workspace/explore",
  },
  {
    title: "AI Tools",
    icon: PencilLineIcon,
    path: "/workspace/ai-tools",
  },
  {
    title: "Billing",
    icon: WalletCards,
    path: "/workspace/billing",
  },
  {
    title: "Profile",
    icon: UserCircle2Icon,
    path: "/workspace/profile",
  },
];
export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className={"p-4"}>
        <Image src={"/logo.svg"} alt="logo" width={130} height={120} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <Button>Create New Course</Button>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
