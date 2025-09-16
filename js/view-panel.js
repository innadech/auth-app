function onLoadPagePanel() {
  handleLoadPagePanel()
}

function renderPanel(nickname) {
  if (nickname) {
    elH2Panel.value = nickname.name
    // elH2Panel.querySelector('b').textContent = 'Ваш никнейм: '
    // elH2Panel.querySelector('i').textContent = nickname
  } else {
    elH2Panel.value = ''
    // elH2Panel.querySelector('b').textContent = 'Вход не выполнен'
    // elH2Panel.querySelector('i').textContent = ''
  }
}

window.onload = onLoadPagePanel
