/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    'name': 'Carlos Clemons',
   	'role': 'Professional, Network Specialist',
    'welcomeMessage': 'Networking Rules',
    'bioPic': 'images/Veteran ID.jpg',
   	'contacts' : {
      'mobile': '1-404-847-8575',
   		'email': 'cc839e@att.com',
   		'github': 'cc839e',
   		'twitter': '@cc839e',
   		'location': 'Atlanta',
       "facebook_logo": "<a href='https://www.facebook.com/'><i class='fa fa-facebook-official fa-2x' aria-hidden='true'></i>",
       "github_logo": "<a href='https://www.github.com/'><i class='fa fa-github fa-2x' aria-hidden='true'></i>",
       "linkedin_logo": "<a href='https://www.linkedin.com/'><i class='fa fa-linkedin-square fa-2x' aria-hidden='true'></i>"
    },
   	'skills': [
   		'Analyizing', ' Testing', ' Resolving', 'Connecting'
   	]
  };

var education = {
	'schools': [{
    "name": 'American InterContential University',
    "degree": 'Bachelor of Science',
    "dates": '2007',
    'location': 'Atlanta',
    "majors": ['Information Technology'],
    'url' : ''
	}],
	"onlineCourses": [{
		'title': 'Intro to Programming Nanodegree',
		'school': 'Udacity',
		'dates': '2018-2018',
		'url': "http://udacity.com"
	}],
};
var work = {
	'jobs': [{
    'employer': 'AT&T Mobility',
    'title': 'Professional, Network Specialist',
    'location': 'Atlanta, GA',
    'dates': '2009 - Present',
    'description': 'Connecting the world through mobility.'
	}, {
    'employer': 'US Army',
    'title': 'Staff Sergeant',
    'location': 'Fort Campbell, KY',
    'dates': '1994 - 1997',
    'description': 'Protecting the American way of life.'
  }, {
    'employer': 'COX Communication',
    'title': 'Quality Engineer',
    'location': 'Atlanta, GA',
    'dates': '2007 - 2008',
    'description': 'Software Testing.'
	}]
   'jobs': [{
      'employer': 'Sprint',
      'title': 'Field Operations',
      'location': 'Alpharetta GA',
      'dates': '2001 - 2007',
      'description': 'Mobility engineering.'
  }]
};
var projects = {
	'projects': [{
    'title': 'HTML/CSS',
    'dates': '2018',
    'description': "Poject number 1 of 4 for the Intro to Programming Nanodegree!",
    'url': ['file:///C:/Users/cc839e/Downloads/frontend-nanodegree-resume-master/frontend-nanodegree-resume-master/images/Quiz072518.html']
  }]
};
bio.display = function () {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedNameRole = formattedName + formattedRole;
  var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
  var formattedTwitter= HTMLtwitter.replace('%data%', bio.contacts.twitter);
  var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
  var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
  var formattedBiopic = HTMLbioPic.replace('%data%', bio.bioPic);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
  $("#header").prepend(formattedNameRole);
  $("#header").append(formattedBiopic,formattedWelcomeMsg);
  $("#topContacts").append(formattedMobile,formattedEmail,formattedTwitter,formattedGithub,formattedLocation);
  if (bio.skills.length > 0) {
    $('#header').append(HTMLskillsStart);
    bio.skills.forEach(function(skill) {
      var formattedBioSkills = HTMLskills.replace('%data%', skill)
      $('#skills').append(formattedBioSkills)
    });
  }
  // contact details for the footer
  //TODO: change into social media icons
  // $('#footerContacts').append(formattedEmail,formattedTwitter,formattedGithub)
  $("#footerContacts").append(bio.contacts.linkedin_logo);
  $("#footerContacts").append(bio.contacts.facebook_logo);
  $("#footerContacts").append(bio.contacts.github_logo);
};
education.display = function () {
  // start education entries.
  $("#education").append(HTMLschoolStart);
  education.schools.forEach(function(school) {
    var formattedSchoolName = HTMLschoolName.replace('%data%', school.name);
    var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', school.degree);
    var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
    var formattedSchoolDates = HTMLschoolDates.replace('%data%', school.dates);
    var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', school.location);
    $('.education-entry:last').append(formattedSchoolNameDegree);
    $('.education-entry:last').append(formattedSchoolDates,formattedSchoolLocation);
    if (school.majors.length > 0) {
      $('#education').append(HTMLschoolStart);
      school.majors.forEach(function(major) {
        var formattedSchoolMajors = HTMLschoolMajor.replace('%data%', major)
        $('.education-entry:last').append(formattedSchoolMajors)
bio.display = function() {
   var formattedName = HTMLheaderName.replace("%data%", bio.name);
   var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
   var formattedNameRole = formattedName + formattedRole;
   var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
   var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
   var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
   var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
   var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
   var formattedBiopic = HTMLbioPic.replace('%data%', bio.bioPic);
   var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
   $("#header").prepend(formattedNameRole);
   $("#header").append(formattedBiopic, formattedWelcomeMsg);
   $("#topContacts").append(formattedMobile, formattedEmail,
      formattedTwitter, formattedGithub, formattedLocation);
   if (bio.skills.length > 0) {
      $('#header').append(HTMLskillsStart);
      bio.skills.forEach(function(skill) {
         var formattedBioSkills = HTMLskills.replace('%data%', skill)
         $('#skills').append(formattedBioSkills)
      });
    }
    var formattedSchoolUrl = HTMLschoolURL.replace("%data%", school.url);
    $('.education-entry:last').append(formattedSchoolUrl);
  });
  // 1) append 'Onlinecourses<h3>' after school loop
  // 2) repeat HTMLschoolStart, so Online Courses append after main education
  $("#education").append(HTMLonlineClasses,HTMLschoolStart);
  education.onlineCourses.forEach(function(onlineCourse) {
    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
    var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
    var formattedOnlineCourseDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
    var formattedOnlineUrl = HTMLonlineURL.replace("%data%", onlineCourse.url);
   }
   // contact details for the footer
   //TODO: change into social media icons
   // $('#footerContacts').append(formattedEmail,formattedTwitter,formattedGithub)
   $("#footerContacts").append(bio.contacts.linkedin_logo);
   $("#footerContacts").append(bio.contacts.facebook_logo);
   $("#footerContacts").append(bio.contacts.github_logo);
};
education.display = function() {
   // start education entries.
   $("#education").append(HTMLschoolStart);
   education.schools.forEach(function(school) {
      var formattedSchoolName = HTMLschoolName.replace('%data%',
         school.name);
      var formattedSchoolDegree = HTMLschoolDegree.replace('%data%',
         school.degree);
      var formattedSchoolNameDegree = formattedSchoolName +
         formattedSchoolDegree;
      var formattedSchoolDates = HTMLschoolDates.replace('%data%',
         school.dates);
      var formattedSchoolLocation = HTMLschoolLocation.replace(
         '%data%', school.location);
      $('.education-entry:last').append(formattedSchoolNameDegree);
      $('.education-entry:last').append(formattedSchoolDates,
         formattedSchoolLocation);
      if (school.majors.length > 0) {
         $('#education').append(HTMLschoolStart);
         school.majors.forEach(function(major) {
            var formattedSchoolMajors = HTMLschoolMajor.replace(
               '%data%', major)
            $('.education-entry:last').append(
               formattedSchoolMajors)
         });
      }
    $(".education-entry:last").append(formattedOnlineTitleSchool, formattedOnlineCourseDates, formattedOnlineUrl);
  });
      var formattedSchoolUrl = HTMLschoolURL.replace("%data%", school.url);
      $('.education-entry:last').append(formattedSchoolUrl);
   });
   // 1) append 'Onlinecourses<h3>' after school loop
   // 2) repeat HTMLschoolStart, so Online Courses append after main education
   $("#education").append(HTMLonlineClasses, HTMLschoolStart);
   education.onlineCourses.forEach(function(onlineCourse) {
      var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",
         onlineCourse.title);
      var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",
         onlineCourse.school);
      var formattedOnlineTitleSchool = formattedOnlineTitle +
         formattedOnlineSchool;
      var formattedOnlineCourseDates = HTMLonlineDates.replace(
         "%data%", onlineCourse.dates);
      var formattedOnlineUrl = HTMLonlineURL.replace("%data%",
         onlineCourse.url);
      $(".education-entry:last").append(formattedOnlineTitleSchool,
         formattedOnlineCourseDates, formattedOnlineUrl);
   });
}
work.display = function() {
  if (work.jobs.length > 0) {
    $('#workExperience').append(HTMLworkStart);
    work.jobs.forEach(function(job) {
      var formattedEmployer = HTMLworkEmployer.replace('%data%', job.employer);
      var formattedTitle = HTMLworkTitle.replace('%data%', job.title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      var formattedDates = HTMLworkDates.replace('%data%',job.dates);
      var formattedLocation = HTMLworkLocation.replace('%data%',job.location);
      var formattedDescription = HTMLworkDescription.replace('%data%',job.description);
      $('.work-entry:last').append(formattedEmployerTitle, formattedDates, formattedLocation, formattedDescription);
    });
  }
   if (work.jobs.length > 0) {
      $('#workExperience').append(HTMLworkStart);
      work.jobs.forEach(function(job) {
         var formattedEmployer = HTMLworkEmployer.replace('%data%',
            job.employer);
         var formattedTitle = HTMLworkTitle.replace('%data%', job.title);
         var formattedEmployerTitle = formattedEmployer +
            formattedTitle;
         var formattedDates = HTMLworkDates.replace('%data%', job.dates);
         var formattedLocation = HTMLworkLocation.replace('%data%',
            job.location);
         var formattedDescription = HTMLworkDescription.replace(
            '%data%', job.description);
         $('.work-entry:last').append(formattedEmployerTitle,
            formattedDates, formattedLocation, formattedDescription
         );
      });
   }
}
projects.display = function() {
  if (projects.projects.length > 0) {
    $('#projects').append(HTMLprojectStart);
    projects.projects.forEach(function(project) {
      var formattedTitle = HTMLprojectTitle.replace('%data%', project.title);
      var formattedDates = HTMLprojectDates.replace('%data%', project.dates);
      var formattedDescription =HTMLprojectDescription.replace('%data%',project.description);
      if (project.images.length > 0) {
        $('#projects').append(HTMLprojectStart);
        project.images.forEach(function(image) {
          var formattedImage = HTMLprojectImage.replace('%data%',image);
          $('.project-entry:last').append(formattedImage);
        });
      }
      $(".project-entry:last").prepend(formattedTitle,formattedDates,formattedDescription);
   if (projects.projects.length > 0) {
      $('#projects').append(HTMLprojectStart);
      projects.projects.forEach(function(project) {
         var formattedTitle = HTMLprojectTitle.replace('%data%',
            project.title);
         var formattedDates = HTMLprojectDates.replace('%data%',
            project.dates);
         var formattedDescription = HTMLprojectDescription.replace(
            '%data%', project.description);
         if (project.images.length > 0) {
            $('#projects').append(HTMLprojectStart);
            project.images.forEach(function(image) {
               var formattedImage = HTMLprojectImage.replace(
                  '%data%', image);
               $('.project-entry:last').append(formattedImage);
            });
         }
         $(".project-entry:last").prepend(formattedTitle,
            formattedDates, formattedDescription);
    });
  }
      });
   }
}
@@ -203,15 +229,13 @@ projects.display();
// log clicks locations
$(document).click(function(loc) {
  // your code goes here
  var x = loc.pageX;
  var y = loc.pageY;
   // your code goes here
   var x = loc.pageX;
   var y = loc.pageY;
  logClicks(x,y);
   logClicks(x, y);
});
//internationalize names
