import React from 'react';

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
      </div>
      <div>
        <ol className="group/list">
          <li className="py-4 border-b border-slate-800 last:border-b-0">
            <div className="mb-2">
              <h3 className="text-lg font-semibold text-slate-200">
                <a href="http://eva.abhisheksinha.dev/" className="text-blue-400 hover:underline">Eva Assistant</a>
              </h3>
              <p className="text-sm text-slate-400">Tech Stack: Next.js, Semantic Kernel, Kernel Memory, ASP.NET, Cassandra, Redis, SignalR, Azure OpenAI, Docker</p>
            </div>
            <ul className="text-slate-300 list-disc pl-5">
              <li>Developed the frontend using Next.js, Tailwind CSS, NextAuth, and TypeScript.</li>
              <li>Developed the backend using ASP.NET Web API, Semantic Kernel, Kernel Memory, SignalR messaging service socket, and Apache Cassandra.</li>
              <li>Migrated database management from ADO.NET to ScyllaDB for enhanced performance and scalability. Used Redis for efficient caching solutions.</li>
              <li>Developed an open-source dockerized alternative to ChatGPT with Retrieval-Augmented Generation (RAG) capabilities for personalized data interaction. Implemented CI/CD pipelines for streamlined deployment.</li>
            </ul>
          </li>

          <li className="py-4 border-b border-slate-800 last:border-b-0">
            <div className="mb-2">
              <h3 className="text-lg font-semibold text-slate-200">
                <a href="https://github.com/sp4rkiop/Azure-OpenAI-integration-with-db" className="text-blue-400 hover:underline">NL2SQL - Open Source Contribution</a>
              </h3>
              <p className="text-sm text-slate-400">Tech Stack: Python, Langchain, Microsoft SQL Server, Azure OpenAI</p>
            </div>
            <ul className="text-slate-300 list-disc pl-5">
              <li>Using Langchain and Prompt Engineering connected a large database with LLM model GPT 3.5.</li>
              <li>A user&apos;s natural language query is processed by OpenAI to convert it into SQL Syntax as per the database schema.</li>
              <li>Improved response satisfaction by adding a retrieval mechanism of the database schema to the tool, which also helped to reduce the response generation time by 80% and increase stability to 98% even when used with a hospital management sample db with millions of records.</li>
            </ul>
          </li>

          <li className="py-4 border-b border-slate-800 last:border-b-0">
            <div className="mb-2">
              <h3 className="text-lg font-semibold text-slate-200">
                <a href="https://github.com/sp4rkiop/Cowin_vaccine_telegram_notifier" className="text-blue-400 hover:underline">Covin Vaccine Notifier</a>
              </h3>
              <p className="text-sm text-slate-400">Tech Stack: Python, Bash Scripting, API Setu APIs</p>
            </div>
            <ul className="text-slate-300 list-disc pl-5">
              <li>Used API Setu publicly available government API to fetch real-time availability of vaccine shots per Indian pin code.</li>
              <li>Setup Telegram Bot system to pass on data received from the script to various groups using RESTful API.</li>
              <li>The solution addressed the irregular availability of vaccine slots, helping numerous people secure reservations during the peak demand period.</li>
            </ul>
          </li>

        </ol>

      </div>
    </section>
  );
};

export default ProjectsSection;
