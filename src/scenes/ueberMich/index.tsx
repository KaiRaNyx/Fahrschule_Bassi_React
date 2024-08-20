import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const UeberMich = ({ setSelectedPage }: Props) => {
    return (
        <section
            id="übermich"
            className="w-full py-20 bg-primary-100"
        >
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.UeberMich)}
                className=""
            >
                {/* HEADER */}
                <motion.div
                    className="mx-auto w-5/6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <HText>ÜBER MICH</HText>
                    <p className="my-5">
                        Nach meinem Studium zum Turn- und Sportlehrer an der ETH Zürich, habe ich mich zum Fahrlehrer ausbilden lassen. 
                        Seither arbeite ich an der Bezirksschule in Suhr als Sportlehrer und bin selbständig als Fahrlehrer tätig. 
                        Beide Bereiche führe ich mit gleicher Freude und Überzeugung aus und bereichern gleichermassen meinen beruflichen Alltag.
                    </p>
                    <p className="font-bold">Name:</p>
                    <p>Bassi Fabio</p>
                    <ul className="mt-5">
                        <p className="font-bold">Ausbildung:</p>
                        <li>Alte Kanti Aarau</li>
                        <li>Turn- und Sportlehrerstudium ETH Zürich</li>
                        <li>Fahrlehrerberufsschule</li>
                    </ul>
                    <ul className="mt-5">
                        <p className="font-bold">Sprachen:</p>
                        <li>Deutsch</li>
                        <li>Italienisch</li>
                        <li>Französisch</li>
                        <li>Englisch</li>
                    </ul>
                    <ul className="mt-5">
                        <p className="font-bold">Hobbies:</p>
                        <li>Malen</li>
                        <li>Basteln</li>
                        <li>Kreativität</li>
                        <li>Sport</li>
                    </ul>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default UeberMich;
