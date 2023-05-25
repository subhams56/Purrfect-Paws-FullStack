#Purrfect Paws
##Purrfect Paws, is a cat adoption system. It is a platform designed to facilitate the adoption of cats by connecting potential adopters with cats available for adoption.

###The API will be providing the necessary functionalities to manage cats, user authentication, and cat adoption processes. With this API, users will be able to create accounts, browse available cats, view detailed information about each cat, express interest in adopting a cat, and manage their adoption applications.

The API will also handle administrative tasks, such as adding new cats to the system, updating cat details, marking cats as adopted, and managing user accounts.

##Routes and Their Functionality:

###1. Authentication Routes:
POST /register: Registers a new user by creating a new account.
POST /login: Authenticates a user and generates an access token for authorization.
###2. User Routes:

GET /: Retrieves information for all users.
GET /:id: Retrieves information for a specific user by ID.
PUT /updateUser/:id: Updates the information of a specific user by ID.
DELETE /deleteUser/:id: Deletes a specific user by ID.
###3. Cat Routes:

GET /: Retrieves information for all cats.
GET /:id: Retrieves information for a specific cat by ID.
POST /createCat: Creates a new cat with the provided details and uploads an image.
PUT /updateCat/:id: Updates the information of a specific cat by ID and updates the associated image if provided.
DELETE /deleteCat/:id: Deletes a specific cat by ID.
###4. Adoption Routes:

POST /createAdoption: Creates a new adoption request by providing the cat ID, interested user ID, and owner ID.
DELETE /deleteAdoption/:id: Deletes a specific adoption request by ID.
PUT /updateAdoption/:id: Updates a specific adoption request by ID.
GET /: Retrieves information for all adoption requests.
Note: The adoption routes use the adoption ID for identification and manipulation, rather than using the cat and user IDs directly.
