import { FaUsers, FaBullseye, FaCogs, FaStar } from 'react-icons/fa';
import { DiMysql, DiPhp } from 'react-icons/di';
import { SiTailwindcss, SiHtml5, SiCss3, SiJavascript, SiJquery } from 'react-icons/si';

export default function AlpideProfile() {
  return (
    <div className="bg-gradient-to-br from-blue-900 to-black text-white min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">
          Alpide
        </h1>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <FaUsers className="text-orange-400" /> Client Profile
              </h2>
              <p className="mt-2 text-gray-300">
                Alpide ERP is a robust solution from Prompt Solutions. They focus on delivering custom ERP platforms tailored to client-specific workflows while also offering expert consultation services that reflect a high standard of professionalism.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <FaBullseye className="text-green-400" /> Objective
              </h2>
              <p className="mt-2 text-gray-300">
                The objective was to showcase all ERP services offered by Alpide in one unified platform. The site needed to increase leads, website interaction, and create a smooth path for visitors to reach out for ERP consulting or implementation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <FaCogs className="text-yellow-400" /> Approach
              </h2>
              <p className="mt-2 text-gray-300">
                Ezbiz created a responsive, information-first website with organized service sections, easy contact triggers, and CTA placement. HTML and PHP were used for quick deployment and scalability across updates and client onboarding.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <FaStar className="text-blue-400" /> Results
              </h2>
              <p className="mt-2 text-gray-300">
                The result was a sharp increase in quality leads, better brand recall, and improved client interaction on the Alpide platform across industries.
              </p>
            </section>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg text-black">
            <h3 className="text-xl font-semibold mb-4 border-b pb-2">Services Provided</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Design Prototype</li>
              <li>Frontend Development</li>
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
