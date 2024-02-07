import { HttpInterceptorFn } from '@angular/common/http';

//FranAlia
export const interceptoresInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(req.withCredentials)
  let peticion = req.clone()
  console.log(req.url)
  const param = req.params.get('auth')
  if(param){
      //Como el parametro auth tiene valor aquí debemos meter vuestro token.
      console.log(param)
        peticion = req.clone({
        
        headers : req.headers.set('x-token','token').set('d','dd'),
        
      })
  } else {
    //en este paso como no tenemos el param auth pues no deberiamos meter el token en la cabecera
    console.log(param)
  }
  return next(peticion) ;
};
