document.addEventListener('DOMContentLoaded', function() {
    loadStats();
});

function loadStats() {
    let stats = localStorage.getItem('stats');
    if (stats === null) return;
    stats = stats.split(',');
    for (let i = 0; i < stats.length; i++) {
        let stat = stats[i].split(';');
        document.getElementById(stat[0]).innerHTML = stat[1];
    }
}