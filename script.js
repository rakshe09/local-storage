document.getElementById('myForm').addEventListener('submit',function(event){
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const dob = document.getElementById('dob').value;
    const message = document.getElementById('message').value;

    const formData={
        name : name,
        email:email,
        phone:phone,
        dob:dob,
        message:message
    };
    
    let dataArray = JSON.parse(localStorage.getItem('formData')) || [];

    dataArray.push(formData);
    localStorage.setItem('formData',JSON.stringify(dataArray));

    window.location.href='display.html';
});