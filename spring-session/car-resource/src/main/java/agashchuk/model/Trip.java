package agashchuk.model;

import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Entity(name = "trip")
@NoArgsConstructor
@Getter
@Setter
@ToString
@EqualsAndHashCode
public class Trip {
    @Id
    @GeneratedValue
    private Long id;
    private @NonNull Date date;
    @Column(name = "source_point")
    private @NonNull String sourcePoint;
    private @NonNull String destination;
    @ManyToOne
    @JoinColumn(name = "car_id")
    private @NonNull Car car;
}
