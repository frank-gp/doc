<?php 

class Person {
    public $name;
    public $age;

    function __construct($name, $age) {
        $this->name = $name;
        $this->age = $age;
    }
}

$person = new Person("Alice", 30);


?>