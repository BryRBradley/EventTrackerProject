package com.skilldistillery.eventtracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.eventtracker.entities.PGDAScore;

public interface PGDATournamentRepository extends JpaRepository <PGDAScore, Integer> {

	PGDAScore findById(int id);
	

}
