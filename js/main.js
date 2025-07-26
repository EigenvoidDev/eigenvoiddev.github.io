// Filter posts by data-tag when a filter button is clicked
document.addEventListener("DOMContentLoaded", () => {
   const filterButtons = document.querySelectorAll(".filter-button");
   const posts = document.querySelectorAll(".post-block");

   filterButtons.forEach(button => {
      button.addEventListener("click", () => {
         const tag = button.getAttribute("data-tag");

         // Update "active" class for button style
         filterButtons.forEach(btn => btn.classList.remove("active"));
         button.classList.add("active");

         // Show/hide posts based on data-tag
         posts.forEach(post => {
            const tags = post.getAttribute("data-tags")?.split(" ") || [];
            if (tag === "all" || tags.includes(tag)) {
               post.style.display = "";
            } else {
               post.style.display = "none";
            }
         });
      });
   });
});

// Insert visual tag badges under each post's date based on data-tags
document.addEventListener("DOMContentLoaded", () => {
   const tagNames = {
      "brawlhalla": "Brawlhalla",
      "castle-crashers": "Castle Crashers",
      "dead-by-daylight": "Dead by Daylight",
      "warframe": "Warframe"
   };

   document.querySelectorAll(".post-block").forEach(post => {
      const tags = post.getAttribute("data-tags")?.split(" ") || [];

      const datesEl = post.querySelector(".post-dates");
      if (datesEl) {
         const tagContainer = document.createElement("div");
         tagContainer.className = "post-tags mt-2";

         tags.forEach(tag => {
            if (tagNames[tag]) {
               const badge = document.createElement("span");
               badge.className = "tag-badge me-1";
               badge.textContent = tagNames[tag];
               tagContainer.appendChild(badge);
            }
         });

         datesEl.insertAdjacentElement("afterend", tagContainer);
      }
   });
});

// Switch tab content and update URL when a tab is clicked
function openTab(event, tabId, pushState = true) {
   // Get all tab content and remove "active" class
   const allTabContent = document.querySelectorAll(".tab-pane");
   allTabContent.forEach(tab => tab.classList.remove("active"));

   // Get all tabs and remove "active" class
   const allTabs = document.querySelectorAll(".tab");
   allTabs.forEach(tab => tab.classList.remove("active"));

   // Show selected tab's content
   const activeTab = document.getElementById(tabId);
   if (activeTab) activeTab.classList.add("active");

   // Add "active" class to selected tab if event exists
   if (event) event.currentTarget.classList.add("active");

   // Update URL hash without reloading
   if (pushState) {
      history.pushState(null, '', `#${tabId}`);
   }
}

// Set active tab on page load and handle browser back/forward navigation
document.addEventListener("DOMContentLoaded", () => {
   const hash = window.location.hash.substring(1);
   let tabElement;

   if (hash) {
      tabElement = document.querySelector(`.tab[onclick*="${hash}"]`);
   }
   if (!tabElement) {
      tabElement = document.querySelector(".tab"); // Fallback to first tab
   }

   if (tabElement) {
      // Extract tabId from the onclick string
      const tabIdMatch = tabElement.getAttribute("onclick").match(/openTab\(.*?, ['"](.+?)['"]/);
      if (tabIdMatch && tabIdMatch[1]) {
         const tabId = tabIdMatch[1];
         openTab({
            currentTarget: tabElement
         }, tabId, false);
      }
   }

   window.addEventListener("popstate", () => {
      const hash = window.location.hash.substring(1);
      const tabElement = document.querySelector(`.tab[onclick*="${hash}"]`);
      if (tabElement) {
         openTab({
            currentTarget: tabElement
         }, hash, false);
      }
   });
});

// Toggle visibility of notes text and update button state
function toggleNotesText(button) {
   const notesText = button.closest(".notes-container").querySelector(".notes-text");

   // Toggle the display of the notes text block
   notesText.style.display = notesText.style.display === "block" ? "none" : "block";

   // Toggle "active" class for notes button
   button.classList.toggle("active");
}

// Toggle sidebar and overlay visibility for small screens and handle resize behavior
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

   // Hide mobile sidebar and overlay when resizing to desktop width
   window.addEventListener("resize", function () {
      if (window.innerWidth > 768) {
         sidebar.classList.remove("active");
         overlay.classList.remove("active");
      }
   });
});

// Toggle visibility of dropdown menus in sidebar
document.addEventListener("DOMContentLoaded", function () {
   const dropdowns = document.querySelectorAll(".dropdown");

   dropdowns.forEach(dropdown => {
      const toggler = dropdown.querySelector(".dropdown-toggler");
      const menu = dropdown.querySelector(".dropdown-menu");

      // Automatically open dropdowns marked as active on page load
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

// Smooth scroll to a specific section when sidebar item is clicked
function scrollToSection(sectionId) {
   const section = document.querySelector(sectionId);

   if (section) {
      section.scrollIntoView({
         behavior: "smooth"
      });
   } else {
      console.error(`Section with ID ${sectionId} not found.`);
   }
}

// Expand or collapse a specific details row in a table
function toggleDetails(id, row) {
   const details = document.getElementById(id);
   const requestContainerArrow = row.querySelector(".request-container-arrow");

   if (details.classList.contains("hidden")) {
      details.style.display = "table-row"; // Open details row
      details.classList.remove("hidden"); // Remove "hidden" class from details row
      requestContainerArrow.classList.add("rotate-180"); // Add class to rotate the arrow upward
   } else {
      details.style.display = "none"; // Close details row
      details.classList.add("hidden"); // Add "hidden" class to details row
      requestContainerArrow.classList.remove("rotate-180"); // Remove class to rotate the arrow upward
   }

   // After toggling, verify if all details rows are open
   updateTableTogglerButtonText(details.closest("table"));
}

// Expand or collapse all details rows in a table and update button text
function toggleTable(button) {
   const table = button.closest("table"); // Get the table that contains the clicked button
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

// Update "Expand All"/"Collapse All" button text based on visible details rows
function updateTableTogglerButtonText(table) {
   const detailsRows = table.querySelectorAll(".details");
   const openDetailsRows = table.querySelectorAll(".details:not(.hidden)");

   const button = table.querySelector(".table-toggler");

   // Update button text based on whether all details rows are open
   if (detailsRows.length === openDetailsRows.length) {
      button.textContent = "Collapse All";
   } else {
      button.textContent = "Expand All";
   }
}