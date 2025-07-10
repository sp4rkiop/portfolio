import React from 'react';

const Experience = () => {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
      </div>
      <div>
        <ol className="group/list">
          {/* Experience item 1 */}
          <li className="py-4 border-b border-slate-800 last:border-b-0">
            <div className="mb-2">
              <h3 className="text-lg font-semibold text-slate-200">Cloud Engineer 2</h3>
              <p className="text-sm text-slate-400">
                <a href="https://www.insight.com" className="text-blue-400 hover:underline">Insight</a> | Jan 2022 - Current
              </p>
            </div>
            <p className="text-slate-300">
              {[
                "Built an AI-powered resume screener that reduced manual screening by 40%, using Azure AI Search and Semantic Kernel.",
                "Developed a conversational AI platform using Semantic Kernel and RAG. Built with .NET backend and Angular frontend, secured by Microsoft Entra ID.",
                "Developed Natural Language to SQL queries agent with Python Langchain, reducing manual API creation time by 50%.",
                "Automated email parsing to extract business insights using NLP, reducing reporting time.",
                "Recognized for building resume screening AI tool that saved 30+ hours/month.",
                "Recognized for promoting AI tools within the SDLC, leading to a 20% increase in workflow efficiency."
              ].map((bullet, index) => (
                <span key={index}>
                  • {bullet}
                  <br />
                </span>
              ))}
            </p>
          </li>
          {/* <li className="py-4 border-b border-slate-800 last:border-b-0">
            <div className="mb-2">
              <h3 className="text-lg font-semibold text-slate-200">Cloud Engineer</h3>
              <p className="text-sm text-slate-400">
                <a href="https://www.insight.com" className="text-blue-400 hover:underline">Insight</a> | Jan 2022 - April 2024
              </p>
            </div>
            <p className="text-slate-300">
              Got opportunity to show my skills by integrating GenAI to backend that helped in saving time of manual api building.
              Developed, maintained projects. Learned CI/CD to automate deployments.
            </p>
          </li> */}


          {/* Experience item 2 */}
          <li className="py-4 border-b border-slate-800 last:border-b-0">
            <div className="mb-2">
              <h3 className="text-lg font-semibold text-slate-200">Subject Expert (CS)</h3>
              <p className="text-sm text-slate-400">Chegg | Remote | College</p>
            </div>
            <p className="text-slate-300">
              Helped students with their problems & questions in Computer Science Subject.
            </p>
          </li>

          {/* Add more experience items as needed */}

        </ol>
        {/* <div className="mt-12">
          <a
            className="inline-flex items-center leading-tight text-slate-200 font-semibold group"
            aria-label="View Full Résumé"
            href="/resume.pdf"
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                View Full 
              </span>
              <span className="whitespace-nowrap">
                <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                  Resume
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.813H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </span>
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Experience;
