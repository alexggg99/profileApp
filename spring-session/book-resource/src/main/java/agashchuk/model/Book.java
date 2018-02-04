package agashchuk.model;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.*;

@Entity(name = "books")
@Data
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String title;
    public String author;
    public String publisher;
    public String publishDate;
    public String lang;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "category_id")
    public Category category;
    public int numberOfPages;
    public Double listPrice;
    public Double ourPrice;
    public boolean active;
    @Column(columnDefinition = "text")
    public String description;
    @Transient
    private MultipartFile bookImage;

    @Override
    public String toString() {
        return "Book{" +
                "id=" + id +
                '}';
    }
}
