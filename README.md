192.168.1.104:3000

GET /fight-points	       getAllFightpoints
{
    "uuid": "f161ebc2-0b15-4a90-9205-462f930f8c52",
    "state": "Iraq",
    "city": "Baghdad",
    "posizione": "33.333333333333336, 44.400000",
    "user.username": null,
    "n_questions": "0"
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