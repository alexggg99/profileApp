package agashchuk.model;

import lombok.*;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity(name = "trip")
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class Trip {
    @Id
    @GeneratedValue
    private Long id;
    private @NonNull Date date;
    @Column(name = "source_point")
    private @NonNull String sourcePoint;
    private @NonNull String destination;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "car_id")
    private @NonNull Car car;
    @OneToMany(mappedBy = "trip")
    private List<TripUser> tripUsers;

    @Override
    public String toString() {
        return "Trip{" +
                "id=" + id +
                '}';
    }
}
