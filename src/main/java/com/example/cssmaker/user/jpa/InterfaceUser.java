package com.example.cssmaker.user.jpa;


import com.example.cssmaker.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface InterfaceUser extends JpaRepository <User, Integer>{
//db쿼리문(jpa 메소드 찾아서 해보기)

    User findByUserIdAndUserPw(String userId, String userPw);
    User findByUserName(String userName);


}
