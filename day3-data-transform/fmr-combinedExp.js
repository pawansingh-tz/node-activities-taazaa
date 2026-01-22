var personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];


//Our objective: get the total score of force users only. Let’s do it step by step!

//First, we need to filter out the personnel who can’t use the force:

const totalScore = personnel.filter(
    person => (person.isForceUser)
).map(individualScore =>(
    {
        id:individualScore.id,
        score:individualScore.pilotingScore+individualScore.shootingScore
    }
)).reduce((sum,personnelScore)=>
{
    return sum+personnelScore.score;
},0);

console.log(totalScore);