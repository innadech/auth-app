function onLoadLogin() {
  handleLoadPageLogin()
}
function onClickButtonLogin() {
  const username = elInputNickname.value
  const password = elPassword.value
  handleAuthenticate(username, password)
}

function renderDivLoginFail() {
  elDivLogin.textContent = 'Sign up first'
}
function renderDivLoginSuccess() {
  elDivLogin.textContent = 'You have successfully logged in'
}
function renderDivAlreadyLoggedIn() {
  elDivLogin.textContent = 'AlreadyLoggedIn'
}

window.onload = onLoadLogin
elButtonLogin.onclick = onClickButtonLogin
