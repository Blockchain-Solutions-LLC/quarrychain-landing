import { Icon } from "../../../../../../../common/Icon";
import { socialMediaIcons } from "../../../constants";
import { SingleIcon } from "../SocialPlatforms.styles";

export function socialPlatformItemsToShow(
  numberOfItems?: number,
  invertColors?: boolean,
  smallSize?: boolean
) {
  if (!numberOfItems) {
    return (
      <>
        {socialMediaIcons.map((socialMedia, index) => (
          <SingleIcon key={index} invertColors={invertColors} onClick={() =>
            window.open(
              socialMedia.url,
              "_blank"
            )
          }>
            <Icon name={socialMedia.name} />
          </SingleIcon>
        ))}
      </>
    );
  } else {
    const itemsToDelete = socialMediaIcons.length - numberOfItems;
    return (
      <>
        {socialMediaIcons.slice(0, -itemsToDelete).map((socialMedia, index) => (
          <SingleIcon
            key={index}
            invertColors={invertColors}
            smallSize={smallSize}
            onClick={() => window.open(socialMedia.url, "_blank")}>
            <Icon name={socialMedia.name} />
          </SingleIcon>
        ))}
      </>
    );
  }
}
