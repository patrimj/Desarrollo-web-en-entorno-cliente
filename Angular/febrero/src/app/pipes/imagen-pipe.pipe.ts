import { Pipe, PipeTransform } from '@angular/core';
import {Pokemon} from '../interfaces/pokemon'

@Pipe({
  name: 'imagenPipe',
  standalone: true
})
export class ImagenPipe implements PipeTransform {
  imgBase:string = 'assets/pokemon/';
  transform(value: Pokemon): String {

    /*if(value.weight > 20){
      value.weight = 300
    }*/
    
    if(!value.id) {
      return  'assets/no-image.png';
    }
    else if (value.imagen) {
      return value.imagen;
    }
    else {
      return this.imgBase+value.name+'.png';
    }

  }
  

}
