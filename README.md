192.168.1.104:3000

GET /fight-points	       getAllFightpoints

GET /fight-points/:uuid    getFightpointsByUuid

POST /create               createFightP



GET /users/:uuid           getUserByUuid

GET /users                 getAllUsers

POST /create                createUser
body
{
    username: ""
}