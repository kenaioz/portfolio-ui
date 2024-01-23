import { useState } from "react";
import PropTypes from "prop-types";

import {
  Container,
  HeaderContent,
  ContainerNavList,
  ButtonCV,
  ContainerSideMenu,
  LayoutSideMenu,
} from "./styles";

import { RxHamburgerMenu } from "react-icons/rx";
import { FiX } from "react-icons/fi";

import { Logo } from "../Logo";
import { Layout } from "../Layout";

export function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <Container>
      <Layout>
        <HeaderContent>
          <Logo />

          <NavList />

          <ButtonResume data-menu-is-open={menuIsOpen} />

          {menuIsOpen ? (
            <FiX
              size={24}
              onClick={() => {
                setMenuIsOpen(false);
                document.body.style.overflow = "auto";
              }}
            />
          ) : (
            <RxHamburgerMenu
              size={24}
              onClick={() => {
                setMenuIsOpen(true);
                document.body.style.overflow = "hidden";
              }}
            />
          )}
        </HeaderContent>
      </Layout>
      <ContainerSideMenu data-menu-is-open={menuIsOpen}>
        <LayoutSideMenu>
          <NavList menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />

          <ButtonResume />
        </LayoutSideMenu>
      </ContainerSideMenu>
    </Container>
  );
}

export function NavList({ menuIsOpen, setMenuIsOpen }) {
  function handleOption(e) {
    if (menuIsOpen) {
      setMenuIsOpen(false);
      document.body.style.overflow = "auto";
    }

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

NavList.propTypes = {
  menuIsOpen: PropTypes.bool,
  setMenuIsOpen: PropTypes.func,
};

export function ButtonResume() {
  return (
    <ButtonCV
      href="https://drive.google.com/file/d/1pEJgGdO9bXr6Nyz_3sn5x5KRhEiAWMIl/view?usp=drive_link"
      rel="noreferrer"
      target="_blank"
    >
      Abrir Currículo
    </ButtonCV>
  );
}
