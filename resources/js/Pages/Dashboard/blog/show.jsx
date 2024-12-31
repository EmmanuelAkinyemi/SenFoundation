import BreadCrumbs from '@/Components/BreadCrumbs';
import SideNav from '@/Components/SideNav';
import React, { useState } from "react";
import { useForm, usePage, Head, Link } from "@inertiajs/react";

const Create = ({ blog }) => {

    return (
        <>
            <Head title={`Blog - ${blog.title}`} />
            <div className="bg-gray-50 transition-all duration-300 lg:hs-overlay-layout-open:ps-[260px]">
                {/* <!-- ========== MAIN CONTENT ========== --> */}
                <main id="content">
                    <BreadCrumbs />

                    <SideNav />

                    {/* <!-- Content --> */}
                    <div className="w-full">
                        <div className="p-4 sm:p-20 space-y-4 sm:space-y-6">
                            <div class="lg:col-span-2">
                                <div class="py-8 lg:pe-8">
                                    <div class="space-y-5 lg:space-y-8">
                                        <a class="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline focus:outline-none focus:underline" href="/dashboard/blog">
                                            <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                                            Back to Blog
                                        </a>

                                        <h2 class="text-3xl font-bold lg:text-5xl font-heading justify-center">{blog.title}</h2>

                                        <div class="flex items-center gap-x-5">
                                            <p class="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200" >
                                                {blog.category?.name || 'Uncategorized'}
                                            </p>
                                            <p class="text-xs sm:text-sm text-gray-800 "><strong>Published On:</strong> {new Date(blog.created_at).toLocaleDateString()}</p>
                                        </div>
                                        <figure>
                                            {blog.image && (
                                                <img class="h-60 w-80 mx-auto object-cover rounded-xl bg-slate-200" src={`/storage/${blog.image}`}
                                                    alt={blog.title} />
                                            )}
                                            <figcaption class="mt-3 text-sm text-center text-gray-500">
                                                {blog.title}
                                            </figcaption>

                                        </figure>
                                        <p class="text-lg text-gray-800 font-body leading-8">{blog.content}</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    {/* <!-- End Content --> */}


                </main>
                {/* <!-- ========== END MAIN CONTENT ========== --> */}
            </div>
        </>
    );
}

export default Create;
