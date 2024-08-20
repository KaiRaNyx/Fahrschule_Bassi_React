import useMediaQuery from '@/hooks/useMediaQuery';
import { SelectedPage } from '@/shared/types';
import ActionButton from '@/shared/ActionButton';
import HomePageText from '@/assets/bassi_images/HomePageText.png'
/* import HomePageGraphic from '@/assets/bassi_images/FabioBassi2-no-bg.png'
 */import HomePageGraphic from '@/assets/bassi_images/Empty.png'
import Erfolgsquote16 from '@/assets/bassi_images/small-erfolgsquote/Erfolgsquote-Bassi-2016.jpg'
import Erfolgsquote18 from '@/assets/bassi_images/small-erfolgsquote/Erfolgsquote-Bassi-2018.jpg'
import Erfolgsquote21 from '@/assets/bassi_images/small-erfolgsquote/Erfolgsquote-Bassi-2021.jpg'
import Erfolgsquote23 from '@/assets/bassi_images/small-erfolgsquote/Erfolgsquote-Bassi-2023.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

    return <section
        id="home"
        className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
    >
        {/* IMAGE AND MAIN HEADER */}
        <motion.div
            className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'
            onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
            {/* MAIN HEADER */}
            <div className='z-10 mt-32 md:basis-3/5'>
                {/* HEADINGS */}
                <motion.div
                    className='md:-mt-20'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 2, x: 0 }
                    }}
                >
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                            <img alt="home-page-text" src={HomePageText} />
                        </div>
                    </div>
                    <p className='mt-8 text-sm'>
                        Auf dieser Homepage erfährst du alles über die Fahrschule, den Weg zur Prüfung, über mein Auto sowie über mich.
                        Ich biete dir eine professionelle Ausbildung auf dem Weg zu deiner Fahrprüfung und lege dabei Wert auf eine intensive und effiziente Ausbildung. Meine geduldige und verständnisvolle Art soll dich dabei unterstützen
                    </p>
                </motion.div>

                {/* ACTIONS */}
                <motion.div
                    className='mt-8 flex items-center gap-8'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 2, x: 0 }
                    }}
                >
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Kontakt aufnehmen
                    </ActionButton>
                    <AnchorLink
                        className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
                        onClick={() => setSelectedPage(SelectedPage.Kontakt)}
                        href={`#${SelectedPage.Kontakt}`}
                    >
                        <p>Mehr erfahren</p>
                    </AnchorLink>
                </motion.div>
            </div>
            {/* IMAGE */}
            <div className='flex basis-3/5 justify-center md:z-10
                    md:ml-40 md:mt-16 md:justify-items-end'>
                <img alt='home-pageGraphic' src={HomePageGraphic} />
            </div>
        </motion.div>

        {/* ERFOLGSQUOTEN */}
        {isAboveMediumScreens && (
            <div className='h-[220px] w-full bg-primary-100'>
                <div className='mx-auto w-5/6'>
                    <h3 className='py-1 font-bold'>Erfolgsquoten deutlich über dem Durchschnitt!</h3>
                    <div className='flex w-3/5 items-center justify-between gap-8'>
                        <a download="Erfolgsquote-Bassi-2016.jpg" href="src/assets/bassi_images/Erfolgsquote-Bassi-2016.jpg" title="Erfolgsquote2016">
                            <p className='text-center'>86% im Jahr 2016</p>
                            <img alt='erfolgsquote16' src={Erfolgsquote16} />
                        </a>
                        <a download="Erfolgsquote-Bassi-2018.jpg" href="src/assets/bassi_images/Erfolgsquote-Bassi-2018.jpg" title="Erfolgsquote2018">
                            <p className='text-center'>88% im Jahr 2018</p>
                            <img alt='erfolgsquote18' src={Erfolgsquote18} />
                        </a>
                        <a download="Erfolgsquote-Bassi-2021.jpg" href="src/assets/bassi_images/Erfolgsquote-Bassi-2021.jpg" title="Erfolgsquote2021">
                            <p className='text-center'>80% im Jahr 2021</p> 
                            <img alt='erfolgsquote21' src={Erfolgsquote21} />
                        </a>
                        <a download="Erfolgsquote-Bassi-2023.jpg" href="src/assets/bassi_images/Erfolgsquote-Bassi-2023.jpg" title="Erfolgsquote2023">
                            <p className='text-center'>82% im Jahr 2023</p>
                            <img alt='erfolgsquote23' src={Erfolgsquote23} />
                        </a>
                    </div>
                </div>
            </div>
        )}
    </section>
}

export default Home;