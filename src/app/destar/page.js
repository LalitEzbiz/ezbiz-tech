import { FaUsers, FaBullseye, FaCogs, FaStar } from 'react-icons/fa';
import { DiMysql, DiPhp } from 'react-icons/di';
import { SiTailwindcss, SiHtml5, SiCss3, SiJavascript, SiJquery } from 'react-icons/si';

export default function DestarProfile() {
  return (
    <div className="bg-gradient-to-br from-blue-900 to-black text-white min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">
          Destar
        </h1>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <FaUsers className="text-orange-400" /> Client Profile
              </h2>
              <p className="mt-2 text-gray-300">
                Destar is a global Premier Staffing and Executive Search company with a focus on IT staffing and professional services. They deliver qualified talent and recruitment support to clients worldwide through two distinct business divisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <FaBullseye className="text-green-400" /> Objective
              </h2>
              <p className="mt-2 text-gray-300">
                The client wanted a platform to highlight Destar’s services and enable candidates to submit updated CVs. The backend had to support profile uploads, structured CV data, and future-ready design enhancements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <FaCogs className="text-yellow-400" /> Approach
              </h2>
              <p className="mt-2 text-gray-300">
                Ezbiz created a fast, responsive site architecture using HTML and PHP, with dynamic sections for services and candidate onboarding. An admin panel lets staff manage submissions, download CVs, and optimize listings efficiently.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <FaStar className="text-blue-400" /> Results
              </h2>
              <p className="mt-2 text-gray-300">
                The website successfully streamlined CV handling, increased candidate engagement, and helped Destar present a more professional online presence.
              </p>
            </section>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg text-black">
            <h3 className="text-xl font-semibold mb-4 border-b pb-2">Services Provided</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Design Prototype</li>
              <li>Frontend Development</li>
              <li>Backend Development</li>
              <li>QA & Testing</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-4 border-b pb-2">Technology Used</h3>
            <div className="flex flex-wrap gap-4 text-3xl">
              <SiHtml5 title="HTML5" className="text-orange-600" />
              <SiCss3 title="CSS3" className="text-blue-600" />
              <SiJavascript title="JavaScript" className="text-yellow-500" />
              <SiJquery title="jQuery" className="text-blue-400" />
              <DiPhp title="PHP" className="text-indigo-700" />
              <DiMysql title="MySQL" className="text-yellow-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
