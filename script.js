// script.js
document.addEventListener('DOMContentLoaded', () => {
    const statuses = ['Up', 'Up', 'Up', 'Up', 'Up'];
    const statusClasses = ['up', 'up', 'up', 'up', 'up'];
    const rows = document.querySelectorAll('tbody tr');

    function generateRandomSerialNumber() {
        return 'SN' + Math.random().toString(36).substring(2, 12).toUpperCase();
    }

    function randomSpeed() {
        return (900 + Math.floor(Math.random() * 101)) + ' Mbps';
    }

    function randomMemoryUsage() {
        return (50 + Math.floor(Math.random() * 51)) + '%';
    }

    function randomCpuUsage() {
        return (10 + Math.floor(Math.random() * 31)) + '%';
    }

    function updateStatus() {
        rows.forEach((row) => {
            const statusCell = row.querySelector('.status');
            const speedCell = row.querySelector('.speed');
            const memoryCell = row.querySelector('.memory');
            const cpuCell = row.querySelector('.cpu');
            const serialCell = row.querySelector('.serial');
            const randomIndex = Math.floor(Math.random() * statuses.length);

            statusCell.textContent = statuses[randomIndex];
            statusCell.className = 'status ' + statusClasses[randomIndex];
            speedCell.textContent = randomSpeed();
            memoryCell.textContent = randomMemoryUsage();
            cpuCell.textContent = randomCpuUsage();
            serialCell.textContent = generateRandomSerialNumber();
        });
    }

    setInterval(updateStatus, 1000); // Update every 3 seconds
    updateStatus(); // Initial update
});
