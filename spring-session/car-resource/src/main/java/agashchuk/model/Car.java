package agashchuk.model;

import agashchuk.profileserver.security.User;
import lombok.*;
import javax.persistence.*;


@Entity(name = "car")
@NoArgsConstructor
@Getter @Setter
@ToString @EqualsAndHashCode
public class Car {
    @Id @GeneratedValue
    private Long id;
    private @NonNull String model;
    private @NonNull int seats;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;
}
