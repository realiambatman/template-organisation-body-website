import React, { useState } from 'react';
import { IconCheck, IconChevronDown, IconMail, IconMapPin, IconPhone } from './Icons';
import { PageHeader } from './ui';

const Contact: React.FC = () => {
  // The form is not connected to a backend. Replace this handler with a call
  // to your own API or form service.
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
    setSubmitted(true);
  };

  return (
    <>
      <PageHeader
        title="We'd love to hear from you."
        lead="Whether you have a question about membership, want to partner for an event, or just want to say hello, our team is ready."
      />

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-20">

          {/* Contact details */}
          <dl className="divide-y divide-line border-y border-line self-start">
            <div className="flex gap-4 py-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-control bg-brand-soft text-brand">
                <IconMapPin className="h-5 w-5" />
              </span>
              <div>
                <dt className="font-semibold text-ink">Headquarters</dt>
                <dd className="mt-1 text-ink-muted">Sensix Tower, Innovation District<br />New York, NY 10001, USA</dd>
              </div>
            </div>
            <div className="flex gap-4 py-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-control bg-brand-soft text-brand">
                <IconMail className="h-5 w-5" />
              </span>
              <div>
                <dt className="font-semibold text-ink">Email Us</dt>
                <dd className="mt-1 text-ink-muted">info@sensix.org<br />support@sensix.org</dd>
              </div>
            </div>
            <div className="flex gap-4 py-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-control bg-brand-soft text-brand">
                <IconPhone className="h-5 w-5" />
              </span>
              <div>
                <dt className="font-semibold text-ink">Call Us</dt>
                <dd className="mt-1 text-ink-muted">+1 555 123 4567<br />Mon-Fri from 9am to 5pm.</dd>
              </div>
            </div>
          </dl>

          {/* Form */}
          <form className="card space-y-5 p-6 md:p-10" onSubmit={handleSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-first-name" className="label">First Name</label>
                <input id="contact-first-name" name="firstName" required type="text" autoComplete="given-name" className="field" />
              </div>
              <div>
                <label htmlFor="contact-last-name" className="label">Last Name</label>
                <input id="contact-last-name" name="lastName" required type="text" autoComplete="family-name" className="field" />
              </div>
            </div>

            <div>
              <label htmlFor="contact-email" className="label">Email Address</label>
              <input id="contact-email" name="email" required type="email" autoComplete="email" className="field" />
            </div>

            <div>
              <label htmlFor="contact-subject" className="label">Subject</label>
              <div className="relative">
                <select id="contact-subject" name="subject" className="field appearance-none pr-10">
                  <option>General Inquiry</option>
                  <option>Membership</option>
                  <option>Volunteering</option>
                  <option>Press/Media</option>
                </select>
                <IconChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
              </div>
            </div>

            <div>
              <label htmlFor="contact-message" className="label">Message</label>
              <textarea id="contact-message" name="message" required rows={5} className="field"></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-full sm:w-auto">
              Send Message
            </button>
            {submitted && (
              <p role="status" className="flex items-center gap-2 rounded-control bg-brand-soft px-4 py-3 text-sm font-medium text-ink">
                <IconCheck className="h-4 w-4 shrink-0 text-brand" />
                Thank you for your message.
              </p>
            )}
          </form>

        </div>
      </section>
    </>
  );
};

export default Contact;
