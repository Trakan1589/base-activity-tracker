let wallets = [];
// Load wallets from localStorage
const savedWallets = localStorage.getItem("wallets");
if (savedWallets) {
  wallets.push(wallet);
saveWallets();
renderWallets();
}
function addWallet() {
  const input = document.getElementById("walletInput");
  const wallet = input.value.trim();

  if (!wallet) return;

  if (wallets.includes(wallet)) {
    alert("Wallet already exists!");
    return;
  }

  wallets.push(wallet);
  saveWallets();
  renderWallets();
  input.value = "";
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
function renderWallets() {
  const list = document.getElementById("walletList");
  const search = document.getElementById("searchInput").value.toLowerCase();
  list.innerHTML = "";

  wallets
    .filter(wallet => wallet.toLowerCase().includes(search))
    .forEach((wallet, index) => {
      const li = document.createElement("li");

      li.innerHTML = `
        ${wallet}
        <button onclick="removeWallet(${index})">Delete</button>
      `;

      list.appendChild(li);
    });

  document.getElementById("walletCount").textContent = wallets.length;
}
