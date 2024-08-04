import Image from "next/image";



const SectionImage = () => {
    return ( <section className="flex-1 relative">
        <div className="lg:absolute -top-40 left-8">
          <div className="relative w-[80vw] mb-5 lg:w-48 h-72">
            <Image
              src="/images/2.jpg"
              alt="Trainer"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>
        <div className="lg:absolute -top-10 right-40">
          <div className="relative w-[80vw] mb-5 lg:w-48 h-72">
            <Image
              src="/images/3.jpg"
              alt="Trainer"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>
        <div className="lg:absolute top-32 left-20">
          <div className="relative w-[80vw] mb-5 lg:w-64 h-48">
            <Image
              src="/images/4.jpg"
              alt="Trainer"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>
        <div className="lg:absolute -top-64 right-52">
          <div className="relative w-[80vw] mb-5 lg:w-48 h-72">
            <Image
              src="/images/5.jpg"
              alt="Trainer"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </section> );
}
 
export default SectionImage;