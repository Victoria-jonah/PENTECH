document.querySelector("#messageButton").addEventListener("click", function() {
    document.querySelector("#message").innerHTML = `
        <strong>Welcome to PENTECH!</strong><br><br>
        At PENTECH, we believe in the power of words and technology to shape the future.  
        Our mission is to bridge the gap between creativity and innovation, empowering individuals  
        with the skills they need to thrive in the digital age.<br><br>  
        
        Whether you're a writer looking to sharpen your storytelling abilities,  
        a tech enthusiast eager to build solutions, or someone seeking a career transformation,  
        PENTECH is here to guide you every step of the way.  
        <br><br>  
        <em>Join us today and be part of a revolution where knowledge meets opportunity!</em>  
    `;
});

document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");

    function handleScroll() {
        fadeElements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.9) { // Adjust threshold as needed
                el.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on load in case elements are already visible
});