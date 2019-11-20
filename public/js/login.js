function validateform(form)
{
    var eml=form.emls.value;
    var psd=form.pwd.value;
    var cpsd=form.cpwd.value;
    var num=form.nmb.value;
    var email_re=/\S+@\S+\.\S+/;
    var phone_re=/(6|7|8|9)\d{9}$/;

    if(email_re.test(eml)==false)
    {
        alert("Enter proper mail id");
        return false;
    }
    else if(phone_re.test(num)==false)
    {
        alert("Enter proper number");
        return false;
    }
    else if(psd!=cpsd)
    {
        alert("Passwords don't match");
        return false;
    }

}

function validatelogin()
{
    alert("Logged In");
    // return false;
}

