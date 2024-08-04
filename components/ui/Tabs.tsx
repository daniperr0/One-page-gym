import { FC } from "react";

interface TabsProps{
    text:string;
}



const Tabs:FC<TabsProps> = ({text}) => {
    return ( 
        <span className="py-1 px-2 rounded bg-gray-light hover:bg-primary transition-colors duration-300">{text}</span>
     );
}
 
export default Tabs;