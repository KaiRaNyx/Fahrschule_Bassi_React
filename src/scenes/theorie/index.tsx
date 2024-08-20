import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion';
import HText from '@/shared/HText';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Theorie = ({ setSelectedPage }: Props) => {
    return (
        <section 
            id='theorie' 
            className='w-full py-20 bg-primary-100'
        >
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Theorie)}
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
                    <div>
                        <HText>THEORETISCHER UNTERRICHT</HText>
                        <p className='py-5'>Um dich auf die theoretische Prüfung vorzubereiten, gibt es im Handel verschiedene Produkte wie Computerprogramme, APPs oder Theoriebücher.</p>
                        <p className='py-5'>In der Regel wirst du auf diese Weise sehr gut zurecht kommen und die Theorieprüfung bestehen.</p>

                        <HText>BASIS THEORIEPRÜFUNG</HText>
                        <div className="py-5" style={{ display: 'flex' }}>
                            <div>
                                <List1 />
                            </div>
                            <div>
                                <List2 />
                            </div>
                        </div>
                        <p>
                            An der Theorieprüfung werden 50 Fragen gestellt.
                            Wer 90 Prozent der Fragen richtig beantwortet, hat die Prüfung bestanden und ist damit dem Lehrfahrausweis einen entscheidenden Schritt näher gekommen.
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}

const List1 = function () {
    return (
        <ul className="max-w-md space-y-1 list-disc list-inside md:m-4">
            <li>
                Grundregeln
            </li>
            <li>
                Benutzen der Strasse
            </li>
            <li>
                Geschwindigkeit
            </li>
            <li>
                Abstand
            </li>
            <li>
                Kreuzen
            </li>
            <li>
                Überholen
            </li>
            <li>
                Einspuren
            </li>
            <li>
                Abbiegen
            </li>
            <li>
                Lichtsignalanlage
            </li>
            <li>
                Verkehrsregelungen
            </li>
            <li>
                Wegfahren
            </li>
            <li>
                Rückwärtsfahren
            </li>
            <li>
                Wenden
            </li>
            <li>
                Zeichengebung
            </li>
        </ul>
    );
};

const List2 = function () {
    return (
        <ul className="max-w-md space-y-1 list-disc list-inside md:m-4">
            <li>
                Verhalten im Verkehr
            </li>
            <li>
                Besonderen Strassen
            </li>
            <li>
                Autobahn
            </li>
            <li>
                Autostrasse
            </li>
            <li>
                Halten und Parkieren
            </li>
            <li>
                Strassensignalisation
            </li>
            <li>
                Beleuchtung
            </li>
            <li>
                Masse und Gewichte
            </li>
            <li>
                Zulassung von Personen
            </li>
            <li>
                Fahrzeugzulassungen
            </li>
            <li>
                Unfälle
            </li>
            <li>
                Fussgänger
            </li>
            <li>
                Bahnübergänge
            </li>
        </ul>
    );
};

export default Theorie