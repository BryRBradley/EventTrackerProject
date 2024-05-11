package com.skilldistillery.eventtracker.services;

import java.util.List;

import com.skilldistillery.eventtracker.entities.PGDAScore;

public interface PGDAScoreService {
	
	PGDAScore findById(int id);

	PGDAScore create(PGDAScore pgdaScore);
	
	PGDAScore update(PGDAScore pgdaScore, int id);

	void delete(int id);

	List<PGDAScore> findAll();

	List<PGDAScore> findByPlayerName(String name);

	List<PGDAScore> findByLeague(String league);

}


