<?php

// 6. Polymorphism:

interface Shape {
    public function calculateArea();
}

class Circle implements Shape {
    private $radius;

    public function __construct($radius) {
        $this->radius = $radius;
    }

    public function calculateArea() {
        return pi() * pow($this->radius, 2);
    }
}

class Square implements Shape {
    private $sideLength;

    public function __construct($sideLength) {
        $this->sideLength = $sideLength;
    }

    public function calculateArea() {
        return pow($this->sideLength, 2);
    }
}

// Using polymorphism
$circle = new Circle(5);
$square = new Square(4);

echo $circle->calculateArea(); // Output: 78.54
echo $square->calculateArea(); // Output: 16
?>
