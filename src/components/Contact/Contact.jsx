import { ValidationError, useForm } from '@formspree/react';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import { useLanguage } from '../../contexts/languageHooks';

const Contact = () => {
    const { config, t } = useLanguage();
    const contact = config.contact;

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
                        <p className="mt-6 text-lg leading-8 text-gray-900">
                            {contact.description}
                        </p>
                        <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Telephone</span>
                                    <PhoneIcon className="h-7 w-6 text-gray-900" aria-hidden="true" />
                                </dt>
                                <dd className='filter blur-sm transition duration-300 ease-in-out hover:blur-none'>
                                    <a className="text-gray-900 hover:text-gray-600" href="tel:+33614071521">
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
                                    <a className="text-gray-900 hover:text-gray-600" href="mailto:g.brechaire@gmail.com">
                                        g.brechaire@gmail.com
                                    </a>
                                </dd>
                            </div>
                        </dl>
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
                                    {t.firstNameLabel} <span className='text-red-600'>*</span>
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
                                    {errors?.firstName && <p className="mt-2 text-sm text-red-600">{errors.firstName}</p>}
                                </div>
                            </div>
                            <div>
                                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 custom-text-white">
                                    {t.nameLabel} <span className='text-red-600'>*</span>
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
                                    {errors?.lastName && <p className="mt-2 text-sm text-red-600">{errors.lastName}</p>}
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-semibold leading-6 custom-text-white">
                                    {t.emailLabel} <span className='text-red-600'>*</span>
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
                                    {errors?.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
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
                                    {errors?.phoneNumber && <p className="mt-2 text-sm text-red-600">{errors.phoneNumber}</p>}
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-semibold leading-6 custom-text-white">
                                    {t.messageLabel} <span className='text-red-600'>*</span>
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
                                    {errors?.message && <p className="mt-2 text-sm text-red-600">{errors.message}</p>}
                                    <p className='mt-2 text-sm text-red-600'>* {t.requiredFields}</p>
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
