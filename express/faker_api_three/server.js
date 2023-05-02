const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { faker } = require('@faker-js/faker');

const createUser = () => {
    const user = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.datatype.uuid()
    };
    return user;
};

const createCompany = () => {
    const company = {
        name: faker.company.name(),
        _id: faker.datatype.uuid(),
        address:
        {
            street: faker.address.streetAddress(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    };
    return company;
};

const newCompany = createCompany();
console.log(newCompany);
const newUser = createUser();
console.log(newUser);

app.get("/api", (req, res) => {
    res.send("Our express api server is now sending this over to the browser");
});

app.get('/api/users/new', (req, res) => {
    res.json(newUser);
});

app.get('/api/company/new', (req, res) => {
    res.json(newCompany);
});

app.get('/api/user/company', (req, res) => {
    res.json(newCompany);
    res.json(newUser);
});

const server = app.listen(8000, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);