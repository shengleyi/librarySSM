package com.leyi.library.controller;

import com.leyi.library.entity.User;
import com.leyi.library.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Controller
public class UserController {
    @Autowired
    private UserService userService;

    @RequestMapping("/login")
    @ResponseBody
    public boolean login(HttpServletRequest request , HttpServletResponse response){
        String username = request.getParameter("username");
        String userpwd = request.getParameter("userpwd");

        return false;
    }

    @RequestMapping("/register")
    @ResponseBody
    public boolean register(HttpServletRequest request,HttpServletResponse response){
        String username = request.getParameter("username");
        String userpwd = request.getParameter("userpwd");
        String useremail = request.getParameter("useremail");
        User user = new User();
        user.setUserName(username);
        user.setUserPwd(userpwd);
        user.setUserEmail(useremail);
        if(userService.register(user)){
            return true;
        }


        return false;
    }
}
