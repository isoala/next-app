'use client'

import React, { useRef, useEffect } from 'react';
import Image from "next/image";
import { cn } from "@/lib/utils";
//import { GithubIcon, LinkedinIcon, MailIcon, InstagramIcon, XIcon } from '@/components/icons';
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
  

  return (

    <div className={cn(
      "flex flex-col md:flex-row min-h-screen bg-gray-900",
      systemFonts,
      "font-['var(--font-inter)'] font-feature-settings-['ss03','cv02','cv11']"
    )}>

      <div className="w-full md:w-[45%] pl-6 pr-10 md:p-20 pt-10 flex flex-col items-start md:top-10 top-10 md:mt-5 md:sticky overflow-y-clip bg-gray-900"><div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 md:text-5xl flex">
          <Link href="/">Abdurahman Alarcon</Link>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-300 sm:text-xl flex">
          Student @ GMU
        </h2>
        
        <p className="mt-4 max-w-xs leading-normal text-slate-400 flex">
          Pursuing B.S. in Information Technology, concentration in programming.
        </p>
        <nav className="nav hidden md:block" aria-label="In-page jump links">
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
          </ul>
        </nav>
      </div>
        <div className=" lg:mt-50 sm:mt-6  md:block">
          <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
            <li className="mr-5 shrink-0 text-xs"><a className="block hover:text-slate-200" href="https://github.com/isoala" target="_blank" rel="noreferrer noopener" aria-label="GitHub (opens in a new tab)" title="GitHub"><span className="sr-only">GitHub</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-6 w-6" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg></a></li>
            <li className="mr-5 shrink-0 text-xs"><a className="block hover:text-slate-200" href="https://www.linkedin.com/in/abdurahman-alarcon/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn (opens in a new tab)" title="LinkedIn"><span className="sr-only">LinkedIn</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg></a></li>
            <li className="mr-5 shrink-0 text-xs"><a className="block hover:text-slate-200" href="https://codepen.io/isoala" target="_blank" rel="noreferrer noopener" aria-label="CodePen (opens in a new tab)" title="CodePen"><span className="sr-only">CodePen</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true"><path d="M3.06 41.732L32 60.932l28.94-19.2V22.268L32 3.068l-28.94 19.2zm57.878 0L32 22.268 3.06 41.732m0-19.463L32 41.47l28.94-19.2M32 3.068v19.2m0 19.463v19.2" strokeWidth="5"></path></svg></a></li>
            <li className="mr-5 shrink-0 text-xs"><a className="block hover:text-slate-200" href="https://instagram.com/manny.ent" target="_blank" rel="noreferrer noopener" aria-label="Instagram (opens in a new tab)" title="Instagram"><span className="sr-only">Instagram</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" fill="currentColor" className="h-6 w-6" aria-hidden="true"><path d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34"></path></svg></a></li>
            <li className="mr-5 shrink-0 text-xs"><a className="block hover:text-slate-200" href="https://www.goodreads.com/isoala" target="_blank" rel="noreferrer noopener" aria-label="Goodreads (opens in a new tab)" title="Goodreads"><span className="sr-only">Goodreads</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" fill="currentColor" className="h-6 w-6" aria-hidden="true"><path d="M663.8 382.4c10.2 74.6-9.4 158-71.8 201.4-44.6 31-105.6 28.2-141.6 11.4-74.2-34.6-99-117.2-93.6-194.4 8.6-121.8 81.8-175.8 150.6-175 93.8-0.4 143.6 63.6 156.4 156.6zM960 176v672c0 61.8-50.2 112-112 112H176c-61.8 0-112-50.2-112-112V176c0-61.8 50.2-112 112-112h672c61.8 0 112 50.2 112 112zM724 626.4s-0.2-68-0.2-434.6h-58v80.6c-1.6 0.6-2.4-1-3.2-2.4-19.2-41.4-71.8-92.6-152-92-103.8 0.8-174.4 62.4-201.2 155.6-8.6 29.8-11.6 60.2-11 91.2 3.4 155.8 90.2 235.6 224.8 230.4 57.8-2.2 109-34 138-90.4 1-2 2.2-3.8 3.4-5.8 0.4 0.2 0.8 0.2 1.2 0.4 0.6 7.6 0.4 61.4 0.2 69-0.4 29.6-4 59-14.4 87-15.6 42-44.6 69.4-89 79-35.6 7.8-71.2 7.6-106.4-2.4-43-12.2-73-38-82.2-83.6-0.6-3.2-2.6-2.6-4.6-2.6h-53.6c1.6 21.2 6.4 40.6 17 58.4 48.4 81 165.4 97 256.4 74.8 99.8-24.6 134.6-109.8 134.8-212.6z" fill=""></path></svg></a></li></ul>
        </div>
      </div>
      <div className="w-full md:w-[55%] flex flex-col lg:h-screen overflow-y-auto overflow-x-hidden pt-24 lg:py-24 ">
          <section className=" mb-4 scroll-mt-16 md:mb-6 lg:mb-20 lg:scroll-mt-24 ml-6 mr-6 md:mr-20" id="about">

            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-6 md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 ">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-300 lg:pt-2">About</h2>
            </div>
            <div className=" md:mt-10 lg:mt-5">
              <p className="mb-4 text-slate-400">I&apos;m a student eager to expand my knowledge in the IT industry. My focus lies in actively seeking opportunities to deepen my understanding of various IT domains and stay ahead of the latest advancements shaping the digital landscape. I am particularly interested in cybersecurity, and I am committed to continuous learning and skill development to become a well-rounded IT professional.</p>
              <p className="mb-4 text-left text-slate-400">In the past, I&apos;ve had the opportunity to internship at the US embassy of Ankara working for the Department of State. This experience provided invaluable insights into the operational aspects of international diplomacy and the critical role of technology within such environments. During my time there, I developed a web application to streamline internal communication processes and also gained hands-on experience maintaining the embassy&apos;s network systems, ensuring their security and reliability.
              </p>
              <p className="mb-4 text-left text-slate-400"> In my freetime, I like to work out, play chess, and read. One of my favorite books is The Righteous Mind by Johnathan Haidt.
              </p>
            </div>
          </section>


          <section id="school" className="space-y-4 bg-gray-900 mb-4 scroll-mt-16 md:mb-6 lg:mb-20 lg:scroll-mt-24 mx-6">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 bg-gray-900 md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-300">School</h2>
            </div>

            <AnimatedTimelinePage
              containerClassName="bg-gray-100 bg-gray-900 hover:text-white transition-opacity font-medium focus-visible:text-white-500 transition duration-200 "
              events={[
                {
                  date: '2018-2022',
                  description: 'AP student, Math Honor Society, Science Honor Society, President of Coding Club',
                  id: '1',
                  title: 'Hayfield Secondary School'
                },
                {
                  date: '2022-2024',
                  description: 'Information Technology A.S.',
                  id: '2',
                  title: 'Northern Virginia Community College'
                },
                {
                  date: '2024-2026',
                  description: 'pursing Information Technology B.S.',
                  id: '3',
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

          <section id="experience" className="space-y-2 bg-gray-900 mb-4 scroll-mt-16 md:mb-6 lg:mb-20 lg:scroll-mt-24 ml-6 mr-6 md:mr-20">

            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 bg-gray-900 md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
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
          <section id="resume" className=" space-y-2 bg-gray-900 mb-4 scroll-mt-16 md:mb-6 lg:mb-36 lg:scroll-mt-24 ml-6 mr-6 md:mr-20">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-2 bg-gray-900 md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-300">Resume</h2>
            </div>
            <a className="inline-flex items-baseline leading-tight hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base" href="/resume.pdf" target="_blank" rel="noreferrer noopener" aria-label="View Full Résumé (opens in a new tab)"><span>View Full <span className="inline-block">Résumé<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg></span></span></a>
          </section>
          <section id="projects" className="space-y-4 bg-gray-900 mb-4 scroll-mt-16 md:mb-6 lg:mb-36 lg:scroll-mt-24 ml-6 mr-6 md:mr-20" aria-label="Selected projects">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 bg-gray-900 md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
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
                    </div>
                    <Image alt="Placeholder image for project one" loading="lazy" width={200} height={48} decoding="async" className="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" style={{ color: 'transparent' }} src="/chess-cli-ss.png" />
                  </div>
                </li>
                <li className="mb-12">
                  <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <div className="z-10 sm:order-2 sm:col-span-6">
                      <h3>
                        <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href="https://github.com/isoala/next-app" target="_blank" rel="noreferrer noopener" aria-label="Project Three (opens in a new tab)">
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span>&nbsp;
                            <span className="inline-block"> Next JS App

                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                              </svg>
                            </span>
                          </span>
                        </a>
                      </h3>
                      <p className="mt-2 text-sm leading-normal"> Portfolio Application created using TypeScript, TailwindCSS, and NextJS Framework.</p>
                    </div>
                    <Image alt="Placeholder image for project two" loading="lazy" width={200} height={48} decoding="async" className="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" style={{ color: 'transparent' }} src="/next-app-ss.png" />
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
                            <span className="inline-block">React Application

                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                              </svg>
                            </span>
                          </span>
                        </a>
                      </h3>
                      <p className="mt-2 text-sm leading-normal">portfolio application similar to this one. created with React Framework and NodeJS.</p>
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
                    </div>
                    <Image alt="Placeholder image for project two" loading="lazy" width={200} height={48} decoding="async" className="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" style={{ color: 'transparent' }} src="/dos.png" />
                  </div>
                </li>
                
              </ul>
              <div className="mt-12">
                <a className="inline-flex items-center font-medium leading-tight text-slate-200 group" aria-label="View Full Project Archive" href="/archive">
                </a>
              </div>
            </div>
          </section>
          <section id="fin" className="bg-gray-900 mb-4 scroll-mt-16 md:mb-6 lg:mb-2 lg:scroll-mt-24 ml-6 mr-6 md:mr-20">
            <p
              className="text-base text-gray-400 transition-opacity">
              I built this web application using&nbsp;
              <Image
                src="/next.svg"
                alt="SVG Logo"
                width={100}
                height={70}
                className="inline-block ml-1 align-middle"
              />
              &nbsp; .
            </p>
          </section>
        </div>
    </div>

  );

};


export default Home;