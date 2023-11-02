// Step 1: Create a class for vehicles
class Vehicle {
    constructor(name, manufacturer, ID) {
    this.name = name;
    this.manufacturer = manufacturer;
    this.ID = ID;
    }
    }
    
    // Step 2: Create a class for cars that inherits from the Vehicle class
    class Car extends Vehicle {
    constructor(name, manufacturer, ID, type, fuelType) {
    super(name, manufacturer, ID);
    this.type = type;
    this.fuelType = fuelType;
    }
    }
    
    // Step 3: Create a class for airplanes that inherits from the Vehicle class
    class Airplane extends Vehicle {
    constructor(name, manufacturer, ID, airplaneType) {
    super(name, manufacturer, ID);
    this.airplaneType = airplaneType;
    }
    }
    
    // Step 4: Create a class for employees
    class Employee {
    constructor(name, ID, dateOfBirth) {
    this.name = name;
    this.ID = ID;
    this.dateOfBirth = dateOfBirth;
    }
    }
    
    // Step 5: Create a class for drivers that inherits from the Employee class
    class Driver extends Employee {
    constructor(name, ID, dateOfBirth, licenseID) {
    super(name, ID, dateOfBirth);
    this.licenseID = licenseID;
    }
    }
    
    // Step 6: Create a class for pilots that inherits from the Employee class
    class Pilot extends Employee {
    constructor(name, ID, dateOfBirth, licenseID) {
    super(name, ID, dateOfBirth);
    this.licenseID = licenseID;
    }
    }
    
    // Step 7: Create a Reservation class to store reservations
    class Reservation {
    constructor(reservationDate, employeeId, vehicleId, reservationID) {
    this.reservationDate = reservationDate;
    this.employeeId = employeeId;
    this.vehicleId = vehicleId;
    this.reservationID = reservationID;
    }
    }
    
    // Step 8: Create objects for three cars and two planes
    const car1 = new Car("Car1", "Toyota", 1, "Sedan", "Gasoline");
    const car2 = new Car("Car2", "Honda", 2, "SUV", "Electric");
    const car3 = new Car("Car3", "Ford", 3, "Truck", "Gasoline");
    
    const plane1 = new Airplane("Plane1", "Boeing", 4, "Commercial");
    const plane2 = new Airplane("Plane2", "Airbus", 5, "Private");
    
    // Step 9: Write a function to check and store reservations
    const reservations = [];
    
    function makeReservation(employeeId, vehicleId) {
    const employee = employees.find((e) => e.ID === employeeId);
    const vehicle = vehicles.find((v) => v.ID === vehicleId);
    
    if (employee && vehicle) {
    if (employee instanceof Pilot && vehicle instanceof Car) {
    console.log("Pilots cannot drive cars.");
    } else {
    const reservation = new Reservation(
    new Date(),
    employeeId,
    vehicleId,
    reservations.length + 1
    );
    reservations.push(reservation);
    console.log("Reservation made successfully.");
    }
    } else {
    console.log("Employee or vehicle not found.");
    }
    }
    
    // Step 10: Make some sample employees
    const employee1 = new Driver("Driver1", 101, "1990-01-01", "DL12345");
    const employee2 = new Driver("Driver2", 102, "1995-05-05", "DL54321");
    const employee3 = new Pilot("Pilot1", 201, "1985-03-15", "PL7890");
    const employee4 = new Pilot("Pilot2", 202, "1990-11-20", "PL4567");
    
    const employees = [employee1, employee2, employee3, employee4];
    const vehicles = [car1, car2, car3, plane1, plane2];
    
    // Step 11: Make reservations
    makeReservation(101, 1); // Driver reserving Car1
    makeReservation(201, 1); // Pilot trying to reserve Car1 (not allowed)
    makeReservation(201, 4); // Pilot reserving Plane1
    
    // Step 12: Print the content of the reservations array using the map function
    console.log("Reservations:");
    reservations.map((reservation) => {
    console.log(reservation);
    });