window.addEventListener("scroll", () => {
    const nav = document.getElementById("navbar");
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
        document.body.style.background =
            "linear-gradient(45deg, #81ffef, #f067b4)";
    } else {
        nav.classList.remove("scrolled");
        document.body.style.background =
            "linear-gradient(45deg, #ff7eb3, #65d6ff)";
    }
});
