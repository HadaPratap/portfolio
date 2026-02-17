import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';
import { resume } from '../data/resume';
import { FiMail, FiMapPin, FiLinkedin, FiPhone } from 'react-icons/fi';

const ContactItem = ({ icon, label, value }) => (
    <div className="flex items-start gap-4 mb-6">
        <div className="p-3 bg-slate-800 rounded-lg text-teal-400 border border-slate-700">
            {icon}
        </div>
        <div>
            <h4 className="text-slate-400 text-sm font-medium mb-1">{label}</h4>
            <div className="text-slate-900 dark:text-white font-medium hover:text-teal-600 dark:hover:text-teal-300 transition-colors">{value}</div>
        </div>
    </div>
);

const Contact = () => {
    return (
        <SectionWrapper id="contact" className="relative pb-32">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start">
                {/* Left Side Info */}
                <div>
                    <span className="text-teal-400 font-semibold tracking-wider text-sm uppercase mb-2 block">Get in Touch</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                        Let's build something <span className="text-gradient">Extraordinary</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg mb-12 leading-relaxed">
                        I'm currently available for freelance projects and full-time opportunities.
                        If you have a project that needs a high-performance cross-platform solution, let's talk.
                    </p>

                    <div className="space-y-2">
                        <ContactItem
                            icon={<FiMail size={20} />}
                            label="Email"
                            value={<a href={`mailto:${resume.personalInfo.email}`}>{resume.personalInfo.email}</a>}
                        />
                        <ContactItem
                            icon={<FiPhone size={20} />}
                            label="Phone"
                            value={resume.personalInfo.phone}
                        />
                        <ContactItem
                            icon={<FiMapPin size={20} />}
                            label="Location"
                            value={resume.personalInfo.location}
                        />
                        <ContactItem
                            icon={<FiLinkedin size={20} />}
                            label="Social"
                            value={<a href={resume.personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>}
                        />
                    </div>
                </div>

                {/* Right Side Form - Floating */}
                <div className="relative mt-12 md:mt-0">
                    <div className="absolute inset-0 bg-teal-500/20 blur-[60px] -z-10 rounded-full" />
                    <form
                        className="glass-card p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-white/10 relative z-10 bg-white/60 dark:bg-slate-900/60"
                        onSubmit={(e) => {
                            e.preventDefault();

                            const name = e.target.name.value;
                            const email = e.target.email.value;
                            const message = e.target.message.value;

                            const subject = encodeURIComponent(`Project Inquiry ${name}`);
                            const body = encodeURIComponent(
                                `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
                            );

                            const gmailLink =
                                `https://mail.google.com/mail/?view=cm&fs=1&to=${resume.personalInfo.email}&su=${subject}&body=${body}`;

                            window.open(gmailLink, "_blank");
                        }}
                    >
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send Me a Message</h3>

                        <div className="space-y-5">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">Your Name</label>
                                <input type="text" id="name" name="name" required
                                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">Email Address</label>
                                <input type="email" id="email" name="email" required
                                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">Message</label>
                                <textarea id="message" name="message" rows="4" required
                                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600 resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>
                            <Button className="w-full justify-center mt-2 py-4 text-base">Send Message</Button>
                        </div>
                    </form>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
