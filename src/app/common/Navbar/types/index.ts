import { MenuItem } from "../components/NavigationList/components/Menu/types";

export type NavbarItem = {
  title: string;
  url: string;
  menuItems?: MenuItem[];
};
