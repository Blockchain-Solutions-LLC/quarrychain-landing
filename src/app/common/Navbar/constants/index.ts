import { NavbarItem } from "../types";

export const navbarItems: NavbarItem[] = [
  {
    title: "Ecosystem",
    menuItems: [
      {
        name: "Quarry Wallet",
        url: "/",
      },
      {
        name: "Block Explorer",
        url: "/",
      },
      {
        name: "Token",
        subMenuItems: [
          {
            name: "Quarry Coin",
            url: "/quarry-coin",
          },
          {
            name: "Tuff Token",
            url: "/tuff-token",
          },
          {
            name: "Moai Token",
            url: "/moai-token",
          },
          {
            name: "Tap Token",
            url: "/tap-token",
          },
        ],
      },
    ],
  },
  {
    title: "Developer",
    menuItems: [
      {
        name: "White Paper V1",
        url: "https://drive.google.com/file/d/12ib5VDI6K7BflbgQGceW-EdzndEizO0Z/view?usp=sharing",
      },
      {
        name: "QRY-20 Contract",
        url: "/",
      },
      {
        name: "Github subpage",
        url: "/",
      },
      {
        name: "Bug Bounty",
        url: "/",
      },
    ],
  },
  {
    title: "About",
    menuItems: [
      {
        name: "Hiring subpage",
        url: "/",
      },
      {
        name: "FAQ",
        url: "/faq",
      },
    ],
  },
  {
    title: "Genesis Team",
    menuItems: [
      {
        name: "Alec Arrambide - CEO/ Founder",
        url: "https://www.linkedin.com/in/alec-arrambide-91a7b321a/",
      },
    ],
  },
];
