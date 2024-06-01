<?php

// 5. Inheritance:

class SportsCar extends Car {
    // Additional properties specific to SportsCar
    private $topSpeed;

    // Constructor for SportsCar
    public function __construct($make, $model, $year, $topSpeed) {
        parent::__construct($make, $model, $year); // Call the parent class constructor
        $this->topSpeed = $topSpeed;
    }

    // Getter method for topSpeed
    public function getTopSpeed() {
        return $this->topSpeed;
    }
}

// Creating an object of SportsCar
$sportsCar = new SportsCar("Ferrari", "458 Italia", 2022, 200);

// Accessing properties and methods
echo $sportsCar->getMake(); // Output: Ferrari
echo $sportsCar->getTopSpeed(); // Output: 200
?>
