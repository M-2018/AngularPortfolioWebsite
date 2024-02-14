import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tags';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {id: 0, name: 'Sample Angular App', summary: 'Test Description1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', projectLink: 'www.github.com', tags: [Tag.ANGULAR, Tag.TYPESCRIPT], pictures: ["../../assets/Image1.PNG", "../../assets/Image2.PNG", "../../assets/Image3.PNG"]},
    {id: 1, name: 'Sample API REST App', summary: 'Test Description2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', projectLink: 'www.github.com', tags: [Tag.CSHARP, Tag.ASP], pictures: ["../../assets/Image1.PNG", "../../assets/Image2.PNG", "../../assets/Image3.PNG"]},
    {id: 2, name: 'Sample NodeJs App', summary: 'Test Description3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', projectLink: 'www.github.com', tags: [Tag.JAVASCRIPT, Tag.EXPRESS], pictures: ["../../assets/Image1.PNG", "../../assets/Image2.PNG", "../../assets/Image3.PNG"]},
    {id: 3, name: 'Sample HTML App', summary: 'Test Description4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', projectLink: 'www.github.com', tags: [Tag.HTML, Tag.CSS], pictures: ["../../assets/Image1.PNG", "../../assets/Image2.PNG", "../../assets/Image3.PNG"]},
    {id: 4, name: 'Sample REACT App', summary: 'Test Description5', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', projectLink: 'www.github.com', tags: [Tag.HTML, Tag.JAVASCRIPT], pictures: ["../../assets/Image1.PNG", "../../assets/Image2.PNG", "../../assets/Image3.PNG"]},
    {id: 5, name: 'Sample HTML App', summary: 'Test Description6', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', projectLink: 'www.github.com', tags: [Tag.HTML, Tag.CSS], pictures: ["../../assets/Image1.PNG", "../../assets/Image2.PNG", "../../assets/Image3.PNG"]},
  ];

  constructor() { }

  GetProjects(){
    return this.projects;
  }

  GetProjectById(id: number) : Project {
    let project = this.projects.find(project => project.id ===id);

    if(project === undefined) {
      throw new TypeError('There is no project that matches the id: ' + id);
    }
    
    return project;
  }

  GetProjectsByFilter(filterTags: Tag[]){
    let filteredProjects: Project[] = [];

    this.projects.forEach(function (project){
      let foundAll: boolean = true;

      filterTags.forEach(function(filterTag){
        if(project.tags.includes(filterTag) == false){
          foundAll = false;
        }
      });

      if(foundAll){
        filteredProjects.push(project);
      }

    });
    return filteredProjects;
  }

}
