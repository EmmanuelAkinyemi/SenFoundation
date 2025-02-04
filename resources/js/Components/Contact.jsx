import React, { useEffect } from "react";
import { useForm, usePage } from "@inertiajs/react";
import { toast } from "react-toastify";

const Contact = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        firstname: "",
        lastname: "",
        email: "",
        message: "",
    });

    const { flash } = usePage().props; // ✅ Read flash messages

    useEffect(() => {
        if (flash?.success) {
            toast.success(flash.success); // ✅ Show success toast
        }
        if (flash?.error) {
            toast.error(flash.error); // ✅ Show error toast
        }
    }, [flash]);

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/contact-us", {
            onSuccess: () => reset(), // ✅ Reset form on success
        });
    };

    return (
        <section className="text-gray-600 body-font relative bg-white">
            <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-semibold text-gray-900">Get in touch with us</h2>
                </div>
                <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                            <label className="block text-sm font-semibold text-gray-900">First name</label>
                            <input
                                type="text"
                                name="firstname"
                                value={data.firstname}
                                onChange={(e) => setData("firstname", e.target.value)}
                                className="block w-full rounded-md px-3.5 py-2 text-base text-gray-900 border-gray-300"
                            />
                            {errors.firstname && <p className="text-red-500 text-sm">{errors.firstname}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-900">Last name</label>
                            <input
                                type="text"
                                name="lastname"
                                value={data.lastname}
                                onChange={(e) => setData("lastname", e.target.value)}
                                className="block w-full rounded-md px-3.5 py-2 text-base text-gray-900 border-gray-300"
                            />
                            {errors.lastname && <p className="text-red-500 text-sm">{errors.lastname}</p>}
                        </div>

                        <div className="sm:col-span-2">
                            <label className="block text-sm font-semibold text-gray-900">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={data.email}
                                onChange={(e) => setData("email", e.target.value)}
                                className="block w-full rounded-md px-3.5 py-2 text-base text-gray-900 border-gray-300"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>

                        <div className="sm:col-span-2">
                            <label className="block text-sm font-semibold text-gray-900">Message</label>
                            <textarea
                                name="message"
                                rows={4}
                                value={data.message}
                                onChange={(e) => setData("message", e.target.value)}
                                className="block w-full rounded-md px-3.5 py-2 text-base text-gray-900 border-gray-300"
                            />
                            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                        </div>
                    </div>
                    <div className="mt-10">
                        <button
                            type="submit"
                            disabled={processing}
                            className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
                        >
                            {processing ? "Sending..." : "Send Message"}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
