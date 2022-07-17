/* Fill your code*/

function formValidate() {
    name_chk = 0
    add_chk = 0
    mail_chk = 0
    psd_chk = 0
    cpsd_chk = 0
    ph_chk = 0


    let uname = document.getElementById('Name').value;
    let pattern_name = /[a-zA-Z0-9]{8,15}/
    console.log(uname)

    let address = document.getElementById('Address').value
    let pattern_address = /\w/
    console.log(address)

    let email = document.getElementById('EMail').value
    let pattern_email = /\w@/
    console.log(email)

    let pass = document.getElementById('Password').value
    let pattern_pass = /[A-Z]+[a-z]+[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]+[0-9]+/
    console.log(pass)

    let cnfrmpass = document.getElementById('cPassword').value
    let pattern_cnfrmpass = /[A-Z]+[a-z]+[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]+[0-9]+/
    console.log(cnfrmpass)

    let phone = document.getElementById('Phone').value
    let pattern_phone = /^[6-9][0-9]{9}$/
    console.log(phone)

    if(uname === ""){
        document.getElementById('name').innerText = 'Kindly enter name'
    }
    else if(pattern_name.test(uname)){
        document.getElementById('name').innerText = 'Name is valid'
        name_chk = 1
    }
    else{
        document.getElementById('name').innerText = 'Atleast 8 to 15 characters required!'
    }


    if(address === ""){
        document.getElementById('address').innerText = 'Kindly enter address'
    }
    else if(pattern_address.test(address)){
        document.getElementById('address').innerText = 'Address is valid'
        add_chk = 1
    }
    else {
        document.getElementById('address').innerText = 'All characters must be words!'
    }


    if(email === ""){
        document.getElementById('email').innerText = 'Kindly enter email'
    }
    else if(pattern_email.test(email)){
        document.getElementById('email').innerText = 'Email is valid'
        mail_chk = 1
    }
    else {
        document.getElementById('email').innerText = 'Please enter a valid Email!'
    }

    if(pswd === ""){
        document.getElementById('pwd').innerText = 'Kindly enter password'
    }
    else if(pattern_pswd.test(pswd)){
        document.getElementById('pwd').innerText = 'Password is valid'
        psd_chk = 1
    }
    else {
        document.getElementById('pwd').innerText = 'Password should have at least 1 special character, 1 upper-case character, 1 lower-case character and 1 number!'
    }

    if(cpswd === ""){
        document.getElementById('cpwd').innerText = 'Kindly enter password'
    }
    else if(pattern_cpswd.test(cpswd)){
        document.getElementById('cpwd').innerText = 'Password is valid'
        cpsd_chk = 1
    }
    else {
        document.getElementById('cpwd').innerText = 'Password should have at least 1 special character, 1 upper-case character, 1 lower-case character and 1 number!'
    }

    if(phone === ""){
        document.getElementById('phone').innerText = 'Kindly enter phone number'
    }
    else if(pattern_phone.test(phone)){
        document.getElementById('phone').innerText = 'Phone number is valid'
        ph_chk = 1
    }
    else {
        document.getElementById('phone').innerText = 'Phone number should be valid!'
    }

    if (psd_chk === 1 && cpsd_chk === 1 && pswd === cpswd && name_chk != 0 && mail_chk != 0 && add_chk != 0 && ph_chk != 0) {
        alert("Verified!")
    }
    else if(psd_chk === 1 && cpsd_chk === 1 && pswd != cpswd && name_chk != 0 && mail_chk != 0 && add_chk != 0 && ph_chk != 0) {
        alert("Password Mismatch!")
    }
    else {
        alert("Unverified!")
    }
    
}
