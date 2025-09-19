function onLoadPagePanel() {
  handleLoadPagePanel()
}

function renderPanel(accountData) {
  elH2Panel.querySelector('i').textContent = 'Доступ разрешен!'
  elH2Panel.querySelector('u').textContent = accountData.username
}

window.onload = onLoadPagePanel
