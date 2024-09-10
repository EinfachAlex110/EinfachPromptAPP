let history = [];

        document.getElementById('send-button').addEventListener('click', async () => {
            const userInput = document.getElementById('user-input').value.trim();
            if (userInput === '') return;

            const chatOutput = document.getElementById('chat-output');
            chatOutput.innerHTML += `<div><strong>Sie:</strong> ${userInput}</div>`;
            history.push([userInput, ""]);

            document.getElementById('user-input').value = '';

            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    message: userInput,
                    history: history,
                    system_message: "You are a friendly chatbot.",
                    max_tokens: 512,
                    temperature: 0.7,
                    top_p: 0.95
                })
            });

            const data = await response.json();
            const botResponse = data.response;
            history[history.length - 1][1] = botResponse;

            chatOutput.innerHTML += `<div><strong>Bot:</strong> ${botResponse}</div>`;
            chatOutput.scrollTop = chatOutput.scrollHeight;
        });

        document.getElementById('user-input').addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                document.getElementById('send-button').click();
            }
        });