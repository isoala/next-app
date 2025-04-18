'use client'

import React, { useRef, useEffect } from 'react';
import Image from "next/image";
import { cn } from "@/lib/utils";
import { GithubIcon, LinkedinIcon, MailIcon, InstagramIcon, XIcon } from '@/components/icons';
import AnimatedTimelinePage from '@/components/animata/progress/animatedtimeline';
import Link from 'next/link';

const systemFonts = 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"';

const Home = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const textElementsRef = useRef<HTMLElement[]>([]);


  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('fading');
          } else {
            entry.target.classList.add('fading');
          }
        });
      },
      {
        root: scrollContainer,
        threshold: [0, 0.1, 0.9, 1],
      }
    );

    textElementsRef.current.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);
  const setElementRef = (el: HTMLElement | null) => {
    if (el) {
      textElementsRef.current.push(el);
    }
  };

  return (

    <div className={cn(
      "flex flex-col md:flex-row min-h-screen bg-gray-100 dark:bg-gray-900",
      systemFonts,
      "font-['var(--font-inter)'] font-feature-settings-['ss03','cv02','cv11']"
    )}>

      <div className="w-full md:w-[45%] p-10 md:p-20 flex flex-col items-start md:sticky md:top-10 md:h-screen md:mt-5"><div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl flex">
          <Link href="/">Abdurahman Alarcon</Link>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-300 sm:text-xl flex">
          Student @ GMU
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-slate-400 flex">
          Pursuing B.S. in Information Technology, concentrating in cybersecurity.
        </p>
        <nav className="nav hidden lg:block md:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            <li>
              <Link className="group flex items-center py-3 active" href="#about">
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">About</span>
              </Link>
            </li>
            <li>
              <Link className="group flex items-center py-3 active" href="#school">
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">School</span>
              </Link>
            </li>
            <li>
              <Link className="group flex items-center py-3" href="#experience">
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Experience</span>
              </Link>
            </li>
            <li>
              <Link className="group flex items-center py-3" href="#resume">
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-300">Resume</span>
              </Link>
            </li>
            <li>
              <Link className="group flex items-center py-3" href="#projects">
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Projects</span>
              </Link>
            </li>
            {/* section 1 */}
          </ul>
        </nav>
      </div>
      <div className="mt-60 lg:mt-60 sm:mt-6 hidden md:block">
      <ul className="ml-1 mt-8 items-center flex" aria-label="Social media">
            <li className="mr-5 shrink-0 text-xs">
              <a
                className="block hover:text-slate-200"
                href="https://github.com/isoala"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub (opens in a new tab)"
                title="GitHub"
              >
                <span className="sr-only">GitHub</span>
                <GithubIcon className="h-6 w-6" aria-hidden="true" />
              </a>
            </li>
            <li className="mr-5 shrink-0 text-xs">
              <a
                className="block hover:text-slate-200"
                href="https://www.linkedin.com/in/abdurahman-alarcon/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn (opens in a new tab)"
                title="LinkedIn"
              >
                <span className="sr-only">LinkedIn</span>
                <LinkedinIcon className="h-6 w-6" aria-hidden="true" />
              </a>
            </li>
            <li className="mr-5 shrink-0 text-xs">
              <a
                className="block hover:text-slate-200"
                href="mailto:ismaeelalarcon@proton.me"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Proton (opens in a new tab)"
                title="Proton"
              >
                <span className="sr-only">Proton</span>
                <MailIcon className="h-6 w-6" aria-hidden="true" />
              </a>
            </li>
            <li className="mr-5 shrink-0 text-xs">
              <a
                className="block hover:text-slate-200"
                href="https://x.com/isoalaaa"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Twitter (opens in a new tab)"
                title="Twitter"
              >
                <span className="sr-only">Twitter</span>
                <XIcon className="h-6 w-6" aria-hidden="true" />
              </a>
            </li>


            <li className="mr-5 shrink-0 text-xs">
              <a
                className="block hover:text-slate-200"
                href="https://instagram.com/manny.ent"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram (opens in a new tab)"
                title="Instagram"
              >
                <span className="sr-only">Instagram</span>
                <InstagramIcon className="h-6 w-6" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* section 2 */}

      <div className="w-full md:w-[55%] flex flex-col h-screen overflow-y-auto overflow-x-hidden">
        <div
          ref={scrollContainerRef}
          className={cn(
            "overflow-y-auto flex-grow",
            "relative"
          )}
        >
          <div className="p-10 space-y-12 space-x-10">


            <section className=" mt-8 pt-10 text-left" id="about">

              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-300">About</h2>
              </div>
              <div className=" md:mt-10 lg:mt-5">
                <p className="mb-4 text-left text-slate-400">I&apos;m a student eager to expand my knowledge in the IT industry. My focus lies in actively seeking opportunities to deepen my understanding of various IT domains and stay abreast of the latest advancements shaping the digital landscape. I am particularly interested in cybersecurity, and I am committed to continuous learning and skill development to become a well-rounded IT professional.</p>
                <p className="mb-4 text-left text-slate-400">In the past, I&apos;ve had the opportunity to internship at the US embassy of Ankara working for the Department of State. This experience provided invaluable insights into the operational aspects of international diplomacy and the critical role of technology within such environments. During my time there, I developed a web application to streamline internal communication processes and also gained hands-on experience maintaining the embassy&apos;s network systems, ensuring their security and reliability.
                </p>
                <p className="mb-4 text-left text-slate-400"> In my freetime, I like to work out, play chess, and read. One of my favorite books is The Righteous Mind by Johnathan Haidt.
                </p>
              </div>
            </section>


            <section id="school" className="space-y-4">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-300">School</h2>
              </div>

              <AnimatedTimelinePage
                containerClassName="bg-gray-100 dark:bg-gray-900 hover:text-white transition-opacity font-medium focus-visible:text-white-500 transition duration-200 "
                events={[
                  {
                    date: '2018-2022',
                    description: 'AP student, team lead on Robotics FRC team 2791, Student, president of Coding club, VP of Future Business Leaders of America, President of Chess Club',
                    id: '1',
                    title: 'Hayfield Secondary School'
                  },
                  {
                    date: '2022-2023',
                    description: 'Initially studied computer engineering B.S.',
                    id: '2',
                    title: 'George Mason University'
                  },

                  {
                    date: '2023-2024',
                    description: 'switched to Information Technology pursuing A.S.',
                    id: '3',
                    title: 'Northern Virginia Community College'
                  },
                  {
                    date: '2024-2026',
                    description: 'pursing Information Technology B.S.',
                    id: '4',
                    title: 'George Mason University'
                  }
                ]}
                initialActiveIndex={-1}
                onEventClick={() => { }}
                onEventHover={() => { }}
                timelineStyles={{
                  activeDotColor: '#2dd4bf',
                  activeLineColor: '#2dd4bf',
                  dateColor: 'rgb(148 163 184)',
                  descriptionColor: 'rgb(203 213 225)',
                  dotColor: '#d1d5db',
                  dotSize: '2 rem',
                  lineColor: '#d1d5db',
                  titleColor: 'rgb(226 232 240)'
                }}
                title=" "
              />
            </section>
            {/* section 3 */}

            <section id="experience" className="space-y-2">

              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-300">Experience</h2>
              </div>
              <div>
                <ol className="group/list mt-8">
                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="Summer 2024">Summer 2024</header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                          <div>
                            <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href="https://www.state.gov/" target="_blank" rel="noreferrer noopener" aria-label="Department of State (opens in a new tab)">
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>Engineering Intern ·&nbsp;<span className="inline-block">Department of State<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group
group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg></span></span>
                            </a>
                          </div>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">Setup and maintain critical networking systems throughout the U.S. Turkey Embassy. Designed and developed a web application to improve the quality of life for US citizens in Turkey by providing an informational interface for users to find key US locations, emergency services, and places to shop in this foreign country.</p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Networking & routing</div></li>
                          <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">PowerApps</div></li>
                          <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">SQL</div></li>
                          <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">UI/UX</div></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2024 - Present">2024 — Present</header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                          <div>
                            <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href="https://www.autismspectrumalliance.com/" target="_blank" rel="noreferrer noopener" aria-label="Continuum (opens in a new tab)">
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>Registered Behavioral Therapist ·&nbsp;<span className="inline-block">Continuum<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg></span></span>
                            </a>
                          </div>
                        </h3>
                        <p className="mt-2 text-sm leading-normal"> Utilized behavioral tracking software to log patient progress and analyze patterns in therapy outcomes.Assisted in data collection and reporting, ensuring accurate documentation of therapy sessions and adherence to HIPAA-compliant record-keeping.</p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Confidentiality</div></li>
                          <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Data Tracking</div></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2023-present">2023 — Present</header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                          <div>
                            <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href="https://www.studyhouseeducation.com/" target="_blank" rel="noreferrer noopener" aria-label="StudyHouse (opens in a new tab)">
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>STEM Tutor ·&nbsp;<span className="inline-block">StudyHouse<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg></span></span>
                            </a>
                          </div>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">Provided technical tutoring in Computer Science, Calculus, and Biology, focusing on problem-solving strategies and real-world applications. Developed custom study plans and digital resources, integrating online learning tools to enhance engagement and retention.</p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Java</div></li>
                          <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Python</div></li>
                          <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">JavaScript</div></li>
                          <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Calculus</div></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2023-present">2021 — 2024</header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                          <div>
                            <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href="https://www.jerseymikes.com/" target="_blank" rel="noreferrer noopener" aria-label="Jersey Mike's (opens in a new tab)">
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>Manager ·&nbsp;<span className="inline-block">Jersey Mike&apos;s<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg></span></span>
                            </a>
                          </div>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">
                          Oversaw team member task allocation and workflow optimization, utilizing real-time communication systems to ensure efficiency.
                          Managed financials, including cash drawer balancing, POS system reporting verification, and secure handling of daily receipts, maintaining honesty and integrity.


                        </p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Customer Service</div></li>
                          <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Managing</div></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>

            </section>
            {/* section 4 */}



            <section id="resume" className="space-y-4">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-300">Resume</h2>
              </div>
              <a className="inline-flex items-baseline leading-tight hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base" href="/resume.pdf" target="_blank" rel="noreferrer noopener" aria-label="View Full Résumé (opens in a new tab)"><span>View Full <span className="inline-block">Résumé<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg></span></span></a>
            </section>



            <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">

              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-300">Projects</h2>
              </div>
              <div>
                <ul className="group/list">
                  <li className="mb-12">
                    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <div className="z-10 sm:order-2 sm:col-span-6">
                        <h3>
                          <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href="https://github.com/isoala/chessCLI" target="_blank" rel="noreferrer noopener" aria-label="Project One (opens in a new tab)">
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>&nbsp;
                              <span className="inline-block">
                                Chess-CLI
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                  <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                                </svg>
                              </span>
                            </span>
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">A chess game in the cli with some fun ascii art. coded in Java, using a bash script to install the application. </p>
                        {/**section 5 */}
                      </div>
                      <Image alt="Placeholder image for project one" loading="lazy" width={200} height={48} decoding="async" className="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" style={{ color: 'transparent' }} src="/chess-cli-ss.png" />
                    </div>
                  </li>
                  <li className="mb-12">
                    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <div className="z-10 sm:order-2 sm:col-span-6">
                        <h3>
                          <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href="https://github.com/isoala/isoapp-react" target="_blank" rel="noreferrer noopener" aria-label="Project Two (opens in a new tab)">
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>&nbsp;
                              <span className="inline-block">React - NodeJS Application

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                  <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                                </svg>
                              </span>
                            </span>
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">portfolio application similar to this one, heavily inspired by fellow Next projects. created with React and NodeJS.</p>
                      </div>
                      <Image alt="Placeholder image for project two" loading="lazy" width={200} height={48} decoding="async" className="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" style={{ color: 'transparent' }} src="/react-app-ss.jpg" />
                    </div>
                  </li>
                  <li className="mb-12">
                    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <div className="z-10 sm:order-2 sm:col-span-6">
                        <h3>
                          <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href="https://github.com/isoala/Mission-Turkiye-Guide-PowerApps-Application-export" target="_blank" rel="noreferrer noopener" aria-label="Project Three (opens in a new tab)">
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>&nbsp;
                              <span className="inline-block">PowerApps Guide Application

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                  <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                                </svg>
                              </span>
                            </span>
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">Guide for United Stated expatriates stationed in Turkey. The app serves as an easy way to find emergency services, restaurants, and stores in the area. Created using Microsoft PowerApps, and Azure SQL.</p>
                        {/* Optional: Add links or technologies here */}
                      </div>
                      <Image alt="Placeholder image for project two" loading="lazy" width={200} height={48} decoding="async" className="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" style={{ color: 'transparent' }} src="/dos.png" />
                    </div>
                  </li>
                  {/* Add more project list items here */}
                </ul>
                <div className="mt-12">
                  <a className="inline-flex items-center font-medium leading-tight text-slate-200 group" aria-label="View Full Project Archive" href="/archive">

                  </a>
                </div>
              </div>
            </section>
            {/**section 6 */}

            <section id="fin" className="space-y-50">
              <p
                ref={setElementRef}
                className="text-base text-gray-600 dark:text-gray-400 transition-opacity">
                I built this web application using&nbsp;
                <Image
                  src="/next.svg" // Path to your SVG in the public directory
                  alt="SVG Logo" // Alt text for accessibility
                  width={100} // Adjust width as needed
                  height={70} // Adjust height as needed
                  className="inline-block ml-1 align-middle" // Style to align with text
                />
                &nbsp; .
              </p>
            </section>
          </div>
        </div>
        {/* Bottom Fixed Area */}
      </div>
    </div>

  );

};


export default Home;