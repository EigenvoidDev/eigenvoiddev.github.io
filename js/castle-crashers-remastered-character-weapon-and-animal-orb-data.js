// Handle functionality for tab navigation
function openTab(tabId) {
    var tabs = document.querySelectorAll(".tab-content");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
    }
    document.getElementById(tabId).classList.add("active");
}