import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-root',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  title = 'angular-project';
  
  projectList = [
    {
      name: 'Tangy Web',
      technologies: 'ASP.NET Blazor, Azure',
      description: 'Robust full-stack E-Commerce site built from Bhrugen Patels Udemy Blazor Bootcamp. Has a customor-facing client application with Stripe payment, shopping cart, checkout, and confirmation. Also a Seller inventory management Server project to CRUD stock',
      image: '../../../assets/projectScreenshots/TangyClient.png',
      github: 'https://github.com/shalant/Tangy',
      deployment: 'https://tangywebclient11.azurewebsites.net/',
      category: 'Tutorial'
    },
    {
      name: 'ATA Airlines',
      technologies: 'ASP.NET Web API, Angular, Azure',
      description: 'This is a full-stack Airline application, with an Angular front end, ASP.NET back end, and configured to use a MS SQL Server DB. The admin can add Passenger, Flights, and create a booking',
      image: '../../../assets/projectScreenshots/ATA.png',
      github: 'https://github.com/shalant/AirlineTravelApp',
      deployment: '',
      category: 'Original'

    },
    {
      name: 'Tiger Phone',
      technologies: 'ASP.NET Web API, Angular, Azure',
      description: 'This is a full-stack Airline application, with an Angular front end, ASP.NET back end, and configured to use a MS SQL Server DB. The admin can add Passenger, Flights, and create a booking',
      image: '../../../assets/projectScreenshots/Tiger.png',
      github: 'https://github.com/shalant/TigerPhone',
      deployment: '',
      category: 'Team'

    },
    {
      name: 'Doug Rosenberg Music',
      technologies: 'Javascript, HTML, CSS- Bootstrap, ParticlesJS, Text effects, Chatbot, Photo Gallery Carousel',
      description: 'Homepage for my music universe, with sheet music for students and links to buy CDs',
      image: '../../../assets/projectScreenshots/DRM.png',
      github: 'https://github.com/shalant/music-site-2',
      deployment: 'https://www.dougrosenberg.com',
      category: 'Original'

    },
    {
      name: 'AWS Resilient Fault Tolerant Wordpress',
      technologies: 'AWS, CloudFormation, Elasticache, Aurora, EFS, ALB, Auto-scaling',
      description: 'The AWS Architecture Capstone Project involves hosting a WordPress site on a cloud environment, using several key principles',
      image: '../../../assets/projectScreenshots/FancyAwsBlog.png',
      github: 'https://github.com/shalant/AWS-resilient-fault-tolerant-wordpress',
      deployment: '',
      category: 'Original'

    },
    {
      name: 'Dynamic Wines',
      technologies: 'React, Google Maps, Express, Node, Mongo DB',
      description: 'Final group project for a class on the MERN stack',
      image: '../../../assets/projectScreenshots/DynamicWines.png',
      github: 'https://github.com/shalant/dynamicwines2/',
      deployment: '',
      category: 'Team'

    },
    {
      name: 'CI/CD Pipeline',
      technologies: 'Jenkins, AWS, Docker, Kubernetes, Github',
      description: 'CI/CD Pipeline using a simple Python app. The goal was to make an ephemeral edit to a Python application, commit to Github, and successfully run it through a Jenkins pipeline. The Jenkins pipeline had some basic testing, and then deploys the program onto an AWS Kubernetes cluster',
      image: '../../../assets/projectScreenshots/CICD.png',
      github: 'https://github.com/shalant/AirlineTravelApp',
      deployment: 'https://devopsproject3707291139.wordpress.com',
      category: 'Original'
    },
    {
      name: 'Bloggie',
      technologies: 'ASP.NET webpages, MS SQL Server',
      description: 'A blog app with auth, tags, and a comment section. From a Udemy Course by Sameer Saini. Utilizes both client- and server-side validation.',
      image: '../../../assets/projectScreenshots/bloggie.png',
      github: 'https://github.com/shalant/BlogRazorSS',
      deployment: '',
      category: 'tutorial'
    },
    {
      name: 'Inspection App',
      technologies: 'Angular, ASP.NET API, MS SQL Server',
      description: 'Built a complex DB, served a backend end, read data onto a straightforward Angular App',
      image: '../../../assets/projectScreenshots/InspectionApp.png',
      github: 'https://github.com/shalant/dotnetAngCRUD',
      deployment: '',
      category: 'tutorial'
    },
    {
      name: "Doug's Games",
      technologies: 'React, Javascript, HTML/CSS',
      description: 'Built Tetris, War, Rock/Paper/Scissors, Pong, and a Quiz App in JS and React',
      image: '../../../assets/projectScreenshots/games.png',
      github: 'https://github.com/shalant/dougs-games',
      deployment: 'https://shalant.github.io/dougs-games/',
      category: 'tutorial'
    },
    {
      name: "Simple Angular Material Store",
      technologies: 'Angular, Material UI, JSON-server',
      description: 'A youtube tutorial building a simple CRUD store using Angular Material.',
      image: '../../../assets/projectScreenshots/storeAngMatCrud.png',
      github: 'https://github.com/shalant/storeAngMatCrud',
      deployment: '',
      category: 'tutorial'
    },
    {
      name: "DB of New Zealand Walks",
      technologies: 'ASP.NET API, Entity Framework Core, JWT authentication, complex SQL DB',
      description: 'A youtube tutorial building a DB of walks. I would like to develop a front-end for this for local Chicago bicycling routes.',
      image: '../../../assets/projectScreenshots/NzWalksAPI.png',
      github: 'https://github.com/shalant/NzApiMvcSS',
      deployment: '',
      category: 'tutorial'
    },
  ]

}