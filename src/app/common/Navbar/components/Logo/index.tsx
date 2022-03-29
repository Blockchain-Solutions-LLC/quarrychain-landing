import { useNavigate } from "react-router-dom";
import { assetPaths } from "../../../constants";
import { LogoContainer, LogoImage, TextLogoImage, ImageContainer } from "./Logo.styles";

export function Logo() {
  const navigate = useNavigate();

  function handleLogoClick() {
    navigate("/", { replace: true });
  }

  return (
    <LogoContainer onClick={handleLogoClick}>
      <ImageContainer>
        <LogoImage src={assetPaths.LOGO} />
      </ImageContainer>
      <ImageContainer>
        <TextLogoImage src={assetPaths.QUARRYCHAIN_NAME} />
      </ImageContainer>
    </LogoContainer>
  );
}
