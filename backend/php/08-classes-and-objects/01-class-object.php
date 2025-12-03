<?php
class Car {
    // Properties
    public $make;
    public $model;
    public $year;

    // Methods
    public function startEngine() {
        echo "Engine started!";
    }

    public function stopEngine() {
        echo "Engine stopped!";
    }
}
?>
<?php
// Creating an object of the Car class
$myCar = new Car();

// Accessing properties and methods
$myCar->make = "Toyota";
$myCar->model = "Camry";
$myCar->year = 2022;

echo $myCar->make; // Output: Toyota

$myCar->startEngine(); // Output: Engine started!
?>
