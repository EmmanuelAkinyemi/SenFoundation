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
                            <h1 className="font-heading block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight">Education for All,  <span className="text-primary">Hope for Many
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
                                        <h6 className="text-gray-400 text-base font-normal leading-relaxed font-body">About Us</h6>
                                        <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                            <h2
                                                className="text-primary text-4xl font-bold font-manrope leading-normal lg:text-start text-center font-heading">
                                                The Tale of Our Achievement <span className='text-black'>Story</span></h2>
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
                                    className="sm:w-fit w-full group px-3.5 py-2 bg-primary hover:bg-primary-light rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex">
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
                <div className="bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0">
                            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">From the blog</h2>
                            <p className="mt-2 text-lg/8 text-gray-600">Learn how to grow your business with our expert advice.</p>
                        </div>
                        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                            {posts.map((post) => (
                                <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                                    <div className="flex items-center gap-x-4 text-xs">
                                        <time dateTime={post.datetime} className="text-gray-500">
                                            {post.date}
                                        </time>
                                        <a
                                            href={post.category.href}
                                            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                        >
                                            {post.category.title}
                                        </a>
                                    </div>
                                    <div className="group relative">
                                        <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                                            <a href={post.href}>
                                                <span className="absolute inset-0" />
                                                {post.title}
                                            </a>
                                        </h3>
                                        <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{post.description}</p>
                                    </div>
                                    <div className="relative mt-8 flex items-center gap-x-4">
                                        <img alt="" src={post.author.imageUrl} className="size-10 rounded-full bg-gray-50" />
                                        <div className="text-sm/6">
                                            <p className="font-semibold text-gray-900">
                                                <a href={post.author.href}>
                                                    <span className="absolute inset-0" />
                                                    {post.author.name}
                                                </a>
                                            </p>
                                            <p className="text-gray-600">{post.author.role}</p>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
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
                                    Boost your productivity. Start using our app today.
                                </h2>
                                <p className="mt-6 text-pretty text-lg/8 text-gray-600 font-body">
                                    Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.
                                </p>
                                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                                    <a
                                        href="#"
                                        className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                    >
                                        Get started
                                    </a>
                                    <a href="#" className="text-sm/6 font-semibold text-white">
                                        Learn more <span aria-hidden="true">→</span>
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
                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-white">
                    {/* <!-- Title --> */}
                    <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">Our leadership</h2>
                    </div>
                    {/* <!-- End Title --> */}

                    {/* <!-- Grid --> */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
                        <div className="text-center">
                            <img className="rounded-xl sm:size-48 lg:size-60 mx-auto" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
                            <div className="mt-2 sm:mt-4">
                                <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
                                    David Forren
                                </h3>
                                <p className="text-xs text-gray-600 sm:text-sm lg:text-base">
                                    Founder / CEO
                                </p>
                            </div>
                        </div>
                        {/* <!-- End Col --> */}

                        <div className="text-center">
                            <img className="rounded-xl sm:size-48 lg:size-60 mx-auto" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
                            <div className="mt-2 sm:mt-4">
                                <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
                                    Amil Evara
                                </h3>
                                <p className="text-xs text-gray-600 sm:text-sm lg:text-base">
                                    UI/UX Designer
                                </p>
                            </div>
                        </div>
                        {/* <!-- End Col --> */}

                        <div className="text-center">
                            <img className="rounded-xl sm:size-48 lg:size-60 mx-auto" src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
                            <div className="mt-2 sm:mt-4">
                                <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
                                    Ebele Egbuna
                                </h3>
                                <p className="text-xs text-gray-600 sm:text-sm lg:text-base">
                                    Support Consultant
                                </p>
                            </div>
                        </div>
                        {/* <!-- End Col --> */}

                        <div className="text-center">
                            <img className="rounded-xl sm:size-48 lg:size-60 mx-auto" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
                            <div className="mt-2 sm:mt-4">
                                <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
                                    Maria Powers
                                </h3>
                                <p className="text-xs text-gray-600 sm:text-sm lg:text-base">
                                    Director of sales
                                </p>
                            </div>
                        </div>
                        {/* <!-- End Col --> */}

                        <div className="text-center">
                            <img className="rounded-xl sm:size-48 lg:size-60 mx-auto" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
                            <div className="mt-2 sm:mt-4">
                                <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
                                    Delia Pawelke
                                </h3>
                                <p className="text-xs text-gray-600 sm:text-sm lg:text-base">
                                    Front-end Developer
                                </p>
                            </div>
                        </div>
                        {/* <!-- End Col --> */}

                        <div className="text-center">
                            <img className="rounded-xl sm:size-48 lg:size-60 mx-auto" src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
                            <div className="mt-2 sm:mt-4">
                                <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
                                    Tom Lowry
                                </h3>
                                <p className="text-xs text-gray-600 sm:text-sm lg:text-base">
                                    UI/UX Designer
                                </p>
                            </div>
                        </div>
                        {/* <!-- End Col --> */}

                        <div className="text-center">
                            <img className="rounded-xl sm:size-48 lg:size-60 mx-auto" src="https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
                            <div className="mt-2 sm:mt-4">
                                <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
                                    Louise Donadieu
                                </h3>
                                <p className="text-xs text-gray-600 sm:text-sm lg:text-base">
                                    Support Consultant
                                </p>
                            </div>
                        </div>
                        {/* <!-- End Col --> */}

                        <div className="text-center">
                            <img className="rounded-xl sm:size-48 lg:size-60 mx-auto" src="https://images.unsplash.com/photo-1514222709107-a180c68d72b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
                            <div className="mt-2 sm:mt-4">
                                <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
                                    Jeff Fisher
                                </h3>
                                <p className="text-xs text-gray-600 sm:text-sm lg:text-base">
                                    Project Manager
                                </p>
                            </div>
                        </div>
                        {/* <!-- End Col --> */}

                        <div className="text-center">
                            <img className="rounded-xl sm:size-48 lg:size-60 mx-auto" src="https://images.unsplash.com/photo-1602452920335-6a132309c7c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
                            <div className="mt-2 sm:mt-4">
                                <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
                                    Sophia Harrington
                                </h3>
                                <p className="text-xs text-gray-600 sm:text-sm lg:text-base">
                                    Project Manager
                                </p>
                            </div>
                        </div>
                        {/* <!-- End Col --> */}
                    </div>
                    {/* <!-- End Grid --> */}
                </div>
                {/* <!-- End Team --> */}

                {/* contact us */}
                <section className="text-gray-600 body-font relative">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-12">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 font-heading">Contact Us</h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base font-body">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
                        </div>
                        <div className="lg:w-1/2 md:w-2/3 mx-auto">
                            <div className="flex flex-wrap -m-2">
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
                                        <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-secondary-light focus:bg-white focus:ring-2 focus:ring-secondary-light text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                                        <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-secondary-light focus:bg-white focus:ring-2 focus:ring-secondary-light text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
                                        <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-secondary-light focus:bg-white focus:ring-2 focus:ring-secondary-light h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <button className="flex mx-auto text-white bg-secondary border-0 py-2 px-8 focus:outline-none hover:bg-secondary-light rounded text-lg">Button</button>
                                </div>
                                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                                    <a className="text-secondary-light">example@email.com</a>
                                    <p className="leading-normal my-5">49 Smith St.
                                        <br/>Saint Cloud, MN 56301
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
