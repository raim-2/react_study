package org.zerock.mallapi.service;

import org.zerock.mallapi.dto.TodoDTO;

// 여기에는 등록기능 선언
public interface TodoService {

    Long register(TodoDTO todoDTO);
}
