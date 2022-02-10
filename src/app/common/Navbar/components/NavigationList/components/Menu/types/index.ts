export type MenuProps = {
  items: MenuItem[];
  show?: boolean;
  setMenuHeight?: (height?: number) => void;
};

export type MenuItem = {
  name: string;
  url?: string;
  extraMenuItems?: MenuItem[];
};
