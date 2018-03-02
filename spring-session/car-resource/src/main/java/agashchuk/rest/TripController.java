package agashchuk.rest;

import agashchuk.model.Trip;
import agashchuk.model.TripRepository;
import agashchuk.model.TripUser;
import agashchuk.model.TripUserRepository;
import agashchuk.profileserver.security.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("trip")
public class TripController {

    private TripRepository tripRepository;
    private TripUserRepository tripUserRepository;

    @Autowired
    public TripController(TripRepository tripRepository, TripUserRepository tripUserRepository) {
        this.tripRepository = tripRepository;
        this.tripUserRepository = tripUserRepository;
    }

    @GetMapping("/count")
    public long countTrips() {
        return tripRepository.count();
    }

    @PostMapping("/join/{id}")
    public ResponseEntity<Void> join(@PathVariable long id, Principal principal) {
        Trip trip = tripRepository.findOne(id);
        User user = (User) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();
        TripUser tripUser = new TripUser();
        tripUser.setTrip(trip);
        tripUser.setUser(user);
        tripUserRepository.save(tripUser);
        return new ResponseEntity<Void>(HttpStatus.OK);
    }

    @PostMapping("/disJoin/{id}")
    public ResponseEntity<Void> disJoin(@PathVariable long id, Principal principal) {
        TripUser tripUser = tripUserRepository.findByUserNameAndTripId(principal.getName(), id);
        tripUserRepository.delete(tripUser);
        return new ResponseEntity<Void>(HttpStatus.OK);
    }

    @GetMapping("/joined/{id}")
    public ResponseEntity<Response> isUserJoined(@PathVariable long id, Principal principal) {
        if (tripUserRepository.findByUserNameAndTripId(principal.getName(), id) != null) {
            return new ResponseEntity<>(new Response(true, tripUserRepository.findUsers(id)), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(new Response(false, tripUserRepository.findUsers(id)), HttpStatus.OK);
        }
    }

    private class Response {

        final boolean isJoined;
        final List<User> users;

        public Response(boolean isJoined, List<User> users) {
            this.isJoined = isJoined;
            this.users = users;
        }

        public boolean isJoined() {
            return isJoined;
        }

        public List<User> getUsers() {
            return users;
        }
    }

}
