# test-universaleco

## Jalankan server dengan

`npx nodemon app`

## Jalankan server dengan

`npm start`

## Endpoints :

List of available endpoints:

- `GET /customers`
- `GET /customers/:id`
- `PUT /customers/:id`

## 1. GET /customers

Description:

- Get all customers from database

_Response (200 - OK)_

```json
[
    {
        "_id": "638848233ed5f368964a7cfc",
        "firstName": "Antonio",
        "lastName": "Banderas",
        "email": "antonio.banderas@gmail.com",
        "gender": "male",
        "addr": [
            {
                "street": "Upper Street",
                "house": "No 1",
                "city": "New York",
                "country": "USA"
            }
        ]
    },
    {
        "_id": "638848233ed5f368964a7cfd",
        "firstName": "Celine",
        "lastName": "Dion",
        "email": "celine.dion@gmail.com",
        "gender": "female",
        "addr": [
            {
                "street": "Upper Street",
                "house": "No 3",
                "city": "New York",
                "country": "USA"
            },
            {
                "street": "Upper Street",
                "house": "No 1",
                "city": "London",
                "country": "UK"
            }
        ]
    },
    ...
]

```

_Response (404 - Not Found)_

```json
{
  "message": "Customer not found"
}
```

&nbsp;

## 2. GET /customers/:id

Description:

- Get one customers from database

_Response (200 - OK)_

```json
{
  "_id": "638848233ed5f368964a7cfc",
  "firstName": "Antonio4",
  "lastName": "Banderas",
  "email": "antonio.banderas@gmail.com",
  "gender": "male",
  "addr": [
    {
      "street": "Upper Street",
      "house": "No 1",
      "city": "New York",
      "country": "USBdw"
    }
  ]
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Customer not found"
}
```

&nbsp;

## 2. PUT /customers/:id

Description:

- Edit one customers data from database

_Response (200 - OK)_

```json
{
  "msg": "Data updated successfully"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Address is Required"
}
OR
{
  "message": "First Name is Required"
}
OR
{
  "message": "Last Name is Required"
}
OR
{
  "message": "Gender is Required"
}
```

&nbsp;
