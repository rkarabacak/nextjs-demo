"use client";
import { useEffect } from "react";

export default function Error({error}: {
    error: Error;
}) {
    useEffect(() => {
        console.log("Error:", error);
    }, [error]);

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-red-500">
                <h1 className="text-2xl font-bold">Error fetching users data</h1>
                <p>{error.message}</p>
            </div>
        </div>
    );

}