import PropTypes from "prop-types";

import {
  ContainerTechSection,
  Knonwledges,
  ContainerIconWrapper,
  ContainerIcons,
  TitleIconWrapper,
} from "./styles";

import { Tooltip } from "../Tooltip";

import { IoInformationCircleOutline } from "react-icons/io5";

export function TechSection({ title, technologies }) {
  const hasHyphen = title.includes("-");
  const hasSlash = title.includes("/");

  let firstPart, secondPart;

  if (hasHyphen) {
    const partes = title.split("-");
    firstPart = partes[0];
    secondPart = partes.slice(1).join("-");
  } else if (hasSlash) {
    const partes = title.split("/");
    firstPart = partes[0];
    secondPart = partes.slice(1).join("/");
  }

  return (
    <ContainerTechSection>
      <h2>
        {firstPart && firstPart}
        {hasHyphen && <span>{"-"}</span>}
        {hasSlash && <span>{"/"}</span>}
        {secondPart && secondPart}
        {!hasHyphen && !hasSlash && title}
      </h2>

      <Knonwledges>
        <div>
          <TitleIconWrapper>
            <h3>Tenho experiência</h3>
            <Tooltip content="Já usei em experiências profissionais ou em projetos pessoais mais complexos">
              <IoInformationCircleOutline />
            </Tooltip>
          </TitleIconWrapper>

          <ContainerIconWrapper>
            {technologies &&
              technologies.map((tech, index) => {
                if (tech.status === "experience") {
                  return (
                    <TechIcons
                      key={index}
                      name={tech.name}
                      icon={tech.icon}
                      bgColor={tech.backgroundColor}
                    />
                  );
                }
              })}
          </ContainerIconWrapper>
        </div>

        <div>
          <TitleIconWrapper>
            <h3>Aprendendo</h3>
            <Tooltip content="Já usei em projetos pessoais pequenos ou em exercícios para praticar">
              <IoInformationCircleOutline />
            </Tooltip>
          </TitleIconWrapper>
          <ContainerIconWrapper>
            {technologies &&
              technologies.map((tech, index) => {
                if (tech.status === "learning") {
                  return (
                    <TechIcons
                      key={index}
                      name={tech.name}
                      icon={tech.icon}
                      bgColor={tech.backgroundColor}
                    />
                  );
                }
              })}
          </ContainerIconWrapper>
        </div>

        <div>
          <TitleIconWrapper>
            <h3>Quero aprender</h3>
            <Tooltip content="Tecnologias que tenho interesse em dominar">
              <IoInformationCircleOutline />
            </Tooltip>
          </TitleIconWrapper>
          <ContainerIconWrapper>
            {technologies &&
              technologies.map((tech, index) => {
                if (tech.status === "want") {
                  return (
                    <TechIcons
                      key={index}
                      name={tech.name}
                      icon={tech.icon}
                      bgColor={tech.backgroundColor}
                    />
                  );
                }
              })}
          </ContainerIconWrapper>
        </div>
      </Knonwledges>
    </ContainerTechSection>
  );
}

TechSection.propTypes = {
  title: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export function TechIcons({ name, icon: Icon, bgColor }) {
  return (
    <ContainerIcons $bgColor={bgColor}>
      <div>
        {Icon && <Icon size={24} />}
        <span>{name}</span>
      </div>
    </ContainerIcons>
  );
}

TechIcons.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  bgColor: PropTypes.string.isRequired,
};
