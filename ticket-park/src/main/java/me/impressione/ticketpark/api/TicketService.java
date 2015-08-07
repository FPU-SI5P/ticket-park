package me.impressione.ticketpark.api;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import me.impressione.ticketpark.entity.Ticket;

@Path("/ticket")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public interface TicketService {
	@GET
	@Path("/")
	List<Ticket> getTickets();

	@DELETE
	@Path("/{id}")
	void removeTicket(@PathParam("id") Long ticketId);

	@POST
	@Path("/")
	Ticket saveTicket(Ticket note);
}
