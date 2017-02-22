
import { AutosalesdataService } from '../autosalesdata.service';
import { QuotesummaryComponent } from './quotesummary.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule, FormsModule, HttpModule],
  declarations: [QuotesummaryComponent],
  exports : [QuotesummaryComponent],
  providers : [AutosalesdataService],
})

export class quoteSummaryModule{}