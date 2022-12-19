 ## Animal Classification
This program is designed to classify animals based on their physical characteristics and temperature regulation.

## Classes
The program defines the following classes:

#### Animal: 
This is the base class that defines the common properties and methods of all animals. It has four properties: withBackbone, withoutBackbone, coldBlooded, and warmBlooded.

#### Anthropoda:
This class represents the class of insects. It is a subclass of Animal and inherits its properties and methods. It has a describe method that calls the withoutBackbone and coldBlooded methods to output a message about the characteristics of insects.

#### Fish: 
This class represents the class of aquatic animals. It is a subclass of Animal and has a describe method that calls the withBackbone and coldBlooded methods to output a message about the characteristics of fish.

#### Amphibia: 
This class represents the class of crawling animals. It is a subclass of Animal and has a describe method that calls the withBackbone and coldBlooded methods to output a message about the characteristics of amphibians.

#### Reptiles: 
This class represents the class of reptiles. It is a subclass of Animal and has a describe method that calls the withBackbone and coldBlooded methods to output a message about the characteristics of reptiles.

#### AVES:
 This class represents the class of birds. It is a subclass of Animal and has a describe method that calls the withBackbone and warmBlooded methods to output a message about the characteristics of birds.

#### Mammals: 
This class represents the class of mammals. It is a subclass of Animal and has a describe method that calls the withoutBackbone and warmBlooded methods to output a message about the characteristics of mammals.