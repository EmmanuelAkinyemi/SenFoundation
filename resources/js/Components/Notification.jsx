import React, { useEffect, useState } from 'react';

const Notification = ({ flash }) => {
    if (!flash.success && !flash.error) return null;
    return (
        <div
            className={`fixed top-5 right-5 px-4 py-3 rounded shadow-md text-white ${
                flash.success ? 'bg-green-500' : 'bg-red-500'
            }`}
        >
            {flash.success || flash.error}
        </div>
    );
};

export default Notification;
