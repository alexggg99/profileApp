package agashchuk.model;

import agashchuk.profileserver.security.User;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity(name = "trip_user")
@Table(
        uniqueConstraints = {
                @UniqueConstraint(
                        columnNames = {"user_id", "trip_id"},
                        name = "uk_user_trip"
                )
        }
)
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class TripUser {
    @Id
    @GeneratedValue
    private Long id;
    @ManyToOne
    @JoinColumn(name = "user_id")
    @NotNull
    public User user;
    @ManyToOne
    @JoinColumn(name = "trip_id")
    @NotNull
    private Trip trip;

    @Override
    public String toString() {
        return "TripUser{" +
                "id=" + id +
                '}';
    }
}
