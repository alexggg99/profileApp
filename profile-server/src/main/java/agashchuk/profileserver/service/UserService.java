package agashchuk.profileserver.service;

import agashchuk.profileserver.security.User;
import agashchuk.profileserver.security.UserRole;

import java.util.Set;

public interface UserService {

    User createUser(User user, Set<UserRole> userRoles);


}
