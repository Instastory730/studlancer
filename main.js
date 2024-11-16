document.addEventListener("DOMContentLoaded", () => {
    console.log("Studlancer Website Loaded");

    // Example of a dynamic feature
    document.querySelectorAll(".button").forEach(button => {
        button.addEventListener("click", () => {
            alert("Navigating to " + button.innerText);
        });
    });
});
