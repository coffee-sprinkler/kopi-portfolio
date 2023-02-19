import { Container } from "react-bootstrap";
import { Section, SectionName, Exp, Work, WorkTitle, WorkToggle, Impact } from "../../components/styled-components/Page.styled";
import { useState, useRef, useEffect } from "react";

const Experience = () => {
  const [iformatExpand, setIformatExpand] = useState(false);
  const iformatRef = useRef(null);
  const iformatImpactRef = useRef(null);

  const [techzExpand, setTechzExpand] = useState(false);
  const techzRef = useRef(null);
  const techzImpactRef = useRef(null);

  function toggleWork(togglerRef, impactRef, expandState, setExpandState) {
    const toggler = togglerRef.current;
    const impact = impactRef.current;

    let expand = toggler.getAttribute("aria-expanded") === "false" ? "true" : "false";
    let visible = impact.getAttribute("data-visible") === "false" ? "true" : "false";

    toggler.setAttribute("aria-expanded", expand);
    impact.setAttribute("data-visible", visible);
    setExpandState(!expandState);
  }

  return (
    <Section id="experience">
      <Container className="py-5 py-md-0">
        <SectionName>Over 2 years of experience.</SectionName>
        <Exp className="py-md-5 p-0">
          <Work before={"01"}>
            <WorkToggle
              onClick={() => {
                toggleWork(iformatRef, iformatImpactRef, iformatExpand, setIformatExpand);
              }}
              aria-controls="iformat"
              aria-expanded={iformatExpand}
              ref={iformatRef}
            >
              <WorkTitle>Wordpress Developer I</WorkTitle>
              <span>
                iFormatLogic IT Solutions, <time dateTime="2021/2022">2021 - 2022</time>
              </span>
            </WorkToggle>
            <Impact ref={iformatImpactRef} data-visible="false" id="iformat">
              <li>Developed custom plugins using Horse Race API and JavaScript.</li>
              <li>Designed pages using Figma for mockup purposes.</li>
              <li>Troubleshot and fixed errors on the website.</li>
              <li>Collaborated with clients to meet their evolving needs and make improvements to the site.</li>
            </Impact>
          </Work>
          <Work before={"02"}>
            <WorkToggle
              onClick={() => {
                toggleWork(techzRef, techzImpactRef, techzExpand, setTechzExpand);
              }}
              aria-controls="techz"
              aria-expanded={techzExpand}
              ref={techzRef}
            >
              <WorkTitle>Junior Wordpress Developer</WorkTitle>
              <span>
                Techz Digital, <time dateTime="2022/present">2021 - Present</time>
              </span>
            </WorkToggle>
            <Impact ref={techzImpactRef} data-visible="false" id="techz">
              <li>Experienced in Wordpress Page Creation using ACF and Page Templating.</li>
              <li>Proficient in using Hubspot Design Tools for email creation.</li>
              <li>Introduced the use of the Sage Framework in Wordpress projects.</li>
              <li>Utilized project management tools such as ClickUp and communication tool Slack.</li>
            </Impact>
          </Work>
        </Exp>
      </Container>
    </Section>
  );
};

export default Experience;
