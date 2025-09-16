function onClickButtonLogin() {
  const name = elInputNickname.value
  const passwd = elPassword.value
  handleLogin(name, passwd)
}
function renderDivLogin() {
  elDivLogin.textContent = ''
  elDivLogin.textContent = 'Sign up first'
}
function renderDivLoginOk() {
  elDivLogin.textContent = ''
  elDivLogin.textContent = 'You have successfully logged in '
}
function onLoadLogin() {
  handleLoadPageLogin()
}
window.onload = onLoadLogin

elButtonLogin.onclick = onClickButtonLogin
