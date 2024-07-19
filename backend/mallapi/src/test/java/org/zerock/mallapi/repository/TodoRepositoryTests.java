package org.zerock.mallapi.repository;

import java.time.LocalDate;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context .SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.zerock.mallapi.domain.Todo;

import lombok.extern.log4j.Log4j2;

@SpringBootTest
@Log4j2

public class TodoRepositoryTests {
    
    @Autowired
    private TodoRepository todoRepository;

    @Test
    public void testl() {
        log. info("--------------------------------------------------");
        log.info(todoRepository);
    }

    // 데이터 저장은 save() 기능
    @Test
    public void testInsert() {
        for(int i = 1; i<=100; i++) {

            Todo todo = Todo.builder()
                            .title("Title..." + i)
                            .dueDate(LocalDate.of(2023,12,31))
                            .writer("user00")
                            .build();

            todoRepository.save(todo);
        }
    }

    //데이터 조회 테스트
    //특정 번호 데이터 알아내기 위해선 findById() 기능 사용
    @Test
    public void testRead() {
        
        //존재하는 번호로 확인
        //Long 타입 - 자바에서 사용되는 타입 중 하나, int는 정수타입인데 매우 큰 숫자나 고유식별자(id) 등 int보다 더 큰 범위의 정수를 다룰 때 사용한다.
        Long tno = 33L; //Long 타입의 리터럴은 L접미사를 붙여야되서, 33뒤에L이 붙는 것
        java.util.Optional<Todo> result = todoRepository.findById(tno); //id 기반으로 확인
        Todo todo = result.orElseThrow(); // 조회 결과 없을 시 예외 발생

        log.info(todo);
    }

    //데이터 조회 후 수정
    @Test
    public void testModify() {
        
        //존재하는 번호로 확인
        //Long 타입 - 자바에서 사용되는 타입 중 하나, int는 정수타입인데 매우 큰 숫자나 고유식별자(id) 등 int보다 더 큰 범위의 정수를 다룰 때 사용한다.
        Long tno = 33L; //Long 타입의 리터럴은 L접미사를 붙여야되서, 33뒤에L이 붙는 것
        java.util.Optional<Todo> result = todoRepository.findById(tno); //id 기반으로 확인
        Todo todo = result.orElseThrow(); // 조회 결과 없을 시 예외 발생

        //데이터 변경
        todo.changeTitle("Modified 33...");
        todo.changeComplete(true);
        todo.changeDueDate(LocalDate.of(2023,10,10));

        todoRepository.save(todo);
        log.info(todo);
    }

    //데이터 삭제
    @Test
    public void testDelete() {
        Long tno = 1L;

        todoRepository.deleteById(tno);
    }

    //페이징 처리
    @Test
    public void testPaging() {
        // import org.springframework.data.domain.Pageable;

        //PageRequest.of는 페이지번호 0부터 시작 - descending 역순처리
        Pageable pageable = PageRequest.of(0,10, Sort.by("tno").descending());

        Page<Todo> result = todoRepository.findAll(pageable);

        log.info(result.getTotalElements());

        result.getContent().stream().forEach(todo -> log.info(todo));
    }
}
