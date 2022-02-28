import { Icon } from "../../../../../../../common/Icon";
import { socialMediaIconNames } from "../../../constants";
import { SingleIcon } from "../SocialPlatforms.styles";

export function socialPlatformItemsToShow(
  numberOfItems?: number,
  invertColors?: boolean,
  smallSize?: boolean
) {
  if (!numberOfItems) {
    return (
      <>
        {socialMediaIconNames.map((icon, index) => (
          <SingleIcon key={index} invertColors={invertColors}>
            <Icon name={icon} />
          </SingleIcon>
        ))}
      </>
    );
  } else {
    const itemsToDelete = socialMediaIconNames.length - numberOfItems;
    return (
      <>
        {socialMediaIconNames.slice(0, -itemsToDelete).map((icon, index) => (
          <SingleIcon
            key={index}
            invertColors={invertColors}
            smallSize={smallSize}
          >
            <Icon name={icon} />
          </SingleIcon>
        ))}
      </>
    );
  }
}
