"use client";
import { useState } from "react";
import { useAuth, useUser } from "@clerk/nextjs";

export const Counter = () => {

    // const {isLoaded, userId, sessionId, getToken} = useAuth();
    const {isLoaded, isSignedIn, user} = useUser();
    console.log("Counter component");
    const [count, setCount] = useState(0);
    if (!isLoaded) return null;
    if (!isSignedIn) return <div>Please sign in to see the counter</div>;

    return (
        <button onClick={() => setCount(count + 1)}> Clicked {count} times</button>
    );

    };