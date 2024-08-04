import Container from "./shared/container";
import Plan from "@/components/ui/plan";
import Title from "@/components/ui/title";

const Plans = () => {
  return (
    <section
      id="plains"
      className="min-h-screen flex items-center justify-center"
    >
      <Container>
        <Title title={"Subscribe to"} titlePrimary={"Plains"} />
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <Plan name={"Standar"} duration={6} price={4800} pricePerMonth={800}/>
          <Plan name={"Fitness"} duration={12} price={7200} pricePerMonth={600} active/>
          <Plan name={"Enterpise"} duration={24} price={12000} pricePerMonth={500}/>
        </div>
      </Container>
    </section>
  );
};

export default Plans;
