package agashchuk.rest;

import agashchuk.model.Book;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.web.servletapi.SecurityContextHolderAwareRequestWrapper;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "*", maxAge = 3600, allowedHeaders = { "x-auth-token", "x-requested-with", "x-xsrf-token" })
@RequestMapping("books")
@RestController
@RequiredArgsConstructor
public class BookController {

    private final BookRepository bookRepository;

    @RequestMapping
    public List<Book> getAll() {
        return (List<Book>) bookRepository.findAll();
    }

    @RequestMapping("/{id}")
    public Book getBook(@PathVariable long id, SecurityContextHolderAwareRequestWrapper requestWrapper) {
        return bookRepository.findOne(id);
    }

    @RequestMapping(path = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Void> deleteBook(@PathVariable long id, SecurityContextHolderAwareRequestWrapper requestWrapper) {
        if (requestWrapper.isUserInRole("ADMIN")) {
            if (!bookRepository.exists(id)) {
                return new ResponseEntity(HttpStatus.NOT_FOUND);
            } else {
                bookRepository.delete(id);
                return new ResponseEntity(HttpStatus.OK);
            }
        } else {
            return new ResponseEntity(HttpStatus.UNAUTHORIZED);
        }
    }

    @RequestMapping(path = "/{id}", method = RequestMethod.PUT)
    public ResponseEntity<Long> updateBook(@PathVariable long id, @RequestBody Book book, SecurityContextHolderAwareRequestWrapper requestWrapper) {
        if (requestWrapper.isUserInRole("ADMIN")) {
            if (!bookRepository.exists(id)) {
                return new ResponseEntity(HttpStatus.NOT_FOUND);
            } else {
                bookRepository.save(book);
                return new ResponseEntity(id, HttpStatus.OK);
            }
        } else {
            return new ResponseEntity(HttpStatus.UNAUTHORIZED);
        }
    }

}
