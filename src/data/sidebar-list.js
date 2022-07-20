import { IoGridSharp } from "react-icons/io5";
import { SiApplearcade } from "react-icons/si";
import { RiBarChart2Fill, RiSettings5Fill } from "react-icons/ri";
import { FaDownload } from "react-icons/fa";

export const sidebarList = [
  {
    id: 1,
    icon: IoGridSharp,
    name: "Overview",
    link: "/",
  },
  {
    id: 2,
    icon: SiApplearcade,
    name: "Arcade",
    link: "/arcade",
  },
  {
    id: 3,
    icon: RiBarChart2Fill,
    name: "Charts",
    link: "/charts",
  },
  {
    id: 4,
    icon: FaDownload,
    name: "Updates",
    link: "/updates",
  },
  {
    id: 5,
    icon: RiSettings5Fill,
    name: "Settings",
    link: "/settings",
  },
];
