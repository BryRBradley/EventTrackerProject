package com.skilldistillery.eventtracker.entities;

import java.util.Objects;

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

	public PGDAScore() {
		
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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
