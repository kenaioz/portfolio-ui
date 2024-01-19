import { Container, FooterContent } from "./styles";

import { SocialLinks } from "../SocialLinks";
import { NavList } from "../Header";

import { Logo } from "../Logo";
import { Layout } from "../Layout";

export function Footer() {
  return (
    <Container>
      <Layout>
        <FooterContent>
          <Logo />

          <NavList />

          <SocialLinks />

          <span>© 2024 - Silvio Cesar - Em constante desenvolvimento</span>
        </FooterContent>
      </Layout>
    </Container>
  );
}
