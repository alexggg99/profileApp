package agashchuk.model;

import agashchuk.profileserver.security.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "tripUser", path = "tripUser")
public interface TripUserRepository extends PagingAndSortingRepository<TripUser, Long> {
    @Query("select t from agashchuk.model.TripUser t, User u where t.user = u and u.username = ?1 and t.trip.id = ?2")
    TripUser findByUserNameAndTripId(String userName, long tripId);

    @Query("select t.user from agashchuk.model.TripUser t where t.trip.id = ?1")
    List<User> findUsers(long id);
}
