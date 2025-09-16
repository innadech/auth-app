function onClickButtonRegister() {
  const name = elInputNickname.value
  const passwd = elPasswordSignup.value
  handleRegister(name, passwd)
}

function renderDivOk() {
  elDivLogin.textContent = ''
  elDivLogin.textContent = 'You have successfully registered '
}
function renderDivNotOk() {
  elDivLogin.textContent = ''
  elDivLogin.textContent = 'Account already exists'
}

function onLoadRegister() {
  handleLoadPageRegister()
}
window.onload = onLoadRegister

elButtonRegister.onclick = onClickButtonRegister
