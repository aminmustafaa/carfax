import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // 1. This disables the browser's default "remember where I was" behavior
        // This ensures that even on "Back", it starts at the top.
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        // 2. This instantly jumps the window to the top
        window.scrollTo(0, 0);
    }, [pathname]);

    // 3. This 'null' means "Do not show anything on the screen"
    return null;
}

export default ScrollToTop;