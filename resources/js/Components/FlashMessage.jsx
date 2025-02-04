import React, { useEffect, useState } from "react";

const FlashMessage = ({ message, type = "success", duration = 5000 }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => setVisible(false), duration);
            return () => clearTimeout(timer);
        }
    }, [message, duration]);

    if (!visible || !message) return null;

    const bgColor =
        type === "success"
            ? "bg-green-100 border-green-400 text-green-700"
            : type === "error"
            ? "bg-red-100 border-red-400 text-red-700"
            : "bg-blue-100 border-blue-400 text-blue-700";

    return (
        <div className={`fixed top-5 right-5 px-4 py-3 border rounded-lg shadow-md ${bgColor}`}>
            <div className="flex items-center justify-between">
                <span className="text-sm">{message}</span>
                <button onClick={() => setVisible(false)} className="ml-3 text-lg font-bold">
                    &times;
                </button>
            </div>
        </div>
    );
};

export default FlashMessage;
