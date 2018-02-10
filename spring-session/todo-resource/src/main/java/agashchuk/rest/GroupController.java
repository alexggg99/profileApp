package agashchuk.rest;

import agashchuk.model.Group;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "*", maxAge = 3600, allowedHeaders = { "x-auth-token", "x-requested-with", "x-xsrf-token" })
@RestController
@RequestMapping("group")
@RequiredArgsConstructor
public class GroupController {

    private final GroupRepository groupRepository;

    @RequestMapping
    public List<Group> getAll() {
        return (List<Group>) groupRepository.findAll();
    }

    @RequestMapping("/{id}")
    public Group getTodo(@PathVariable long id) {
        return groupRepository.findOne(id);
    }

    @RequestMapping(path = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Void> deleteTodo(@PathVariable long id) {
        if (!groupRepository.exists(id)) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        } else {
            groupRepository.delete(id);
            return new ResponseEntity(HttpStatus.OK);
        }
    }

    @RequestMapping(path = "/{id}", method = RequestMethod.PUT)
    public ResponseEntity<Long> updateTodo(@PathVariable long id, @RequestBody Group group) {
        if (!groupRepository.exists(id)) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        } else {
            groupRepository.save(group);
            return new ResponseEntity(id, HttpStatus.OK);
        }
    }

}
