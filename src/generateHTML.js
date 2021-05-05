const generateHTML = () =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profiles</title>
</head>
<body>
<div class="jumbotron jumbotron-fluid">
<div class="container">
  <h1 class="display-4">Hi! My name is ${answers.name}</h1>
  <p class="lead">I am from ${answers.role}.</p>
  <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
  <ul class="list-group">
    <li class="list-group-item">My GitHub username is ${answers.github}</li>
    <li class="list-group-item">LinkedIn: ${answers.id}</li>
  </ul>
</div>
</div>
</body>
</html>`;


module.exports = generateHTML;