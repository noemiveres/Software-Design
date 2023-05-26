package com.utcn.demo.controller;

import com.utcn.demo.entity.Tag;
import com.utcn.demo.service.TagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping( "/tags")
public class TagController {
    @Autowired
    TagService tagService;

    @GetMapping
    @ResponseBody
    public List<String> retrieveAllTags() {
        return tagService.retrieveAllTagsNames();
    }

    @GetMapping("/{name}")
    @ResponseBody
    public Tag retrieveTagByName(@PathVariable String name){
        return tagService.retrieveTagByName(name);
    }

    @PostMapping
    public void createTag(@RequestBody String tag) {
        tagService.saveTag(tag);
    }
}
