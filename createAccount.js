import { LightningElement } from 'lwc';
import criarConta1 from "@salesforce/apex/Conta1.criarConta1";

export default class CreateAccount extends LightningElement {

    nome = 'Vinicius';

    handleClick(event) {

        criarConta1({
            name: this.nome
        })
        .then((result) => {
            console.log(result);
            alert('A conta foi criada foi criada com o id'+ result.Id);
            this.nome = '';
        });
    }

    alterouNome(event){
        this.nome = event.target.value;
    }

}