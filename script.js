let wallets = [];
// Load wallets from localStorage
const savedWallets = localStorage.getItem("wallets");
if (savedWallets) {
  wallets = JSON.parse(savedWallets);
}

function renderWallets() {
  const list = document.getElementById("walletList");
  list.innerHTML = "";

  wallets.forEach((wallet, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      ${wallet}
      <button onclick="removeWallet(${index})">Delete</button>
    `;

    list.appendChild(li);
  });
}
function removeWallet(index) {
  wallets.splice(index, 1);
  renderWallets();
}
