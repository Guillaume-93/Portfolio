import config from "../../data/index.json";
import ContactForm from "./ContactForm";

const Contact = () => {
  const contact = config.contact;
  return (
    <div id="contact" className="px-2 sm:px-12 xl:px-32 pb-32 flex justify-center align-center flex-col gradient-background font-mono">
      <h2 className="mt-12 uppercase font-bold text-center text-bold text-4xl font-kanit custom-text">{contact.title}</h2>
      <div className="flex justify-center">
        <p className="custom-width text-justify mt-4 custom-text shadow-2xl p-4 rounded-lg">{contact.description}</p>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;