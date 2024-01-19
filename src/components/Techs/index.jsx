import {
  ContainerTechSection,
  Knonwledges,
  ContainerIconWrapper,
  ContainerIcons,
} from "./styles";

export function TechSection({ title, technologies }) {
  if (title.includes("-")) {
    const partes = title.split("-");
    var firstPart = partes[0];
    var secondPart = partes.slice(1).join("-");
  }
  return (
    <ContainerTechSection>
      {title.includes("-") ? (
        <h2>
          {firstPart}
          <span>{"-"}</span>
          {secondPart}
        </h2>
      ) : (
        <h2>{title}</h2>
      )}

      <Knonwledges>
        <div>
          <h3>Tenho experiencia</h3>
          <ContainerIconWrapper>
            {technologies.map((tech, index) => {
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
          <h3>Aprendendo</h3>
          <ContainerIconWrapper>
            {technologies.map((tech, index) => {
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
          <h3>Quero aprender</h3>
          <ContainerIconWrapper>
            {technologies.map((tech, index) => {
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
