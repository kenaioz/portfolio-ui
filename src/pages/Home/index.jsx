import { useState } from "react";
import { useTranslation } from "react-i18next";

import {
  Container,
  PageContent,
  TitleTextWrapper,
  Intro,
  AboutMe,
  Techs,
  Projects,
  Contact,
} from "./styles";

import { Header } from "../../components/Header";
import { Layout } from "../../components/Layout";
import { SocialLinks } from "../../components/SocialLinks";
import { TechSection } from "../../components/Techs";
import { ProjectsCardsWrapper, ProjectsCards } from "../../components/Projects";
import { Input, TextArea, Button } from "../../components/Forms";
import { Footer } from "../../components/Footer";

import profilePic from "../../assets/profile-pic.png";

import ProfileSVG from "../../assets/undraw_profile_re_4a55.svg";
import DevelopingSVG from "../../assets/undraw_developer_activity_re_39tg.svg";
import ContactSVG from "../../assets/undraw_new_message_re_fp03.svg";

import { techData } from "../../utils/techData.js";
import { projectsData } from "../../utils/projects.js";

import { sendEmail } from "../../services/emailAPI.js";

export function Home() {
  const { t, i18n } = useTranslation();

  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    subject: "",
    content: "",
  });

  function updateContactForms(field, data) {
    setContactData({
      ...contactData,
      [field]: data,
    });
  }

  async function sendContact(e) {
    e.preventDefault();

    if (
      !contactData.name ||
      !contactData.email ||
      !contactData.subject ||
      !contactData.content
    ) {
      return alert("Todos os campos precisam estar preenchidos");
    }

    try {
      await sendEmail(contactData);
      alert("Email enviado com sucesso!");

      window.location.reload(false);
    } catch (error) {
      alert(
        "Não foi possível enviar o contato, verifique se ingressou um email válido para retorno. \n\n Se o problema persistir, tente novamente mais tarde."
      );
    }
  }

  return (
    <Container>
      <Header />

      <PageContent>
        <Intro id="intro">
          <Layout>
            <img src={profilePic} alt="Imagem de Perfil" />

            <div className="infos">
              <div>
                <div className="titleWrapper">
                  <h2>
                    <span>
                      {t("section.introduction.greetings.first_word")}
                    </span>
                    {t("section.introduction.greetings.rest")}
                  </h2>
                  <h1>
                    <span>Silvio</span> Cesar
                  </h1>
                </div>
                <p>{t("section.introduction.content")}</p>
              </div>
              <SocialLinks />
            </div>
          </Layout>
        </Intro>
        <AboutMe id="about">
          <Layout>
            <img src={ProfileSVG} alt="About Me" />

            <div>
              <h1>
                <span>{t("section.about.first_word")}</span>
                {t("section.about.rest")}
              </h1>
              <p>
                {t("section.about.content.first_paragraph")}
                <br />
                <br />
                {t("section.about.content.second_paragraph")}
              </p>
            </div>
          </Layout>
        </AboutMe>
        <Techs id="techs">
          <Layout>
            <div>
              <h1>{t("section.techs.title")}</h1>
              <div>
                <TechSection
                  title="Front-End"
                  technologies={techData.frontend}
                />
                <TechSection
                  title="Back-End "
                  technologies={techData.backend}
                />
                <TechSection
                  title="Database"
                  technologies={techData.database}
                />
                <TechSection
                  title={t("section.techs.others")}
                  technologies={techData.others}
                />
              </div>
            </div>
            <img src={DevelopingSVG} alt="Developing SVG" />
          </Layout>
        </Techs>
        <Projects id="projects">
          <Layout>
            <div>
              <TitleTextWrapper>
                <h1>{t("section.projects.title")}</h1>
                <span>{t("section.projects.content")}</span>
              </TitleTextWrapper>

              <ProjectsCardsWrapper>
                {projectsData.map((project, index) => (
                  <ProjectsCards
                    key={index}
                    image={project.image}
                    title={project.name}
                    description={
                      i18n.language === "pt-BR"
                        ? project.description.pt
                        : project.description.en
                    }
                    status={
                      i18n.language === "pt-BR"
                        ? project.status.pt
                        : project.status.en
                    }
                    frontend={project.frontend}
                    backend={project.backend}
                  />
                ))}
              </ProjectsCardsWrapper>
            </div>
          </Layout>
        </Projects>
        <Contact id="contact">
          <Layout>
            <div>
              <form id="contact-us">
                <fieldset>
                  <h1>{t("section.contact.title")}</h1>

                  <Input
                    id="name"
                    label={t("section.contact.inputs.name.label")}
                    value={contactData.name}
                    placeholder={t("section.contact.inputs.name.placeholder")}
                    onChange={updateContactForms}
                  />
                  <Input
                    id="email"
                    label={t("section.contact.inputs.email.label")}
                    value={contactData.email}
                    placeholder={t("section.contact.inputs.email.placeholder")}
                    onChange={updateContactForms}
                  />
                  <Input
                    id="subject"
                    label={t("section.contact.inputs.subject.label")}
                    value={contactData.subject}
                    placeholder={t(
                      "section.contact.inputs.subject.placeholder"
                    )}
                    onChange={updateContactForms}
                  />
                  <TextArea
                    id="content"
                    label={t("section.contact.inputs.content.label")}
                    value={contactData.content}
                    placeholder={t(
                      "section.contact.inputs.content.placeholder"
                    )}
                    onChange={updateContactForms}
                  />
                  <Button
                    title={t("section.contact.inputs.send")}
                    onClick={sendContact}
                  />
                </fieldset>
              </form>
            </div>
            <img src={ContactSVG} alt="Entre em Contato" />
          </Layout>
        </Contact>
      </PageContent>

      <Footer />
    </Container>
  );
}
