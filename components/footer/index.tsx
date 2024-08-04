import Container from "@/components/shared/container";
import Logo from "../shared/log";
import Section from "./components/section";
import Tabs from "../ui/Tabs";

const Footer = () => {
    return ( 
    <footer className="bg-gray-light/20 ">
        <Container className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 mb-5 px-5 py-10 lg:px-8 lg:py-20">
            <Logo/>
            <Section title={"Company"} list={['About','Carrers', 'Blogs']}/>
            <Section title={"Contact"} list={['Help VAQ','Press']}/>
            <Section title={"More"} list={['Program','Plan', 'Method']}/>
            <div>
            <h5 className="text-2xl font-semibold text-white mb-5">Popular Tags</h5>
                
            <div className="flex items-center gap-2 flex-wrap">
            <Tabs text={"Abs"}/>
            <Tabs text={"Workout"}/>
            <Tabs text={"Nutrition"}/>
            <Tabs text={"Boxing"}/>
            <Tabs text={"Gym"}/>
            <Tabs text={"Facilites"}/>
            <Tabs text={"Plans"}/>
            <Tabs text={"Trainers"}/>
            </div>
            </div>
        </Container>
        <div className="bg-primary p-5 text-white text-center">
            <h5>&Copy; 2024 All Rights Reserved</h5>
        </div>
    </footer> 
    );
}
 
export default Footer;