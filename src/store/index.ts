import { Directive } from "@vue/runtime-core"
import { defineStore } from "pinia"

// export type filterType = "all" | "finished" | "unfinished";
export enum FilterType {
  all,
  finished,
  unfinished
}
export type Todo = {
  title: string;
  completed: boolean;
  id: number
}
let id = 0
function nextId() {
  return id++
}
export const useTodos = defineStore({
  id: 'todos',
  state: (): {
    todos: Todo[];
    filter: FilterType;
    editingTodo: null
  } => ({
    todos: [],
    filter: FilterType.all,
    // type will be automatically inferred to number
    editingTodo: null
  }),
  getters: {
    finishedTodos() {
      // autocompletion! ✨
      return this.todos.filter((todo) => todo.completed)
    },
    unfinishedTodos() {
      return this.todos.filter((todo) => !todo.completed)
    },
    filteredTodos() {
      if (this.filter === FilterType.finished) {
        // call other getters with autocompletion ✨
        return this.finishedTodos
      } else if (this.filter === FilterType.unfinished) {
        return this.unfinishedTodos
      }
      return this.todos
    },
    allComplete() {
      return this.todos.length > 0 && this.finishedTodos.length === this.todos.length
    }
  },
  actions: {
    // any amount of arguments, return a promise or not
    addTodo(title: string) {
      // you can directly mutate the state
      this.todos.push({ title, id: nextId(), completed: false })
    },
    editTodo(todo: Todo, title: string) {
      this.todos.filter(t => t === todo).forEach(t => t.title = title)
    },
    deleteTodo(todo: Todo) {
      const index = this.todos.indexOf(todo)
      this.todos.splice(index, 1)
    }
  }
})