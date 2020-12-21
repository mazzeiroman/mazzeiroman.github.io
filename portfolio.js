let portfolio = [
    {
        name: "Vinyl Destination",
        img: "./images/home.jpg",
        description: "A full-stack application. An Album collection developed using MySQL, Node, Express, Handlebars, sequelize and Passport (Pull out all the stops!). Following the MVC design pattern.",
        repo: "https://github.com/rachelrosenstein/Vinyl-Destination",
        deployed: "https://vinyl-destination.herokuapp.com/"
    },
    {
        name: "Weather Dashboard",
        img: "./images/weather.jpg",
        description: "A web application so the user can see the weather anywhere they want, using the OpenWeather API to retrieve weather data for cities.",
        repo: "https://github.com/mazzeiroman/weather-dashboard",
        deployed: "https://mazzeiroman.github.io/weather-dashboard/"
    },
    {
        name: "Look & Laugh App",
        img: "./images/joke.jpg",
        description: "A mental health and wellness application to help relieve stress and anxiety, Search a word, have a laugh. Save your images, and jokes for later.",
        repo: "https://github.com/theoriginalison/look-laugh",
        deployed: "https://theoriginalison.github.io/look-laugh/"
    },
    {
        name: "Daily Schedule",
        img: "./images/scheduler.jpg",
        description: "A simple calendar application that allows a user to save events for each hour of the day by modifying starter code.",
        repo: "https://github.com/mazzeiroman/work-day-scheduler",
        deployed: "https://mazzeiroman.github.io/work-day-scheduler/."
    },
    {
        name: "JavaScript Quiz",
        img: "./images/quiz.jpg",
        description: "The user arrives at the home page with a timer set to 1min, and presses the button 'Start!' to start the quiz and the countdown on the timer",
        repo: "https://github.com/mazzeiroman/code-quiz",
        deployed: "https://mazzeiroman.github.io/code-quiz/"
    },
    {
        name: "Team-generator",
        img: "./images/team.jpg",
        description: "This application was created using node.JS and allows the user to generate a professional HTML file after answering a few questions/prompts using the console.",
        repo: "https://github.com/mazzeiroman/team-generator",
        deployed: "https://drive.google.com/file/d/1w67HImkFGj4f2AtNqlJlm6b9yVuoROn5/view"
    },
    {
        name: "Eat-da-burger",
        img: "./images/eatdaburg.jpg",
        description: "A burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). Following the MVC design pattern; using Node and MySQL to query and route data in the app, and Handlebars to generate HTML.",
        repo: "https://github.com/mazzeiroman/eat-da-burger",
        deployed: "https://mighty-basin-34115.herokuapp.com/"
    },
    {
        name: "Employee-tracker",
        img: "./images/employee.jpg",
        description: "This application was created using node.JS and MySQL allows the user to generate, view and manage the departments, roles, and employees in a company.",
        repo: "https://github.com/mazzeiroman/employee-tracker",
        deployed: "https://drive.google.com/file/d/1KUuQIrWXG5VOb6ojj2jK6YCjk3Lc_p00/view"
    },
    {
        name: "README-GENERATOR",
        img: "./images/readme.jpg",
        description: "A simple application that allows the user to create a a high-quality, professional README.md answering a few questions using the terminal or console. This allows the project creator to devote more time working on the project.",
        repo: "https://github.com/mazzeiroman/README-GENERATOR",
        deployed: "https://drive.google.com/file/d/1mJu0J4XZoFvBORfSU61gKcUDyT5Ph9JT/view?usp=sharing"
    }
];

$(window).on("load", function () {
    $(".pages").empty();

    rowDiv = $("<div>" + "</div>").attr("class", "row row-cols-1 row-cols-md-3 g-4");
    // $(".pages").append(rowDiv);

    for (let i = 0; i < portfolio.length; i++) {

        colDiv = $("<div>" + "</div>").attr("class", "col");

        cardDiv = $("<div>" + "</div>").attr("class", "card h-100");
        imgDiv = $("<img>").attr("src", portfolio[i].img);
        imgDiv.attr("class", "card-img-top" )
        cardBody = $("<div>" + "</div>").attr("class", "card-body");
        title = $("<h5>" + portfolio[i].name + "</h5>").attr("class", "card-title");
        description = $("<p>" + portfolio[i].description + "</p>").attr("class", "card-text");
        footer = $("<div>" + "</div>").attr("class", "card-footer");
        small = $("<small>" + "</small>").attr("class","text-muted");
        deployed = $("<a>"+ "Visit Page" +"</a>").attr({href: portfolio[i].deployed, class: "btn btn-primary btn-sm" });
        repo = $("<a>"+ "Github Repo" +"</a>").attr({href: portfolio[i].repo, class: "btn btn-secondary btn-sm" });
        lineBreak1= $("<hr>")
        lineBreak2= $("<hr>")
        lineBreak3= $("<hr>")

        small.prepend(deployed);
        small.append(repo);
        footer.append(small);
        cardBody.prepend(title);
        cardBody.append(description);
        cardDiv.prepend(imgDiv);
        cardDiv.append(cardBody);
        cardDiv.append(footer);
        colDiv.append(cardDiv);
        rowDiv.append(colDiv);
        if (i === 2 || i === 5 || i=== 8) {
      rowDiv.append(lineBreak1);
      rowDiv.append(lineBreak2);
      rowDiv.append(lineBreak3);
    };
}
    
    $(".pages").append(rowDiv);
});