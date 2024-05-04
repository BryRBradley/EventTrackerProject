package com.skilldistillery.eventtracker.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.skilldistillery.eventtracker.services.PGDAScoreService;

@RestController
@RequestMapping("api")
public class PGDAScoreController {

	private PGDAScoreService pgdaScoreService;

	public PGDAScoreController(PGDAScoreService pgdaScoreService) {
		super();
		this.pgdaScoreService = pgdaScoreService;
	}
	
	@GetMapping("ping")
	public String ping() {
		return "pong";
		
	}
}