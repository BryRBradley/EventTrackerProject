package com.skilldistillery.eventtracker.services;

import java.util.List;

import com.skilldistillery.eventtracker.entities.PGDAScore;

public interface PGDAScoreService {
	
	PGDAScore findById(int id);
	List <PGDAScore> findAll ();

}
