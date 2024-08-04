import Container from "./shared/container";
import Service from "./ui/service";
import Title from "./ui/title";

const Services = () => {
  return (
    <section
      id="services"
      className="min-h-screen flex items-center justify-center mb-10 lg:mb-0"
    >
      <Container>
        <Title title="Fitness Plans &" titlePrimary={"Nutritions"} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
          <Service
            image="/icons/icon-1.png"
            title={"Weight loss"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, doloribus?"
            }
          />
          <Service
            image="/icons/yoga.png"
            title={"Clasic Yoga"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, doloribus?"
            }
          />
          <Service
            image="/icons/ciclismo.png"
            title={"Ciclism Machines"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, doloribus?"
            }
          />
          <Service
            image="/icons/biceps.png"
            title={"Body Building"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, doloribus?"
            }
          />
          <Service
            image="/icons/maquina-de-gimnasio.png"
            title={"Musculation"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, doloribus?"
            }
          />
          <Service
            image="/icons/correr.png"
            title={"Fitness Running"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, doloribus?"
            }
          />
        </div>
      </Container>
    </section>
  );
};

export default Services;
