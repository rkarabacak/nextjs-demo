"use client";
import { useState } from "react";
import { useUser } from "@clerk/nextjs";
// import { useAuth } from "@clerk/nextjs";

export const Counter = () => {

    // const {isLoaded, userId, sessionId, getToken} = useAuth();
    const {isLoaded, isSignedIn} = useUser();
    console.log("Counter component");
    const [count, setCount] = useState(0);
    if (!isLoaded) return null;
    if (!isSignedIn) return <div>Please sign in to see the counter</div>;

    return (
        <button onClick={() => setCount(count + 1)}> Clicked {count} times</button>
    );

    };