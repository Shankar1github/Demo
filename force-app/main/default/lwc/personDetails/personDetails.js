import { LightningElement } from 'lwc';

export default class PersonDetails extends LightningElement {
    Name='ShivaShankar Das'
    Details='This property belong to shankar'
    showDetails=false;
    actionButtonLabel='Show Details';
    toggledetails()
    {
        this.showDetails=!this.showDetails;
        this.actionButtonLabel=this.ShowDetails ? 'Show Details':'Hide Details';
    }
}