let myChart = null;

function createChart(data) {
    if (myChart) {
        myChart.destroy();
    }

    const ctx = document.getElementById('dataChart').getContext('2d');
    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Sales Data',
                data: data,
                borderColor: '#0062ff',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

function addMessage(message, isUser) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user' : 'bot'}`;
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function processMessage(message) {
    if (message.toLowerCase().includes('sales')) {
        const data = [65, 59, 80, 81, 56, 55];
        createChart(data);
        return "Here's the sales data for the last 6 months.";
    }
    if (message.toLowerCase().includes('metrics')) {
        const data = [30, 45, 60, 70, 75, 85];
        createChart(data);
        return "Here's your performance metrics.";
    }
    return "I can show you sales or metrics data. What would you like to see?";
}

function sendMessage() {
    const input = document.getElementById('userInput');
    const message = input.value.trim();
    
    if (message) {
        addMessage(message, true);
        const response = processMessage(message);
        setTimeout(() => addMessage(response, false), 500);
        input.value = '';
    }
}

document.getElementById('userInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});