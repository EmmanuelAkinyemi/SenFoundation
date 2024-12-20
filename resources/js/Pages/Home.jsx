import { Head, Link } from '@inertiajs/react';
import NavBar from '@/Components/NavBar';
import Footer from '@/Components/Footer';

export default function Home({ auth, laravelVersion, phpVersion }) {
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
                            <h1 className="font-heading block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight">Education for All,  <span className="text-secondary-accent">Hope for Many
                            </span></h1>
                            <p className="font-body mt-3 text-lg text-gray-800">Together, we can break barriers and create a world where learning knows no bounds.</p>

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

                {/* About Section */}
                <div className="py-24 relative xl:mr-0 lg:mr-5 mr-0">
                    <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                        <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
                            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                                <div className="w-full flex-col justify-center items-start gap-8 flex">
                                    <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                                        <h6 className="text-gray-400 text-base font-normal leading-relaxed font-body">About Us</h6>
                                        <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                            <h2
                                                className="text-primary-light text-4xl font-bold font-manrope leading-normal lg:text-start text-center font-heading">
                                                The Tale of Our Achievement <span className='text-secondary-accent'>Story</span></h2>
                                            <p
                                                className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center font-body">
                                                Our achievement story is a testament to teamwork and perseverance. Together, we've
                                                overcome challenges, celebrated victories, and created a narrative of progress and
                                                success.</p>
                                        </div>
                                    </div>
                                    <div className="w-full flex-col justify-center items-start gap-6 flex">
                                        <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                            <div
                                                className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                                <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9 font-heading">33+ Years</h4>
                                                <p className="text-gray-500 text-base font-normal leading-relaxed font-body">Influencing Digital
                                                    Landscapes Together</p>
                                            </div>
                                            <div
                                                className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                                <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9 font-heading">125+ Projects
                                                </h4>
                                                <p className="text-gray-500 text-base font-normal leading-relaxed font-body">Excellence Achieved
                                                    Through Success</p>
                                            </div>
                                        </div>
                                        <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                            <div
                                                className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                                <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9 font-heading">26+ Awards</h4>
                                                <p className="text-gray-500 text-base font-normal leading-relaxed font-body">Our Dedication to
                                                    Innovation Wins Understanding</p>
                                            </div>
                                            <div
                                                className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                                <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9 font-heading">99% Happy
                                                    Clients</h4>
                                                <p className="text-gray-500 text-base font-normal leading-relaxed font-body">Mirrors our Focus on
                                                    Client Satisfaction.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    className="sm:w-fit w-full group px-3.5 py-2 bg-primary-light hover:bg-indigo-100 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex">
                                    <span
                                        className="px-1.5 text-white text-sm leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out capitalize font-medium font-body">Keep in touch</span>
                                    <svg className="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out"
                                        xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                        <path d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996" stroke="#FFFFFF" stroke-width="1.6"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div className="w-full lg:justify-start justify-center items-start flex">
                                <div
                                    className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
                                    <img className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                                        src="https://pagedone.io/asset/uploads/1717742431.png" alt="about Us image" />
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
                                Collaborative tools to design better user experience
                            </h2>
                            <p className="mt-3 font-body text-gray-800">
                                We help businesses bring ideas to life in the digital world, by designing and implementing the technology tools that they need to win.
                            </p>
                            <p className="mt-5">
                                <a className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium" href="#">
                                    Contact sales to learn more
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
                                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                                        Industry-leading documentation
                                    </h3>
                                    <p className="mt-1 text-gray-600">
                                        Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.
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
                                        Developer community support
                                    </h3>
                                    <p className="mt-1 text-gray-600">
                                        We actively contribute to open-source projects—giving back to the community through development, patches, and sponsorships.
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
                                        Simple and affordable
                                    </h3>
                                    <p className="mt-1 text-gray-600">
                                        From boarding passes to movie tickets, there's pretty much nothing you can't store with Preline.
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

                {/* Sucess Stories card */}
                <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8 lg:py-24">
                    <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
                    <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
                    <div className="mx-auto max-w-2xl lg:max-w-4xl">
                        <img
                            alt=""
                            src="https://tailwindui.com/plus/img/logos/workcation-logo-indigo-600.svg"
                            className="mx-auto h-12"
                        />
                        <figure className="mt-10">
                            <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
                                <p>
                                    “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
                                    molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                                </p>
                            </blockquote>
                            <figcaption className="mt-10">
                                <img
                                    alt=""
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    className="mx-auto size-10 rounded-full"
                                />
                                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                                    <div className="font-semibold text-gray-900">Judith Black</div>
                                    <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                                        <circle r={1} cx={1} cy={1} />
                                    </svg>
                                    <div className="text-gray-600">CEO of Workcation</div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                {/* Sucess Stories card end*/}

                {/* <!-- Card Blog --> */}
                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-20 mx-auto">
                    {/* <!-- Title --> */}
                    <div className="max-w-2xl mb-10">
                        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Customer stories</h2>
                        <p className="mt-1 text-gray-600 dark:text-neutral-400">See how game-changing companies are making the most of every engagement with Preline.</p>
                    </div>
                    {/* <!-- End Title --> */}

                    {/* <!-- Grid --> */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* <!-- Card --> */}
                        <a className="group block rounded-xl focus:outline-none" href="#">
                            <div className="aspect-w-16 aspect-h-9">
                                <img className="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1668869713519-9bcbb0da7171?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Blog Image" />
                            </div>
                            <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 group-focus:text-blue-600 ">
                                Unity’s inside sales team drives 80% of its revenue with Preline.
                            </h3>
                            <p className="mt-2 text-sm text-gray-600">
                                September 12, 2022
                            </p>
                        </a>
                        {/* <!-- End Card --> */}

                        {/* <!-- Card --> */}
                        <a className="group block rounded-xl focus:outline-none" href="#">
                            <div className="aspect-w-16 aspect-h-9">
                                <img className="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1668584054035-f5ba7d426401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Blog Image" />
                            </div>
                            <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 group-focus:text-blue-600 ">
                                Living Spaces creates a unified experience across the customer journey.
                            </h3>
                            <p className="mt-2 text-sm text-gray-600 ">
                                September 12, 2022
                            </p>
                        </a>
                        {/* <!-- End Card --> */}

                        {/* <!-- Card --> */}
                        <a className="group block rounded-xl focus:outline-none" href="#">
                            <div className="aspect-w-16 aspect-h-9">
                                <img className="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1668863699009-1e3b4118675d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Blog Image" />
                            </div>
                            <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 group-focus:text-blue-600 ">
                                Atlassian powers sales and support at scale with Preline.
                            </h3>
                            <p className="mt-2 text-sm text-gray-600 ">
                                September 12, 2022
                            </p>
                        </a>
                        {/* <!-- End Card --> */}

                        {/* <!-- Card --> */}
                        <a className="group block rounded-xl focus:outline-none" href="#">
                            <div className="aspect-w-16 aspect-h-9">
                                <img className="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1668584054131-d5721c515211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Blog Image" />
                            </div>
                            <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 group-focus:text-blue-600 ">
                                Everything you need to know about Preline Pro.
                            </h3>
                            <p className="mt-2 text-sm text-gray-600 ">
                                September 12, 2022
                            </p>
                        </a>
                        {/* <!-- End Card --> */}
                    </div>
                    {/* <!-- End Grid --> */}
                </div>
                {/* <!-- End Card Blog --> */}
            </main>
            <Footer />
        </>
    );
}
