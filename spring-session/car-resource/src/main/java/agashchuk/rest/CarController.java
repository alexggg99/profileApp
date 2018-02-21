package agashchuk.rest;

import agashchuk.model.Car;
import agashchuk.model.CarRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
public class CarController {
    private CarRepository carRepository;

    public CarController(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    @GetMapping("/cool-cars")
    public List<Car> coolCars() {
        return (List<Car>) carRepository.findAll();
    }
}
