import { NavigationListContainer } from "./NavigationList.styles";
import { NavigationItem } from "./components/NavigationItem";
import { navbarItems } from "../../constants";

export function NavigationList() {
  return (
    <NavigationListContainer>
      {navbarItems.map((item) => (
        <NavigationItem
          title={item.title}
          url={item.url}
          key={item.url}
          menuItems={item.menuItems}
        />
      ))}
    </NavigationListContainer>
  );
}
