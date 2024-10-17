package com.pecodigos.crud_spring.exceptions;

public class RecordNotFoundException extends RuntimeException {
    public RecordNotFoundException(Long id) {
        super("Record not found with id: " + id);
    }
}
