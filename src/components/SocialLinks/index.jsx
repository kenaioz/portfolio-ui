import { ContainerSocialLinks } from "./styles";

import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

export function SocialLinks() {
  return (
    <ContainerSocialLinks>
      <a href="https://github.com/kenaioz" rel="noreferrer" target="_blank">
        <IoLogoGithub size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/silviocesarjr/"
        rel="noreferrer"
        target="_blank"
      >
        <IoLogoLinkedin size={24} />
      </a>
    </ContainerSocialLinks>
  );
}
