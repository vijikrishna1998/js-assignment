let ask = (question,yes,no) => confirm(question) ? yes():No()

ask("Do you agree",
function() {alert("You agreed")},
function() {alert("You cancelled the execution")})