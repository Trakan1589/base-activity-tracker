let wallets = [];
// Load wallets from localStorage
const savedWallets = localStorage.getItem("wallets");
if (savedWallets) {
  wallets.push(wallet);
saveWallets();
renderWallets();
}

function renderWallets() {
  const list = document.getElementById("walletList");
  list.innerHTML = "";

  wallets.forEach((wallet, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      ${wallet}
     function removeWallet(index) {
  wallets.splice(index, 1);
  saveWallets();
  renderWallets();
  document.getElementById("walletCount").textContent = wallets.length;

}

    list.appendChild(li);
  });
}
function removeWallet(index) {
  wallets.splice(index, 1);
  renderWallets();
}
renderWallets();
function saveWallets() {
  localStorage.setItem("wallets", JSON.stringify(wallets));
}
function addWallet() {
  const input = document.getElementById("walletInput");
  const wallet = input.value.trim();

  if (!wallet) return;

  wallets.push(wallet);
  saveWallets();
  renderWallets();
  input.value = "";
}
