package org.zerock.mallapi.service;

import org.zerock.mallapi.dto.TodoDTO;


public interface TodoService {
    
    // 등록기능 선언 - TodoDTO 객체를 받아, 새로운 Todo 등록 + ID 반환
    Long register(TodoDTO todoDTO);
    
    // 해당 id(tno)에 해당하는 Todo 가져옴
    TodoDTO get(Long tno);

    // 해당 TodoDTO객체를 받아, 기존 Todo 수정
    void modify(TodoDTO todoDTO);

    // 해당 id(tno)에 해당하는 Todo 삭제
    void remove(Long tno);
}
