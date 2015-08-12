package me.impressione.ticketpark.repository;

import me.impressione.ticketpark.entity.Ticket;

import java.util.List;

import org.apache.deltaspike.data.api.EntityRepository;
import org.apache.deltaspike.data.api.Query;
import org.apache.deltaspike.data.api.Repository;

@Repository
public interface TicketRepository extends EntityRepository<Ticket, Long> {
	@Query("FROM Ticket WHERE saida is null")
	List<Ticket> findOnlyOpenTicket();

}
