package agashchuk.profileserver.service;

import agashchuk.profileserver.repo.RoleRepository;
import agashchuk.profileserver.repo.UserRepository;
import agashchuk.profileserver.security.User;
import agashchuk.profileserver.security.UserRole;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Set;

@Service
public class UserServiceImpl implements UserService {

    private static final Logger logger = LoggerFactory.getLogger(UserService.class);

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Transactional
    @Override
    public User createUser(User user, Set<UserRole> userRoles) {
        User localUser = userRepository.findByUsername(user.getUsername());
        if(localUser != null) {
            logger.info("User exist " + user.getUsername());
        } else {
            for (UserRole userRole: userRoles) {
                if (roleRepository.findByName(userRole.getRole().getName()) == null) {
                    roleRepository.save(userRole.getRole());
                }
            }
            user.getUserRoleSet().addAll(userRoles);
            localUser = userRepository.save(user);
        }
        return localUser;
    }
}
