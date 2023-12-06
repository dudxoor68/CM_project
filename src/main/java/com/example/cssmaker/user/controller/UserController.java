package com.example.cssmaker.user.controller;

import com.example.cssmaker.user.User;
import com.example.cssmaker.user.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@CrossOrigin(origins="http://localhost:3000/")
@RequestMapping("/")
public class UserController implements ErrorController {



    @Autowired
    UserService userService;

    @RequestMapping("api/Main/{after}/log")
    public User userMain(HttpServletRequest request){
        HttpSession session = request.getSession();
        User user = (User) session.getAttribute("userLogin");

        return user;
    }



    @RequestMapping("api/Logout")
    public void userLogOut(HttpServletRequest request, HttpServletResponse response) throws IOException{
        HttpSession session = request.getSession();

        session.removeAttribute("userLogin");

        response.sendRedirect("/#/Main");

    }

    @RequestMapping("api/find")
    public User userFind(@RequestParam String userName) throws IOException{

        User user = userService.userFind(userName);
        System.out.println(user);
        return user;

    }




    @RequestMapping("api/Log")
    public void userLoginPro(HttpServletRequest request, HttpServletResponse response, @RequestParam String userId, @RequestParam String userPw) throws IOException{
        HttpSession session = request.getSession();
        User user = userService.userLogin(userId,userPw);

        if(user == null){
            response.sendRedirect("/#/Login?after=logNo");
        }else{
            session.setAttribute("userLogin",user);
            response.sendRedirect("/#/Main?after=log");
        }


    }

    @RequestMapping("api/Regist")
    public void userRegist(HttpServletResponse response, @RequestParam String userName,@RequestParam String userId ,@RequestParam String userPw,@RequestParam String userPw_check) throws IOException {
        User user = new User();
        if(userPw.equals(userPw_check)) {
            user.setUserName(userName);
            user.setUserId(userId);
            user.setUserPw(userPw);

            userService.userRegister(user);

            response.sendRedirect("/#/Login?after=regist");
        }else{
            response.sendRedirect("/#/Login?after=registNo");
        }

    }

//    @GetMapping("error")
//    public void userError(HttpServletResponse response) throws IOException{
//        System.out.println("error -> go Main");
//        response.sendRedirect("/Main?after=error");
//    }


}
