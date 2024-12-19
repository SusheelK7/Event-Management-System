function renderCharts(ticketsData, salesData) {
    // Tickets Chart
    const ctxTickets = document.getElementById("ticketsChart").getContext("2d");
    window.ticketsChart = new Chart(ctxTickets, {
        type: "line",
        data: {
            laubels: ["10th Apr", "13th Apr", "16th Apr", "19th Apr", "28th Apr"],
            datasets: [{
                label: "Tickets Sold",
                data: ticketsData,
                borderColor: "#007bff",
                backgroundColor: "rgba(0, 123, 255, 0.1)",
                fill: true,
            }]
        }
    });

    // Sales Chart
    const ctxSales = document.getElementById("salesChart").getContext("2d");
    window.salesChart = new Chart(ctxSales, {
        type: "line",
        data: {
            labels: ["10th Apr", "13th Apr", "16th Apr", "19th Apr", "28th Apr"],
            datasets: [{
                label: "Sales Volume (€)",
                data: salesData,
                borderColor: "#28a745",
                backgroundColor: "rgba(40, 167, 69, 0.1)",
                fill: true,
            }]
        }
    });
}

function updateCharts(ticketsData, salesData) {
    // Update Tickets Chart
    window.ticketsChart.data.datasets[0].data = ticketsData;
    window.ticketsChart.update();

    // Update Sales Chart
    window.salesChart.data.datasets[0].data = salesData;
    window.salesChart.update();
}

function renderCharts(ticketsData, salesData) {
    var ctx1 = document.getElementById('ticketsChart').getContext('2d');
    var ctx2 = document.getElementById('salesChart').getContext('2d');

    var ticketsChart = new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
                label: 'Tickets Sold',
                data: ticketsData,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
            }]
        },
    });

    var salesChart = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
                label: 'Sales Volume (€)',
                data: salesData,
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                fill: true,
            }]
        },
    });
}

function renderEventPageVisitsChart(data) {
    var ctx = document.getElementById('eventPageVisitsChart').getContext('2d');
    var eventPageVisitsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
                label: 'Event Page Visits',
                data: data,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            }]
        },
    });
}

function renderTicketRegistrationChart(data) {
    var ctx = document.getElementById('ticketRegistrationChart').getContext('2d');
    var ticketRegistrationChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
                label: 'Ticket Registrations',
                data: data,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            }]
        },
    });
}
function initDemandingServicesChart(data) {
    const ctx = document.getElementById('demandingServicesChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Party Decorations', 'Party DJ', 'Ceremony Music', 'Uplighters', 'Photo Booth Hire'],
            datasets: [{
                data: data,
                backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745', '#6f42c1']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                }
            }
        }
    });
}
