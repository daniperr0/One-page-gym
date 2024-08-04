
import Container from "../shared/container";
import Title from "../ui/title";
import SectionImage from "./sections/section-image";
import SectionsList from "./sections/section-list";


const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center"
    >
      <Container>
        <Title title={"Why join with "} titlePrimary={"Us"} />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-10">
          <SectionsList/>
          <SectionImage/>
        </div>
      </Container>
    </section>
  );
};

export default About;
