package com.hig.sales;

import javax.validation.Valid;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
public class DataController {

	@RequestMapping("/data")
	public PersonalInfo getdata() {
		return new PersonalInfo("dinesh", "garekipati", "01/03/1990", "John olds DR", "9122", "manchster", "CT",
				06042L);
	}

	@RequestMapping(value  ="/save", method = RequestMethod.POST , consumes = "application/json", produces = "application/json")
	public boolean saveData(@RequestBody @Valid PersonalInfo personalInfo) {
		System.out.println(personalInfo);
		return false;
	}
}
