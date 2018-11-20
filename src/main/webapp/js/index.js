function login_click() {
    var username = document.getElementById("username");
    var password = document.getElementById("password");

    if(username.value == ""){
        alert("用户名不能为空");
        return;
    }

    if(password.value == ""){
        alert("请输入密码");
        return;
    }

    var data = {};
    data["username"] = username.value;
    data["password"] = password.value;


    $.ajax({
        url:"login",
        type:"post",
        data:data,
        dataType:"json",
        success:function (response) {
            if(response == true){
                alert("Login success");
                window.location.href = "main.html";
            }else{
                alert("Login fail");
            }
        },
        error:function () {
            alert("error");
        }
    })
}

function register_click() {
    var username = document.getElementById("register_username");
    var password = document.getElementById("register_password");
    var confirmPwd = document.getElementById("confirm_password");
    var userEmail = document.getElementById("register_email");

    if(username.value == ""){
        alert("用户名不能为空");
        return;
    }

    if(password.value == ""){
        alert("请输入密码");
        return;
    }

    if(confirmPwd.value == ""){
        alert("请输入确认密码");
        return;
    }

    if(!check()){
        alert("邮箱输入错误");
        return;
    }

    var data = {};
    data["username"] = username.value;
    data["password"] = password.value;
    data["email"] = userEmail.value;

    if(confirmPwd.value == password.value){
        $.ajax({
            url:"register",
            type:"post",
            data:data,
            dataType:"json",
            success:function (response) {
                if(response == true){
                    alert("注册成功");
                    ui_change();
                }
                else{
                    alert("注册失败");
                }

                regclear();

            },
            error:function () {
                alert("注册error");
                regclear();
            }
        });
    }else{
        alert("两次密码输入不一致");
        $(confirmPwd).val("");
    }
}

function ui_change() {
    var dispaly = $("#login_div").css("display");
    if(dispaly == "block"){
        $("#login_div").css("display","none");
        $("#register_div").css("display","block");
    }else{
        $("#login_div").css("display","block");
        $("#register_div").css("display","none");
    }

    loginclear();
    regclear();
}

/** 验证邮箱 **/
function check(){
    var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"); //正则表达式
    var obj = document.getElementById("register_email"); //要验证的对象
    if(obj.value == ""){ //输入不能为空
        return false;
    }else if(!reg.test(obj.value)){ //正则验证不通过，格式不对
        return false;
    }else{
        return true;
    }
}

function regclear(){
    $("#register_username").val("");
    $("#register_password").val("");
    $("#confirm_password").val("");
    $("#register_email").val("");
}

function loginclear() {
    $("#username").val("");
    $("#password").val("");
}