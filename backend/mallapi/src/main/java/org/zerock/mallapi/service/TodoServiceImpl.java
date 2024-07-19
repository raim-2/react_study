package org.zerock.mallapi.service;

import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.zerock.mallapi.domain.Todo;
import org.zerock.mallapi.dto.TodoDTO;
import org.zerock.mallapi.repository.TodoRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Service
@Transactional
@Log4j2
@RequiredArgsConstructor //생성자 자동주입

//TodoService 인터페이스를 구현하는 클래스

public class TodoServiceImpl implements TodoService{
    
    //자동주입 대상은 final로
    private final ModelMapper modelMapper;
    private final TodoRepository todoRepository;
    @Override
    public Long register(TodoDTO todoDTO) {
        
        log.info("........");

        Todo todo = modelMapper.map(todoDTO, Todo.class);
        Todo savedTodo = todoRepository.save(todo);

        return savedTodo.getTno();
        // return null;
    }

    @Override
    public TodoDTO get(Long tno) {

        Optional<Todo> result = todoRepository.findById(tno);

        Todo todo = result.orElseThrow();
        
        TodoDTO dto = modelMapper.map(todo, TodoDTO.class);

        return dto;
    }

    @Override
    public void modify(TodoDTO todoDTO) {

        Optional<Todo> result = todoRepository.findById(todoDTO.getTno());

        Todo todo = result.orElseThrow();

        todo.changeTitle(todoDTO.getTitle());
        todo.changeDueDate(todoDTO.getDueDate());
        todo.changeComplete(todoDTO.isComplete());

        todoRepository.save(todo);
    }

    @Override
    public void remove(Long tno) {
        todoRepository.deleteById(tno);
    }
}


