import { LayoutDashboard, Package, Settings } from "lucide-react";

export const API_URL = import.meta.env.VITE_API_URL
  ? import.meta.env.VITE_API_URL
  : "http://localhost:8080";

export const NAV_MAINS = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
    items: [],
  },
  {
    title: "Inventory",
    url: null,
    icon: Package,
    items: [
      {
        title: "Items",
        url: "inventory/items",
      },
    ],
  },
  {
    title: "Settings",
    url: null,
    icon: Settings,
    items: [
      {
        title: "Measurment Units",
        url: "settings/uoms",
      },
    ],
  },
];

export const SAMPLE_USER = {
  name: "John Doe",
  email: "johndoe@mail.com",
  avatar: "",
};
