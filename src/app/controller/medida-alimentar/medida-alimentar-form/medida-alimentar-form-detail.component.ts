import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { GlobalVariable } from './../../../global';
import { MedidaAlimentar } from './../../../model/medida-alimentar';
import { GenericFormComponent } from './../../../generics/generic.form.component';
import { MedidaAlimentarBuilder } from './../medida-alimentar.builder';
import { MedidaAlimentarService } from './../medida-alimentar.service';

@Component( {
    selector: 'app-medida-alimentar-form-detail',
    templateUrl: './medida-alimentar-form-detail.html',
    styleUrls: ['./medida-alimentar-form.css', './../../../../assets/css/form-component.css']
} )
export class MedidaAlimentarFormDetailComponent extends GenericFormComponent implements OnInit {
    medidaAlimentar: MedidaAlimentar;

    constructor( private route: ActivatedRoute,
        private medidaAlimentarService: MedidaAlimentarService,
        router: Router) {
        super( medidaAlimentarService, router );

        this.goTo = "medida-alimentar";
        this.medidaAlimentar = new MedidaAlimentarBuilder().initialize( this.medidaAlimentar );
    }

    ngOnInit() {
        this.inscricao = this.route.params.subscribe(
            ( params: any ) => {
                let id = params['id'];
                this.showPreload = true;

                this.service.get( id )
                    .then( res => {
                        this.showPreload = false;
                        this.medidaAlimentar = new MedidaAlimentarBuilder().clone( res.json() );
                    } )
                    .catch( error => {
                        this.catchConfiguration( error );
                    } )
            } );
    }

    ngOnDestroy() {
        this.inscricao.unsubscribe();
    }

}