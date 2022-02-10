import { MenuItem } from "../../Menu/types";

export type NavigationItemProps = {
  title: string;
  url: string;
  menuItems?: MenuItem[];
};
