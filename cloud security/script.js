// Initialize security dashboard
document.addEventListener('DOMContentLoaded', () => {
    loadAccessLogs();
    loadSecurityAlerts();
    startMonitoring();
});

function loadAccessLogs() {
    const logs = [
        { user: 'System Admin', action: 'Login', time: '2 minutes ago' },
        { user: 'Security Audit', action: 'Key Rotation', time: '1 hour ago' },
        { user: 'Database Admin', action: 'Access Grant', time: '3 hours ago' }
    ];

    const logsList = document.getElementById('accessLogs');
    logs.forEach(log => {
        const li = document.createElement('li');
        li.textContent = `${log.user} - ${log.action} (${log.time})`;
        logsList.appendChild(li);
    });
}

function loadSecurityAlerts() {
    const alerts = [
        { level: 'high', message: 'Unusual login attempt detected', time: '5 min ago' },
        { level: 'medium', message: 'Certificate expiring soon', time: '1 hour ago' }
    ];

    const alertsContainer = document.getElementById('securityAlerts');
    alerts.forEach(alert => {
        const div = document.createElement('div');
        div.className = `alert-item ${alert.level}`;
        div.innerHTML = `
            <strong>${alert.level.toUpperCase()}</strong>: ${alert.message}
            <div class="alert-time">${alert.time}</div>
        `;
        alertsContainer.appendChild(div);
    });
}

function toggleMFA() {
    // Simulate MFA toggle
    alert('MFA status updated');
}

function rotateKeys() {
    // Simulate key rotation
    alert('Security keys rotated successfully');
}

function startMonitoring() {
    // Simulate real-time monitoring
    setInterval(() => {
        const metrics = document.querySelectorAll('.metric strong');
        metrics.forEach(metric => {
            const currentValue = parseInt(metric.textContent);
            metric.textContent = currentValue + Math.floor(Math.random() * 3);
        });
    }, 5000);
}