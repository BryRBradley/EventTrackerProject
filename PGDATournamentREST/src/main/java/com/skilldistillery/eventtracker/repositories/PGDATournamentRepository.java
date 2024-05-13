package com.skilldistillery.eventtracker.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.eventtracker.entities.PGDAScore;

public interface PGDATournamentRepository extends JpaRepository <PGDAScore, Integer> {

	List <PGDAScore> findAll ();
	List<PGDAScore> findByLeague(String league);
	  List<PGDAScore> findByPlayerName(String name);
	  
	
}
