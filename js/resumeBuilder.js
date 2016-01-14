/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
  "name": "Taran",
  "age": 22,
  "role": "Web Developer",
  "contacts": {
    "mobile": "555-555-5555",
    "github": "tearingItUp786",
    "email": "taranveer786@gmail.com",
    "location":"Delta British Columbia"
  },
  "welcomeMessage": "Taran has been tearin' it up since 93 -- Mike Church",
  "skills": [
    "PHP", "HTML", "JavaScript", "CSS", "git"
  ],
  "bioPic": "images/fry.jpg"
};

var work = {
  "jobs": [{
    "title": "Business Analyst/Computer Technician",
    "employer": "Beedie School of Business",
    "location": "Burnaby",
    "dates": "September 2014 - May 2015",
    "description": "Aided in the development of a web platform to help manage internal processes and aided facutly/staff with computer related problems"
  }, {
    "title": "Web Developer",
    "employer": "Kamal Masri",
    "location": "Surrey",
    "dates": "September 2015 - October 2015",
    "description": "Acted as a front end web developer and created a website"
  }]
};

var education = {
  "schools": [{
    "name": "SFU",
    "": "Buranby",
    "major": "Business",
    "minor": "Computer Science",
    "graduation": "2018"
  }, {
    "name": "UBC",
    "city": "Vancouver",
    "major": "Awesomeness",
    "minor": "Computer Science",
    "graduation": "2019"
  }],
  "onlineCourses": [{
    "name": "Android Developer",
    "major": "Android",
    "graduation": "2014"
  }, {
    "name": "Body Language",
    "major": "business",
    "graduation": "2014"
  }]
};

var projects = {
  "projects": [{
    "title": "Blog",
    "dates": "September 2014 - Jan 2015",
    "description": "Created a blog on my very own server",
    "image": "images/Sephiroth-Cloud-final-fantasy-vii-29026371-1920-1200.png"
  }, {
    "title": "Photo Booth",
    "dates": "January 2016 - February 2016",
    "description": "Created a photo booth page",
    "image": "images/Sephiroth-Cloud-final-fantasy-vii-29026371-1920-1200.png"
  }]
};

$("#header").append(HTMLheaderName.replace("%data%", "Taranveer Bains"));
$("#header").append(HTMLheaderRole.replace("%data%", "Web Developer"));

if (bio.skills.length > 0) {

  $("#header").append(HTMLskillsStart);
  for (i = 0; i < bio.skills.length; i++) {
    var skills = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(skills);
  }
}

function displayWork() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedWorkDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

    $(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle + formattedWorkLocation + formattedWorkDate + formattedWorkDescription);
  }
}

displayWork();

function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[0] = name[0].toLowerCase();
  name[1] = name[1].toLowerCase();

  name[0] = name[0][0].toUpperCase() + name[0].slice(1);
  name[1] = name[1].toUpperCase();
  name = name[0] + " " + name[1];
  console.log(name);
  return name;
}

inName("TARANVEER bains");
$("#main").append(internationalizeButton);

projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var title = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(title);

    var date = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(date);

    var descrip = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(descrip);

    var pic = HTMLprojectImage.replace("%data%", projects.projects[project].image);
    $(".project-entry:last").append(pic);
  }
};

projects.display();

$("#mapDiv").append(googleMap);
