import { NavbarItem } from "../types";

export const navbarItems: NavbarItem[] = [
  {
    title: "Ecosystem",
    url: "/ecosystem",
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
        url: "/",
        extraMenuItems: [
          {
            name: "Quarry coin",
            url: "/",
          },
          {
            name: "Tuff token",
            url: "/",
          },
          {
            name: "Moai token",
            url: "/",
          },
          {
            name: "Tap token",
            url: "/",
          },
        ],
      },
    ],
  },
  {
    title: "Developer",
    url: "/developer",
    menuItems: [
      {
        name: "White Paper V1",
        url: "/",
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
      {
        name: "Roadmap",
        url: "/",
      },
    ],
  },
  {
    title: "About",
    url: "/about",
    menuItems: [
      {
        name: "Hiring subpage",
        url: "/",
      },
    ],
  },
  {
    title: "Genesis Team",
    url: "/genesisTeam",
    menuItems: [
      {
        name: "Alec Arrambide - CEO/ Founder",
        url: "/",
      },
      {
        name: "Riley Gillespie - CMO",
        url: "/",
      },
    ],
  },
];
