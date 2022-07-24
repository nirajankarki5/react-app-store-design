import {
  IoGameController,
  IoSettings,
  IoClipboardSharp,
} from "react-icons/io5";
import { IoIosColorPalette } from "react-icons/io";

export const menuList = [
  {
    id: 1,
    name: "Games",
    icon: IoGameController,
    link: "/",
  },
  {
    id: 2,
    name: "Creation",
    icon: IoIosColorPalette,
    link: "/",
  },
  {
    id: 3,
    name: "Development",
    icon: IoSettings,
    link: "/",
  },
  {
    id: 4,
    name: "Work",
    icon: IoClipboardSharp,
    link: "/",
  },
];
