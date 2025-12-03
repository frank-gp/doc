<?php

// 4. Encapsulation:
?>
<?php
class Car {
    // Properties are usually declared as private to achieve encapsulation
    private $make;
    private $model;
    private $year;

    // Constructor
    public function __construct($make, $model, $year) {
        $this->make = $make;
        $this->model = $model;
        $this->year = $year;
    }

    // Getter methods to access private properties
    public function getMake() {
        return $this->make;
    }

    public function getModel() {
        return $this->model;
    }

    public function getYear() {
        return $this->year;
    }
}

// Creating an object
$myCar = new Car("Toyota", "Camry", 2022);

// Accessing properties using getter methods
echo $myCar->getMake(); // Output: Toyota
echo $myCar->getModel(); // Output: Camry
echo $myCar->getYear(); // Output: 2022
?>
