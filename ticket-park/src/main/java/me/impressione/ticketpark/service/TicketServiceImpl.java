package me.impressione.ticketpark.service;

import java.util.List;

import javax.ejb.Stateless;
import javax.inject.Inject;

import me.impressione.ticketpark.api.TicketService;
import me.impressione.ticketpark.entity.Ticket;
import me.impressione.ticketpark.repository.TicketRepository;

@Stateless
public class TicketServiceImpl implements TicketService {
	@Inject
	TicketRepository	ticketRepository;

	@Override
	public List<Ticket> getTickets() {
		return ticketRepository.findAll();
	}

	@Override
	public void removeTicket(Long ticketId) {
		ticketRepository.remove(new Ticket(ticketId));

	}

	@Override
	public Ticket saveTicket(Ticket ticket) {
		return ticketRepository.save(ticket);
	}

}
