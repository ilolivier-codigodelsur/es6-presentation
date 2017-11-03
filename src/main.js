import TaskCollection, {greet, name} from './TaskCollection.js';
import {Task} from './Task.js';

let collection = new TaskCollection(
    new Task('Send an email'),
    new Task('Go to the store'),
    new Task('Drink coffee'),
);

console.log(collection);
console.log(greet);
console.log(name);

/*******************************/

import * as api from './api.js';

api.getUsers();
api.getUser(1);
api.updateUser(1, {});