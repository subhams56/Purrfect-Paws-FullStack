# Purrfect Paws API Documentation

Purrfect Paws is a cat adoption system API designed to facilitate the adoption of cats by connecting potential adopters with cats available for adoption. The API provides functionalities to manage cats, user authentication, and cat adoption processes.

## Authentication Routes

- `POST /register`: Registers a new user by creating a new account.
- `POST /login`: Authenticates a user and generates an access token for authorization.

## User Routes

- `GET /users`: Retrieves information for all users.
- `GET /users/:id`: Retrieves information for a specific user by ID.
- `PUT /users/updateUser/:id`: Updates the information of a specific user by ID.
- `DELETE /users/deleteUser/:id`: Deletes a specific user by ID.

## Cat Routes

- `GET /cats`: Retrieves information for all cats.
- `GET /cats/:id`: Retrieves information for a specific cat by ID.
- `POST /cats/createCat`: Creates a new cat with the provided details and uploads an image.
- `PUT /cats/updateCat/:id`: Updates the information of a specific cat by ID and updates the associated image if provided.
- `DELETE /cats/deleteCat/:id`: Deletes a specific cat by ID.

## Adoption Routes

- `POST /adopt/createAdoption`: Creates a new adoption request by providing the cat ID, interested user ID, and owner ID.
- `DELETE /adopt/deleteAdoption/:id`: Deletes a specific adoption request by ID.
- `PUT /adopt/updateAdoption/:id`: Updates a specific adoption request by ID.
- `GET /adopt`: Retrieves information for all adoption requests.

Note: The adoption routes use the adoption ID for identification and manipulation, rather than using the cat and user IDs directly.

Please ensure that you include the required headers and data in your API requests as specified in the API documentation.
