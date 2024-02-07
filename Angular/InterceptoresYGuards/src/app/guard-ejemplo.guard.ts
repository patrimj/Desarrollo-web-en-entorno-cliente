import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { PokemonService } from './servicios/pokemon.service';

export const guardEjemploGuard: CanActivateFn = (route, state) => {
  console.log('Guardeando')
  
  const pokemonService = inject(PokemonService)
  const router = inject(Router)
  if(pokemonService.autentificado()){
    
    return true
  }else {
    const url = router.createUrlTree(['/error'])
    return url
  }
  
};
