let users = [
    {
        id: 1,
        name: 'Josh',
        cars: [1,2]
    },
    {
        id: 2,
        name: 'Brooke',
        cars: [3]
    },
    {
        id: 3,
        name: 'Dave',
        cars: []
    }
];

let cars = [
    {
        id: 1,
        make: "Ford",
        model: "F-150",
        color: "Gray",
        ownedBy: 1
    },
    {
        id: 2,
        make: "Honda",
        model: "Civic",
        color: "Gun Metal Gray",
        ownedBy: 1
    },
    {
        id: 1,
        make: "Ford",
        model: "Edge",
        color: "Red",
        ownedBy: 2
    }
]

module.exports = {
    users, 
    cars
}