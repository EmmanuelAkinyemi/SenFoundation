import "./bootstrap";
import "../css/app.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { HSStaticMethods } from "preline";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

HSStaticMethods.autoInit();

const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
        HSStaticMethods.autoInit();
    }
});

observer.observe(document.body, {
    attributes: true,
    subtree: true,
    childList: true,
    characterData: true,
});

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${appName} | ${title}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <>
            <App {...props} />
            <ToastContainer position="top-right" autoClose={5000} />
            </>
        
        );

        delete el.dataset.page;
    },
    progress: {
        color: "#fbbf24",
    },
});