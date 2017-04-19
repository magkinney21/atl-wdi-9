1)
    class Cat
      def initialize(type)
        @type = type
      end
    end

    class Ragdoll < Cat
      def initialize(type, name )
        super(type)
        @name = name
      end
    def to_s
      "#{@type}, #{@name}"
    end
  end
  puts Ragdoll.new("Ragdoll", "Sara").to_s

  class Mammaml
    def breathe
      puts "inhale exhale"
    end
  end

  class Dog < Mammaml
    def bark
      puts "woof woof"
    end
  end
  chopper = Dog.new
  chopper.breathe
  chopper.bark

  class Plane
    def passangers
      puts "Welcome passangers"
    end
    def fly
      puts "Lets fly"
    end
  end

  class Delta < Plane
    def fly
      puts "We hope you enjoy flying with us"
    end
  end

m = Delta.new
m.passangers
m.fly

2) A local variable can be accessed with in the scope of that variable and is
    and used for temporary values.
    An instance variable is used for a given instance and can be accessed
    in any instance method.
    A class: starts with @@, shared between all instances.

3)Encapsulation is the packing of data and functions into a single component.
    Like putting everything you need to make up a class inside of that class.
4)private: methods available only within the class.
5) An object is a unit of data. A class is what kind of data it is.
   A class is a blueprint. An instance is an object generated from that blueprint.
6)Duck Typing means an object type is defined by what it it can do no by
    what it is.
6) Polymorphism - the provision of a single interface to entities of different types
    It means being able to send the same message to different objects and get
    different results
7)  base-class: is the just a class.
    sub-class: a class derived through inheritance.
    super: a sub-class' way of referring to its parent class.

Give three different examples of inheritance. Write these class definitions and their inheritance relationships out in Ruby.
What is the difference (in your own words) between a local variable, an instance variable, and class variable.
What is encapsulation?
What is a private method?
What is the difference between a class and an object? What is the difference between a class and an instance?
What is "duck typing" in Ruby?
Describe "Polymorphism"
What is a "base class", "sub-class", and "super class"?
