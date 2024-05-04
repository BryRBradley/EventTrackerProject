package com.skilldistillery.eventtracker.services;

import java.util.List;
import org.springframework.stereotype.Service;

import com.skilldistillery.eventtracker.entities.PGDAScore;
import com.skilldistillery.eventtracker.repositories.PGDATournamentRepository;

@Service
public class PGDAScoreServiceImpl implements PGDAScoreService {

	private PGDATournamentRepository pgdaTournamentRepo;
	private PGDAScoreService  pgdaScoreService;
	
	public PGDAScoreServiceImpl(PGDATournamentRepository pgdaTournamentRepo) {
		super();
		this.pgdaTournamentRepo = pgdaTournamentRepo;
	}

	public PGDAScore findById(int id) {
		
		return pgdaTournamentRepo.findById(id);
	}

	@Override
	public List<PGDAScore> findAll() {
		
		return pgdaTournamentRepo.findAll();
	}

}
