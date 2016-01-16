/*
JSON objects to be used to populate web page:
bio, education, job, project
*/

var bio = {
  "name": "Taranveer Bains",
  "role": "Web Developer",
  "contacts": {
    "mobile": "778.320.0745",
    "email": "taranveer_4 at hotmail.com",
    "github": "tearingItUp786",
    "blog": "http://taran.bus.sfu.ca/",
    "location": "North Delta, BC"
  },
  "welcomeMessage": "Taran Bains -- tearing it up since 93'",
  "skills": [
    "PHP", "CSS", "HTML", "JavaScript", "Git"
  ],
  "biopic": "images/carmz_and_me.jpg"
}

var education = {
  "schools": [{
    "name": "Simon Fraser University",
    "location": "8888 University Dr, Burnaby, BC V5A 1S6",
    "degree": "In progress",
    "majors": "Business Administration",
    "date": 2017,
    "url": "http://www.sfu.ca/"
  }],

  "onlineCourses": [{
    "title": "Foundations of Programming: Object-Oriented Design",
    "school": "Lynda.com",
    "date": "April 2015",
    "url": "http://goo.gl/RezSst"
  }, {
    "title": "PHP for Web Designers",
    "school": "Lynda.com",
    "date": "December 2014",
    "url": "http://goo.gl/Sl31AJ"
  }, {
    "title": "MySQL Essential Training",
    "school": "Lynda.com",
    "date": "September 2014",
    "url": "http://goo.gl/kUMkA8"
  }]
}

var work = {
  "jobs": [{
    "employer": "Beedie School of Business",
    "title": "Business Analyst & Computer Technician",
    "location": "8888 University Dr, Burnaby, BC V5A 1S6",
    "date": "September 2014 - May 2015",
    "description": "Executed several database administration tasks by utilzing MySQL queries and the phpMyAdmin interface. Aided in constructing a web application that would track the work hours of student hires. Met with several key stakeholders to gather requirements and determine business needs and project objectives."
  }, {
    "employer": "Beedie School of Business",
    "title": "Business Analyst & Computer Technician",
    "location": "8888 University Dr, Burnaby, BC V5A 1S6",
    "date": "September 2014 - May 2015",
    "description": "Executed several database administration tasks by utilzing MySQL queries and the phpMyAdmin interface. Aided in constructing a web application that would track the work hours of student hires. Met with several key stakeholders to gather requirements and determine business needs and project objectives."
  }]
}


var project = {
  "projects": [{
    "title": "Taranveer's Blog / Website",
    "date": "January 2015 - February 2015",
    "description": "Developed a website using PHP, MySQL JavaScript, HTML, and CSS Utilized web APIs, such as bootstrap and jQuery.Created and managed content for the blog. Utilized Git and Git flow to manage my testing and production hosts",
    "images": [
      "images/home_clear.jpg"
    ]
  }, {
    "title": "25toLife",
    "date": "September 2015 - October 2015",
    "description": "First front end web development project. Utilized the bootstrap framework to create the layout",
    "images": [
      "images/25toLife.jpg"
    ]
  }]
}

bio.display = function() {
  $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
  $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
  $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts["mobile"]));
  $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts["email"]));
  $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts["github"]));
  $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts["location"]));

  $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
  $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

  $("#header").append(HTMLskillsStart);
  for (skill in bio.skills) {
    $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
  }

  $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts["mobile"]));
  $("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts["email"]));
  $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts["github"]));
  $("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts["location"]));
};

bio.display();

work.display = function() {
  for (j in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var fullTitle = HTMLworkEmployer.replace("%data%", work.jobs[j].employer) + HTMLworkTitle.replace("%data%", work.jobs[j].title);
    $(".work-entry:last").append(fullTitle);
    $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[j].date));
    $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[j].description));
  }
}

work.display();

project.display = function() {
  for (proj in project.projects) {
    $("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", project.projects[proj].title));
    $(".project-entry:last").append(HTMLprojectDates.replace("%data%", project.projects[proj].date));
    $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", project.projects[proj].description));
    for (i in project.projects[proj].images) {
      $(".project-entry:last").append(HTMLprojectImage.replace("%data%", project.projects[proj].images[i]));
    }
  }
}

project.display();

education.display = function() {
  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);

    var fullTitle = HTMLschoolName.replace("%data%", education.schools[school].name) + HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    $(".education-entry:last").append(fullTitle);
    $(".education-entry:last a ").attr("href", education.schools[school].url);
    $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].date));
    $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
    $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors));
  }

  $("#education").append(HTMLonlineClasses);
  for (online in education.onlineCourses) {
    $("#education").append(HTMLschoolStart);

    // HTMLonlineTitle = HTMLonlineTitle.replace(/href="#"/g, "href=" + education.onlineCourses[online].url);
    var fullTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);

    $(".education-entry:last").append(fullTitle);
    $(".education-entry:last a").attr("href", education.onlineCourses[online].url);
    $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[online].date));
    $(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[online].url));
  }
}

education.display();

$("#mapDiv").append(googleMap);
