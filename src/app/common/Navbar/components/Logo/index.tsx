import { useNavigate } from "react-router-dom";
import { assetPaths } from "../../../constants";
import { LogoContainer, LogoImage, TextLogoImage, LogoImageContainer } from "./Logo.styles";

export function Logo() {
  const navigate = useNavigate();

  function handleLogoClick() {
    navigate("/", { replace: true });
  }

  return (
    <LogoContainer onClick={handleLogoClick}>
      <LogoImageContainer>
        <LogoImage src={assetPaths.LOGO} />
      </LogoImageContainer>
      <TextLogoImage src={assetPaths.QUARRYCHAIN_NAME} />
    </LogoContainer>
  );
}
