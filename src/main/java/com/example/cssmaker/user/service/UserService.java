package com.example.cssmaker.user.service;

import com.example.cssmaker.user.User;
import com.example.cssmaker.user.jpa.InterfaceUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService implements InterfaceUserService{

    @Autowired
    //repository
    InterfaceUser iuser;

    @Override
    public void userRegister(User user){
        iuser.save(user);
    }

    @Override
    public User userLogin(String userId, String userPw){
        User user = iuser.findByUserIdAndUserPw(userId,userPw);

        return user;
    }

    @Override
    public User userFind(String userName){
        User user = iuser.findByUserName(userName);

        return user;
    }
}
