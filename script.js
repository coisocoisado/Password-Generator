const pwdLength = document.getElementById("psw-length")
const slider = document.getElementById("slider")

// make the span the current value so it is not empty
pwdLength.innerHTML = slider.value

// when the slider changes its value then update the span
slider.oninput = function() {
    pwdLength.innerHTML = slider.value
}