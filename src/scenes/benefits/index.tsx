import HText from '@/shared/HText';
import { BenefitCardType, SelectedPage } from '@/shared/types'
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import BenefitCard from './BenefitCard';
import ActionButton from '@/shared/ActionButton';
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const benefitsCardArray: Array<BenefitCardType> = [
    {
      id: 1,
      icon: <HomeModernIcon className="h-6 w-6" />,
      title: "State of the Art Facilities",
      description: "World-class gym equipment for your ultimate fitness goals.",
      link: {
        title: "Learn More",
        to: SelectedPage.ContactUs,
      },
    },
    {
      id: 2,
      icon: <UserGroupIcon className="h-6 w-6" />,
      title: "Expert Trainers",
      description: "Get guidance from professional trainers to achieve your fitness dreams.",
      link: {
        title: "Learn More",
        to: SelectedPage.ContactUs,
      },
    },
    {
      id: 3,
      icon: <AcademicCapIcon className="h-6 w-6" />,
      title: "Educational Programs",
      description: "Learn the science behind fitness with our exclusive programs.",
      link: {
        title: "Learn More",
        to: SelectedPage.ContactUs,
      },
    }
];

const Benefits = ({ setSelectedPage }: Props) => {
    return (
      <section id='benefits' className='mx-auto min-h-full w-5/6 py-20'>
        <motion.div
            onViewportEnter={()=>{setSelectedPage(SelectedPage.Benefits)}}
            >
            
            {/* Heading */}
            <motion.div 
                className='md:my-5 md:w-3/5'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
                <HText>MORE THAN JUST GYM.</HText>
                <p className='my-5 text-sm'>
                    We provide world class fitness equipments, trainers and classes to
                    get you to your ultimate fitness goals with ease. We provide true care
                    into each and every member.
                </p>
            </motion.div>

            {/* Benefits */}

            <motion.div className='mt-5 gap-8 md:flex items-center justify-between'
                initial= "hidden"
                whileInView="visible"
                viewport={{once:true, amount:0.5}}
                variants={{
                    hidden : {},
                    visible : {
                        transition : {staggerChildren: 0.2}
                    }
                }}
            >
                {benefitsCardArray.map((benefit)=>
                    <BenefitCard key={benefit.id} benefit={benefit}/>
                )}
            </motion.div>

            {/* graphics and description */}

            <div className=' mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>
                {/* graphic */}
                <img src={BenefitsPageGraphic} alt="benefits-page-graphic" className='mx-auto'/>

                {/* description */}
                <div>
                    {/* title */}
                    <div className='relative'>
                        <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves'>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5 }}
                                variants={{
                                    hidden: { opacity: 0, x: 50 },
                                    visible: { opacity: 1, x: 0 },
                                }}
                            >
                                <HText>
                                    MILLIONS OF HAPPY MEMBERS GETTING {" "}
                                    <span className='text-primary-500'>FIT</span>
                                    .
                                </HText>
                            </motion.div>
                        </div>

                    </div>

                    {/* description */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <p className='my-5'>
                            Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                            egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                            fames vitae vitae quis. Quis amet vulputate tincidunt at in
                            nulla nec. Consequat sed facilisis dui sit egestas ultrices
                            tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                            Felis orci diam odio.
                        </p>

                        <p className='mb-5'>
                            Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                            tellus quam porttitor. Mauris velit euismod elementum arcu neque
                            facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                            enim mattis odio in risus nunc.
                        </p>
                    </motion.div>
                    
                    {/* button */}
                    <div className='relative mt-16'>
                        <div className='before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkels'>
                            <ActionButton setSelectedPage={setSelectedPage} children="Join Now"/>
                        </div>
                    </div>


                </div>
            </div>

        </motion.div>
      </section>
    )
}

export default Benefits