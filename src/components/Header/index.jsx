import { Container, HeaderContent, ContainerNavList, ButtonCV } from "./styles";

import { Logo } from "../Logo";
import { Layout } from "../Layout";

export function Header() {
  return (
    <Container>
      <Layout>
        <HeaderContent>
          <Logo />

          <NavList />

          <ButtonCV
            href="https://drive.google.com/file/d/1pEJgGdO9bXr6Nyz_3sn5x5KRhEiAWMIl/view?usp=drive_link"
            rel="noreferrer"
            target="_blank"
          >
            Abrir Currículo
          </ButtonCV>
        </HeaderContent>
      </Layout>
    </Container>
  );
}

export function NavList() {
  function handleOption(e) {
    const element = document.getElementById(e.target.dataset.section);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  return (
    <ContainerNavList>
      <li data-section="intro" onClick={handleOption}>
        Introdução
      </li>
      <li data-section="about" onClick={handleOption}>
        Sobre Mim
      </li>
      <li data-section="techs" onClick={handleOption}>
        Tecnologias
      </li>
      <li data-section="projects" onClick={handleOption}>
        Projetos
      </li>
      <li data-section="contact" onClick={handleOption}>
        Entre em contato
      </li>
    </ContainerNavList>
  );
}
