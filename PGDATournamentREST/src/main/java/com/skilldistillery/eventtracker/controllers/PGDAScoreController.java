package com.skilldistillery.eventtracker.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.eventtracker.entities.PGDAScore;
import com.skilldistillery.eventtracker.services.PGDAScoreService;

@RestController
@RequestMapping("api")
public class PGDAScoreController {

	private PGDAScoreService pgdaScoreService;

	public PGDAScoreController(PGDAScoreService pgdaScoreService) {
		super();
		this.pgdaScoreService = pgdaScoreService;
	}
	
	@GetMapping("pgdaScores")
	public List<PGDAScore> findAll() {
		return pgdaScoreService.findAll();
		
	}

	@GetMapping("pgdaScores/{id}")
	public PGDAScore findById(@PathVariable("id") int id) {
		return pgdaScoreService.findById(id);
		
	}
	
	@PostMapping("pgdaScores")
	public PGDAScore create(@RequestBody PGDAScore pgdaScore) {
		PGDAScore newpgdaScore = pgdaScoreService.create(pgdaScore);
		return newpgdaScore;
		
	}
	@PutMapping("pgdaScores/{id}")
	public PGDAScore update(@RequestBody PGDAScore pgdaScore, @PathVariable("id") int id ) {
		return pgdaScoreService.update(pgdaScore, id);
	
	}
	
	@DeleteMapping("pgdaScores/{id}")
	public void delete(@PathVariable("id") int id) {
		 pgdaScoreService.delete(id);
		
	}
	
	}
