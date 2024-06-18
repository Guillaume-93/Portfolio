import useVisibilityObserver from '../../utils/useVisibilityObserver';
import ContactForm from "./ContactForm";
import { useLanguage } from '../../contexts/languageHooks';

const Contact = () => {
  const { config, t } = useLanguage();
  const contact = config.contact;
  const [isTitleVisible, titleRef] = useVisibilityObserver(0.2);
  const [isTextVisible, textRef] = useVisibilityObserver(0.2);

  return (
    <section
      id={t.contact}
      className="px-2 sm:px-12 xl:px-32 pb-32 flex justify-center align-center flex-col gradient-background font-mono"
      aria-labelledby="contact-title"
    >
      <h2
        ref={titleRef}
        id="contact-title"
        className={`mt-20 uppercase font-bold text-center text-bold text-4xl font-kanit custom-text ${isTitleVisible ? 'opacity-100 animate-fadeInSlow' : 'opacity-0'}`}
      >
        {contact.title}
      </h2>
      <div className="flex justify-center">
        <p
          ref={textRef}
          className={`custom-width text-justify mt-4 custom-text shadow-2xl p-4 rounded-lg ${isTextVisible ? 'opacity-100 animate-fadeInSlow' : 'opacity-0'}`}
        >
          {contact.description}
        </p>
      </div>
      <ContactForm />
    </section>
  );
};

export default Contact;
