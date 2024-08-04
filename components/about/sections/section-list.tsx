import ButtonPrimary from "@/components/ui/button-primary";

const SectionsList = () => {
    return ( <section className="flex flex-col flex-1 items-center gap-8">
        <ul className="space-y-4 text-xl">
          <li className="relative before:absolute before:w-2 before:h-2 before:bg-primary before:top-1/2 before:-translate-y-1/2 before:-left-4 before:rounded-full">
            Best Gym
          </li>
          <li className="relative before:absolute before:w-2 before:h-2 before:bg-primary before:top-1/2 before:-translate-y-1/2 before:-left-4 before:rounded-full">
            Expert Coach
          </li>
          <li className="relative before:absolute before:w-2 before:h-2 before:bg-primary before:top-1/2 before:-translate-y-1/2 before:-left-4 before:rounded-full">
            Flexible Workout Time
          </li>
          <li className="relative before:absolute before:w-2 before:h-2 before:bg-primary before:top-1/2 before:-translate-y-1/2 before:-left-4 before:rounded-full">
            Good Workout Facilities
          </li>
          <li className="relative before:absolute before:w-2 before:h-2 before:bg-primary before:top-1/2 before:-translate-y-1/2 before:-left-4 before:rounded-full">
            Consultation With Experts
          </li>
        </ul>
        <ButtonPrimary type={"button"} text={"See More Benifits"} />
      </section> );
}
 
export default SectionsList;