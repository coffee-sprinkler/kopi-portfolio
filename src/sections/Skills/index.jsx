import { Container, Image } from "react-bootstrap";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import js from "../../assets/js.svg";
import react from "../../assets/react.svg";
import bootstrap from "../../assets/bootstrap.svg";
import nodejs from "../../assets/nodejs.svg";
import wordpress from "../../assets/wordpress.svg";
import hubspot from "../../assets/hubspot.svg";
import { Section, SectionName, Skillset, Skill, SkillName } from "../../components/styled-components/Page.styled";

const Skills = () => {
  return (
    <Section id="skills">
      <Container className="py-5 py-md-0">
        <SectionName className="text-center-sm">Skills</SectionName>
        <Skillset>
          <Skill>
            <Image className="mx-auto" width={48} height={48} loading="lazy" src={html} alt="html" />
            <SkillName>HTML</SkillName>
          </Skill>
          <Skill>
            <Image className="mx-auto" width={48} height={48} loading="lazy" src={css} alt="css" />
            <SkillName>CSS</SkillName>
          </Skill>
          <Skill>
            <Image className="mx-auto" width={48} height={48} loading="lazy" src={js} alt="js" />
            <SkillName>Javascript</SkillName>
          </Skill>
          <Skill>
            <Image className="mx-auto" width={48} height={48} loading="lazy" src={react} alt="react" />
            <SkillName>React</SkillName>
          </Skill>
          <Skill>
            <Image className="mx-auto" width={48} height={48} loading="lazy" src={bootstrap} alt="bootstrap" />
            <SkillName>Bootstrap</SkillName>
          </Skill>
          <Skill>
            <Image className="mx-auto" width={48} height={48} loading="lazy" src={nodejs} alt="nodejs" />
            <SkillName>NodeJS</SkillName>
          </Skill>
          <Skill>
            <Image className="mx-auto" width={48} height={48} loading="lazy" src={wordpress} alt="wordpress" />
            <SkillName>Wordpress Development</SkillName>
          </Skill>
          <Skill>
            <Image className="mx-auto" width={48} height={48} loading="lazy" src={hubspot} alt="hubspot" />
            <SkillName>Hubspot Design Tools</SkillName>
          </Skill>
        </Skillset>
      </Container>
    </Section>
  );
};

export default Skills;
