package agashchuk.profileserver;

import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.rule.OutputCapture;
import org.springframework.data.redis.RedisConnectionFailureException;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ProfileServerApplicationTests {

	@Rule
	public OutputCapture outputCapture = new OutputCapture();

	@Test
	public void testDefaultSettings() {
		try {
			ProfileServerApplication.main(new String[0]);
		}
		catch (Exception ex) {
			if (!redisServerRunning(ex)) {
				return;
			}
		}
		String output = this.outputCapture.toString();
		assertThat(output).contains("Found key spring.boot.redis.test");
	}

	private boolean redisServerRunning(Throwable ex) {
		System.out.println(ex.getMessage());
		if (ex instanceof RedisConnectionFailureException) {
			return false;
		}
		return (ex.getCause() == null || redisServerRunning(ex.getCause()));
	}

}
