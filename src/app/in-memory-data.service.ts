import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Task } from './task';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasks = [
      { id: 1, name: 'Weekly Report' },
      { id: 2, name: 'WSS chasing' },
      { id: 3, name: 'Announcement' },
      { id: 4, name: 'Self-Introduction page' },
      { id: 5, name: 'Training Chasing' },
      { id: 6, name: 'Meeting Minutes' },
      { id: 7, name: 'CC Rescue' },
      { id: 8, name: 'JP Digital IQ site Renewal' },
      { id: 9, name: 'Create Jenkins file' },
      { id: 10, name: 'Be reviewed the code to show the off-auction data in real time' }

    ];
    return { tasks };
  }

  // Overrides the genId method to ensure that a task always has an id.
  // If the tasks array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(tasks: Task[]): number {
    return tasks.length > 0 ? 
  Math.max(...tasks.map(task => task.id)) + 1 : 11;
  }
}