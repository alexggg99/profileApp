package agashchuk.model;

import com.fasterxml.jackson.annotation.JsonView;
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
    @JsonView(Public.class)
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "car_id")
    private @NonNull Car car;

    public static class Public {
        public String model;
    }
}
