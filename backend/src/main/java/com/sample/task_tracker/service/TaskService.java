package com.sample.task_tracker.service;

import com.sample.task_tracker.entity.Status;
import com.sample.task_tracker.entity.Task;
import com.sample.task_tracker.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {

    private final TaskRepository repository;
    public TaskService(TaskRepository repository) {
        this.repository = repository;
    }

    public Task create(Task task){
        return repository.save(task);
    }
     public List<Task> listAll(){
        return repository.findAll();
     }

     public Optional<Task> findById(Long id){
        return repository.findById(id);
     }

     public Task update(Long id,Task updatedTask){
        return repository.findById(id).map(existing -> {
            existing.setTitle(updatedTask.getTitle());
            existing.setDescription(updatedTask.getDescription());
            existing.setStatus(updatedTask.getStatus());
            return repository.save(existing);
        }).orElseThrow(()->new RuntimeException("Task Not Found"));
     }

     public void delete(Long id){
        repository.deleteById(id);
     }

     public Task updateStatus(Long id, Status status){
        return repository.findById(id).map(existing->{
            existing.setStatus(status);
            return repository.save(existing);
        }).orElseThrow(()->new RuntimeException("TaskNotFound"));
     }
}
