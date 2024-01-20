import { useState } from "react";

import {
  Container,
  PageContent,
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

    // if (
    //   !contactData.name ||
    //   !contactData.email ||
    //   !contactData.subject ||
    //   !contactData.content
    // ) {
    //   return alert("Todos os campos precisam estar preenchidos");
    // }

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
              <div className="textContent">
                <div className="titleWrapper">
                  <h2>Olá, eu sou o</h2>
                  <h1>
                    Silvio <span>Cesar</span>
                  </h1>
                </div>
                <p>
                  Sou um desenvolvedor FullStack Jr. trabalho na área de
                  tecnologia há 4 anos, 2 como desenvolvedor.
                </p>
              </div>
              <SocialLinks />
            </div>
          </Layout>
        </Intro>
        <AboutMe id="about">
          <Layout>
            <img src={ProfileSVG} alt="About Me" />
            <div className="textWrapper">
              <h1>
                <span>Sobre</span> Mim
              </h1>
              <p>
                Desenvolvo desde 2016 quando tinha 15 anos, mas quando entrei
                para o mercado de trabalho na área de suporte help desk acabei
                decidindo por conta própria que programação não era pra mim, mas
                naturalmente me reencontrei nesse caminho na necessidade de
                automatizar minhas tarefas e de criar aplicações que ajudariam
                meu time.
                <br />
                <br />
                Profissionalmente desenvolvo desde 2021, iniciei com automações
                de tarefas que iam de integrar ferramentas Google como por
                exemplo Gmail + Google Sheets e usando um Arduino para
                automatizar parefas manuais até liderar o desenvolver de
                aplicações completas.
              </p>
            </div>
          </Layout>
        </AboutMe>
        <Techs id="techs">
          <Layout>
            <div className="textWrapper">
              <h1>Tecnologias</h1>
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
                  title="Outras Tecnologias/Ferramentas"
                  technologies={techData.others}
                />
              </div>
            </div>
            <img src={DevelopingSVG} alt="Developing SVG" />
          </Layout>
        </Techs>
        <Projects id="projects">
          <Layout>
            <div className="textWrapper">
              <h1>Projetos</h1>
              <ProjectsCardsWrapper>
                {projectsData.map((project, index) => (
                  <ProjectsCards
                    key={index}
                    image={project.image}
                    title={project.name}
                    description={project.description}
                    status={project.status}
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
            <div className="textWrapper">
              <form id="contact-us">
                <fieldset>
                  <h1>Entre em contato</h1>

                  <Input
                    id="name"
                    label="Nome"
                    value={contactData.name}
                    placeholder="Insira seu nome"
                    onChange={updateContactForms}
                  />
                  <Input
                    id="email"
                    label="Email"
                    value={contactData.email}
                    placeholder="Insira seu Email"
                    onChange={updateContactForms}
                  />
                  <Input
                    id="subject"
                    label="Assunto"
                    value={contactData.subject}
                    placeholder="Insira o assunto do email"
                    onChange={updateContactForms}
                  />
                  <TextArea
                    id="content"
                    label="Mensagem"
                    value={contactData.content}
                    placeholder="Insira o conteúdo do email"
                    onChange={updateContactForms}
                  />
                  <Button title="Enviar E-Mail" onClick={sendContact} />
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
