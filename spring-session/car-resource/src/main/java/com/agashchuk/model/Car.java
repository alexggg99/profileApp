package com.agashchuk.model;

import lombok.*;
import javax.persistence.*;


@Entity
@NoArgsConstructor
@Getter @Setter
@ToString @EqualsAndHashCode
public class Car {
    @Id @GeneratedValue
    private Long id;
    private @NonNull String name;
}
