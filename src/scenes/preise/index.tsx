import HText from "@/shared/HText";
import { KeypointType, SelectedPage } from "@/shared/types"
import { 
    BanknotesIcon,
    CurrencyDollarIcon,
    WalletIcon,
} from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import Keypoint from "./Keypoint";

const keypoints: Array<KeypointType> = [
    {
        icon: <CurrencyDollarIcon className="h-6 w-6" />,
        title: "Fahrlektion à 45min",
        description: "Eine 45-minütige Fahrlektion kostet bei mir\nCHF 85.-"
    },
    {
        icon: <BanknotesIcon className="h-6 w-6" />,
        title: "Fahrstunde à 60min",
        description: "Eine 60-minütige Fahrstunde kostet bei mir\nCHF 110.-"
    },
    {
        icon: <WalletIcon className="h-6 w-6" />,
        title: "Administrationspauschale",
        description: "Zu Beginn wird eine Administrationspauschale von CHF 90.- erhoben."
    },
];

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const PREISE = ({setSelectedPage}: Props) => {
    return (
        <section
            id="preise"
            className="mx-auto min-h-full w-5/6 py-20"
        >
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Preise)}
            >
                {/* HEADER */}
                <motion.div 
                    className="md:my-5 md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5}}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50},
                        visible: { opacity: 2, x: 0 }
                    }}
                >
                    <HText>MEINE FAHRSTUNDENPREISE</HText>
                </motion.div>
                
                {/* KEYPOINTS */}
                <motion.div 
                    className="md:flex items-center justify-between gap-8 mt-5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                >
                    {keypoints.map((keypoint: KeypointType) => (
                        <Keypoint 
                            key={keypoint.title}
                            icon={keypoint.icon}
                            title={keypoint.title}
                            description={keypoint.description}
                            setSelectedPage={setSelectedPage}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}

export default PREISE