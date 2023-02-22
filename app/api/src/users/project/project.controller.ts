import { Controller, Get, Param, Patch } from '@nestjs/common';
import { ProjectService } from './project.service';

@Controller('/api/users/project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}
  
    @Get('/:name/:status')
    async getUsersByProjectName(@Param('name') name: string, @Param('status') status: string) {
        return await this.projectService.getUsersByProjectName(name, status);
    }

}