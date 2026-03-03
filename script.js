let wallets = [];

function addWallet() {
  const input = document.getElementById("walletInput");
  const wallet = input.value.trim();

  if (wallet === "") return;

  wallets.push(wallet);
  renderWallets();
  input.value = "";
}

function renderWallets() {
  const list = document.getElementById("walletList");
  list.innerHTML = "";

  wallets.forEach(wallet => {
    const li = document.createElement("li");
    li.textContent = wallet;
    list.appendChild(li);
  });
}

