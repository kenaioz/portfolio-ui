import { useTranslation } from "react-i18next";

import { Container, FooterContent } from "./styles";

import { SocialLinks } from "../SocialLinks";
import { NavList } from "../Header";

import { Logo } from "../Logo";
import { Layout } from "../Layout";

export function Footer() {
  const { t } = useTranslation();

  return (
    <Container>
      <Layout>
        <FooterContent>
          <Logo />

          <NavList />

          <SocialLinks />

          <span>{t("footer")}</span>
        </FooterContent>
      </Layout>
    </Container>
  );
}
