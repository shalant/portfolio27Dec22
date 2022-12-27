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
      name: 'ATA Airlines',
      technologies: 'ASP.NET Web API, Angular, Azure',
      description: 'This is a full-stack Airline application, with an Angular front end, ASP.NET back end, and configured to use a MS SQL Server DB. The admin can add Passenger, Flights, and create a booking',
      image: '../../../assets/projectScreenshots/ATA.png',
      github: 'https://github.com/shalant/AirlineTravelApp'
    },
    {
      name: 'Tiger Phone',
      technologies: 'ASP.NET Web API, Angular, Azure',
      description: 'This is a full-stack Airline application, with an Angular front end, ASP.NET back end, and configured to use a MS SQL Server DB. The admin can add Passenger, Flights, and create a booking',
      image: '../../../assets/projectScreenshots/Tiger.png',
      github: 'https://github.com/shalant/TigerPhone'
    },
    {
      name: 'Doug Rosenberg Music',
      technologies: 'Javascript, HTML, CSS- Bootstrap, ParticlesJS, Text effects, Chatbot, Photo Gallery Carousel',
      description: 'Homepage for my music universe, with sheet music for students and links to buy CDs',
      image: '../../../assets/projectScreenshots/DRM.png',
      github: 'https://github.com/shalant/music-site-2'
    },
    {
      name: 'AWS Resilient Fault Tolerant Wordpress',
      technologies: 'AWS, CloudFormation, Elasticache, Aurora, EFS, ALB, Auto-scaling',
      description: 'The AWS Architecture Capstone Project involves hosting a WordPress site on a cloud environment, using several key principles',
      image: '../../../assets/projectScreenshots/FancyAwsBlog.png',
      github: 'https://github.com/shalant/AWS-resilient-fault-tolerant-wordpress'
    },
    {
      name: 'Dynamic Wines',
      technologies: 'React, Google Maps, Express, Node, Mongo DB',
      description: 'Final group project for a class on the MERN stack',
      image: '../../../assets/projectScreenshots/DynamicWines.png',
      github: 'https://github.com/shalant/dynamicwines2/'

    },
    {
      name: 'CI/CD Pipeline',
      technologies: 'Jenkins, AWS, Docker, Kubernetes, Github',
      description: 'blahblahblah',
      image: '../../../assets/projectScreenshots/CICD.png',
      github: 'https://github.com/shalant/AirlineTravelApp'
    },
    {
      name: 'Blah',
      technologies: 'blah',
      description: 'blahblahblah',
      image: '../../../assets/projectScreenshots/ATA.png',
      github: 'https://github.com/shalant/AirlineTravelApp'
    },
    {
      name: 'Blah',
      technologies: 'blah',
      description: 'blahblahblah',
      image: '../../../assets/projectScreenshots/ATA.png',
      github: 'https://github.com/shalant/AirlineTravelApp'
    },
  ]

}