import { useEffect } from "react";

const ScrollToTopOnRefresh: React.FC = () => {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Optional: 'smooth' for smooth scrolling,
      });
    }, 0);
  }, []);

  return null;
};

export default ScrollToTopOnRefresh;
// This component can be used to ensure that the scroll position is reset to the top
// whenever the page is refreshed or navigated to. It uses the `useEffect` hook
// to set the scroll position to the top after the component mounts. The `setTimeout`
// is used to ensure that the scroll position is set after the browser has rendered the page.
