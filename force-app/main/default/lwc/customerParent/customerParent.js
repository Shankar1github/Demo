import { LightningElement } from 'lwc';

export default class CustomerParent extends LightningElement {
    updateuser()
    {
       this.template.queryselector('c-customer').updateuser();
    }
}