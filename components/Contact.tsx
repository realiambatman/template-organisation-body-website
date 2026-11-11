import React, { useState } from 'react';

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
    <section className="py-24 bg-white min-h-screen">
      <div className="w-full px-4 md:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* Info Side */}
            <div className="flex flex-col justify-center">
                <span className="text-brand-blue text-xs font-bold tracking-[0.2em] uppercase block mb-4">Get in Touch</span>
                <h2 className="text-6xl font-serif text-brand-navy mb-8">We'd love to hear from you.</h2>
                <p className="text-brand-slate text-xl font-light leading-relaxed mb-16 max-w-lg">
                    Whether you have a question about membership, want to partner for an event, or just want to say hello, our team is ready.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="group">
                        <div className="w-12 h-12 mb-6 rounded-full bg-slate-50 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                        </div>
                        <h4 className="font-bold text-brand-navy uppercase tracking-widest text-xs mb-2">Headquarters</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">Sensix Tower, Innovation District<br/>New York, NY 10001, USA</p>
                    </div>

                    <div className="group">
                        <div className="w-12 h-12 mb-6 rounded-full bg-slate-50 flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white transition-colors">
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                        </div>
                        <h4 className="font-bold text-brand-navy uppercase tracking-widest text-xs mb-2">Email Us</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">info@sensix.org<br/>support@sensix.org</p>
                    </div>

                    <div className="group">
                        <div className="w-12 h-12 mb-6 rounded-full bg-slate-50 flex items-center justify-center text-brand-pink group-hover:bg-brand-pink group-hover:text-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                        </div>
                        <h4 className="font-bold text-brand-navy uppercase tracking-widest text-xs mb-2">Call Us</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">+1 555 123 4567<br/>Mon-Fri from 9am to 5pm.</p>
                    </div>
                </div>
            </div>

            {/* Form Side */}
            <div className="bg-slate-50 p-8 lg:p-16 border border-slate-200">
                <form className="space-y-8" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label htmlFor="contact-first-name" className="text-xs font-bold uppercase tracking-widest text-slate-500">First Name</label>
                            <input id="contact-first-name" name="firstName" required type="text" className="w-full bg-white border border-slate-200 p-4 rounded-sm focus:outline-none focus:border-brand-blue transition-colors text-brand-navy font-serif" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="contact-last-name" className="text-xs font-bold uppercase tracking-widest text-slate-500">Last Name</label>
                            <input id="contact-last-name" name="lastName" required type="text" className="w-full bg-white border border-slate-200 p-4 rounded-sm focus:outline-none focus:border-brand-blue transition-colors text-brand-navy font-serif" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="contact-email" className="text-xs font-bold uppercase tracking-widest text-slate-500">Email Address</label>
                        <input id="contact-email" name="email" required type="email" className="w-full bg-white border border-slate-200 p-4 rounded-sm focus:outline-none focus:border-brand-blue transition-colors text-brand-navy font-serif" />
                    </div>

                    <div className="space-y-2">
                         <label htmlFor="contact-subject" className="text-xs font-bold uppercase tracking-widest text-slate-500">Subject</label>
                         <div className="relative">
                            <select id="contact-subject" name="subject" className="w-full bg-white border border-slate-200 p-4 rounded-sm focus:outline-none focus:border-brand-blue transition-colors text-brand-navy font-serif appearance-none">
                                <option>General Inquiry</option>
                                <option>Membership</option>
                                <option>Volunteering</option>
                                <option>Press/Media</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-slate-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                         </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="contact-message" className="text-xs font-bold uppercase tracking-widest text-slate-500">Message</label>
                        <textarea id="contact-message" name="message" required rows={4} className="w-full bg-white border border-slate-200 p-4 rounded-sm focus:outline-none focus:border-brand-blue transition-colors text-brand-navy font-serif"></textarea>
                    </div>

                    <button type="submit" className="w-full bg-brand-navy text-white font-bold uppercase tracking-widest py-4 hover:bg-brand-blue transition-colors text-xs">
                        Send Message
                    </button>
                    {submitted && (
                        <p role="status" className="text-sm text-brand-green">
                            Thank you for your message.
                        </p>
                    )}
                </form>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;