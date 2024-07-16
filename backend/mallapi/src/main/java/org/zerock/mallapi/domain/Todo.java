package org.zerock.mallapi.domain;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

// entity
// 데이터베이스와 연동되는 애플리케이션에서 사용되며, db의 테이블과 1:1로 매핑되는 자바 클래스를 나타냄
// db 테이블구조를 반영해 애플리케이션에서 데이터를 객체 지향적으로 다룰 수 있게함
@Entity
@Table(name = "tbl_todo") //클래스가 매핑될 테이블
@Getter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor

public class Todo {

    @Id // 기본 키 (primary key)
    @GeneratedValue(strategy = GenerationType.IDENTITY) //기본 키의 생성 전략 지정 - GenerationType.IDENTITY(db가 기본 키 값 자동으로 생성하도록 함)
    private long tno;

    private String title;
    private String writer;
    private Boolean complete;
    private LocalDate dueDate;

    //Todo의 entity 클래스에서는 수정 가능한 부분을 변경가능
    public void changeTitle(String title) { // String title이라는 선언은 title의 타입을 문자열로 명시, 문자열 타입만 전달될 수 있도록하는 강타입 시스템의 일부
        this.title = title;
    }

    public void changeComplete(boolean complete) {
        this.complete = complete;
    }
    
    public void changeDueDate(LocalDate dueDate) {
        this.dueDate = dueDate;
    }
}
