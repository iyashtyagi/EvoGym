import { BenefitCardType } from '@/shared/types'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';


const BenefitCard = ({ benefit }: {benefit : BenefitCardType}) => {
    console.log(benefit);
    return (
        <motion.div
            variants={{
                hidden : {opacity: 0, scale: 0.9},
                visible : { opacity: 1, scale: 1}
            }} 
            className='mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center'
        >
            <div className='mb-4 flex justify-center'>
                <div className='bg-primary-100 rounded-full border-2 border-gray-100 p-4'>
                    {benefit.icon}
                </div>
            </div>
            <h4 className='font-bold'>{benefit.title}</h4>
            <p className='my-3'>{benefit.description}</p>
            <AnchorLink className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
             children={benefit.link.title} 
             href={`#${benefit.link.to}`}/>
        </motion.div>
    )
}

export default BenefitCard;