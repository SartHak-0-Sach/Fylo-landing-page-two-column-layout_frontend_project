const feature_btn = document.getElementById("features-btn");
const feature_input = document.getElementById("features-input");
const feature_errmsg = document.getElementById("features-error-message");
const signin_input = document.getElementById("signin-input");
const signin_btn = document.getElementById("signin-btn");
const signin_errmsg = document.getElementById("signin-error-message");
const emailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9\-]{2,}\.[a-zA-Z0-9]{2,}$/;
function getStarted() {
    if (!feature_input.value.match(emailRegex)) {
        feature_input.style.borderColor = '#ff2851';
        feature_input.style.outline = '#ff2851';
        feature_errmsg.style.color = '#ff2851';
        feature_errmsg.style.display = 'block';
    }
    else {
        feature_input.style.borderColor = 'black';
        feature_input.style.borderColor = 'black';
        feature_input.value = '';
        feature_input.style.outline = 'black';
        feature_errmsg.style.display = 'none';
    }
}
function getStartedForFree() {
    if (!signin_input.value.match(emailRegex)) {
        signin_input.style.borderColor = '#ff2851';
        signin_input.style.outline = '#ff2851';
        signin_errmsg.style.display = 'block';
        signin_errmsg.style.color = '#ff2851';
    }
    else {
        signin_input.style.borderColor = 'black';
        signin_input.value = '';
        signin_input.style.outline = 'black';
        signin_errmsg.style.display = 'none';
    }
}
