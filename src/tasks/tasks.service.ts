import { Injectable } from '@nestjs/common';
import { Task, TaksStatus } from './task.entity';
import { v4 } from 'uuid';
import { UpdatedTaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: '1',
      title: 'first task',
      description: 'some task',
      status: TaksStatus.PENDING,
    },
  ];

  getAllTasks() {
    return this.tasks;
  }

  createTask(title: string, description: string) {
    const newTask = {
      id: v4(),
      title,
      description,
      status: TaksStatus.PENDING,
    };
    this.tasks.push(newTask);

    return newTask;
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  getTasksById(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }

  updateTask(id: string, updatedFields: UpdatedTaskDto): Task {
    const task = this.getTasksById(id);
    const newTask = Object.assign(task, updatedFields);
    this.tasks = this.tasks.map((task) => (task.id === id ? newTask : task));
    return newTask;
  }
}
