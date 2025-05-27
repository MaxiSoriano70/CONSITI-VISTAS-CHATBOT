document.querySelector(".chatSidebarProfileToggle").addEventListener("click", function (e) {
    e.preventDefault();
    const dropdown = this.nextElementSibling;
    dropdown.classList.toggle("active");
});
