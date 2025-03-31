import Image from 'next/image';
import Link from 'next/link';

const caseStudies = [
    {
        id: 1,
        title: 'Eureka Bookstore',
        description: 'India’s first specialist, independent children’s bookstore.',
        image: '/img/Eureka.png',
        link: '/eureka/'
    },
    {
        id: 2,
        title: 'FNB Basket',
        description: 'Online Indian food shopping experience delivering across Germany.',
        image: '/img/FNB.png',
        link: '/fnb/'
    },
    {
        id: 3,
        title: 'Indian Chemical News',
        description: 'Comprehensive news provider for well defined niche groups in the chemical industry.',
        image: '/img/ICN.png',
        link: '/icn/'
    },
    {
        id: 4,
        title: 'Indian Outdoor Advertising Association',
        description: 'The national body of Outdoor Media owners.',
        image: '/img/IOAA.png',
        link: '/ioaa/'
    },
    {
        id: 5,
        title: 'Rack N Sell',
        description: 'Technology solutions for retail and ecommerce logistics.',
        image: '/img/Rack-n-sell.png',
        link: '/rackncell/'
    },
    {
        id: 6,
        title: 'Retail 4 Growth',
        description: 'Positioned as a leading retail intelligence platform in India.',
        image: '/img/Retail-4-growth.png',
        link: '/retailgrowth/'
    },
    {
        id: 7,
        title: 'SHN Foods',
        description: 'One of the largest importer, wholesaler, distributor and retailer of Indian & Asian foodstuff.',
        image: '/img/SHN.png',
        link: '/shn/'
    },
    {
        id: 8,
        title: 'The Mobile Indian',
        description: 'A team of experienced journalists covering telecom, consumer electronics and start-ups.',
        image: '/img/The-mobile-indian.png',
        link: '/themobileind/'
    },

    {
        id: 9,
        title: 'Zahara Tours',
        description: 'Zahara Tours is the pioneer in the Travel and Tourism business in Oman. Since its modest beginning in 1971, Zahara Tours has..',
        image: '/img/zaharatours.png',
        link: '/zaharaTravels/'
    },
    {
        id: 10,
        title: 'Dotori',
        description: 'Dotori, Legal Name “Hana Hospitality Pvt Ltd” mainly delivers imported food from South Korea, Japan as well as food and daily...',
        image: '/img/Dotori.png',
        link: '/dotori/'
    },
    {
        id: 11,
        title: 'Dampf Company',
        description: 'As a German supplier based in the heart of the Ruhr area, they offer various models of electronic cigarettes, aromatic liquids...',
        image: '/img/Dampf-Company.png',
        link: '/dampf/'
    },

    {
        id: 12,
        title: 'Tag Resort',
        description: 'Tag Resorts – A premium and spirited hospitality company catering to your needs of leisure travel, luxury stay and escapade activities...',
        image: '/img/Teg-Resorts.png',
        link: '/tagresort/'
    },
    {
        id: 13,
        title: 'Consult Now',
        description: 'Consult Now is rated by its clients as one of the top Recruitment Agencies and job seekers for its high-quality job search...',
        image: '/img/Consult-now.png',
        link: '/consultancy/'
    },
    {
        id: 14,
        title: 'Media 4 Growth',
        description: 'Media4Growth, promoted by VJ Media Works Pvt Ltd, is India’s foremost news website on out-of-home (OOH) advertising...',
        image: '/img/media-4-growth.png',
        link: '/media4growth/'
    },
    {
        id: 15,
        title: 'Itrusoft',
        description: 'ITRUSOFT, one of the leading global custom software development and software outsourcing company, provides latest travel...',
        image: '/img/Itrusoft.png',
        link: '/iitrust/'
    },
    {
        id: 16,
        title: 'Typish Indisch',
        description: 'Typically Indian is a collective of amazing people who strive to create delicious Indian delicacies. They are advocates of fresh, authentic...',
        image: '/img/Typish.png',
        link: '/typisch/'
    },
    {
        id: 17,
        title: 'HR Katha',
        description: 'HR Katha is the medium-a place where every HR practitioner can visit, discuss, opine and share her/his knowledge and experience...',
        image: '/img/HR-Katha.png',
        link: '/hrkathprofile/'
    },
    {
        id: 18,
        title: 'Bookaro',
        description: 'Bookaroo - a children’s literature festival set up by Bookaroo Trust, a public charitable trust - endeavours to make books come alive..',
        image: '/img/bookaroo.png',
        link: '/bookaro/'
    },
    {
        id: 19,
        title: 'Trip Night',
        description: 'TripNight is a online travel marketplace offering you diverse travel packages & holiday deals by trusted travel agents and tour...',
        image: '/img/TripNight.png',
        link: '/tripnight/'
    },
    {
        id: 20,
        title: 'Alpide',
        description: 'Alpide ERP is a product of Prompt Solutions. At Prompt Solutions, they do not only develop custom software based on the needs..',
        image: '/img/Alpide.png',
        link: '/alpidessss/'  
    },
    {
        id: 21,
        title: 'Iam renew',
        description: 'I am Renew is an important online resource for news, views, analysis, trends, technology updates and interviews with prominent leaders...',
        image: '/img/I-am-renew.png',
        link: '/iamrenew/'
    },
    {
        id: 22,
        title: 'Destar',
        description: 'Destar is a Global Premier Staffing and Professional Services Company with two divisions, that is involved in the business...',
        image: '/img/Destar.png',
        link: '/destar/'
    },
    {
        id: 23,
        title: 'Doceree',
        description: 'Doceree is basically a publishing and advertising network professional platform that identifies Healthcare Professionals (HCPs)...',
        image: '/img/doceree.png',
        link: '/doceree/'
    },


];

export default function CaseStudiesPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-16 px-4 sm:px-8 md:px-12 lg:px-20">
            {/* Header */}
            <div className="relative h-48 sm:h-56 md:h-60 bg-gradient-to-r from-indigo-900 via-blue-800 to-indigo-900 text-white flex items-center justify-center overflow-hidden mb-10 rounded-xl shadow-lg">
                <div className="absolute inset-0 bg-[url('/img/digital-bg.jpg')] bg-cover bg-center opacity-20 animate-pulse"></div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold drop-shadow-lg">Case Studies</h1>
                    <p className="mt-1 text-sm sm:text-base md:text-lg font-medium text-blue-100">
                        Turning Great Ideas Into <span className="text-cyan-300 font-semibold">Great Digital Solutions</span>
                    </p>
                    <div className="mt-2 flex justify-center">
                        <div className="h-1 w-20 bg-cyan-400 rounded-full shadow-md"></div>
                    </div>
                </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {caseStudies.map((study) => (
                    <div
                        key={study.id}
                        className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200 group transform hover:-translate-y-2 hover:scale-[1.015] hover:border-indigo-300"
                    >
                        <div className="relative w-full h-28 overflow-hidden rounded-t-xl">
                            <Image
                                src={study.image}
                                alt={study.title}
                                layout="fill"
                                objectFit="cover"
                                className="group-hover:scale-105 transition-transform duration-300 ease-in-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                        </div>
                        <div className="p-3">
                            <h3 className="text-base font-semibold text-indigo-700 mb-1 group-hover:underline">{study.title}</h3>
                            <p className="text-gray-600 text-xs mb-2 line-clamp-3">{study.description}</p>
                            <Link href={study.link} className="text-indigo-500 font-medium text-xs hover:underline">
                                View case study →
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}