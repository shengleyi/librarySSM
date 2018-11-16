package com.leyi.library.dao;

import com.leyi.library.entity.User;
import org.springframework.stereotype.Repository;

public interface UserDao {
    void register(User user);

    void login(User user);

    User selectUser(String username);
}
