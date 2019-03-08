import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {

  constructor(
    public id: number,
    public description: string,
    public complete: boolean,
    public target: Date
  ){

  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[]
// todos = [ new Todo(1,'learn to Act', false, new Date()),

// new Todo(2,'Become an angular expert', false, new Date()),
// new Todo(3,'Visit Canada', false, new Date())
  // {
  //   id: "1",
  //   description: "learn to Act"
  // },
  // {
  //   id: "2",
  //   description: "Become an angular expert"
  // },
  // {
  //   id: "3",
  //   description: "Visit Canada"
  // }

message: string;

  constructor(private todoService: TodoDataService, private router: Router) { }

  ngOnInit() {
    this.getAlltodos();
  }

  deleteTodo(id){
    this.todoService.deleteTodoById('Hemanth',id).subscribe(response =>{
      this.getAlltodos();
    this.message = "Successfully deleted todo "+id;
    });   
  }

  getAlltodos(){
    this.todoService.getAlltodos('hemanth').subscribe(
      response => {
        this.todos = response;
      }
    );
    
  }

  updateTodo(id){
    this.router.navigate(['todos',id]);
  }

  createTodo(){
    this.router.navigate(['todos',-1]);
  }
}
