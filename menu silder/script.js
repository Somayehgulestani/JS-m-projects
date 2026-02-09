const opene = document.getElementById('open')
const fDiv = document.getElementById('modal')
const clos = document.getElementById('close')
const nav = document.querySelector('nav')
const toggle = document.getElementById('toggle')
const submit = document.querySelector('.submit-btn')
const uname = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

opene.addEventListener('click', () => {
  fDiv.style.display = 'block'
})

clos.addEventListener('click', () => {
  fDiv.style.display = 'none'
})

toggle.addEventListener('click', () => {
  document.body.classList.toggle('show-nav')
})

let textError = []
submit.addEventListener('click', e => {
  check(uname, 3, 8)
  checkEmail(email)
  check(password, 5, 8)
  if (password2.value.trim().length > 0) {
    checkpass2(password, password2)
  } else {
    check(password2, 5, 8)
  }

  if (textError.length < 0) {
    e.preventDefault()
  }
})

function check (input, min, max) {
  if (input.value.trim().length < min) {
    error(
      input,
      input.id.charAt(0).toUpperCase() +
        input.id.slice(1) +
        ' ' +
        `should be at least ${min} charecters!`
    )
    textError.push(
      input.id.charAt(0).toUpperCase() +
        input.id.slice(1) +
        ' ' +
        `should be at least ${min} charecters!`
    )
  } else if (input.value.trim().length > max) {
    error(
      input,
      input.id.charAt(0).toUpperCase() +
        input.id.slice(1) +
        ' ' +
        `should be at least ${max} charecters!`
    )
  } else {
    correct(input)
  }
}

function checkEmail (email) {
  let reg =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (reg.test(email.value.trim())) {
    correct(email)
  } else {
    error(
      email,
      email.id.charAt(0).toUpperCase() +
        email.id.slice(1) +
        ' ' +
        'is not valid!'
    )
    textError.push(
      email.id.charAt(0).toUpperCase() +
        email.id.slice(1) +
        ' ' +
        'is not valid!'
    )
  }
}

function checkpass2 (pass, pass2) {
  if (pass.value.trim() === pass2.value.trim()) {
    correct(pass2)
  } else
    error(
      pass2,
      pass2.id.charAt(0).toUpperCase() +
        pass2.id.slice(1) +
        ' ' +
        `is not same as first password!`
    )
  textError.push(
    pass2.id.charAt(0).toUpperCase() +
      pass2.id.slice(1) +
      ' ' +
      `is not same as first password!`
  )
  console.log(textError)
}

function error (input, message) {
  input.style.border = '2px solid red'
  const small = input.parentElement.querySelector('small')

  small.style.visibility = 'visible'
  small.textContent = message
}

function correct (input) {
  input.style.border = '2px solid green'
  const small = input.parentElement.querySelector('small')

  small.style.visibility = 'hidden'
  if (textError.length > -1) {
    errortext.splice(textError, 1)
  }
}
