package me.impressione.ticketpark.repository;

import me.impressione.ticketpark.entity.TipoVeiculo;

import org.apache.deltaspike.data.api.EntityRepository;
import org.apache.deltaspike.data.api.Repository;

@Repository
public interface TipoVeiculoRepository extends EntityRepository<TipoVeiculo, Long> {

}
