function storeTheUserInfo()
{
    var inputTag=document.querySelectorAll("input")
    var selectTag=document.querySelectorAll("select")
    var fname=inputTag[0].value
    var lname=inputTag[1].value
    var mIdOrPhno=inputTag[2].value
    var pass=inputTag[3].value
    var date=inputTag[0].value
    var mo=inputTag[1].value
    var yy=inputTag[2].value
    window.sessionStorage.setItem("mailIdOphno",mIdOrPhno)
    window.sessionStorage.setItem("pass",pass)
    window.localStorage.setItem("mailIdOrphno",mIdOrPhno)
    window.localStorage.setItem("pass",pass)
    window.localStorage.setItem("fname",fName)
    window.localStorage.setItem("lname",lName)
    window.localStorage.setItem("date",date)
    window.localStorage.setItem("mo",mo)
    window.localStorage.setItem("yy",yy)
}
var gender=function gender(a){
    window.localStorage.setItem("gender",a)
}



