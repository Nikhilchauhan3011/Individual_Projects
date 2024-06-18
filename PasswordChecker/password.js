
let inputPass = document.getElementById("password");
let output = document.getElementById("output");

inputPass.addEventListener('input', () => {

    let data = inputPass.value;

    if (data.length <= 8) {
        output.innerHTML = "Password is too small."
        output.style.color = "red";

    } else {

        if (data.search(/[a-z]/) == -1) {
            output.innerHTML = "Password doesn't contain small letter."
            output.style.color = "red";
        }else if(data.search(/[A-Z]/) == -1){
            output.innerHTML = "Password doesn't contain Capital letter."
            output.style.color = "red";
        }else if(data.search(/[0-9]/) == -1){
            output.innerHTML = "Password doesn't contain Numeric letter."
            output.style.color = "red";
        }else if(data.search(/[\!\@\#\$\%\^\&\*\(\)\_\-\=\+\.\>\,\<\/\?]/)==-1){
            output.innerHTML = "Password doesn't contain any Special letter."
            output.style.color = "red";
        }else if(data.length > 8 && data.length <=12){
            output.innerHTML = "Password is good to go."
            output.style.color = "orange";
        } else{
            output.innerHTML = "Password is strong."
            output.style.color = "green";
        }

    }


});