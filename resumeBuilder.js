/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var DATA = '%data%';

var bio = {
  name: 'Carlos Clemons',
  role: 'Professional, Network Specialist',
  contacts: {
    mobile: '1-404-847-8575',
    email: 'cc839e@att.com',
    github: 'cc839e',
    twitter: '@cc839e',
    location: 'Atlanta'
  },
  welcomeMessage: 'Networking Rules',
  skills: ['HTML', 'CSS', 'JavaScript', 'Python', 'Cisco CCNA', 'Green Belt Six Sigma', 'Agile', 'Could Computing', 'Big Data', 'API', 'Security First'],
  biopic: 'images/Veteran ID.jpg',
  display: function() {
    var formattedName = HTMLheaderName.replace(DATA, bio.name);
    var formattedRole = HTMLheaderRole.replace(DATA, bio.role);

    var formattedMobile = HTMLmobile.replace(DATA, bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace(DATA, bio.contacts.email);
    var formattedGithub = HTMLgithub.replace(DATA, bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace(DATA, bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace(DATA, bio.contacts.location);

    var formattedBioPic = HTMLbioPic.replace(DATA, bio.biopic);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace(DATA, bio.welcomeMessage);

    $('#header').prepend(formattedName + formattedRole);
    $('#topContacts, #footerContacts').append(formattedMobile + formattedEmail +
      formattedGithub + formattedTwitter + formattedLocation);
    $('#header').append(formattedBioPic);
    $('#header').append(formattedWelcomeMessage);

    if (bio.skills.length > 0) {
      $('#header').append(HTMLskillsStart);

      for (var i = 0, len = bio.skills.length; i < len; i++) {
        var formattedSkills = HTMLskills.replace(DATA, bio.skills[i]);

        $('#skills').append(formattedSkills);
      }
    }
  }
};

var education = {
  schools: [
    {
      'name': 'American InterContential University',
      'location': 'Atlanta, GA',
      'degree': 'Bachelor of Science (BS)',
      'majors': ['Information Technology'],
      'dates': '2004 - 2007',
      'url': 'http://www.aiuonline.edu'
    }
  ],
  onlineCourses: [
   {
     'title': 'Intro to Programming',
     'school': 'Udacity',
     'dates': '2018',
     'url': 'https://www.udacity.com/?utm_source=bing&utm_'
   }
  ],
  display: function() {
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {
      for (var i = 0, iLen = education.schools.length; i < iLen; i++) {
        var formattedName = HTMLschoolName.replace(DATA, education.schools[i].name);
        var formattedDegree = HTMLschoolDegree.replace(DATA, education.schools[i].degree);
        var formattedSchoolDates = HTMLschoolDates.replace(DATA, education.schools[i].dates);
        var formattedLocation = HTMLschoolLocation.replace(DATA, education.schools[i].location);
        var formattedNameDegree = formattedName + formattedDegree;

        $('#education').append(HTMLschoolStart);
        $('.education-entry:last').append(formattedNameDegree);
        $('.education-entry:last').append(formattedSchoolDates);
        $('.education-entry:last').append(formattedLocation);

        for (var j = 0, jLen = education.schools[i].majors.length; j < jLen; j++) {
          var formattedMajor = HTMLschoolMajor.replace(DATA, education.schools[i].majors[j]);

          $('.education-entry:last').append(formattedMajor);
        }
      }

      $('#education').append(HTMLonlineClasses);

      for (var k = 0, len = education.onlineCourses.length; k < len; k++) {
        var formattedTitle = HTMLonlineTitle.replace(DATA, education.onlineCourses[k].title).replace('#', education.onlineCourses[k].url);
        var formattedSchool = HTMLonlineSchool.replace(DATA, education.onlineCourses[k].school);
        var formattedOnlineDates = HTMLonlineDates.replace(DATA, education.onlineCourses[k].dates);
        var formattedUrl = HTMLonlineURL.replace(DATA, education.onlineCourses[k].url);
        var formattedTitleSchool = formattedTitle + formattedSchool;

        $('#education').append(HTMLschoolStart);
        $('.education-entry:last').append(formattedTitleSchool);
        $('.education-entry:last').append(formattedOnlineDates);
        $('.education-entry:last').append(formattedUrl);
      }
    }
  }
};

var work = {
  jobs: [
    {
      employer: 'AT&T Mobility',
      title: 'Professional, Network Specialist',
      location: 'Atlanta, GA',
      dates: '2009 - Present',
      description: 'Connecting the world through mobility.'
    },
    {
      employer: 'US Army',
      title: 'Staff Sergeant',
      location: 'Fort Campbell, KY',
      dates: '1994 - 2001',
      description: 'Protecting the American way of life.'
    },
    {
      employer: 'COX Communication',
      title: 'Quality Engineer',
      location: 'Atlanta, GA',
      dates: '2007 - 2008',
      description: 'Software Testing.'
    },
    {
      employer: 'Sprint',
      title: 'Field Operations',
      location: 'Alpharetta GA',
      dates: '2001 - 2007',
      description: 'Mobility engineering.'
    }
  ],
  display: function() {
    if (work.jobs.length > 0) {
      for (var i = 0, len = work.jobs.length; i < len; i++) {
        var formattedEmployer = HTMLworkEmployer.replace(DATA, work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace(DATA, work.jobs[i].title);
        var formattedDates = HTMLworkDates.replace(DATA, work.jobs[i].dates);
        var formattedLocation = HTMLworkLocation.replace(DATA, work.jobs[i].location);
        var formattedDescription = HTMLworkDescription.replace(DATA, work.jobs[i].description);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $('#workExperience').append(HTMLworkStart);
        $('.work-entry:last').append(formattedEmployerTitle);
        $('.work-entry:last').append(formattedDates);
        $('.work-entry:last').append(formattedLocation);
        $('.work-entry:last').append(formattedDescription);
      }
    }
  }
};

var projects = {
  projects: [
    {
      'title': 'HTML/CSS',
      'dates': '2018',
      'description': 'Poject number 1 of 4 for the Intro to Programming Nanodegree!',
      'images': ['https://images-na.ssl-images-amazon.com/images/I/51IuNDzDhwL._SX258_BO1,204,203,200_.jpg']
    },
    {
      'title': 'Python',
      'dates': '2018',
      'description': 'Poject number 2 of 4 for the Intro to Programming Nanodegree!',
      'images': []
    },
    {
      'title': 'Making A Movie.js',
      'dates': '2018',
      'description': 'Poject number 2 of 4 for the Intro to Programming Nanodegree!',
      'images': []
    },
  ],
  display: function() {
    if (projects.projects.length > 0) {
      for (var i = 0, iLen = projects.projects.length; i < iLen; i++) {
        var formattedTitle = HTMLprojectTitle.replace(DATA, projects.projects[i].title);
        var formattedDates = HTMLprojectDates.replace(DATA, projects.projects[i].dates);
        var formattedDescription = HTMLprojectDescription.replace(DATA, projects.projects[i].description);

        $('#projects').append(HTMLprojectStart);
        $('.project-entry:last').append(formattedTitle);
        $('.project-entry:last').append(formattedDates);
        $('.project-entry:last').append(formattedDescription);

        for (var j = 0, jLen = projects.projects[i].images.length; j < jLen; j++) {
          var formattedImage = HTMLprojectImage.replace(DATA, projects.projects[i].images[j]);

          $('.project-entry:last').append(formattedImage);
        }
      }
    }
  }
};

bio.display();
education.display();
work.display();
projects.display();
$('#mapDiv').append(googleMap);
