const web3 = new Web3('http://127.0.0.1:7545');
        async function checkTransaction() {
            const transactionHash = document.getElementById('txHashInput').value;
            const resultElement = document.getElementById('result');
            try {
                const transaction = await web3.eth.getTransaction(transactionHash);
                if (transaction) {
                    resultElement.innerHTML = `
                        <p>Transaction found on the blockchain:</p>
                        <p><strong>Block Hash:</strong> ${transaction.blockHash}</p>
                        <p><strong>Block Number:</strong> ${transaction.blockNumber}</p>
                    `;
                } else {
                    resultElement.textContent = 'Transaction not found on the blockchain.';
                }
            } catch (error) {
                resultElement.textContent = `Error: ${error.message}`;
            }
        }
