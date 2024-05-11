package com.skilldistillery.eventtracker.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.eventtracker.entities.PGDAScore;
import com.skilldistillery.eventtracker.repositories.PGDATournamentRepository;

@Service
public class PGDAScoreServiceImpl implements PGDAScoreService {

	@Autowired
	private PGDATournamentRepository pgdaTournamentRepo;

	public PGDAScoreServiceImpl(PGDATournamentRepository pgdaTournamentRepo) {
		super();
		this.pgdaTournamentRepo = pgdaTournamentRepo;
	}

	public PGDAScore findById(int id) {
		Optional<PGDAScore> scoreOptional = pgdaTournamentRepo.findById(id);
		PGDAScore foundScore = null;
		if (scoreOptional.isPresent()) {
			foundScore = scoreOptional.get();
		}
		return foundScore;

	}

	@Override
	public List<PGDAScore> findAll() {
		return pgdaTournamentRepo.findAll();
	}

	@Override
	public List<PGDAScore> findByLeague(String league) {
		return pgdaTournamentRepo.findByLeague(league);
	}

	@Override
	public PGDAScore create(PGDAScore pgdaScore) {
		return pgdaTournamentRepo.save(pgdaScore);
	}

	@Override
	public PGDAScore update(PGDAScore pgdaScore, int id) {
		Optional<PGDAScore> scoreOptional = pgdaTournamentRepo.findById(id);
		PGDAScore foundScore = scoreOptional.get();
		if (scoreOptional.isPresent()) {
			foundScore.setScore(pgdaScore.getScore());
			foundScore.setPlayerName(pgdaScore.getPlayerName());
			foundScore.setTournamentName(pgdaScore.getTournamentName());
			foundScore.setTournamentDate(pgdaScore.getTournamentDate());
			foundScore.setLeague(pgdaScore.getLeague());
			foundScore.setTournamentResult(pgdaScore.getTournamentResult());
			foundScore.setNationalRanking(pgdaScore.getNationalRanking());
			pgdaTournamentRepo.save(foundScore);
		}
		return foundScore;
	}

	@Override
	public void delete(int id) {
		if (pgdaTournamentRepo.existsById(id)) {
			pgdaTournamentRepo.deleteById(id); 
			}
		}
	@Override
	public List<PGDAScore> findByPlayerName(String name) {
		
		return pgdaTournamentRepo.findByPlayerName(name);
	}
	
	
}
