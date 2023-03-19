package com.utcn.demo.repository;

import com.utcn.demo.entity.Content;
import org.springframework.data.repository.CrudRepository;

public interface ContentRepository extends CrudRepository<Content,Long> {
}
