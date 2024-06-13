import { useState, useEffect } from "react";
import { useForm, ValidationError } from '@formspree/react';
import config from "../../data/index.json";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function ContactForm() {
  const contact = config.contact;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  const [state, handleSubmit] = useForm(contact.formId);

  useEffect(() => {
    if (state.succeeded) {
      setOpen(true);
      setName("");
      setEmail("");
      setMessage("");
    }
  }, [state.succeeded]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  }

  if (state.succeeded) {
    return (
      <div className="mt-10">
        <dialog className="popup-message">
          Merci ! Je vous répondrais dans les meilleurs délais !
        </dialog>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{ width: '100%' }}
          >
            Message envoyé avec succès !
          </Alert>
        </Snackbar>
      </div>
    );
  }

  return (

    <div className="w-full sm:w-full md:w-3/4 lg:w-1/2 mt-16 mx-auto">
      <form
        onSubmit={handleSubmit}
        action={`https://formspree.io/f/${contact.formId}`}
        method="post"
        className="shadow-md rounded px-8 pt-6 pb-8 mb-4 text-background "
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2 text-background" htmlFor="name">
            Nom
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            placeholder="Entrez votre nom"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2 text-background" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            placeholder="Entrez votre adresse mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2 text-background" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            name="message"
            rows={5}
            placeholder="Écrivez votre message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            disabled={state.submitting}
            className="font-bold p-0.5 mt-6 w-44 gradient-background"
          >
            <div className="text-background">
              <span className="block p-2 font-semibold gradient-text">
                Envoyer
              </span>
            </div>
          </button>
        </div>
      </form>

    </div>
  );
}

export default ContactForm;
