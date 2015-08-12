package me.impressione.ticketpark.repository;

import org.apache.deltaspike.data.api.EntityRepository;
import org.apache.deltaspike.data.api.Repository;

import me.impressione.ticketpark.entity.TipoVeiculo;

@Repository
public interface TipoVeiculoRepository extends EntityRepository<TipoVeiculo, Long> {

}
