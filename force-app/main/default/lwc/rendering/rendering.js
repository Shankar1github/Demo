import { LightningElement } from 'lwc';

export default class PersonDetails extends LightningElement {
    Name='ShivaShankar Das';
    Details='This property belong to shankar';
    showDetails=false;
  
    toggledetails()
    {
        this.showDetails=!this.showDetails;
        console.log(this.showDetails);

      
    }
}
