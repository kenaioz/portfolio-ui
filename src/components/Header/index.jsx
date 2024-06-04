import { useState } from "react";
import PropTypes from "prop-types";

import {
  Container,
  HeaderContent,
  ContainerNavList,
  EndDiv,
  ButtonCV,
  ContainerSideMenu,
  LayoutSideMenu,
  EndDivSideMenu,
} from "./styles";

import { RxHamburgerMenu } from "react-icons/rx";
import { FiX } from "react-icons/fi";

import { Logo } from "../Logo";
import { Layout } from "../Layout";
import { LangSelect } from "../Language";
import { useTranslation } from "react-i18next";

export function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <Container>
      <Layout>
        <HeaderContent>
          <Logo />

          <NavList />

          <EndDiv>
            <LangSelect />
            <ButtonResume />
          </EndDiv>

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

          <EndDivSideMenu>
            <LangSelect />
            <ButtonResume />
          </EndDivSideMenu>
        </LayoutSideMenu>
      </ContainerSideMenu>
    </Container>
  );
}

export function NavList({ menuIsOpen, setMenuIsOpen }) {
  const { t } = useTranslation();

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
        {t("section.introduction.title")}
      </li>
      <li data-section="about" onClick={handleOption}>
        {t("section.about.title")}
      </li>
      <li data-section="techs" onClick={handleOption}>
        {t("section.techs.title")}
      </li>
      <li data-section="projects" onClick={handleOption}>
        {t("section.projects.title")}
      </li>
      <li data-section="contact" onClick={handleOption}>
        {t("section.contact.title")}
      </li>
    </ContainerNavList>
  );
}

NavList.propTypes = {
  menuIsOpen: PropTypes.bool,
  setMenuIsOpen: PropTypes.func,
};

export function ButtonResume() {
  const { t, i18n } = useTranslation();

  return (
    <ButtonCV
      href={
        i18n.language === "pt-BR"
          ? "https://drive.google.com/file/d/1pEJgGdO9bXr6Nyz_3sn5x5KRhEiAWMIl/view?usp=drive_link"
          : "https://drive.google.com/file/d/1bZIoyNRWQdx2yWtTojPiOT4lM-Gvr4WK/view?usp=drive_link"
      }
      rel="noreferrer"
      target="_blank"
    >
      {t("cv.button")}
    </ButtonCV>
  );
}
