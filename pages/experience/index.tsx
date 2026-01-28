import Image from "next/image";

const Experience = () => {
  return (
    <>
      <section
        id="experience"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="Work experience"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            Experience
          </h2>
        </div>
        <div>
          <ol className="group/list">
            <li className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <div className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                  <header aria-label="2025 to 2025">
                    01/01/2025 - Current 
                  </header>
                  <Image
                    alt=""
                    loading="lazy"
                    width="200"
                    height="48"
                    decoding="async"
                    data-nimg="1"
                    className="rounded transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                    style={{ color: "transparent" }}
                    src={"https://tse3.mm.bing.net/th/id/OIP.ssdBJ-Ee6CP6KdfftujAAAHaD4?rs=1&pid=ImgDetMain&o=7&rm=3"}
                  />
                </div>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                        href="https://www.reply.com/autonomous-reply/en"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Software Developer at Visteon Corporation"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          Senior AI and Cloud Engineer {" . "}
                          <span className="inline-block">
                            Reply-Autonomous AI{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </span>
                      </a>
                    </div>
                  </h3>
                  <div className="mt-2 text-sm leading-normal text-justify">                
                    <h3 className="font-bold"></h3>
                    <ul>
                      <li>Supported the development and validation of a proprietary EV Battery Management System (BMS), ensuring software reliability, functional safety,
                          and compliance with automotive standards across the full SDLC.</li>
                      <li>Performed unit, integration, system, and validation testing while building automated test scripts using Unity, Git, and CI/CD workflows (GitHub
                          Actions/Jenkins).</li>
                      <li>Automated test pipelines and integrated testing with the build system using DevOps practices, reducing manual testing effort by 30% and
                          improving delivery efficiency.</li>
                      <li>Conducted static analysis and cyclomatic complexity assessments, improving code quality by 15%, and leveraged tools like SonarQube, Docker,
                          and Kubernetes for scalable test environments.</li>
                      <li>Collaborated closely with engineering teams to manage defects, optimize DevOps workflows, and ensure smooth deployments using AWS/Azure
                          resources, containerization, and cloud-based automation.</li>
                    </ul>
                  </div>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                       Business or sector Other service activities
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        Department: Consulting Firm
                      </div>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </li>
            <li className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <div className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                  <header aria-label="01/03/2023 - 31/12/2024">
                    01/03/2023 - 31/12/2024
                  </header>
                  <Image
                    alt=""
                    loading="lazy"
                    width="200"
                    height="48"
                    decoding="async"
                    data-nimg="1"
                    className="rounded transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                    style={{ color: "transparent" }}
                    src={"https://tse4.mm.bing.net/th/id/OIP.qhAPWvYnIyuJMR-rdUWrJgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"}
                  />
                </div>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                        href="https://www.accenture.com/us-en/about/company-index"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Business or sector Other service activities"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          Product and Mfg Test analyst {" . "}
                          <span className="inline-block">
                            Wolfsburg, Germany{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </span>
                      </a>
                    </div>
                  </h3>
                  <div className="mt-2 text-sm leading-normal text-justify">                
                    <h3 className="font-bold">Accenture</h3>
                    <ul>
                      <li>Led infotainment test infrastructure projects using DevOps, automation, and cloud-based workflows to ensure high software reliability across ECUs</li>
                      <li>Performed system integration, functional, regression, and DevDrop testing while automating ECU flashing and validation via CI/CD pipelines.</li>
                      <li>Utilized CANalyzer, ODIS, Docker, and Kubernetes to enhance testing efficiency, data analysis, and debugging accuracy.</li>
                      <li>Improved defect tracking and collaboration through cloud DevOps tools (AWS/Azure, GitHub Actions, Jenkins), reducing issue resolution time.</li>
                      <li>Delivered insights through analytics-driven reporting (Python/Power BI), contributing to 25% faster test cycles and 20% higher software stability.</li>
                    </ul>
                  </div>
                  
                </div>
              </div>
            </li>
            <li className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <div className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                  <header aria-label="01/10/2021 - 01/03/2023 ">
                    01/10/2021 - 01/03/2023 
                  </header>

                  <Image
                    alt=""
                    loading="lazy"
                    width="200"
                    height="48"
                    decoding="async"
                    data-nimg="1"
                    className="rounded transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                    style={{ color: "transparent" }}
                    src={"/images/experiences/umlaut.jpeg"}
                  />
                </div>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                        href="https://umlautsolutions.com/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Product and Mfg Test analyst"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          Automotive Test Engineer  {" . "}
                          <span className="inline-block">
                            Umlaut Systems GmbH {" "},
                            Braunschweig, Germany
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </span>
                      </a>
                    </div>
                  </h3>
                  <div className="mt-2 text-sm leading-normal text-justify">
                    <div className="mt-2 text-sm leading-normal text-justify">
                       
                      <ul>
                        <li>Ensured ECU software quality and safety by executing automated HIL tests using CANoe/CAPL with CI/CD-driven workflows integrated via Jenkins and GitHub Actions.</li>
                        <li>Performed CAN/LIN/FlexRay trace analysis and automated regression testing, reducing manual effort and improving fault detection by leveraging containerized environments (Docker/Kubernetes).</li>
                        <li>Enhanced HIL infrastructure with cloud-enabled reporting, automated triggers, and scalable test execution using AWS/Azure services.</li>
                        <li>Collaborated with OEM clients during bring-up sessions, applying cloud-based debugging, defect tracking (JIRA), and analytics to cut issue resolution time by 15%.</li>
                        <li>Delivered data-driven test insights using Python/Power BI and improved ECU software reliability through AI-assisted analysis and continuous improvement processes.</li>
                      </ul>
                    </div>
                  </div>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Automotive Test Engineer"
                  >
                    
                  </ul>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </section>
    </>
  );
};

export default Experience;
