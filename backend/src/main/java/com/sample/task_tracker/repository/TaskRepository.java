package com.sample.task_tracker.repository;

import com.sample.task_tracker.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {

}
