import { Injectable } from '@angular/core';
import { KeepClass } from '../app/keepClass';
import { KEEPS } from '../app/mock-keeps';
import { Observable, of } from 'rxjs';
import { MessageService } from '../app/message.service';

@Injectable({
  providedIn: 'root'
})
export class KeepService {

  constructor(private messageService : MessageService) { }

  getKeeps() : Observable<KeepClass[]> {
    this.messageService.add('KeepService: Fetched keeps');
    return of(KEEPS);
  }

  getKeep(keepID: number): Observable<KeepClass>{
    this.messageService.add(`KeepService: fetched keep keepID=${keepID}`);
    return of(KEEPS.find(keep => keep.keepID === keepID));
  }

}
