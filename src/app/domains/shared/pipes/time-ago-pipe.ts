import { Pipe, PipeTransform } from '@angular/core';
import { formatDistance, subDays } from 'date-fns';

import { enUS } from 'date-fns/locale';


@Pipe({
  name: 'timeAgo',
})
export class TimeAgoPipe implements PipeTransform {
  transform(value: string): string {
    const date = new Date(value);
    const today = new Date();

    // Usar formatDistance con locale español
    return formatDistance(subDays(today, 0), date, { addSuffix: false, locale: enUS });
    //=> "3 days ago"

  }
}


