// Handle functionality for coloring Secret Hitler player probabilities table
document.addEventListener("DOMContentLoaded", function() {
    var table = document.getElementById("secret-hitler-player-probabilities-table");
    var rows = table.getElementsByTagName("tr");

    for (var i = 0; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName("td");
        if (cells.length == 8) {
            cells[4].style.backgroundColor = "#4682B4"; // Apply background color to fifth column
            cells[5].style.backgroundColor = "#B22222"; // Apply background color to sixth column
            cells[6].style.backgroundColor = "#800000"; // Apply background color to seventh column
            cells[7].style.backgroundColor = "#800000"; // Apply background color to eighth column
        }
    }
});

// Handle functionality for coloring Secret Hitler policy card draw probabilities table
document.addEventListener("DOMContentLoaded", function() {
    var table = document.getElementById("secret-hitler-policy-card-draw-probabilities-table");
    var rows = table.getElementsByTagName("tr");

    for (var i = 0; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName("td");
        if (cells.length == 10) {
            cells[3].style.backgroundColor = "#B22222"; // Apply background color to fourth column
            cells[4].style.backgroundColor = "#B22222"; // Apply background color to fifth column
            cells[5].style.backgroundColor = "#B22222"; // Apply background color to sixth column
            cells[6].style.backgroundColor = "#4682B4"; // Apply background color to seventh column
            cells[7].style.backgroundColor = "#4682B4"; // Apply background color to eighth column
            cells[8].style.backgroundColor = "#B22222"; // Apply background color to ninth column
            cells[9].style.backgroundColor = "#4682B4"; // Apply background color to tenth column
        }
    }
});

// Handle functionality for tab navigation
function openTab(tabId) {
    var tabs = document.querySelectorAll(".tab-content");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
    }
    document.getElementById(tabId).classList.add("active");
}