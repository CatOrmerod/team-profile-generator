// array to store the team cards
teamCardsArr = [];

//function to loop through the employee details and create cards to insert into the main html
function makeCards(employeeArr) {
  console.log(employeeArr);
  for (let i = 0; i < employeeArr.length; i++) {
    const role = employeeArr[i].getRole();
    const name = employeeArr[i].getName();
    const id = employeeArr[i].getId();
    const email = employeeArr[i].getEmail();
    if (role === 'Manager') {
      const office = employeeArr[i].getOffice();
      teamCardsArr.push(makeManCard( role, name, id, email, office ));
    } else if (role === 'Engineer') {
      const github = employeeArr[i].getGithub();
      teamCardsArr.push(makeEngCard( role, name, id, email, github ));
    } else {
      const school = employeeArr[i].getSchool();
      teamCardsArr.push(makeIntCard( role, name, id, email, school ));
    } 
    console.log(teamCardsArr);
  } return teamCardsArr.join('');
}

//html card templates for each employee type
const makeManCard = (role, name, id, email, office) =>
  `<div class="card" id="manager" style="width:400px">
  <div class="card-header bg-primary">
      <h4 class="card-title">${name}</h4>
      <p class="card-text">${role}</p>
  </div>
  <div class="card-body bg-light text-center">
      <p class="card-text" id="id">ID Number: ${id}</p>
      <p class="card-text" id="email">Email Address: <a href="mailto:${email}">${email}</a></p>
      <p class="card-text" id="office">Office Number: ${office}</p>
  </div>
</div>`
;

const makeEngCard = (role, name, id, email, github) =>
`<div class="card" id="manager" style="width:400px">
  <div class="card-header bg-primary">
      <h4 class="card-title">${name}</h4>
      <p class="card-text">${role}</p>
  </div>
  <div class="card-body bg-light text-center">
      <p class="card-text" id="id">ID Number: ${id}</p>
      <p class="card-text" id="email">Email Address: <a href="mailto:${email}">${email}</a></p>
      <p class="card-text" id="github">Github: <a href="https://github.com/${github}">${github}</a></p>
  </div>
</div>`
;

const makeIntCard = (role, name, id, email, school) =>
`<div class="card" id="manager" style="width:400px">
  <div class="card-header bg-primary">
      <h4 class="card-title">${name}</h4>
      <p class="card-text">${role}</p>
  </div>
  <div class="card-body bg-light text-center">
      <p class="card-text" id="id">ID Number: ${id}</p>
      <p class="card-text" id="email">Email Address: <a href="mailto:${email}">${email}</a></p>
      <p class="card-text" id="school">School: ${school}</p>
  </div>
</div>`
;

//main HTML into which the cards are inserted before saving into dist folder
const generateHTML = (teamCardsArr) =>
`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profiles</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</head>

<body>
    <header>
        <nav class="navbar bg-danger" id="navbar">
            <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
        </nav>
    </header>
    <div class="container">
        <div class="card-deck">
        ${makeCards(teamCardsArr)}
        </div>
    </div>



</body>

</html>`;


module.exports = generateHTML;