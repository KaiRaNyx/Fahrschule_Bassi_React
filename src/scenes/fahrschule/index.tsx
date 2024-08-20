import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Fahrschule = ({setSelectedPage}: Props) => {
    return (
        <section
            id="fahrschule"
            className="mx-auto w-5/6 py-20"
        >
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Fahrschule)}
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
                    <HText>PRAKTISCHER FAHRUNTERRICHT</HText>
                    <p className="my-5 text-sm">
                        Mein Ziel ist es, dir eine sichere, dynamische, selbstbewusste und umweltbewusste Fahrweise zu vermitteln. 
                        Ich richte meinen Unterricht individuell auf deine Bedürfnisse aus, um so effizient wie möglich deine Fahrausbildung mit der praktischen Fahrprüfung abzuschliessen.
                    </p>
                    <p className="my-5 text-sm">
                        Durch mein Studium und anschliessende Lehrtätigkeit als Turn- und Sportlehrer konnte ich mir in den Bereichen Methodik/Didaktik, Psychologie und Pädagogik ein breites Wissen aneignen. 
                        Dies erleichtert mir im praktischen Fahrunterricht die individuellen Bedürfnisse, das Lerntempo und die Lernmethode des Fahrschülers rasch zu erkennen und meinen Unterricht zielorientiert darauf auszurichten.
                    </p>
                    <p className="my-5 text-sm">
                        Um dir das Lernen zu erleichtern, habe ich verschiedene Arbeitsblätter vorbereitet, welche ich bei Bedarf in den Lektionen benutzen werde.
                    </p>
                    <p className="my-5 text-sm">
                        Wie alle Ausbildungen ist auch Deine Fahrausbildung thematisch gegliedert: Vorschulung, Grundschulung, Manöverschulung, Hauptschulung und Perfektionsschulung.
                    </p>
                </motion.div>                
            </motion.div>
        </section>
    )
}

export default Fahrschule