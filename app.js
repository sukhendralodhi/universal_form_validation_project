// getting form elements 
const formElement = document.getElementById('form');

const errorMsg = ()=> {
    let errorMessage = document.querySelectorAll('.error-msg');
    for (let item of errorMessage) {
        item.innerHTML = '';
    }
}

const setError = (id, error)=>{
    let errorId = document.getElementById(id);
    let element = document.getElementsByClassName('error-msg')[0].innerText = `*${error-message}`;
}

const validateForm = () =>{
    let returnValue = true;
    // calling function for clear value of errors 
    errorMsg();
    // getting all form inputs and values 
    let name = document.forms['myform']['fname'].value;
    let email = document.forms['myform']['femail'].value;
    let mobile = document.forms['myform']['fmobile'].value;
    let password = document.forms['myform']['fpass'].value;
    let cpassword = document.forms['myform']['fcpass'].value;

    // form validation 
    if(name.length < 5) {
        setError('name','Length of name is to short')
        returnValue = false;
    }

} 
formElement.addEventListener('submit', (e)=> {
    e.preventDefault();
})