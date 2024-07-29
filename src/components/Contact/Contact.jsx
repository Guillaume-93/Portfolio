import { ValidationError, useForm } from '@formspree/react';
// import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import { useLanguage } from '../../contexts/languageHooks';
import TextGenerateEffect from '../ui/TextGenerateEffect';

const Contact = () => {
    const { config, t } = useLanguage();
    const contact = config.contact;
    const footer = config.footer;

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});

    const [state, handleSubmit] = useForm(contact.formId);

    useEffect(() => {
        if (state.succeeded) {
            setFirstName("");
            setLastName("");
            setEmail("");
            setPhoneNumber("");
            setMessage("");
            setErrors({});
        }
    }, [state.succeeded]);

    const validateForm = () => {
        const newErrors = {};
        if (!firstName.trim()) newErrors.firstName = t.firstNameRequired;
        if (!lastName.trim()) newErrors.lastName = t.lastNameRequired;
        if (!email.trim()) {
            newErrors.email = t.emailRequired;
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            newErrors.email = t.emailInvalid;
        }
        if (!message.trim()) {
            newErrors.message = t.messageRequired;
        } else if (message.trim().length < 10) {
            newErrors.message = t.messageMinLength;
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            if (e.target.honeypot.value) {
                return;
            }
            handleSubmit(e);
        }
    };

    useEffect(() => {
        if (errors && Object.keys(errors).length > 0) {
            const timer = setTimeout(() => {
                setErrors({});
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [errors]);

    if (state.succeeded) {
        return (
            <div className="pointer-events-none inset-x-0 bottom-0 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8 about-text pt-5">
                <div className="pointer-events-auto flex items-center justify-between gap-x-6 bg-gray-900 px-6 py-2.5 sm:rounded-xl sm:py-3 sm:pl-4 sm:pr-3.5 ring-1 ring-gray-500">
                    <p id={t.contact} className="text-sm leading-6 text-white">
                        <a href="#">
                            {t.successMessage}<span aria-hidden="true"></span>
                        </a>
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div id={t.contact} className="relative isolate text-background">
            <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
                    <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                        <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden gradient-background ring-1 ring-gray-900/10 lg:w-1/2">
                            <svg
                                className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                                aria-hidden="true"
                            >
                                <defs>
                                    <pattern
                                        id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                                        width={200}
                                        height={200}
                                        x="100%"
                                        y={-1}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <path d="M130 200V.5M.5 .5H200" fill="none" />
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" strokeWidth={0} fill="white" />
                                <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                                    <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                                </svg>
                                <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900">{contact.title}</h2>
                        {/* <p className="mt-6 text-lg leading-8 text-gray-900">
                            {contact.description}
                        </p> */}
                        <TextGenerateEffect words={contact.description} />
                        {/* <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Telephone</span>
                                    <PhoneIcon className="h-7 w-6 text-gray-900" aria-hidden="true" />
                                </dt>
                                <dd className='filter blur-sm transition duration-300 ease-in-out hover:blur-none'>
                                    <a className="text-gray-900" href="tel:+33614071521">
                                        +33614071521
                                    </a>
                                </dd>
                            </div>
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Email</span>
                                    <EnvelopeIcon className="h-7 w-6 text-gray-900" aria-hidden="true" />
                                </dt>
                                <dd className="filter blur-sm transition duration-300 ease-in-out hover:blur-none">
                                    <a className="text-gray-900" href="mailto:g.brechaire@gmail.com">
                                        g.brechaire@gmail.com
                                    </a>
                                </dd>
                            </div>
                        </dl> */}
                        <div className="mt-16 flex justify-center space-x-10  text-3xl">
                            <ul className="example-2">
                                <li className="icon-content">
                                    <a
                                        href={footer.linkedin}
                                        rel="noreferrer"
                                        target="_blank"
                                        aria-label="LinkedIn"
                                        data-social="linkedin"
                                    >
                                        <div className="filled"></div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-linkedin"
                                            viewBox="0 0 16 16"
                                            xmlSpace="preserve"
                                        >
                                            <path
                                                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                    </a>
                                </li>
                                <li className="icon-content">
                                    <a
                                        href={footer.github}
                                        rel="noreferrer"
                                        target="_blank"
                                        aria-label="GitHub"
                                        data-social="github">
                                        <div className="filled"></div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-github"
                                            viewBox="0 0 16 16"
                                            xmlSpace="preserve"
                                        >
                                            <path
                                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <form
                    action={`https://formspree.io/f/${contact.formId}`}
                    method="POST"
                    className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
                    onSubmit={onSubmit}
                    aria-labelledby="contact-form-title"
                >
                    <div className="hidden">
                        <label htmlFor="honeypot" className="sr-only">Honeypot</label>
                        <input type="text" name="honeypot" id="honeypot" />
                    </div>
                    <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 custom-text-white">
                                    {t.firstNameLabel} <span className='text-red-500'>*</span>
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        required
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                    {errors?.firstName && <p className="mt-2 text-sm text-red-500">{errors.firstName}</p>}
                                </div>
                            </div>
                            <div>
                                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 custom-text-white">
                                    {t.nameLabel} <span className='text-red-500'>*</span>
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        required
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                    {errors?.lastName && <p className="mt-2 text-sm text-red-500">{errors.lastName}</p>}
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-semibold leading-6 custom-text-white">
                                    {t.emailLabel} <span className='text-red-500'>*</span>
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                    {errors?.email && <p className="mt-2 text-sm text-red-500">{errors.email}</p>}
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 custom-text-white">
                                    {t.phoneNumberLabel}
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="tel"
                                        name="phone-number"
                                        id="phone-number"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        autoComplete="tel"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                    {errors?.phoneNumber && <p className="mt-2 text-sm text-red-500">{errors.phoneNumber}</p>}
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-semibold leading-6 custom-text-white">
                                    {t.messageLabel} <span className='text-red-500'>*</span>
                                </label>
                                <div className="mt-2.5">
                                    <textarea
                                        name="message"
                                        id="message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        rows={4}
                                        required
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                    {errors?.message && <p className="mt-2 text-sm text-red-500">{errors.message}</p>}
                                    <p className='mt-2 text-sm text-red-500'>* {t.requiredFields}</p>
                                    <ValidationError
                                        prefix="Message"
                                        field="message"
                                        errors={state.errors}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 flex justify-end">
                            <button
                                type="submit"
                                disabled={state.submitting}
                                className="rounded-md gradient-button px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-900 ease-in-out"
                                aria-label={t.submitButton}
                            >
                                {t.submitButton}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;
