package agashchuk.profileserver.resource;

import agashchuk.profileserver.repo.UserRepository;
import agashchuk.profileserver.security.User;
import agashchuk.profileserver.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.security.Principal;
import java.util.Collections;
import java.util.Map;
import java.util.concurrent.TimeUnit;

@RestController
@RequestMapping("session")
public class TokenResource {
    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private StringRedisTemplate stringRedisTemplate;


//    @CrossOrigin(origins = "*", maxAge = 3600, allowedHeaders = { "x-auth-token", "x-requested-with", "x-xsrf-token" })
    @GetMapping("/user")
    public ResponseEntity<Void> user(Principal user) {
        return new ResponseEntity<Void>(HttpStatus.OK);
    }

    @GetMapping("/token")
    public Map<String, String> token(HttpSession session) {
        return Collections.singletonMap("token", session.getId());
    }

//    @CrossOrigin(origins = "*", maxAge = 3600, allowedHeaders = { "x-auth-token", "x-requested-with", "x-xsrf-token" })
    @PostMapping("/logout")
    public ResponseEntity<Void> logout(HttpSession session) {
        SecurityContextHolder.clearContext();
        return new ResponseEntity<Void>(HttpStatus.OK);
    }
}
