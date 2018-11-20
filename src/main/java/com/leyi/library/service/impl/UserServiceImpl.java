package com.leyi.library.service.impl;

import com.leyi.library.dao.UserDao;
import com.leyi.library.entity.User;
import com.leyi.library.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    public boolean register(User user) {
        User userInfo = userDao.selectUser(user.getUserName());
        if(userInfo!=null){
            return false;
        }else{
            userDao.register(user);
            return true;
        }
    }

    public boolean login(User user) {
        User userinfo = userDao.selectUser(user.getUserName());
        if(userinfo != null){
            return true;
        }else{
            return false;
        }
    }
}
