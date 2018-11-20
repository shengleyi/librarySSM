package com.leyi.library.service;

import com.leyi.library.entity.User;

public interface UserService {
    boolean register(User user);

    boolean login(User user);
}
