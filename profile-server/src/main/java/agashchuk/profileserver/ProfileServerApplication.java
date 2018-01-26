package agashchuk.profileserver;

import agashchuk.profileserver.config.SecurityUtility;
import agashchuk.profileserver.security.Role;
import agashchuk.profileserver.security.User;
import agashchuk.profileserver.security.UserRole;
import agashchuk.profileserver.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.session.web.http.HeaderHttpSessionStrategy;

import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class ProfileServerApplication implements CommandLineRunner {

	@Autowired
	private UserService userService;

	@Autowired
	private StringRedisTemplate template;

	public static void main(String[] args) {
		SpringApplication.run(ProfileServerApplication.class, args);
	}

	@Override
	public void run(String... strings) throws Exception {
		User admin = new User();
		admin.setUsername("admin");
		admin.setPassword(SecurityUtility.passwordEncoder().encode("admin"));
		admin.setEmail("admin@admin");
		Set<UserRole> userRoles = new HashSet<>();
		Role roleAdmin = new Role();
		roleAdmin.setName("ROLE_ADMIN");
		userRoles.add(new UserRole(admin, roleAdmin));
		userService.createUser(admin, userRoles);
	}

	@Bean
	HeaderHttpSessionStrategy sessionStrategy() {
		return new HeaderHttpSessionStrategy();
	}
}
