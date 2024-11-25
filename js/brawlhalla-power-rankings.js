// Handle functionality for displaying Brawlhalla power rankings by year and period by using multiconditional drop-down list
document.addEventListener("DOMContentLoaded", function () {
    const yearSelect = document.getElementById("year-select");
    const periodSelect = document.getElementById("period-select");
    const output = document.getElementById("output");

    const periodsByYear = {
        "2024": ["October 9th–November 17th, 2024", "September 16th–October 9th, 2024", "August 26th–September 16th, 2024", "August 8th–August 26th, 2024", "July 24th–August 8th, 2024", "June 30th–July 24th, 2024", "May 28th–June 30th, 2024", "April 12th–May 28th, 2024", "March 21st–April 12th, 2024", "November 19th, 2023–March 21st, 2024"],
        "2023": ["October 9th–November 19th, 2023", "August 10th–October 9th, 2023", "August 8th–August 10th, 2023", "July 9th–August 8th, 2023", "June 21st–July 9th, 2023", "April 20th–June 21st, 2023", "March 22nd–April 20th, 2023", "December 6th, 2022–March 22nd, 2023"],
        "2022": ["October 17th–December 6th, 2022", "September 6th–October 17th, 2022", "May 10–September 6th, 2022", "March 7–May 10, 2022", "December 14, 2021–March 7, 2022"],
        "2021": ["October 30–December 14, 2021", "September 7–October 30, 2021"],
        "2020": ["2019–May 22nd, 2020"]
    };

    function populatePeriods(year) {
        periodSelect.innerHTML = '<option value="">Select</option>';
        if (periodsByYear[year]) {
            periodsByYear[year].forEach(period => {
                const option = document.createElement("option");
                option.value = period;
                option.textContent = period;
                periodSelect.appendChild(option);
            });
        }
    }

    function updateOutput() {
        const year = yearSelect.value;
        const period = periodSelect.value;

        if (year && period) {
            if (year === "2024" && period === "October 9th–November 17th, 2024") {
                output.innerHTML = "1v1 Rank: 419 (Inactive)<br>2v2 Rank: 512 (Inactive)<br>Total Official Earnings: $300.00"
            } else if (year === "2024" && period === "September 16th–October 9th, 2024") {
                output.innerHTML = "1v1 Rank: 166 (Inactive)<br>2v2 Rank: 254 (Inactive)<br>Total Official Earnings: $300.00"
            } else if (year === "2024" && period === "August 26th–September 16th, 2024") {
               output.innerHTML = "1v1 Rank: 166 (Inactive)<br>2v2 Rank: 141 (Inactive)<br>Total Official Earnings: $300.00"
            } else if (year === "2024" && period === "August 8th–August 26th, 2024") {
               output.innerHTML = "1v1 Rank: 120 (Inactive)<br>2v2 Rank: 141 (Inactive)<br>Total Official Earnings: $300.00"
            } else if (year === "2024" && period === "July 24th–August 8th, 2024") {
               output.innerHTML = "1v1 Rank: 100 (Inactive)<br>2v2 Rank: 141 (Inactive)<br>Total Official Earnings: $300.00"
            } else if (year === "2024" && period === "June 30th–July 24th, 2024") {
               output.innerHTML = "1v1 Rank: 78 (Inactive)<br>2v2 Rank: 129 (Inactive)<br>Total Official Earnings: $300.00"
            } else if (year === "2024" && period === "May 28th–June 30th, 2024") {
               output.innerHTML = "1v1 Rank: 67 (Inactive)<br>2v2 Rank: 90 (Inactive)<br>Total Official Earnings: $300.00"
            } else if (year === "2024" && period === "April 12th–May 28th, 2024") {
                output.innerHTML = "1v1 Rank: 68<br>2v2 Rank: 62<br>Total Official Earnings: $300.00";
            } else if (year === "2024" && period === "March 21st–April 12th, 2024") {
                output.innerHTML = "1v1 Rank: 76<br>2v2 Rank: 62<br>Total Official Earnings: $300.00";
            } else if (year === "2024" && period === "November 19th, 2023–March 21st, 2024") {
                output.innerHTML = "1v1 Rank: 90<br>2v2 Rank: 41<br>Total Official Earnings: $300.00";
            } else if (year === "2023" && period === "October 9th–November 19th, 2023") {
                output.innerHTML = "1v1 Rank: 140<br>2v2 Rank: 67<br>Total Official Earnings: $100.00";
            } else if (year === "2023" && period === "August 10th–October 9th, 2023") {
                output.innerHTML = "1v1 Rank: 210<br>2v2 Rank: 58<br>Total Official Earnings: $100.00";
            } else if (year === "2023" && period === "August 8th–August 10th, 2023") {
                output.innerHTML = "1v1 Rank: 209<br>2v2 Rank: 57<br>Total Official Earnings: $100.00";
            } else if (year === "2023" && period === "July 9th–August 8th, 2023") {
                output.innerHTML = "1v1 Rank: 218<br>2v2 Rank: 87<br>Total Official Earnings: $100.00";
            } else if (year === "2023" && period === "June 21st–July 9th, 2023") {
                output.innerHTML = "1v1 Rank: 202<br>2v2 Rank: 86<br>Total Official Earnings: $100.00";
            } else if (year === "2023" && period === "April 20th–June 21st, 2023") {
                output.innerHTML = "1v1 Rank: 154<br>2v2 Rank: 70<br>Total Official Earnings: $100.00";
            } else if (year === "2023" && period === "March 22nd–April 20th, 2023") {
                output.innerHTML = "1v1 Rank: 132<br>2v2 Rank: 89<br>Total Official Earnings: $100.00";
            } else if (year === "2023" && period === "December 6th, 2022–March 22nd, 2023") {
                output.innerHTML = "1v1 Rank: 105<br>2v2 Rank: 82<br>Total Official Earnings: $100.00";
            } else if (year === "2022" && period === "October 17th–December 6th, 2022") {
                output.innerHTML = "1v1 Rank: 96<br>2v2 Rank: 105<br>Total Official Earnings: $0.00";
            } else if (year === "2022" && period === "September 6th–October 17th, 2022") {
                output.innerHTML = "1v1 Rank: 87<br>2v2 Rank: 97<br>Total Official Earnings: $0.00";
            } else if (year === "2022" && period === "May 10–September 6th, 2022") {
                output.innerHTML = "1v1 Rank: 113<br>2v2 Rank: 61<br>Total Official Earnings: $0.00";
            } else if (year === "2022" && period === "March 7–May 10, 2022") {
                output.innerHTML = "1v1 Rank: 103<br>2v2 Rank: 65<br>Total Official Earnings: $0.00";
            } else if (year === "2022" && period === "December 14, 2021–March 7, 2022") {
                output.innerHTML = "1v1 Rank: 110<br>2v2 Rank: 79<br>Total Official Earnings: $0.00";
            } else if (year === "2021" && period === "October 30–December 14, 2021") {
                output.innerHTML = "1v1 Rank: 109<br>2v2 Rank: 92<br>Total Official Earnings: $0.00";
            } else if (year === "2021" && period === "September 7–October 30, 2021") {
                output.innerHTML = "1v1 Rank: 100<br>2v2 Rank: 154<br>Total Official Earnings: $0.00";
            } else if (year === "2020" && period === "2019–May 22nd, 2020") {
                output.innerHTML = "1v1 Rank: 148<br>2v2 Rank: N/A<br>Total Official Earnings: $0.00";
            } else {
                output.innerHTML = "Data for this combination are not available.";
            }
        } else {
            output.innerHTML = "Please select a year and a ranking period.";
        }
    }

    yearSelect.addEventListener("change", function () {
        populatePeriods(yearSelect.value);
        updateOutput();
    });

    periodSelect.addEventListener("change", updateOutput);
});