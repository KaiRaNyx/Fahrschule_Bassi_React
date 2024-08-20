import { MeineAutosType, SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion';
import HText from '@/shared/HText';
import image1 from "@/assets/bassi_images/automat.jpg"
import image2 from "@/assets/bassi_images/automat-inneneinrichtung.jpg"
import image3 from "@/assets/bassi_images/manuell.jpg"
import image4 from "@/assets/bassi_images/manuell-inneneinrichtung.jpg"
import Auto from "./Auto"

const meineAutos: Array<MeineAutosType> = [
    {
        name: "VW T-Roc Cabrio",
        ps: "190 PS",
        description: "Automatische Schaltung",
        image: image1,
    },
    {
        name: "VW T-Roc Cabrio Inneneinrichtung",
        description: "Automatische Schaltung",
        image: image2,
    },
    {
        name: "Seat Leon FR 1.4TSI",
        ps: "150 PS",
        description: "Manuelle Schaltung",
        image: image3,
    },
    {
        name: "Seat Leon FR 1.4TSI Inneneinrichtung",
        description: "Manuelle Schaltung",
        image: image4,
    }
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const MeineAutos = ({ setSelectedPage }: Props) => {
    return (
        <section 
            id='meineautos' 
            className='w-full py-40 bg-primary-100'
        >
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.MeineAutos)}
            >
                <motion.div
                    className='mx-auto w-5/6'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 2, x: 0 }
                    }}
                >
                    <div className='md:w-3/5'>
                        <HText>MEINE AUTOS</HText>

                    </div>
                </motion.div>
                <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
                    <ul className='w-[1867px] whitespace-nowrap'>
                        {meineAutos.map((item: MeineAutosType, index) => (
                            <Auto 
                                key={`${item.name}-${index}`}
                                name={item.name}
                                ps={item.ps}
                                description={item.description}
                                image={item.image}
                            />
                        ))}
                    </ul>
                </div>
            </motion.div>
        </section>
    )
}

export default MeineAutos