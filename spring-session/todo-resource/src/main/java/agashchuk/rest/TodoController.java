package agashchuk.rest;

import agashchuk.model.Todo;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.web.servletapi.SecurityContextHolderAwareRequestWrapper;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "*", maxAge = 3600, allowedHeaders = { "x-auth-token", "x-requested-with", "x-xsrf-token" })
@RestController
@RequestMapping("todo")
@RequiredArgsConstructor
public class TodoController {

    private final TodoRepository todoRepository;

    @RequestMapping
    public List<Todo> getAll() {
        return (List<Todo>) todoRepository.findAll();
    }

    @RequestMapping("/{id}")
    public Todo getTodo(@PathVariable long id) {
        return todoRepository.findOne(id);
    }

    @RequestMapping(path = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Void> deleteTodo(@PathVariable long id) {
        if (!todoRepository.exists(id)) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        } else {
            todoRepository.delete(id);
            return new ResponseEntity(HttpStatus.OK);
        }
    }

    @RequestMapping(path = "/{id}", method = RequestMethod.PUT)
    public ResponseEntity<Long> updateTodo(@PathVariable long id, @RequestBody Todo todo) {
        if (!todoRepository.exists(id)) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        } else {
            todoRepository.save(todo);
            return new ResponseEntity(id, HttpStatus.OK);
        }
    }

}
