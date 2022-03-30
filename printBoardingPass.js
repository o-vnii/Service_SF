import { LightningElement, api } from 'lwc';
import { loadScript } from 'lightning/platformResourceLoader';
//import QRCODE from '@salesforce/resourceUrl/QRCODE';

export default class PrintBoardingPass extends LightningElement {
    @api recordId;
    @api objectApiName;

    connectedCallback() {
        Promise.all([
            loadScript(this, QRCODE),
        ]).then(() => {

            new QRious({ element: this.template.querySelector('.qr'), value: "https://webisora.com" });

        });
    }

}