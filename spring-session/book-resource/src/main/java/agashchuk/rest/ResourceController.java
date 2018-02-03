package agashchuk.rest;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.session.data.redis.config.annotation.web.http.RedisHttpSessionConfiguration;
import org.springframework.web.bind.annotation.*;

@Configuration
@RestController
public class ResourceController extends RedisHttpSessionConfiguration {

    @CrossOrigin(origins = "*", maxAge = 3600, allowedHeaders = { "x-auth-token", "x-requested-with", "x-xsrf-token" })
    @RequestMapping("testHello")
    public ResponseEntity<String> testRest() {
        return new ResponseEntity<String>("test 133", HttpStatus.OK);
    }

}
