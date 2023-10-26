function openModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    modal.classList.add("show");
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.classList.remove("show");
    setTimeout(function () {
        modal.style.display = "none";
    }, 300); // Wait for the animation to complete before hiding the modal
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target === modal) {
        modal.classList.remove("show");
        setTimeout(function () {
            modal.style.display = "none";
        }, 300); // Wait for the animation to complete before hiding the modal
    }
}