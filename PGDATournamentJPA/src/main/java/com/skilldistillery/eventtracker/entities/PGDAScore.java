package com.skilldistillery.eventtracker.entities;

import java.time.LocalDate;
import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="pgda_score")
public class PGDAScore {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	@Column (name="score")
	private int score;
	@Column (name="player_name")
	private String playerName;
	@Column (name="tournament_name")
	private String tournamentName;
	@Column (name="tournament_date")
	private LocalDate tournamentDate;
	@Column (name="league")
	private String league;
	@Column (name="tournament_result")
	private int tournamentResult;
	@Column (name="national_ranking")
	private int nationalRanking;
	
	public PGDAScore() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	
	
	public int getScore() {
		return score;
	}

	public void setScore(int score) {
		this.score = score;
	}

	public String getPlayerName() {
		return playerName;
	}

	public void setPlayerName(String playerName) {
		this.playerName = playerName;
	}

	public String getTournamentName() {
		return tournamentName;
	}

	public void setTournamentName(String tournamentName) {
		this.tournamentName = tournamentName;
	}

	public LocalDate getTournamentDate() {
		return tournamentDate;
	}

	public void setTournamentDate(LocalDate tournamentDate) {
		this.tournamentDate = tournamentDate;
	}

	public String getLeague() {
		return league;
	}

	public void setLeague(String league) {
		this.league = league;
	}

	public int getTournamentResult() {
		return tournamentResult;
	}

	public void setTournamentResult(int tournamentResult) {
		this.tournamentResult = tournamentResult;
	}

	public int getNationalRanking() {
		return nationalRanking;
	}

	public void setNationalRanking(int nationalRanking) {
		this.nationalRanking = nationalRanking;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		PGDAScore other = (PGDAScore) obj;
		return id == other.id;
	}

	@Override
	public String toString() {
		return "pgda_score [id=" + id + "]";
	}
	
}
