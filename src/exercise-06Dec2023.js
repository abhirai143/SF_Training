const companies = [
  {name: 'Intelliswift', hq: 'Newark, CA', indiaLocations: ['Pune', 'Bengaluru']},
  {name: 'Salesforce', hq: 'San Francisco, CA', indiaLocations: ['Hyderabad', 'Bengaluru', 'Mumbai', 'Gurugram', 'Jaipur']}
];

/* 
  Task-1 
  Print following company information on console
  1. Number of companies, 
  2. Name of companies, 
  3. Headquarters of the companies

  Task-2
  Have a button in HTML and on click of the button, show the following as a bulleted list on HTML page:
  Name of company - HQ - India Locations
  E.g. Intelliswift - Newark, CA - Pune, Bengaluru

  Hint: You will need to use document.querySelector or document.getElementById and set it's inner HTML to the content.
*/

//  task 1 

console.log("no of campanies -> " , companies.length);
for(var i = 0; i < companies.length; i++){
  console.log("company name -> ", companies[i].name)
  console.log("Headquarter name -> ", companies[i].hq)
}

//  task 2

function displayInfo() {
  const container = document.body;
  let listItem = '';
  for (let i = 0; i < companies.length; i++){
    const company = companies[i];
    listItem += `<li>${company.name} - ${company.hq} - ${company.indiaLocations.join(' , ')}</li>`;
  }
  container.innerHTML += '<ul>' + listItem + '</ul>';
}
