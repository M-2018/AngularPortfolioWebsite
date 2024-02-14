import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

  isWorkExperienceOpen: boolean = false;
  isEducationOpen: boolean = false;
  isCertificationOpen: boolean = false;
  isHardSkillsOpen: boolean = false;
  isSoftSkillsOpen: boolean = false;

  constructor(private titleService: Title, private renderer: Renderer2){
    this.titleService.setTitle('Marco Gonzalez Blanco - Resume');
  }

  DownloadFile(){
    const link = this.renderer.createElement('a');
    link.setAttribute('target', 'blank');
    link.setAttribute('href', '../../assets/CV_Marco_GB.pdf');
    link.click('download', 'CV_Marco_GB.pdf');
    link.remove();
  }
}
