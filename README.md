192.168.1.104:3000

GET /fight-points	       getAllFightpoints
{
    "uuid": "39f21dfc-2b7c-4447-8976-7cf72edab27e",
    "state": "Portogallo",
    "city": "Lisbona",
    "posizione": "38.4300, -9.0759",
    "user": null,
    "n_questions": 2
}

GET /fight-points/:uuid    getFightpointsByUuid

POST /create               createFightP



GET /users/:uuid           getUserByUuid

GET /users                 getAllUsers

POST /create                createUser
body
{
    username: ""
}


GET QA   /qa/?fightpoint_uuid=""&n_question=0
{
    "question": "",
    "correct_answer": "",
    "wrong_answers":["", "", ""]
}