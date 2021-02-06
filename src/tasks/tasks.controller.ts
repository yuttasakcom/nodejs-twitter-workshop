import { Body, Controller, Get, Post } from '@nestjs/common';
import { Task } from './tasks.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.get();
  }

  @Post()
  create(@Body() body): Task {
    const { title, description } = body;
    return this.tasksService.create(title, description);
  }
}
