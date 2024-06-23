import useVisibilityObserver from '../../utils/useVisibilityObserver';
import ContactForm from "./ContactForm";
import { useLanguage } from '../../contexts/languageHooks';

const Contact = () => {
  const { config, t } = useLanguage();
  const contact = config.contact;
  const [isTitleVisible, titleRef] = useVisibilityObserver(0.2);
  const [isTextVisible, textRef] = useVisibilityObserver(0.2);

  return (
    <div className='text-background'>
      <div className='isolate'>
        <div className='relative isolate -z-10 overflow-hidden  pt-14'>
          <div
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 sm:w-[180%] md:-mr-64 md:w-[160%] lg:-mr-48 lg:w-[140%] xl:-mr-32 xl:w-[120%] 2xl:-mr-24 2xl:w-[100%] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
            aria-hidden="true"
          />
          <section
            id={t.contact}
            className="px-2 sm:px-12 xl:px-32 pb-32 flex justify-center align-center flex-col  font-mono"
            aria-labelledby="contact-title"
          >
            <h2
              ref={titleRef}
              id="contact-title"
              className={`mt-20 uppercase font-bold text-center text-bold text-4xl font-kanit custom-text-white ${isTitleVisible ? 'opacity-100 animate-fadeInSlow' : 'opacity-0'}`}
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
        </div>
      </div>
    </div>
  );
};

export default Contact;
