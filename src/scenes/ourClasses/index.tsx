import { ClassType, SelectedPage } from "@/shared/types"
import { motion } from "framer-motion"
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import HText from "@/shared/HText"
import Class from "./Class"

type Props = {
    setSelectedPage : (valuse: SelectedPage) => void;
}

const classes: Array<ClassType> = [
    {
        id: 1,
        name: "Weight Training Classes",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: image1,
    },
    {
        id: 2,
        name: "Yoga Classes",
        image: image2,
    },
    {
        id: 3,
        name: "Ab Core Classes",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: image3,
    },
    {
        id: 4,
        name: "Adventure Classes",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: image4,
    },
    {
        id: 5,
        name: "Fitness Classes",
        image: image5,
    },
    {
        id: 6,
        name: "Training Classes",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: image6,
    },
  ];
  

const OurClasses = ({setSelectedPage}: Props) => {
    return (
        <section id="ourclasses" className="w-full bg-primary-100 py-40">

            <motion.div
                className="mx-auto w-5/6"
                onViewportEnter={()=>setSelectedPage(SelectedPage.OurClasses)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }} 
            >
                <div className="md:w-3/5">
                    <HText>
                        OUR CLASSES
                    </HText>

                    <p className="py-5">
                        Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                        tellus quam porttitor. Mauris velit euismod elementum arcu neque
                        facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                        enim mattis odio in risus nunc.
                    </p>
                </div>
                

            </motion.div>
            
            <motion.div>
                <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                    <ul className="w-[2800px] whitespace-nowrap">
                        {classes.map((item: ClassType)=> <Class key={item.id} item={item}/>)}
                    </ul>
                </div>
            </motion.div>

        </section>
    )
}

export default OurClasses;