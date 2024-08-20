import HText from "@/shared/HText";
import { KeypointType, SelectedPage } from "@/shared/types"
import { 
    GlobeAmericasIcon, 
    ExclamationTriangleIcon,
    WrenchScrewdriverIcon,
    TruckIcon,
} from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import Keypoint from "./Keypoint";

const keypoints: Array<KeypointType> = [
    {
        icon: <TruckIcon className="h-6 w-6" />,
        title: "1. Doppellektion",
        description: "Verkehrssehen (Wahrnehmung beim Führen eines Fahrzeugs, Blicktechnik)"
    },
    {
        icon: <ExclamationTriangleIcon className="h-6 w-6" />,
        title: "2. Doppellektion",
        description: "Verkehrsumwelt (Gefahren in der Verkehrsumwelt: andere Verkehrsteilnehmer, Strassen, Tageszeiten, Wetter)"
    },
    {
        icon: <WrenchScrewdriverIcon className="h-6 w-6" />,
        title: "3. Doppellektion",
        description: "Verkehrsdynamik (Dynamik beim Fahren, Bedeutung des Zustands des Fahrzeugs)"
    },
    {
        icon: <GlobeAmericasIcon className="h-6 w-6" />,
        title: "4. Doppellektion",
        description: "Verkehrstaktik (Fahrfähigkeit, umweltbewusstes Fahren, taktische Regeln für sicheres Fahren)"
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

const VKU = ({setSelectedPage}: Props) => {
    return (
        <section
            id="vku"
            className="mx-auto min-h-full w-5/6 py-20"
        >
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.VKU)}
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
                    <HText>VERKEHRSKUNDE UNTERRICHT</HText>
                    <p className="my-5 text-sm">
                        Im VKU geht es um Verhaltensregeln, welche dir helfen sicher ans Ziel zu gelangen. 
                        In erster Linie geht es darum, dir zu zeigen, wie man Gefahren schon im Vorfeld erkennen und abwenden kann. 
                        Im VKU geht es also um die Sicherheits- und Gefahrenlehre. 
                        Weitere wichtige Themen sind auch die Fahrphysik, Regeln für sicheres Fahren und umweltbewusstes Fahren.
                    </p>
                    <p className="my-5 text-sm">
                        Der VKU beinhaltet 4 Doppellektionen. Nach Abschluss ist er 2 Jahre gültig.
                    </p>
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

export default VKU