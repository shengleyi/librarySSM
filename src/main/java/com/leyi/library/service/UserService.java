package com.leyi.library.service;

import com.leyi.library.entity.User;

public interface UserService {
    boolean register(User user);

    void login(User user);
}
