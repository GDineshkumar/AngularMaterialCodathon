import { QuotesummaryComponent } from './quotesummary.component';
import { Route } from '@angular/router';



export const QuoteSummaryRoute: Route[] = [
    {
      path: 'quote',
      component: QuotesummaryComponent,
      outlet : 'autoFlow'
    }
];
