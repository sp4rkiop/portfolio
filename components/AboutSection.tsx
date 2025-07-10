// components/AboutSection.tsx
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
      </div>
      <div>
        <p className="mb-4">
          Full-stack web developer with almost 4 years of hands-on experience in frontend, backend, DevOps, and cloud development.
          Proven ability to design and deploy scalable, AI-integrated applications with GDPR complianceusing modern frameworks and cloud platforms.
          With a background in open source, I&apos;ve evolved to build AI integrated SAAS and PAAS like{' '}
          <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" href="http://eva.abhisheksinha.dev/" target="_blank" rel="noreferrer">Eva - The AI Assistant</a>, {' '}
          <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" href="https://github.com/sp4rkiop/Azure-OpenAI-integration-with-db" target="_blank" rel="noreferrer">NL2SQL</a>, contributed in covid with vaccine availability bot{' '}
          <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" href="https://github.com/SP4RKiOP/Cowin_vaccine_telegram_notifier" target="_blank" rel="noreferrer">COWIN Vaccine Availability Telegram Notifier </a>, contributed in DuckDNS{' '}
          <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" href="https://github.com/SP4RKiOP/AutoIPV6forDuckDNS" target="_blank" rel="noreferrer">AutoIPV6forDuckDNS</a>.
        </p>
        <p className="mb-4">
          My main focus these days is integrating LLMs with custom data and refining their behavior through prompt engineering.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
