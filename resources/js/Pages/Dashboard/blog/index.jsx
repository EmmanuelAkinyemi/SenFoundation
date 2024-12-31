import BreadCrumbs from "@/Components/BreadCrumbs";
import Pagination from "@/Components/Pagination";
import SideNav from "@/Components/SideNav";
import { Head, Link, usePage } from "@inertiajs/react";

const Index = ({ blogs }) => {
    const { flash } = usePage().props;

    return (
        <>
            <Head title="Dashboard-Blog" />
       
            <div className="bg-gray-50 transition-all duration-300 lg:hs-overlay-layout-open:ps-[260px]">
                {/* <!-- ========== MAIN CONTENT ========== --> */}
                <main id="content">
                    <BreadCrumbs />

                    <SideNav />

                    {/* <!-- Content --> */}
                    <div className="w-full">
                        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                            {/* <!-- Table Section --> */}
                            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                                {/* <!-- Card --> */}
                                <div className="flex flex-col">
                                    <div className="-m-1.5 overflow-x-auto">
                                        <div className="p-1.5 min-w-full inline-block align-middle">
                                            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                                                {/* <!-- Header --> */}
                                                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200">
                                                    <div>
                                                        <h2 className="text-xl font-semibold text-gray-800">
                                                            Articles
                                                        </h2>
                                                        <p className="text-sm text-gray-600">
                                                            Create articles, edit, delete and more.
                                                        </p>
                                                    </div>

                                                    <div>
                                                        <div className="inline-flex gap-x-2">
                                                            <a href="/dashboard/blog/create" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-secondary text-white hover:bg-secondary-light focus:outline-none focus:bg-secondary-light disabled:opacity-50 disabled:pointer-events-none transition duration-500 font-body">
                                                                Write Article
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- End Header --> */}

                                                {/* <!-- Table --> */}
                                                <table className="min-w-full divide-y divide-gray-200">
                                                    <thead className="bg-gray-50">
                                                        <tr>
                                                            <th scope="col" className="px-6 py-3 text-start">
                                                                <a className="group inline-flex items-center gap-x-2 text-xs font-semibold uppercase text-gray-800 hover:text-gray-500 focus:outline-none focus:text-gray-500" href="#">
                                                                    slug
                                                                    <svg className="shrink-0 size-3.5 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 15 5 5 5-5" /><path d="m7 9 5-5 5 5" /></svg>
                                                                </a>
                                                            </th>

                                                            <th scope="col" className="px-6 py-3 text-start">
                                                                <a className="group inline-flex items-center gap-x-2 text-xs font-semibold uppercase text-gray-800 hover:text-gray-500 focus:outline-none focus:text-gray-500" href="#">
                                                                    title
                                                                    <svg className="shrink-0 size-3.5 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 15 5 5 5-5" /><path d="m7 9 5-5 5 5" /></svg>
                                                                </a>
                                                            </th>

                                                            <th scope="col" className="px-6 py-3 text-start">
                                                                <a className="group inline-flex items-center gap-x-2 text-xs font-semibold uppercase text-gray-800 hover:text-gray-500 focus:outline-none focus:text-gray-500" href="#">
                                                                    category
                                                                    <svg className="shrink-0 size-3.5 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 15 5 5 5-5" /><path d="m7 9 5-5 5 5" /></svg>
                                                                </a>
                                                            </th>


                                                            <th scope="col" className="px-6 py-3 text-start">
                                                                <a className="group inline-flex items-center gap-x-2 text-xs font-semibold uppercase text-gray-800 hover:text-gray-500 focus:outline-none focus:text-gray-500" href="#">
                                                                    Created on
                                                                    <svg className="shrink-0 size-3.5 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 15 5 5 5-5" /><path d="m7 9 5-5 5 5" /></svg>
                                                                </a>
                                                            </th>

                                                            <th scope="col" className="px-6 py-3 text-end"></th>
                                                        </tr>
                                                    </thead>

                                                    <tbody className="divide-y divide-gray-200">
                                                        {blogs.map((blog) => (
                                                            <tr key={blog.id} className="bg-white hover:bg-gray-50">
                                                                <td className="size-px whitespace-nowrap">
                                                                    <a className="block relative z-10" href={`/blogs/${blog.slug}`}>
                                                                        <div className="px-6 py-2">
                                                                            <div className="block text-sm text-blue-600 decoration-2 hover:underline">#{blog.slug}</div>
                                                                        </div>
                                                                    </a>
                                                                </td>
                                                                <td className="h-px w-72 min-w-72">
                                                                    <a className="block relative z-10" href={`/blogs/${blog.slug}`}>
                                                                        <div className="px-6 py-2">
                                                                            <p className="text-sm text-gray-500">{blog.title}</p>
                                                                        </div>
                                                                    </a>
                                                                </td>
                                                                <td className="size-px whitespace-nowrap">
                                                                    <a className="block relative z-10" href="#">
                                                                        <div className="px-6 py-2">
                                                                            <span className="inline-flex items-center gap-1.5 py-1 px-2 rounded-lg text-xs font-medium bg-gray-100 text-gray-800">
                                                                                {blog.category?.name || "Uncategorized"}
                                                                            </span>
                                                                        </div>
                                                                    </a>
                                                                </td>

                                                                <td className="size-px whitespace-nowrap">
                                                                    {new Date(blog.created_at).toLocaleDateString("en-US", {
                                                                        day: "numeric",
                                                                        month: "long",
                                                                        year: "numeric",
                                                                    })}

                                                                </td>
                                                                <td className="size-px whitespace-nowrap">
                                                                    <div className="px-6 py-2">
                                                                        <div className="hs-dropdown [--placement:bottom-right] relative inline-block">
                                                                            <button id={`hs-table-dropdown-${blog.id}`} type="button" className="hs-dropdown-toggle py-1.5 px-2 inline-flex justify-center items-center gap-2 rounded-lg text-gray-700 align-middle disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                                                                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
                                                                            </button>
                                                                            <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden divide-y divide-gray-200 min-w-40 z-20 bg-white shadow-2xl rounded-lg p-2 mt-2" role="menu" aria-orientation="vertical" aria-labelledby={`hs-table-dropdown-${blog.id}`}>
                                                                                <div className="py-2 first:pt-0 last:pb-0">
                                                                                    <span className="block py-2 px-3 text-xs font-medium uppercase text-gray-400">
                                                                                        Actions
                                                                                    </span>
                                                                                    <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href={`/dashboard/blog/${blog.id}/`}>
                                                                                        View Article
                                                                                    </a>
                                                                                    <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href={`/dashboard/blog/${blog.id}/edit`}>
                                                                                        Edit Article
                                                                                    </a>
                                                                                </div>
                                                                                <div className="py-2 first:pt-0 last:pb-0">
                                                                                    <Link
                                                                                        href={`/dashboard/blog/${blog.id}`}
                                                                                        method="delete"
                                                                                        as="button"
                                                                                        className="text-red-600 ps-2"
                                                                                    >
                                                                                        Delete
                                                                                    </Link>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                                {/* <!-- End Table --> */}

                                                {/* <!-- Footer --> */}
                                                <Pagination />
                                                {/* <!-- End Footer --> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End Card --> */}
                            </div>
                            {/* <!-- End Table Section --> */}
                        </div>
                    </div>
                    {/* <!-- End Content --> */}
                </main>
                {/* <!-- ========== END MAIN CONTENT ========== --> */}
            </div>
        </>
    );
}

export default Index;
