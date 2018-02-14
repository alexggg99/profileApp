package agashchuk.model;

import agashchuk.profileserver.security.User;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Entity(name = "todo")
@Data
public class Todo {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @NotNull
    private String title;
    @ManyToOne
    @JoinColumn(name = "user_id")
    @NotNull
    public User user;
    @NotNull
    public Date createdAt;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "group_id")
    @NotNull
    public Group group;
    public boolean done;
    public String description;
    @Transient
    private MultipartFile file;

    @Override
    public String toString() {
        return "Book{" +
                "id=" + id +
                '}';
    }
}
