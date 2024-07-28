import { useLanguage } from "../../contexts/languageHooks";
import ButtonReadMore from "./ButtonReadMore";
import AuroraBackground from "../ui/AuroraBackground.jsx";
import { motion } from "framer-motion";

export default function Example() {
    const { config, t } = useLanguage();
    const informations = config.informations;

    return (
        <div id={t.home} className="text-background min-h-[100dvh]">
            <AuroraBackground>
                <motion.div
                    // initial={{ opacity: 0.0, y: 40 }}
                    // whileInView={{ opacity: 1, y: 0 }}
                    // transition={{
                    //     delay: 0.3,
                    //     duration: 0.8,
                    //     ease: "easeInOut",
                    // }}
                    className="relative flex flex-col gap-4 items-center justify-center px-4 min-h-[100svh] w-full overflow-hidden"
                >
                    <div className="relative isolate px-6 pt-8 lg:px-8 pb-48 sm:pb-16 w-full h-full overflow-hidden flex flex-col justify-center">
                        <div className="mx-auto max-w-2xl py-20 sm:py-48 lg:py-56">
                            <div className="text-center">
                                <h1 className="text-4xl font-bold tracking-tight custom-text-white sm:text-6xl animate-fadeInSlow">
                                    {informations.intro}{" "}
                                    <span className="gradient-text">
                                        {informations.firstname}
                                    </span>{" "}
                                    <span className="gradient-text">
                                        {informations.lastname}
                                    </span>{" "}
                                    {informations.subtitle}
                                </h1>
                                <p className="mt-6 text-lg leading-8 text-gray-400 animate-fadeInSlow">
                                    {informations.title}
                                </p>
                                <div className="mt-10 flex items-center justify-center gap-x-6">
                                    <ButtonReadMore />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AuroraBackground>
        </div>
    );
}
