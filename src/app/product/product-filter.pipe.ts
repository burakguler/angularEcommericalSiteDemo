import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[], filterText?: string ):Product[] {
    // aranılan ürünü filtrelemek için
    filterText= filterText?filterText.toLocaleLowerCase():null

    return filterText?value
    .filter((p:Product)=>p.name
    .toLocaleLowerCase().trim()
    .indexOf(filterText)!==-1):value;
  }

}
