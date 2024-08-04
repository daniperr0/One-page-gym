import { FC } from "react";
import ButtonPrimary from "./button-primary";
import { cn } from "@/libs/utils";

interface PlanProps {
  name: string;
  duration: number;
  price: number;
  pricePerMonth: number;
  active?: boolean;
}

const Plan: FC<PlanProps> = ({
  name,
  duration,
  price,
  pricePerMonth,
  active,
}) => {
  return (
    <div
      className={cn(
        "w-full bg-gray-light/40 p-8 rounded-lg flex flex-col items-center gap-y-10",
        active && "relative border-2 border-primary"
      )}
    >
        {active && (
      <div className="absolute bg-primary text-white py-2 px-4 -top-4 left-1/2 -translate-x-1/2">
        <h5>Recomended</h5>
      </div>
        )}
      <h2 className="text-3xl text-white font-medium">{name}</h2>
      <h3>{duration} Month Plan</h3>
      <h1 className="text-5xl font-semibold text-white">${price}</h1>
      <h3>{pricePerMonth}/Month</h3>
      <ButtonPrimary
        type={"button"}
        text={"Select Plan"}
        className="border-2 border-primary bg-transparent hover:bg-transparent w-full"
      />
    </div>
  );
};

export default Plan;
