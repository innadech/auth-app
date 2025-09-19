function onLoadLogin() {
  handleLoadPageLogin()
}
function onClickButtonLogin() {
  const username = elInputNickname.value
  const password = elPassword.value
  handleAuthenticate(username, password)
}

function renderDivSignIn(status) {
  elDivLogin.textContent = status
}

window.onload = onLoadLogin
elButtonLogin.onclick = onClickButtonLogin
