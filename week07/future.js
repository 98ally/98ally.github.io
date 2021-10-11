var job = ["Singer","Model","Designer","Actor"];
var city = ["Atlanta","Dallas","Los Angeles","New York"];
var spouse = ["Eric","Joshua","Kevin","Daniel"];
var numKids = ["0","1","2","5"];

var xx = Math.floor(Math.random() * 4 )

function fortune(job,city,spouse,numKids) {

document.write("You will be a " + job + " in " + city + " and married to " + spouse + " with " + numKids + " kids.");
}

fortune (job[xx],city[xx],spouse[xx],numKids[xx])

