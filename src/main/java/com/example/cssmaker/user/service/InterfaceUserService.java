package com.example.cssmaker.user.service;

import com.example.cssmaker.user.User;

public interface InterfaceUserService {
    void userRegister(User user);
    User userFind(String userName);

    User userLogin(String userId,String userPw);
}
