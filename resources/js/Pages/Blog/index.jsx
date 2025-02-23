import { Head, Link } from '@inertiajs/react';
import NavBar from '@/Components/NavBar';
import Footer from '@/Components/Footer';

const Blog = ({ blogs }) => {
    return (
        <>
            <Head title="Blog Page" />
            <NavBar />
            <main classNameName='min-h-screen'>
                {/* <!-- Hero --> */}
                <div className="relative overflow-hidden">
                    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
                        <div className="text-center">
                            <h1 className="text-4xl sm:text-6xl font-heading font-bold text-gray-800">
                                Insights
                            </h1>

                            <p className="mt-3 text-gray-600 font-body">
                                Stay in the know with insights from industry experts.
                            </p>

                            <div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">
                                {/* <!-- Form --> */}
                                <form>
                                    <div className="relative z-10 flex gap-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100">
                                        <div className="w-full">
                                            <label htmlFor="hs-search-article-1" className="block text-sm text-gray-700 font-medium"><span className="sr-only">Search article</span></label>
                                            <input type="email" name="hs-search-article-1" id="hs-search-article-1" className="py-2.5 px-4 block w-full border-transparent rounded-lg focus:border-green-500 focus:ring-green-500" placeholder="Search article" />
                                        </div>
                                        <div>
                                            <a className="size-[46px] inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:bg-green-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
                                                <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                                            </a>
                                        </div>
                                    </div>
                                </form>
                                {/* <!-- End Form --> */}

                                {/* <!-- SVG Element --> */}
                                <div className="hidden md:block absolute top-0 end-0 -translate-y-12 translate-x-20">
                                    <svg className="w-16 h-auto text-red-500" width="121" height="135" viewBox="0 0 121 135" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                                        <path d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                                        <path d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                                    </svg>
                                </div>
                                {/* <!-- End SVG Element --> */}

                                {/* <!-- SVG Element --> */}
                                <div className="hidden md:block absolute bottom-0 start-0 translate-y-10 -translate-x-32">
                                    <svg className="w-40 h-auto text-green-500" width="347" height="188" viewBox="0 0 347 188" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
                                    </svg>
                                </div>
                                {/* <!-- End SVG Element --> */}
                            </div>


                        </div>
                    </div>
                </div>
                {/* <!-- End Hero --> */}
                {/* <!-- Card Blog --> */}
                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                    {/* <!-- Grid --> */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* <!-- Card --> */}
                        {blogs.map((blog) => (
                            <a key={blog.id} className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5" href={`/blog/${blog.slug}`}>
                                <div className="aspect-w-16 aspect-h-11 mx-auto">
                                    <img className="h-80 w-100  object-cover rounded-xl" src={`/storage/${blog.image}`} alt={blog.title} />
                                </div>
                                <div className="my-6">
                                    <h3 className="text-xl font-semibold text-gray-800 font-heading">
                                        {blog.title}
                                    </h3>
                                    <p className="mt-5 text-gray-500 font-body overflow-hidden line-clamp-3">
                                        {blog.content}
                                    </p>
                                </div>
                                <div className="mt-auto flex items-center gap-x-3">
                                    <div>
                                        <h5 className="text-sm text-gray-800">By {blog.user.name}</h5>
                                    </div>
                                </div>
                            </a>
                        ))}
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

export default Blog;
