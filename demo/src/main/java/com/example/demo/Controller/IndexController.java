package com.example.demo.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author root
 * @Description
 * @date 2020/6/28 16:50
 */
@Controller
@RequestMapping("/")
public class IndexController {

    @RequestMapping("/aaa")
    public String index(){
        return "index";
    }
}
