import { Head, Link } from '@inertiajs/react';
import NavBar from '@/Components/NavBar';
import Footer from '@/Components/Footer';

const posts = [
    {
        id: 1,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },

    },
    {
        id: 2,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },

    },
    // More posts...
]

export default function Index({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classNameList.add('!hidden');
        document.getElementById('docs-card')?.classNameList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classNameList.add('!flex-row');
        document.getElementById('background')?.classNameList.add('!hidden');
    };

    return (
        <>
            <Head title="Home" />
            <NavBar />
            <main className='min-h-screen bg-slate-50/50'>
                {/* <!-- Hero --> */}
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    {/* <!-- Grid --> */}
                    <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
                        <div>
                            <h1 className="font-heading block text-4xl font-bold text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight">Empowering Minds,  <span className="text-primary">Transforming Futures
                            </span></h1>
                            <p className="font-body mt-3 text-lg text-gray-800">Join us in creating opportunities through education, innovation, and community development. Together, we can make a difference.</p>

                            {/* <!-- Buttons --> */}
                            <div className="mt-7 grid gap-3 w-full sm:inline-flex">
                                <Link className="py-3 px-4 font-body inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" to="#">
                                    Become a volunteer
                                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                </Link>
                            </div>
                            {/* <!-- End Buttons --> */}


                        </div>
                        {/* <!-- End Col --> */}

                        <div className="relative ms-4">
                            <img className="w-full rounded-md" src="https://img.freepik.com/free-photo/front-view-covid19-concept-school_23-2148777459.jpg?t=st=1734567135~exp=1734570735~hmac=b2a4c994c213de4a44a1ad7ad3ac5110d26029a379f0933feee1cca98b98b3e1&w=740" alt="Hero Image" />
                            <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-neutral-800 dark:via-neutral-900/0 dark:to-neutral-900/0"></div>

                            {/* <!-- SVG--> */}
                            <div className="absolute bottom-0 start-0">
                                <svg className="w-2/3 ms-auto h-auto text-white dark:text-neutral-900" width="630" height="451" viewBox="0 0 630 451" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="531" y="352" width="99" height="99" fill="currentColor" />
                                    <rect x="140" y="352" width="106" height="99" fill="currentColor" />
                                    <rect x="482" y="402" width="64" height="49" fill="currentColor" />
                                    <rect x="433" y="402" width="63" height="49" fill="currentColor" />
                                    <rect x="384" y="352" width="49" height="50" fill="currentColor" />
                                    <rect x="531" y="328" width="50" height="50" fill="currentColor" />
                                    <rect x="99" y="303" width="49" height="58" fill="currentColor" />
                                    <rect x="99" y="352" width="49" height="50" fill="currentColor" />
                                    <rect x="99" y="392" width="49" height="59" fill="currentColor" />
                                    <rect x="44" y="402" width="66" height="49" fill="currentColor" />
                                    <rect x="234" y="402" width="62" height="49" fill="currentColor" />
                                    <rect x="334" y="303" width="50" height="49" fill="currentColor" />
                                    <rect x="581" width="49" height="49" fill="currentColor" />
                                    <rect x="581" width="49" height="64" fill="currentColor" />
                                    <rect x="482" y="123" width="49" height="49" fill="currentColor" />
                                    <rect x="507" y="124" width="49" height="24" fill="currentColor" />
                                    <rect x="531" y="49" width="99" height="99" fill="currentColor" />
                                </svg>
                            </div>
                            {/* <!-- End SVG--> */}
                        </div>
                        {/* <!-- End Col --> */}
                    </div>
                    {/* <!-- End Grid --> */}
                </div>
                {/* <!-- End Hero --> */}
                <div className="bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <h2 className="text-center text-lg/8 font-semibold font-heading text-gray-900">
                            Our partners and sponsors
                        </h2>
                        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                            <img
                                alt="Transistor"
                                src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg"
                                width={158}
                                height={48}
                                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            />
                            <img
                                alt="Reform"
                                src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg"
                                width={158}
                                height={48}
                                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            />
                            <img
                                alt="Tuple"
                                src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg"
                                width={158}
                                height={48}
                                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            />
                            <img
                                alt="SavvyCal"
                                src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg"
                                width={158}
                                height={48}
                                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                            />
                            <img
                                alt="Statamic"
                                src="https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg"
                                width={158}
                                height={48}
                                className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                            />
                        </div>
                    </div>
                </div>
                {/* About Section */}
                <div className="py-24 relative xl:mr-0 lg:mr-5 mr-0">
                    <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                        <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
                            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                                <div className="w-full flex-col justify-center items-start gap-8 flex">
                                    <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                                        <h6 className="text-gray-400 text-base font-normal leading-relaxed font-body">Who We Are</h6>
                                        <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                            <h2
                                                className="text-primary text-4xl font-bold font-manrope leading-normal lg:text-start text-center font-heading">
                                                Empowering Lives Through <span className='text-black'>Education and Innovation.</span></h2>
                                            <p
                                                className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center font-body">
                                                At Seniom Foundation, we believe that education is the cornerstone of progress. Our mission is to bridge the gap in access to quality learning opportunities for underserved communities, empowering individuals to unlock their full potential.
                                            </p>
                                            <p
                                                className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center font-body">
                                                Through innovative programs, scholarships, and mentorship, we strive to create a future where every child, regardless of background, has the tools to succeed. Whether it's providing educational resources, supporting technological advancements, or fostering leadership skills, Seniom Foundation is dedicated to making a lasting impact.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-full flex-col justify-center items-start gap-6 flex">
                                        <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                            <div
                                                className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                                <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9 font-heading">Global Reach</h4>
                                                <p className="text-gray-500 text-base font-normal leading-relaxed font-body">Serving communities locally and internationally.</p>
                                            </div>
                                            <div
                                                className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                                <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9 font-heading">Education Programs
                                                </h4>
                                                <p className="text-gray-500 text-base font-normal leading-relaxed font-body">Tailored to meet the diverse needs of learners.</p>
                                            </div>
                                        </div>
                                        <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                            <div
                                                className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                                <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9 font-heading"> Partnerships</h4>
                                                <p className="text-gray-500 text-base font-normal leading-relaxed font-body">Collaborating with schools, organizations, and volunteers.</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <a href='/services'
                                    className="sm:w-fit w-full group px-3.5 py-2 bg-primary hover:bg-primary-light rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex">
                                    <span
                                        className="px-1.5 text-white text-sm leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out capitalize font-medium font-body">Keep in touch</span>
                                    <svg className="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out"
                                        xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                        <path d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996" stroke="#FFFFFF" stroke-width="1.6"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </a>
                            </div>
                            <div className="w-full lg:justify-start justify-center items-start flex">
                                <div
                                    className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
                                    <img className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                                        src="https://img.freepik.com/free-photo/woman-teaching-kids-class_23-2148892552.jpg?t=st=1735212498~exp=1735216098~hmac=4ec479229d0b25ce52d3318146badcaad5665d8a2e0fe1777f70f0f776d7781e&w=740" alt="about Us image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* About Section end*/}

                {/* <!-- Icon Blocks --> */}
                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-16 mt-10 mx-auto bg-slate-50">
                    {/* <!-- Grid --> */}
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="lg:w-3/4">
                            <h2 className="font-heading text-3xl text-gray-800 font-bold lg:text-4xl">
                                Our Programs & Initiatives
                            </h2>
                            <p className="mt-3 font-body text-gray-800">
                                Driving Change Through Education, Innovation, and Community Empowerment.
                            </p>
                            <p className="mt-5">
                                <a className="inline-flex items-center gap-x-1 text-sm text-primary  decoration-2 transition hover:underline  focus:outline-none focus:underline font-medium" href="#">
                                    Learn More
                                    <svg className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                </a>
                            </p>
                        </div>
                        {/* <!-- End Col --> */}

                        <div className="space-y-6 lg:space-y-10">
                            {/* <!-- Icon Block --> */}
                            <div className="flex gap-x-5 sm:gap-x-8">
                                {/* <!-- Icon --> */}
                                <span className="shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto">
                                    <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                                </span>
                                <div className="grow">
                                    <h3 className="text-base sm:text-lg font-semibold font-heading text-gray-800">
                                    Scholarships for Success
                                    </h3>
                                    <p className="mt-1 text-gray-600">
                                    We provide financial aid and educational resources to underprivileged students, ensuring they have the tools to achieve their academic dreams.
                                    </p>
                                </div>
                            </div>
                            {/* <!-- End Icon Block --> */}

                            {/* <!-- Icon Block --> */}
                            <div className="flex gap-x-5 sm:gap-x-8">
                                {/* <!-- Icon --> */}
                                <span className="shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto">
                                    <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" /><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" /></svg>
                                </span>
                                <div className="grow">
                                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                                    Tech-Driven Learning
                                    </h3>
                                    <p className="mt-1 text-gray-600">
                                    Empowering students and educators with access to digital tools, e-learning platforms, and workshops designed to foster 21st-century skills.
                                    </p>
                                </div>
                            </div>
                            {/* <!-- End Icon Block --> */}

                            {/* <!-- Icon Block --> */}
                            <div className="flex gap-x-5 sm:gap-x-8">
                                {/* <!-- Icon --> */}
                                <span className="shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto">
                                    <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10v12" /><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" /></svg>
                                </span>
                                <div className="grow">
                                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                                    Community Leadership Initiative
                                    </h3>
                                    <p className="mt-1 text-gray-600">
                                    Developing young leaders through mentorship programs and community projects that inspire social responsibility and innovation.
                                    </p>
                                </div>
                            </div>
                            {/* <!-- End Icon Block --> */}
                        </div>
                        {/* <!-- End Col --> */}
                    </div>
                    {/* <!-- End Grid --> */}
                </div>
                {/* <!-- End Icon Blocks --> */}

                {/* <!-- Card Blog --> */}
                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                    {/* <!-- Title --> */}
                    <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight font-heading">Insights & Inspirations</h2>
                        <p className="mt-1 text-gray-600 font-body">Stay informed with the latest stories, updates, and thought-provoking articles on education, empowerment, and innovation from the Seniom Foundation.</p>
                    </div>
                    {/* <!-- End Title --> */}

                    {/* <!-- Grid --> */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* <!-- Card --> */}
                        <a className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5" href="#">
                            <div className="aspect-w-16 aspect-h-11">
                                <img className="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Blog Image" />
                            </div>
                            <div className="my-6">
                                <h3 className="text-xl font-semibold text-gray-800 font-heading">
                                    Bridging the Gap in Education
                                </h3>
                                <p className="mt-5 text-gray-600 font-body">
                                    Discover how innovative strategies are empowering underprivileged students and transforming communities.
                                </p>
                            </div>
                            <div className="mt-auto flex items-center gap-x-3">
                                <img className="size-8 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
                                <div>
                                    <h5 className="text-sm text-gray-800">By Lauren Waller</h5>
                                </div>
                            </div>
                        </a>
                        {/* <!-- End Card --> */}

                        {/* <!-- Card --> */}
                        <a className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5" href="#">
                            <div className="aspect-w-16 aspect-h-11">
                                <img className="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1562851529-c370841f6536?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Blog Image" />
                            </div>
                            <div className="my-6">
                                <h3 className="text-xl font-semibold text-gray-800 font-heading">
                                    Unlocking Potential Through Technology

                                </h3>
                                <p className="mt-5 text-gray-600 font-body">
                                    Explore how digital tools and e-learning are redefining access to quality education worldwide.
                                </p>
                            </div>
                            <div className="mt-auto flex items-center gap-x-3">
                                <img className="size-8 rounded-full" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
                                <div>
                                    <h5 className="text-sm text-gray-800">By Aaron Larsson</h5>
                                </div>
                            </div>
                        </a>
                        {/* <!-- End Card --> */}

                        {/* <!-- Card --> */}
                        <a className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5" href="#">
                            <div className="aspect-w-16 aspect-h-11">
                                <img className="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1521321205814-9d673c65c167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Blog Image" />
                            </div>
                            <div className="my-6">
                                <h3 className="text-xl font-semibold text-gray-800 font-heading">
                                    Inspiring Stories of Change
                                </h3>
                                <p className="mt-5 text-gray-600 font-body">
                                    Meet the individuals whose lives have been transformed through the support of the Seniom Foundation.
                                </p>
                            </div>
                            <div className="mt-auto flex items-center gap-x-3">
                                <img className="size-8 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
                                <div>
                                    <h5 className="text-sm text-gray-800">By Lauren Waller</h5>
                                </div>
                            </div>
                        </a>
                        {/* <!-- End Card --> */}
                    </div>
                    {/* <!-- End Grid --> */}

                    {/* <!-- Card --> */}
                    <div class="mt-12 text-center">
                        <a class="py-3 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-lg border border-gray-200 bg-white text-secondary shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" href="/blog">
                            Read more
                            <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                        </a>
                    </div>
                    {/* <!-- End Card --> */}
                </div>
                {/* <!-- End Card Blog --> */}

                {/* CTA SECTION */}
                <div className="bg-white">
                    <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                        <div className="relative isolate overflow-hidden bg-secondary-light px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                            <svg
                                viewBox="0 0 1024 1024"
                                aria-hidden="true"
                                className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                            >
                                <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                                <defs>
                                    <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                        <stop stopColor="#7775D6" />
                                        <stop offset={1} stopColor="#E935C1" />
                                    </radialGradient>
                                </defs>
                            </svg>
                            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                                <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl font-heading">
                                Be Part of the Change
                                </h2>
                                <p className="mt-6 text-pretty text-lg/8 text-gray-600 font-body">
                                Your support can help us empower more lives through education and innovation. Together, we can build a brighter future.
                                </p>
                                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                                    <a
                                        href="#"
                                        className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition duration-500 font-body"
                                    >
                                        Donate Now
                                    </a>
                                    <a href="#" className="text-sm/6 font-semibold text-white font-body">
                                    Get Involved <span aria-hidden="true">→</span>
                                    </a>
                                </div>
                            </div>
                            <div className="relative mt-16 h-80 lg:mt-8">
                                <img
                                    alt="App screenshot"
                                    src="https://img.freepik.com/free-photo/african-children-ai-generated-image_268835-6627.jpg?t=st=1734913995~exp=1734917595~hmac=04e1e960d98ff5067714d8f6a76ad531044bb99f44c35af132d0f68f1145ea25&w=740"
                                    width={1824}
                                    height={1080}
                                    className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* CTA SECTION ENDS */}

                {/* <!-- Team --> */}
                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                    {/* <!-- Title --> */}
                    <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight capitalize font-heading">Our Board of trustees</h2>
                        <p className='font-body text-gray-600'>Meet the dedicated leaders driving our mission to empower communities and transform lives through education and innovation.</p>
                    </div>
                    {/* <!-- End Title --> */}

                    {/* <!-- Grid --> */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
                        <div className="text-center">
                            <img className="rounded-xl sm:size-48 lg:size-60 mx-auto" src="/assets/img/Chibugo Ernest.jpg" alt="Avatar" />
                            <div className="mt-2 sm:mt-4">
                                <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
                                    Chibugo Ernest
                                </h3>
                                <p className="text-xs text-gray-600 sm:text-sm lg:text-base">

                                </p>
                            </div>
                        </div>
                        {/* <!-- End Col --> */}

                        <div className="text-center">
                            <img className="rounded-xl sm:size-48 lg:size-60 mx-auto" src="/assets/img/donald okolo.jpg" alt="Avatar" />
                            <div className="mt-2 sm:mt-4">
                                <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
                                    Donald Okolo
                                </h3>
                                <p className="text-xs text-gray-600 sm:text-sm lg:text-base">

                                </p>
                            </div>
                        </div>
                        {/* <!-- End Col --> */}

                        <div className="text-center">
                            <img className="rounded-xl sm:size-48 lg:size-60 mx-auto" src="/assets/img/Lady Anuli Vivian Okolo (LSM).jpg" alt="Avatar" />
                            <div className="mt-2 sm:mt-4">
                                <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
                                    Anuli Vivian Okolo
                                </h3>
                                <p className="text-xs text-gray-600 sm:text-sm lg:text-base">
                                    LSM
                                </p>
                            </div>
                        </div>
                        {/* <!-- End Col --> */}

                        <div className="text-center">
                            <img className="rounded-xl sm:size-48 lg:size-60 mx-auto" src="/assets/img/4.jpg" alt="Avatar" />
                            <div className="mt-2 sm:mt-4">
                                <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
                                    Victoria Uche Okolo
                                </h3>
                                <p className="text-xs text-gray-600 sm:text-sm lg:text-base">
                                    LSM
                                </p>
                            </div>
                        </div>
                        {/* <!-- End Col --> */}

                        <div className="text-center">
                            <img className="rounded-xl sm:size-48 lg:size-60 mx-auto" src="/assets/img/5.jpg" alt="Avatar" />
                            <div className="mt-2 sm:mt-4">
                                <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
                                    Ogonna Osita-Okoli
                                </h3>
                                <p className="text-xs text-gray-600 sm:text-sm lg:text-base">

                                </p>
                            </div>
                        </div>
                        {/* <!-- End Col --> */}

                        <div className="text-center">
                            <img className="rounded-xl sm:size-48 lg:size-60 mx-auto" src="/assets/img/6.jpg" alt="Avatar" />
                            <div className="mt-2 sm:mt-4">
                                <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
                                    Ijeoma Jeff-Ezechukwu
                                </h3>
                                <p className="text-xs text-gray-600 sm:text-sm lg:text-base">

                                </p>
                            </div>
                        </div>
                        {/* <!-- End Col --> */}

                        <div className="text-center">
                            <img className="rounded-xl sm:size-48 lg:size-60 mx-auto" src="/assets/img/7.jpg" alt="Avatar" />
                            <div className="mt-2 sm:mt-4">
                                <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
                                    Nkiruka Innocent-Okoli
                                </h3>
                                <p className="text-xs text-gray-600 sm:text-sm lg:text-base">

                                </p>
                            </div>
                        </div>
                        {/* <!-- End Col --> */}

                        <div className="text-center">
                            <img className="rounded-xl sm:size-48 lg:size-60 mx-auto" src="/assets/img/8.jpg" alt="Avatar" />
                            <div className="mt-2 sm:mt-4">
                                <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
                                    Very Rev. Fr. Benedict Sunday Okoli
                                </h3>
                                <p className="text-xs text-gray-600 sm:text-sm lg:text-base">
                                    Very Reverend Father
                                </p>
                            </div>
                        </div>
                        {/* <!-- End Col --> */}



                    </div>
                    {/* <!-- End Grid --> */}
                </div>
                {/* <!-- End Team --> */}

                {/* contact us */}
                <section className="text-gray-600 body-font relative bg-white">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-12">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 font-heading">Get in Touch with Us</h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base font-body">Have questions, want to collaborate, or need more information? We’d love to hear from you!</p>
                        </div>
                        <div className="lg:w-1/2 md:w-2/3 mx-auto">
                            <div className="flex flex-wrap -m-2">
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
                                        <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-secondary-light focus:bg-white focus:ring-2 focus:ring-secondary-light text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                                        <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-secondary-light focus:bg-white focus:ring-2 focus:ring-secondary-light text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
                                        <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-secondary-light focus:bg-white focus:ring-2 focus:ring-secondary-light h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <button className="flex mx-auto text-white bg-secondary border-0 py-2 px-8 focus:outline-none hover:bg-secondary-light rounded text-lg">Send Message</button>
                                </div>
                                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                                    <a className="text-secondary-light"> info@seniomfoundation.org</a>
                                    <p className="text-secondary-accent"> +234 800 123 4567</p>
                                    <p className="leading-normal my-5">123 Foundation Avenue, Lagos, Nigeria
                                    </p>
                                    <span className="inline-flex">
                                        <a className="text-gray-500">
                                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                            </svg>
                                        </a>
                                        <a className="ml-4 text-gray-500">
                                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                            </svg>
                                        </a>
                                        <a className="ml-4 text-gray-500">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                            </svg>
                                        </a>
                                        <a className="ml-4 text-gray-500">
                                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* contact us end */}
            </main>
            <Footer />
        </>
    );
}