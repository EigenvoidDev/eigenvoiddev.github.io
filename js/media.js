// Handle functionality for displaying media by year using drop-down list
document.addEventListener("DOMContentLoaded", function () {
    const yearSelect = document.getElementById("year-select");
    const output = document.getElementById("output");

    function updateOutput() {
        const year = yearSelect.value;
        output.style.textAlign = "left"; // Apply left text alignment when content is updated

        if (year === "2023") {
            output.innerHTML = "• 2023-11-14 | <a href='https://youtu.be/NBoRyrL-wv4?feature=shared'>MegD & Raydish vs Meow & VoiD_Glitch - Pools - Brawlhalla World Championship 2023 - LAN 2v2</a>";
        } else if (year === "2022") {
            output.innerHTML = "• 2022-07-23 | <a href='https://youtu.be/oZCZgG0ovoA?feature=shared'>Justice League - Rexehh & Cosolix vs VoiDGlitch & Muah - Multiversus Tournament</a><br><br>• 2022-07-23 | <a href='https://youtu.be/7tsr6FC2XHU?feature=shared'>Justice League - Mogul & Narq vs VoiDGlitch & Muah - Multiversus Tournament</a>";
        } else if (year === "2017") {
            output.innerHTML = "• 2017-11-24 | <a href='https://gamingbolt.com/warframes-next-prime-access-is-mirage-prime'>Warframe's Next Prime Access is Mirage Prime</a><br><br>• 2017-07-09 | <a href='https://www.gamestar.de/artikel/warframe-viel-aerger-und-bans-um-datamining,3316483.html'>Warframe - Viel Ärger und Bans um Datamining</a><br><br>• 2017-07-06 | <a href='https://www.computerbase.de/2017-07/warframe-dropraten/'>Free to Play: Warframe-Entwickler veröffentlichen Dropraten</a><br><br>• 2017-06-26 | <a href='https://www.pcgamesn.com/warframe/warframe-close-voidglitch-repository'>Warframe devs say datamining had to be shut down due to malicious use</a>";
        } else if (year === "2016") {
            output.innerHTML = "• 2016-12-20 | <a href='https://www.itechpost.com/articles/66986/20161220/cod-modern-warfare-remastered-more-weapons-players-dont-want.htm'>COD Modern Warfare Remastered To Get More Weapons But Players Don't Want Them?</a><br><br>• 2016-11-23 | <a href='https://wccftech.com/call-duty-infinite-warfare-hidden-released-weapons-detailed/'>Call Of Duty Infinite Warfare Hidden And Yet To Be Released Weapons Detailed</a><br><br>• 2016-05-20 | <a href='https://www.ecumenicalnews.com/article/call-of-duty-black-ops-3-rumors-10th-specialist-may-become-accessible-via-in-game-contracts/44598.htm'>'Call of Duty: Black Ops 3' rumors: 10th specialist accessible via in-game contracts?</a><br><br>• 2016-05-16 | <a href='https://fpsjp.net/archives/252425'>噂：CoD:BO3：10番目のスペシャリスト「ブラックジャック」は“契約”成功で使用可能に</a><br><br>• 2016-05-16 | <a href='https://web.archive.org/web/20240305044102/https://segmentnext.com/black-ops-3-10th-specialist-will-unlocked-via-contracts/'>Black Ops 3 10th specialist Will Be Unlocked Via Contracts</a><br><br>• 2016-05-15 | <a href='https://www.charlieintel.com/call-of-duty/rumor-10th-specialist-black-ops-3-unlocked-via-contracts-38258/'>RUMOR: 10th Specialist (Blackjack) in Call of Duty: Black Ops 3 to be unlocked via Contracts</a><br><br>• 2016-04-14 | <a href='https://fpsjp.net/archives/249639'>CoD:BO3：ゾンビモード“絶望の島”の新武器がリーク、「PPSh」も登場？</a>";
        } else if (year === "2015") {
            output.innerHTML = "• 2015-10-13 | <a href='https://wccftech.com/star-wars-battlefront-lot-guns-final-release-voip/'>Star Wars Battlefront To Have A Lot More Guns In Final Release, But No VOIP</a>";
        } else {
            output.innerHTML = "Please select a year.";
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

    yearSelect.addEventListener("change", updateOutput);
});