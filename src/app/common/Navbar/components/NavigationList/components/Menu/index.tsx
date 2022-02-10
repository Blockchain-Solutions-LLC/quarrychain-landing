import { useEffect, useRef } from "react";
import { Container, ItemContainer, StyledSpan } from "./Menu.styles";
import { MenuProps } from "./types";

export function Menu({ items, show, setMenuHeight }: MenuProps) {
  const reference = useRef(null);
  useEffect(() => {
    if (show) {
      setMenuHeight(reference?.current?.clientHeight + 80);
    }
  }, [show]);

  return (
    <Container show={show} ref={reference}>
      {items.map((item, index) => (
        <ItemContainer key={index}>
          <StyledSpan>{item.name}</StyledSpan>
        </ItemContainer>
      ))}
    </Container>
  );
}
