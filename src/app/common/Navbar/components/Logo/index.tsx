import { useNavigate } from "react-router-dom";
import { assetPaths } from "../../../constants";
import { LogoContainer, LogoImage, TextLogoImage } from "./Logo.styles";

export function Logo() {
  const navigate = useNavigate();

  function handleLogoClick() {
    navigate("/", { replace: true });
  }

  return (
    <LogoContainer onClick={handleLogoClick}>
      <LogoImage src={assetPaths.LOGO} />
      <TextLogoImage src={assetPaths.QUARRYCHAIN_NAME} />
    </LogoContainer>
  );
}
