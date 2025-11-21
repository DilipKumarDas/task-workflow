package com.sample.task_tracker.controller;

import com.sample.task_tracker.entity.Status;
import com.sample.task_tracker.entity.Task;
import com.sample.task_tracker.service.TaskService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/tasks")
@CrossOrigin(origins = "*")
public class Controller {

    private final TaskService taskService;

    public Controller(TaskService taskService) {
        this.taskService = taskService;
    }

    @PostMapping()
    public ResponseEntity<Task> addTask(@RequestBody Task task){
        Task created=taskService.create(task);
        return ResponseEntity.ok(created);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Task>> getTask(@PathVariable Long id){
        return ResponseEntity.ok(taskService.findById(id));
    }

    @PutMapping("/{id}/{status}")
    public ResponseEntity<Task> updateStatus(@PathVariable Long id, @PathVariable Status status){
        return ResponseEntity.ok(taskService.updateStatus(id,status));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Task> updateTask(@PathVariable Long id, @RequestBody Task updatedTask){
        return ResponseEntity.ok(taskService.update(id, updatedTask));
    }

    @GetMapping()
    public ResponseEntity<List<Task>> getAllTasks(){
        return ResponseEntity.ok(taskService.listAll());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTask(@PathVariable Long id){
        taskService.delete(id);
        return ResponseEntity.ok().build();
    }
}
