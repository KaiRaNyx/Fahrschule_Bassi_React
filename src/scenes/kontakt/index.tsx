import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactPageGraphic from "@/assets/bassi_images/FabioBassi.jpg";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Kontakt = ({ setSelectedPage }: Props) => {
    const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white text-white`;

    const {
        register,
        trigger,
        formState: { errors }
    } = useForm();

    const onSubmit = async (e: any) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    };

    return (
        <section
            id="kontakt"
            className="mx-auto w-5/6 pt-24 pb-32"
        >
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Kontakt)}
            >
                {/* HEADER */}
                <motion.div
                    className="md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <HText>KONTAKT AUFNEHMEN</HText>
                    <p className="my-5">
                        Hast Du weitere Fragen?
                        Dann zögere nicht, mich zu kontaktieren!
                    </p>
                    <p>Bassi Fabio</p>
                    <p>5034 Suhr</p>
                    <p>Tel. 076 346 33 03</p>
                    <p>bassi.fa@gmail.com</p>
                </motion.div>

                {/* FORM AND IMAGE */}
                <div className="mt-10 justify-between gap-8 md:flex">
                    <motion.div
                        className="mt-10 basis-3/5 md:mt-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 }
                        }}
                    >
                        <form
                            target="_blank"
                            onSubmit={onSubmit}
                            action="https://formsubmit.co/70d83206fea62c67d9f1b5a489bb671d"
                            method="POST"
                        >
                            <input
                                className={inputStyles}
                                type="text"
                                placeholder="VOR- UND NACHNAME"
                                {...register("name", {
                                    required: true,
                                    maxLength: 100,
                                })}
                            />
                            {errors.name && (
                                <p className="mt-1 text-primary-500">
                                    {errors.name.type === "required" && "Dies ist ein Pflichtfeld."}
                                    {errors.name.type === "maxLength" && "Die maximale Länge beträgt 100 Zeichen."}
                                </p>
                            )}

                            <input
                                className={inputStyles}
                                type="text"
                                placeholder="E-MAIL"
                                {...register("email", {
                                    required: true,
                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                })}
                            />
                            {errors.email && (
                                <p className="mt-1 text-primary-500">
                                    {errors.email?.type === "required" && "Dies ist ein Pflichtfeld."}
                                    {errors.email?.type === "pattern" && "Ungültige E-Mail"}
                                </p>
                            )}

                            <textarea
                                className={inputStyles}
                                rows={4}
                                cols={50}
                                placeholder="NACHRICHT, BITTE PLZ UND ORT ANGEBEN!"
                                {...register("message", {
                                    required: true,
                                    maxLength: 2000,
                                })}
                            />
                            {errors.message && (
                                <p className="mt-1 text-primary-500">
                                    {errors.message.type === "required" && "Dies ist ein Pflichtfeld."}
                                    {errors.message.type === "maxLength" && "Die maximale Länge beträgt 2000 Zeichen."}
                                </p>
                            )}

                            <button
                                type="submit"
                                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 
                                        transition duration-500 hover:text-white"
                            >
                                ABSENDEN
                            </button>
                        </form>
                    </motion.div>

                    <motion.div
                        className="relative mt-16 basis-2/5 md:mt-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 }
                        }}
                    >
                        <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
                            <img
                                className="w-full rounded-lg"
                                alt="contactPageGraphic"
                                src={ContactPageGraphic}
                            />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Kontakt;
