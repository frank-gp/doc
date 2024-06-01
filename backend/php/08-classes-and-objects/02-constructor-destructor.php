<?php

// 3. Constructor and Destructor:
class Car2 {
    // Properties
    public $make;
    public $model;
    public $year;

    // Constructor
    public function __construct($make, $model, $year) {
        $this->make = $make;
        $this->model = $model;
        $this->year = $year;
    }

    // Methods
    public function startEngine() {
        echo "Engine started!";
    }

    // Destructor
    public function __destruct() {
        echo "Object destroyed.";
    }
}

// Creating an object with the constructor
$myCar = new Car2("Toyota", "Camry", 2022);

// Accessing properties
echo $myCar->make; // Output: Toyota

// Calling methods
$myCar->startEngine(); // Output: Engine started!

// The destructor is called automatically when the script ends
?>

?>
