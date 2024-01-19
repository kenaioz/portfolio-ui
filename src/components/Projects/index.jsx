import {
  Container,
  ContainerCard,
  ContainerChipWrapper,
  ContainerChip,
} from "./styles";

import { IoLogoGithub } from "react-icons/io";

import Placeholder from "../../assets/placeholder.jpg";

export function ProjectsCardsWrapper({ children }) {
  return <Container>{children}</Container>;
}

export function ProjectsCards({
  image,
  title,
  description,
  status,
  frontend,
  backend,
}) {
  return (
    <ContainerCard>
      <img src={image ? image : Placeholder} alt="Imagem do Projeto" />

      <div>
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>

        <div className="status">
          <h3>Status</h3>
          <span>{status}</span>
        </div>

        <div className="stacks">
          {frontend && (
            <div className="stack">
              <div className="title">
                <h3>
                  Front<span>-</span>End
                </h3>

                {frontend.gitLink && (
                  <a href={frontend.gitLink} rel="noreferrer" target="_blank">
                    <IoLogoGithub size={16} />
                  </a>
                )}
              </div>

              <ChipWrapper>
                {frontend.techs.map((tech, index) => (
                  <TechsChip key={index} title={tech} />
                ))}
              </ChipWrapper>
            </div>
          )}

          {backend && (
            <div className="stack">
              <div className="title">
                <h3>
                  Back<span>-</span>End
                </h3>
                {backend.gitLink && (
                  <a href={backend.gitLink} rel="noreferrer" target="_blank">
                    <IoLogoGithub size={16} />
                  </a>
                )}
              </div>

              <ChipWrapper>
                {backend.techs.map((tech, index) => (
                  <TechsChip key={index} title={tech} />
                ))}
              </ChipWrapper>
            </div>
          )}
        </div>
      </div>
    </ContainerCard>
  );
}

export function TechsChip({ title }) {
  return <ContainerChip>{title}</ContainerChip>;
}

export function ChipWrapper({ children }) {
  return <ContainerChipWrapper>{children}</ContainerChipWrapper>;
}
