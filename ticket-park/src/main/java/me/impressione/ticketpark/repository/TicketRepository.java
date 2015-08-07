package me.impressione.ticketpark.repository;

import me.impressione.ticketpark.entity.Ticket;

import org.apache.deltaspike.data.api.EntityRepository;
import org.apache.deltaspike.data.api.Repository;

@Repository
public interface TicketRepository extends EntityRepository<Ticket, Long> {

}
