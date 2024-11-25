// Handle functionality for displaying posts by page using drop-down list
document.addEventListener("DOMContentLoaded", function () {
    const pageSelect = document.getElementById("page-select");
    const output = document.getElementById("output");

    function updateOutput() {
        const page = pageSelect.value;
        output.style.textAlign = "left"; // Apply left text alignment when content is updated

        if (page === "1") {
            output.innerHTML = `
                <div class="post-item">
                    <p><a href="posts/decrypting-dead-by-daylight-cdn-content">Decrypting Dead by Daylight CDN Content</a></p>
                    <span class="post-date">November 23, 2024</span>
                </div>
                <div class="post-item">
                    <p><a href="posts/dumping-process-memory-using-scylla">Dumping Process Memory Using Scylla</a></p>
                    <span class="post-date">September 26, 2024</span>
                </div>
                <div class="post-item">
                    <p><a href="posts/decrypting-brawlhalla-swz-files">Decrypting Brawlhalla SWZ Files</a></p>
                    <span class="post-date">September 14, 2024</span>
                </div>
                <div class="post-item">
                    <p><a href="posts/modding-castle-crashers-remastered-using-cheat-engine">Modding Castle Crashers Remastered Using Cheat Engine</a></p>
                    <span class="post-date">September 6, 2024</span>
                </div>
            `;
        } else if (page === "2") {
            output.innerHTML = `
                <div class="post-item">
                    <p><a href="posts/unpacking-castle-crashers-remastered-game-files">Unpacking Castle Crashers Remastered Game Files</a></p>
                    <span class="post-date">September 1, 2024</span>
                </div>
                <div class="post-item">
                    <p><a href="posts/patching-sublime-text-4-build-4180">Patching Sublime Text 4 Build 4180</a></p>
                    <span class="post-date">August 10, 2024</span>
                </div>
                <div class="post-item">
                    <p><a href="posts/patching-010-editor-version-150">Patching 010 Editor Version 15.0</a></p>
                    <span class="post-date">August 10, 2024</span>
                </div>
                <div class="post-item">
                    <p><a href="posts/extracting-aes-key-for-dead-by-daylight">Extracting AES Key for Dead by Daylight</a></p>
                    <span class="post-date">August 10, 2024</span>
                </div>
            `;
        } else if (page === "3") {
            output.innerHTML = `
                <div class="post-item">
                    <p><a href="posts/generating-mapping-file-for-dead-by-daylight">Generating Mappings File for Dead by Daylight</a></p>
                    <span class="post-date">August 10, 2024</span>
                </div>
                <div class="post-item">
                    <p><a href="posts/patching-sublime-text-4-build-4169">Patching Sublime Text 4 Build 4169</a></p>
                    <span class="post-date">July 25, 2024</span>
                </div>
                <div class="post-item">
                    <p><a href="posts/patching-010-editor-version-1401">Patching 010 Editor Version 14.0.1</a></p>
                    <span class="post-date">July 25, 2024</span>
                </div>
                <div class="post-item">
                    <p><a href="posts/void-relics-in-warframe">Void Relics in Warframe</a></p>
                    <span class="post-date">July 10, 2016</span>
                </div>
            `; 
        } else if (page === "4") {
            output.innerHTML = `
                <div class="post-item">
                    <p><a href="posts/random-number-generation-in-warframe">Random Number Generation in Warframe</a></p>
                    <span class="post-date">April 17, 2016</span>
                </div>
            `;
        } else {
            output.innerHTML = "Please select a page.";
            output.style.textAlign = "center"; // Center align the text for else case
        }

        // Update link styles
        const links = output.getElementsByTagName("a");
        for (let i = 0; i < links.length; i++) {
            links[i].style.color = "white"; // Change link color to white

            // Add glowing text effect on hover
            links[i].addEventListener("mouseenter", function () {
                this.style.textShadow = "0 0 10px #fff"; // Add text shadow for glow effect on hover
            });
            links[i].addEventListener("mouseleave", function () {
                this.style.textShadow = "none"; // Remove text shadow when not hovering
            });
        }
    }

    // Set default value to "1" and update output
    pageSelect.value = "1";
    updateOutput();

    pageSelect.addEventListener("change", updateOutput);
});