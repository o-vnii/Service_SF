import { LightningElement } from 'lwc';
import obterContasRecentes from "@salesforce/apex/Conta.obterContasRecentes";

export default class CriarContaFacil extends LightningElement {

    contasRecentes = [];

    handleSuccess(event){
        alert('Conta criada com Id: ' + event.detail.id);
        this.buscarContas();
    }

    connectedCallback(){
        this.buscarContas();
    }

    buscarContas(){
        obterContasRecentes()
        .then((result) => {
            this.contasRecentes = result;
        });
    }
}