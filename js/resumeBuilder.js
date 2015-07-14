var bio = {
    "name": "Vidya Aravind",
    "role": "Web Developer",
    "pic": "images/me.jpg",
    "welcomemsg": "This is the welcome msg",
    "contacts": {
        "email": "vidyaravind@gmail.com",
        "twitter": "@twitter",
        "mobile": "408-145-6789",
        "github": "@vidyaravind",
        "blog": "@blog",
        "location": "Dublin,CA"
    },
    "skills": [
    "Java",
    "JS",
    "Html5",
    "CSS"
    ],
    "display": function() {
        var formattedName = HTMLheaderName.replace("%data%",bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
        var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
        var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
        var formattedGitHub = HTMLgithub.replace("%data%",bio.contacts.github);
        var formattedImage = HTMLbioPic.replace("%data%",bio.bioPic);
        var formattedMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomemsg);
        var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
        var formattedPic= HTMLbioPic.replace("%data%",bio.pic);
        var formattedSchoolName = HTMLschoolStart.replace("%data%", education["HTMLschoolName"]);
        $("#header").prepend(formattedRole).prepend(formattedName);
        $("#header").append(formattedMsg);
        $("#header").append(formattedPic)
        $("#topContacts").prepend(formattedEmail).prepend(formattedMobile).prepend(formattedGitHub).prepend(formattedTwitter).prepend(formattedLocation);
        if(bio.skills.length > 0 ){
         $("#header").append(HTMLskillsStart);
         for (skill in bio.skills){
            var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
            $("#skills").append(formattedSkills);
        }
    }
}
}
var education = {
    "schools": [
    {
        "name": "Sri Venkateshwara College of Engineering",
        "location": "Chennai",
        "degree": "BE",
        "majors": [
        "EEE"
        ],
        "dates": 2002,
        "url": "http://svce.com"
    },
    {
        "name": "U.C. Berkeley",
        "location": "Berkeley,CA",
        "degree": "MS",
        "majors": [
        "CSE"
        ],
        "dates": 2008,
        "url": "http://svce.com"
    }
    ],
    "onlineCourses": [
    {
        "school": "Udacity",
        "title": "Front end web developer",
        "date": 2015,
        "url": "http://udactity.com"
    }
    ],
    "display": function() {
        for (school in education.schools){
            $('#education').append(HTMLschoolStart);
            var formattedSchoolName= HTMLschoolName.replace("%data%",education.schools[school].name);
            $('.education-entry:last').append(formattedSchoolName);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
            $('.education-entry:last').append(formattedSchoolDegree);
            var formattedDates= HTMLschoolDates.replace("%data%",education.schools[school].dates);
            $('.education-entry:last').append(formattedDates);
            var formattedSchoolLocation= HTMLschoolLocation.replace("%data%",education.schools[school].location);
            $('.education-entry:last').append(formattedSchoolLocation);
            var formattedSchoolMajor= HTMLschoolMajor.replace("%data%",education.schools[school].majors);
            $('.education-entry:last').append(formattedSchoolMajor);
        }
        for (courses in education.onlineCourses){
            $('.education-entry:last').append(HTMLonlineClasses);
            var formattedSchoolName= HTMLonlineSchool.replace("%data%",education.onlineCourses[courses].school);
            var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[courses].title);
            var formattedName =  formattedTitle + formattedSchoolName;
            $('.education-entry:last').append(formattedName);
            var formattedDates= HTMLonlineDates.replace("%data%",education.onlineCourses[courses].date);
            $('.education-entry:last').append(formattedDates);
            var formattedUrl= HTMLonlineURL.replace("%data%",education.onlineCourses[courses].url);
            $('.education-entry:last').append(formattedUrl);
        }
    }
}
var work = {
    "jobs": [
    {
        "employer": "emp1",
        "title": "Software Engineer",
        "dates": "Dec2003",
        "location": "Sandiego,CA",
        "description": "Software Developer for Java applications"
    },
    {
        "employer": "emp2",
        "title": "Senior Software Engineer",
        "dates": "May2012",
        "location": "LosAngeles,CA",
        "description": "Senior Software Developer for java applications",
    },
    {
        "employer": "emp3",
        "title": "MTS 1",
        "dates": "Present",
        "location": "San Jose,CA",
        "description": "Software Architect for Node applications",
    }
    ],
    "display" : function() {
        for (job in work.jobs){
            $('#workExperience').append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
            var formattedWorkEmployer = formattedEmployer + formattedTitle;
            var formattedWorkDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
            $(".work-entry:last").append(formattedWorkEmployer).append(formattedWorkDates).append(formattedWorkDescription).append(formattedWorkLocation);
        }
    }
}
var  projects = {
    "projects": [
    {
        "startDate": " This is test project1 ",
        "title": " Software Engineer",
        "dates": " Dec 2004 to Jun 2008",
        "location": " Sandiego,CA",
        "description": " This is new project work ",
        "images": [
        ]
    },
    {
        "startDate": "This is test project2",
        "title": " Senior Software Engineer",
        "dates": " Jul 2009 to Jan 2012",
        "location": " Texas,CA",
        "description": " This is new project work",
        "images": [               
        ]
    },
    {
        "startDate": " This is test project3 ",
        "title": " MTS1 Software Engineer",
        "dates": " Jul 2012 to Present ",
        "location": " Los Angeles,CA",
        "description": " This is new project work",
        "images": [
        "images/project1.jpg",
        "images/project2.jpg"
        ]
    }
    ],
    "display" : function() {
        for (project in projects.projects){
            $('#projects').append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
            $('.project-entry:last').append(formattedTitle);
            var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
            $('.project-entry:last').append(formattedDates);
            var formattedDesciption= HTMLprojectDescription.replace("%data%",projects.projects[project].description);
            $('.project-entry:last').append(formattedDesciption);
            if(projects.projects[project].images.length > 0){
                for (image in projects.projects[project].images){
                    var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
                    $('.project-entry:last').append(formattedImage);
                }
            }
        }
    }
}
$('#main').append(bio.display).append(work.display).append(projects.display).append(education.display);
function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase();
    return name[0] +  " " + name[1]; 
}
$('#main').append(internationalizeButton);
$('#mapDiv').append(googleMap);

