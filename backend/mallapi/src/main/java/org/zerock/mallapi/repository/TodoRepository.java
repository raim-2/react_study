package org.zerock.mallapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.zerock.mallapi.domain.Todo;

//JpaRepository상속해 만드는 TodoRepository는 별도 메서드를 작성하지 않아도 crud와 페이징처리 등 기능 제공됨
public interface TodoRepository extends JpaRepository<Todo, Long> {

}