import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {Project} from '../_models/Project';
import { Tag } from '../_models/Tags';
import {ProjectsService} from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {

  projects = {} as Project[];
  typescript: boolean = false;
  csharp: boolean = false;
  asp: boolean = false;
  javascript: boolean = false;
  express: boolean = false;
  html: boolean = false;
  css: boolean = false;
  angular: boolean = false;
  filtering: Boolean = false;


  isCollapsed: boolean = true;

  constructor(private titleService: Title, private projectService: ProjectsService){
    this.titleService.setTitle('Marco Gonzalez Blanco - Portfolio');

  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  Filter(){
    let filterTags: Tag[] = [];

    if(this.typescript){
      filterTags.push(Tag.TYPESCRIPT);
    }
    if(this.angular){
      filterTags.push(Tag.ANGULAR);
    }
    if(this.csharp){
      filterTags.push(Tag.CSHARP);
    }
    if(this.asp){
      filterTags.push(Tag.ASP);
    }
    if(this.javascript){
      filterTags.push(Tag.JAVASCRIPT);
    }
    if(this.express){
      filterTags.push(Tag.EXPRESS);
    }
    if(this.html){
      filterTags.push(Tag.HTML);
    }
    if(this.css){
      filterTags.push(Tag.CSS);
    }

    if(this.typescript || this.csharp || this.asp || this.javascript || this.express || this.html || this.css || this.angular){
      this.filtering = true;
    }else{
      this.filtering = false;
    }


    this.projects = this.projectService.GetProjectsByFilter(filterTags);
  }

  ResetFilters(){
    this.typescript = false;
    this.csharp = false;
    this.asp = false;
    this.javascript = false;
    this.express = false;
    this.html = false;
    this.css = false;
    this.angular = false;
    this.filtering = false;

    this.projects = this.projectService.GetProjects();
  } 
}