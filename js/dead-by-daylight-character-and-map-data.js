// Handle functionality for dimming entire screen with overlay and displaying modal with additional information when grid item is clicked
document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.getElementById("overlay");
    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("modal-content");
    
    // Function to show modal
    function showModal(content) {
        const data = JSON.parse(content); // Parse JSON string
        
        // Create HTML content from JSON data
        let htmlContent = `<h2 class="modal-title">${data.title}</h2><p class="modal-description">${data.description}</p>`;
        if (data.details) {
            htmlContent += "<table class='details-table'>";
            data.details.forEach((row, index) => {
                if (index === 0) {
                    htmlContent += "<tr>";
                    row.forEach(cell => htmlContent += `<th>${cell}</th>`);
                    htmlContent += "</tr>";
                } else {
                    htmlContent += "<tr>";
                    row.forEach(cell => htmlContent += `<td>${cell}</td>`);
                    htmlContent += "</tr>";
                }
            });
            htmlContent += "</table>";
        }
        
        modalContent.innerHTML = htmlContent; // Set content dynamically
        overlay.style.display = "flex"; // Show overlay
        modal.style.display = "block"; // Show modal
    }

    // Function to close modal
    function closeModal() {
        overlay.style.display = "none"; // Hide overlay
        modal.style.display = "none"; // Hide modal
    }

    // Attach click event to grid items
    document.querySelectorAll(".grid-item").forEach(item => {
        item.addEventListener("click", function() {
            const content = this.getAttribute("data-content");
            showModal(content); // Show modal with specific content
        });
    });

    document.querySelector(".close-button").addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);
});


// Handle functionality for tab navigation
function openTab(tabId) {
    var tabs = document.querySelectorAll(".tab-content");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
    }
    document.getElementById(tabId).classList.add("active");
}