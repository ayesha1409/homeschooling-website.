import AOS from "aos";
import "aos/dist/aos.css";

useEffect(() => {
  AOS.init({
    duration: 1000, // smooth animation speed
    once: true,     // repeat nahi hoga scroll pe
  });
}, []);
