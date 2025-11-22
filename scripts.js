// Smooth scrolling for nav links
document.querySelectorAll("nav a").forEach(link => {
    link.onclick = () => {
        window.scrollTo({
            top: document.querySelector(link.getAttribute("href")).offsetTop - 70,
            behavior: "smooth"
        });
    };
});
