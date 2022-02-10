import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { BsTwitter, BsYoutube, BsInstagram, BsLinkedin } from "react-icons/bs";
import {
  FaDiscord,
  FaRedditAlien,
  FaTelegramPlane,
  FaLinkedinIn,
} from "react-icons/fa";
import { IconProps } from "./types";

export function Icon({ className, name }: IconProps) {
  function handleIconName() {
    switch (name) {
      case "arrowLeft":
        return <MdArrowBackIosNew className={className} />;

      case "arrowRight":
        return <MdArrowForwardIos className={className} />;

      case "twitter":
        return <BsTwitter className={className} />;

      case "discord":
        return <FaDiscord className={className} />;

      case "youtube":
        return <BsYoutube className={className} />;

      case "reddit":
        return <FaRedditAlien className={className} />;

      case "telegram":
        return <FaTelegramPlane className={className} />;

      case "instagram":
        return <BsInstagram className={className} />;

      case "linkedin":
        return <FaLinkedinIn className={className} />;
    }
  }
  return handleIconName();
}
