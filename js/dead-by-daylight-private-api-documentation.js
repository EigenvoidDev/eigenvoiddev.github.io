// Handle functionality for scrolling to main content section when section in sidebar is clicked 
function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);

    if (section) {
        section.ScrollIntoView({
            behavior: "smooth"
        });
    } else {
        console.error(`Section with ID ${sectionId} not found.`);
    }
}

// Handle functionality for displaying details when detail row is clicked
function toggleDetails(id, row) {
    const details = document.getElementById(id);
    const caret = row.querySelector(".caret");

    if (details.classList.contains("hidden")) {
        details.style.display = "table-row"; // Open detail row
        details.classList.remove("hidden"); // Remove "hidden" class
        caret.classList.add("up"); // Add class to rotate caret upward
    } else {
        details.style.display = "none"; // Close detail row
        details.classList.add("hidden"); // Add "hidden" class
        caret.classList.remove("up"); // Remove class to rotate caret back downward
    }

    // After toggling, check if all detail rows are open
    updateExpandCollapseButtonText(details.closest("table"));
}

// Handle functionality for expanding and collapsing all detail rows for respective table when button is clicked
function toggleExpandCollapse(button) {
    const table = button.closest("table"); // Get closest table
    const detailRows = table.querySelectorAll(".details.hidden"); // Find all hidden detail rows in that table
    const allDetailRowsOpen = detailRows.length === 0; // Check if all detail rows are already open by comparing number of hidden detail rows

    if (allDetailRowsOpen) {
        // Collapse all detail rows
        table.querySelectorAll(".details").forEach(row => {
            row.style.display = "none"; // Close detail row
            row.classList.add("hidden"); // Add "hidden" class
            const caret = row.previousElementSibling.querySelector(".caret");
            caret.classList.remove("up"); // Remove class to rotate caret back downward
        });
        button.textContent = "Expand All"; // Change button text to "Expand All"
    } else {
        // Expand all detail rows
        table.querySelectorAll(".details").forEach(row => {
            row.style.display = "table-row"; // Open detail row
            row.classList.remove("hidden"); // Remove "hidden" class
            const caret = row.previousElementSibling.querySelector(".caret");
            caret.classList.add("up"); // Add class to rotate caret upward
        });
        button.textContent = "Collapse All"; // Change button text to "Collapse All"
    }
}

// Handle functionality for showing and hiding sidebar when sidebar toggle is clicked
function toggleSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("active");
}

// Handle functionality for checking if all detail rows are open and updating button text accordingly
function updateExpandCollapseButtonText(table) {
    const detailRows = table.querySelectorAll(".details");
    const openDetailRows = table.querySelectorAll(".details:not(.hidden)");

    const button = table.querySelector(".expand-collapse-all-button");

    // Check if number of open detail rows matches total number of detail rows
    if (detailRows.length === openDetailRows.length) {
        button.textContent = "Collapse All";
    } else {
        button.textContent = "Expand All";
    }
}