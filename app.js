// getting form elements 


const validateForm = () =>{
    let nameEle = document.getElementById('name').value;
    let emailEle = document.getElementById('email').value;
    let mobileEle = document.getElementById('mobile').value;
    let passEle = document.getElementById('pass').value;
    let cPassEle = document.getElementById('cpass').value;

    if(nameEle.length < 5) {
        alert('Name is to short');
        return false;
    }
   

    if(emailEle.length < 5) {
        alert('Please enter valid email');
        return false;
    }

    if(mobileEle.length != 10) {
        alert('Please enter valid mobile number');
        return false;
    }
    if(passEle.length < 6) {
        alert('Please enter valid password');
        return false;
    }
    if(cPassEle != passEle) {
        alert('Does not match');
        return false;
    }

    return true;

} 
