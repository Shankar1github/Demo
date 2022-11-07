import { LightningElement } from 'lwc';

export default class Rendercomponent extends LightningElement {
    Name='Shankar'
    Details='Shankar is the ceo of office'
    showdetails='false'

    toggledetails()
    
    {
        this.showdetails=!this.showdetails;
        console.log(this.showdetails);
    }
}