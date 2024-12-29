import { Head, Link } from '@inertiajs/react';
import NavBar from '@/Components/NavBar';
import Footer from '@/Components/Footer';

const Blog = ({ title }) => {
    return (
        <>
            <Head title={title} />
            <NavBar />
            <main classNameName='min-h-screen'>
                {/* <!-- Hero --> */}
                <div className="relative overflow-hidden">
                    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
                        <div className="text-center">
                            <h1 className="text-4xl sm:text-6xl font-bold text-gray-800">
                                Insights
                            </h1>

                            <p className="mt-3 text-gray-600">
                                Stay in the know with insights from industry experts.
                            </p>

                            <div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">
                                {/* <!-- Form --> */}
                                <form>
                                    <div className="relative z-10 flex gap-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100">
                                        <div className="w-full">
                                            <label for="hs-search-article-1" className="block text-sm text-gray-700 font-medium"><span className="sr-only">Search article</span></label>
                                            <input type="email" name="hs-search-article-1" id="hs-search-article-1" className="py-2.5 px-4 block w-full border-transparent rounded-lg focus:border-green-500 focus:ring-green-500" placeholder="Search article" />
                                        </div>
                                        <div>
                                            <a className="size-[46px] inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:bg-green-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
                                                <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                                            </a>
                                        </div>
                                    </div>
                                </form>
                                {/* <!-- End Form --> */}

                                {/* <!-- SVG Element --> */}
                                <div className="hidden md:block absolute top-0 end-0 -translate-y-12 translate-x-20">
                                    <svg className="w-16 h-auto text-red-500" width="121" height="135" viewBox="0 0 121 135" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164" stroke="currentColor" stroke-width="10" stroke-linecap="round" />
                                        <path d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5" stroke="currentColor" stroke-width="10" stroke-linecap="round" />
                                        <path d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874" stroke="currentColor" stroke-width="10" stroke-linecap="round" />
                                    </svg>
                                </div>
                                {/* <!-- End SVG Element --> */}

                                {/* <!-- SVG Element --> */}
                                <div className="hidden md:block absolute bottom-0 start-0 translate-y-10 -translate-x-32">
                                    <svg className="w-40 h-auto text-green-500" width="347" height="188" viewBox="0 0 347 188" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426" stroke="currentColor" stroke-width="7" stroke-linecap="round" />
                                    </svg>
                                </div>
                                {/* <!-- End SVG Element --> */}
                            </div>


                        </div>
                    </div>
                </div>
                {/* <!-- End Hero --> */}

                {/* <!-- Card Blog --> */}
                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-slate-100">
                    {/* <!-- Grid --> */}
                    <div className="grid sm:grid-cols-2 sm:items-center gap-8">
                        <div className="sm:order-2">
                            <div className="relative pt-[50%] sm:pt-[100%] rounded-lg">
                                <img className="size-full absolute top-0 start-0 object-cover rounded-lg" src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Blog Image"/>
                            </div>
                        </div>
                        {/* <!-- End Col --> */}

                        <div className="sm:order-1">
                            <p className="mb-5 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
                                Business insight
                            </p>

                            <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight text-gray-800">
                                <a className="hover:text-blue-600 focus:outline-none focus:text-blue-600" href="#">
                                    How to get buy-in and budget for direct hiring
                                </a>
                            </h2>

                            {/* <!-- Avatar --> */}
                            <div className="mt-6 sm:mt-10 flex items-center">
                                <div className="shrink-0">
                                    <img className="size-10 sm:h-14 sm:w-14 rounded-full" src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Blog Image"/>
                                </div>

                                <div className="ms-3 sm:ms-4">
                                    <p className="sm:mb-1 font-semibold text-gray-800">
                                        Louise Donadieu
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        Strategic Marketing Consultant
                                    </p>
                                </div>
                            </div>
                            {/* <!-- End Avatar --> */}

                            <div className="mt-5">
                                <a className="inline-flex items-center gap-x-1.5 text-secondary decoration-2 hover:underline focus:outline-none focus:underline font-medium" href="#">
                                    Read more
                                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                </a>
                            </div>
                        </div>
                        {/* <!-- End Col --> */}
                    </div>
                    {/* <!-- End Grid --> */}
                </div>
                {/* <!-- End Card Blog --> */}

                {/* <!-- Card Blog --> */}
                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                    {/* <!-- Title --> */}
                    {/* <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight font-heading">Insights & Inspirations</h2>
                        <p className="mt-1 text-gray-600 font-body">Stay informed with the latest stories, updates, and thought-provoking articles on education, empowerment, and innovation from the Seniom Foundation.</p>
                    </div> */}
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
                    <div className="mt-12 text-center">
                        <a class="py-3 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-lg border border-gray-200 bg-white text-secondary shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" href="/blog">
                            Read more
                            <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                        </a>
                    </div>
                    {/* <!-- End Card --> */}
                </div>
                {/* <!-- End Card Blog --> */}
            </main>
            <Footer />
        </>
    );
}

export default Blog;
