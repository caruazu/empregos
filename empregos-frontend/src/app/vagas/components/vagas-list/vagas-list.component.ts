import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Vaga } from '../../model/vagas';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vagas-list',
  templateUrl: './vagas-list.component.html',
  styleUrl: './vagas-list.component.scss'
})
export class VagasListComponent {

  @Input() vagas: Vaga[] = []

  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);

  readonly displayedColumns = ['titulo','tipo'];

  onAdd(){
    this.add.emit(true);
  }

  onEdit(vagaSelecionada: Vaga){
    this.edit.emit(vagaSelecionada);
  }
}
