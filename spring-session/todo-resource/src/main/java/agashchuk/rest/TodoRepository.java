package agashchuk.rest;

import agashchuk.model.Todo;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TodoRepository extends CrudRepository<Todo, Long> {
    @Query("select t from agashchuk.model.Todo t, User u where t.user = u and u.username = ?1 and t.group.id = ?2")
    List<Todo> findByUserNameAndGroup(String userName, long groupId);
}
