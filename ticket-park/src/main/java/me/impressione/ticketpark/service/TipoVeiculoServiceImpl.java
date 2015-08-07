package me.impressione.ticketpark.service;

import java.util.List;

import javax.ejb.Stateless;
import javax.inject.Inject;

import me.impressione.ticketpark.api.TipoVeiculoService;
import me.impressione.ticketpark.entity.Ticket;
import me.impressione.ticketpark.entity.TipoVeiculo;
import me.impressione.ticketpark.repository.TipoVeiculoRepository;

@Stateless
public class TipoVeiculoServiceImpl implements TipoVeiculoService {
	@Inject
	TipoVeiculoRepository	tipoVeiculoRepository;

	@Override
	public List<TipoVeiculo> getTipoVeiculos() {
		return tipoVeiculoRepository.findAll();
	}

	@Override
	public void removeTipoVeiculo(Long tipoVeiculoId) {
		tipoVeiculoRepository.remove(new TipoVeiculo(tipoVeiculoId));

	}

	@Override
	public TipoVeiculo saveTipoVeiculo(TipoVeiculo tipoVeiculo ) {
		return tipoVeiculoRepository.save(tipoVeiculo);
	}

}
