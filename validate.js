
function validate()
{
    
    
    var Fname=document.RegForm.fname.value;
    var rF=RegExp("^[A-Za-z]*$");
    if(!Fname.match(rF) || (Fname =="") || (Fname=="NULL")  ||(Fname=="null"))   {
        alert("Fill First Name");
    }
    var Lname=document.RegForm.lname.value;
    var rL=RegExp("^[A-Za-z]*$");
    if(!Lname.match(rL) || (Lname =="") || (Lname=="NULL")  ||(Lname=="null"))   {
        alert("Fill Last Name");
    }
    var Phone=document.RegForm.phone.value;
    var rP=RegExp("^[0-9]{10}$");
    if(!Phone.match(rP) || (Phone =="") || (Phone=="NULL")  ||(Phone=="null"))   {
        alert("Invalid Phone Number");
    }
    var Email=document.RegForm.email.value;
    var rE=RegExp("[\\w]+@[\\w]+.com");
    if(!Email.match(rE) || (Email =="") || (Email=="NULL")  ||(Email=="null"))   {
        alert("Invalid Email");
    }
    var Pwd=document.RegForm.pwd.value;
    var rPwd=RegExp("[\\w]{8,}$");
    if(!Pwd.match(rPwd) || (Pwd =="") || (Pwd=="NULL")  ||(Pwd=="null"))   {
        alert("Enter Strong Password minimun 8 characters");
    }
}
