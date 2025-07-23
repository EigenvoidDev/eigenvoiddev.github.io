// Handle functionality for tab navigation
function openTab(event, tabId) {
   // Get all tab content and remove "active" class
   const allTabContent = document.querySelectorAll(".tab-pane");
   allTabContent.forEach(tab => tab.classList.remove("active"));

   // Get all tabs and remove "active" class
   const allTabs = document.querySelectorAll(".tab");
   allTabs.forEach(tab => tab.classList.remove("active"));

   // Show selected tab's content
   const activeTab = document.getElementById(tabId);
   activeTab.classList.add("active");

   // Add "active" class to selected tab
   event.currentTarget.classList.add("active");
}

// Handle functionality for toggling visibility of notes button text
function toggleNotesText(button) {
   const notesText = button.closest(".notes-container").querySelector(".notes-text");

   // Toggle visibility of notes text
   notesText.style.display = notesText.style.display === "block" ? "none" : "block";

   // Toggle "active" class for notes button
   button.classList.toggle("active");
}

// Handle functionality for sidebar and overlay, specifically for small devices
document.addEventListener("DOMContentLoaded", function () {
   const menuButton = document.getElementById("menu-button");
   const sidebar = document.querySelector(".sidebar");
   const overlay = document.getElementById("overlay");

   menuButton.addEventListener("click", function () {
      sidebar.classList.add("active");
      overlay.classList.add("active");
   });

   overlay.addEventListener("click", function () {
      sidebar.classList.remove("active");
      overlay.classList.remove("active");
   });

   // Ensure that sidebar stays visible on larger screens when resizing
   window.addEventListener("resize", function () {
      if (window.innerWidth > 768) {
         sidebar.classList.remove("active");
         overlay.classList.remove("active");
      }
   });
});

// Handle functionality for toggling sidebar dropdowns
document.addEventListener("DOMContentLoaded", function () {
   const dropdowns = document.querySelectorAll(".dropdown");

   dropdowns.forEach(dropdown => {
      const toggler = dropdown.querySelector(".dropdown-toggler");
      const menu = dropdown.querySelector(".dropdown-menu");

      // Open dropdowns that have the "active-dropdown-label" class
      if (dropdown.classList.contains("active-dropdown-label")) {
         dropdown.classList.add("open");
         menu.style.display = "block";
      }

      // Add click event to toggle dropdowns
      toggler.addEventListener("click", function () {
         dropdown.classList.toggle("open");
         menu.style.display = dropdown.classList.contains("open") ? "block" : "none";
      });
   });
});

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

// Handle functionality for displaying details when details row is clicked
function toggleDetails(id, row) {
   const details = document.getElementById(id);
   const requestContainerArrow = row.querySelector(".request-container-arrow");

   if (details.classList.contains("hidden")) {
      details.style.display = "table-row"; // Open details row
      details.classList.remove("hidden"); // Remove "hidden" class from details row
      requestContainerArrow.classList.add("rotate-180"); // Rotate request container arrow upward
   } else {
      details.style.display = "none"; // Close details row
      details.classList.add("hidden"); // Add "hidden" class to details row
      requestContainerArrow.classList.remove("rotate-180"); // Rotate request container arrow back downward
   }

   // After toggling, verify if all details rows are open
   updateTableTogglerButtonText(details.closest("table"));
}

// Handle functionality for expanding and collapsing all details rows for respective table when button is clicked
function toggleTable(button) {
   const table = button.closest("table"); // Get closest table
   const detailsRows = table.querySelectorAll(".details.hidden"); // Find all hidden details rows in that table
   const allDetailsRowsOpen = detailsRows.length === 0; // Determine if all details rows are open by comparing hidden details rows count

   if (allDetailsRowsOpen) {
      // Collapse all details rows
      table.querySelectorAll(".details").forEach(row => {
         row.style.display = "none"; // Close details row
         row.classList.add("hidden"); // Add "hidden" class to details row
         const requestContainerArrow = row.previousElementSibling.querySelector(".request-container-arrow");
         requestContainerArrow.classList.remove("rotate-180"); // Rotate request container arrow back downward
      });
      button.textContent = "Expand All"; // Change button text to "Expand All"
   } else {
      // Expand all details rows
      table.querySelectorAll(".details").forEach(row => {
         row.style.display = "table-row"; // Open details row
         row.classList.remove("hidden"); // Remove "hidden" class from details row
         const requestContainerArrow = row.previousElementSibling.querySelector(".request-container-arrow");
         requestContainerArrow.classList.add("rotate-180"); // Rotate request container arrow upward
      });
      button.textContent = "Collapse All"; // Change button text to "Collapse All"
   }
}

// Handle functionality for verifying if all details rows are open and updating button text accordingly
function updateTableTogglerButtonText(table) {
   const detailsRows = table.querySelectorAll(".details");
   const openDetailsRows = table.querySelectorAll(".details:not(.hidden)");

   const button = table.querySelector(".table-toggler");

   // Verify if number of open details rows matches total number of details rows
   if (detailsRows.length === openDetailsRows.length) {
      button.textContent = "Collapse All";
   } else {
      button.textContent = "Expand All";
   }
}