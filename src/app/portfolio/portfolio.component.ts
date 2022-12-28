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
      deployment: 'https://tangywebclient11.azurewebsites.net/'
    },
    {
      name: 'ATA Airlines',
      technologies: 'ASP.NET Web API, Angular, Azure',
      description: 'This is a full-stack Airline application, with an Angular front end, ASP.NET back end, and configured to use a MS SQL Server DB. The admin can add Passenger, Flights, and create a booking',
      image: '../../../assets/projectScreenshots/ATA.png',
      github: 'https://github.com/shalant/AirlineTravelApp',
      deployment: ''
    },
    {
      name: 'Tiger Phone',
      technologies: 'ASP.NET Web API, Angular, Azure',
      description: 'This is a full-stack Airline application, with an Angular front end, ASP.NET back end, and configured to use a MS SQL Server DB. The admin can add Passenger, Flights, and create a booking',
      image: '../../../assets/projectScreenshots/Tiger.png',
      github: 'https://github.com/shalant/TigerPhone',
      deployment: ''
    },
    {
      name: 'Doug Rosenberg Music',
      technologies: 'Javascript, HTML, CSS- Bootstrap, ParticlesJS, Text effects, Chatbot, Photo Gallery Carousel',
      description: 'Homepage for my music universe, with sheet music for students and links to buy CDs',
      image: '../../../assets/projectScreenshots/DRM.png',
      github: 'https://github.com/shalant/music-site-2',
      deployment: 'https://www.dougrosenberg.com'
    },
    {
      name: 'AWS Resilient Fault Tolerant Wordpress',
      technologies: 'AWS, CloudFormation, Elasticache, Aurora, EFS, ALB, Auto-scaling',
      description: 'The AWS Architecture Capstone Project involves hosting a WordPress site on a cloud environment, using several key principles',
      image: '../../../assets/projectScreenshots/FancyAwsBlog.png',
      github: 'https://github.com/shalant/AWS-resilient-fault-tolerant-wordpress',
      deployment: ''
    },
    {
      name: 'Dynamic Wines',
      technologies: 'React, Google Maps, Express, Node, Mongo DB',
      description: 'Final group project for a class on the MERN stack',
      image: '../../../assets/projectScreenshots/DynamicWines.png',
      github: 'https://github.com/shalant/dynamicwines2/',
      deployment: ''
    },
    {
      name: 'CI/CD Pipeline',
      technologies: 'Jenkins, AWS, Docker, Kubernetes, Github',
      description: 'blahblahblah',
      image: '../../../assets/projectScreenshots/CICD.png',
      github: 'https://github.com/shalant/AirlineTravelApp',
      deployment: 'https://devopsproject3707291139.wordpress.com'
    },
    {
      name: 'Blah',
      technologies: 'blah',
      description: 'blahblahblah',
      image: '../../../assets/projectScreenshots/ATA.png',
      github: 'https://github.com/shalant/AirlineTravelApp',
      deployment: ''
    },
    {
      name: 'Blah',
      technologies: 'blah',
      description: 'blahblahblah',
      image: '../../../assets/projectScreenshots/ATA.png',
      github: 'https://github.com/shalant/AirlineTravelApp',
      deployment: ''
    },
  ]

}