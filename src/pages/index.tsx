import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        window.location.href = "/app.html";
    }, []);
    return null;
}
