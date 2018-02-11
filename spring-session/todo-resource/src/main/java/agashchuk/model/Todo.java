package agashchuk.model;

import agashchuk.profileserver.security.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.*;
import java.util.Date;

@Entity(name = "todo")
@Data
public class Todo {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String title;
    @ManyToOne
    @JoinColumn(name = "user_id")
    public User user;
    public Date createdAt;
    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "group_id")
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
