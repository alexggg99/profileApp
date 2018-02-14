package agashchuk;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.session.data.redis.config.ConfigureRedisAction;
import org.springframework.session.web.http.HeaderHttpSessionStrategy;

@SpringBootApplication
public class TodoResource extends WebSecurityConfigurerAdapter {

	private static final String[] PUBLIC_MATCHERS = {
			"/files/**"
	};

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.cors();
		http.csrf().disable();
		http
				.authorizeRequests()
				.antMatchers(PUBLIC_MATCHERS).permitAll().anyRequest().authenticated();
	}

	@Bean
    HeaderHttpSessionStrategy sessionStrategy() {
		return new HeaderHttpSessionStrategy();
	}

	@Bean
    ConfigureRedisAction configureRedisAction(){
		return ConfigureRedisAction.NO_OP;
	}

	public static void main(String[] args) {
		SpringApplication.run(TodoResource.class, args);
	}

}
