import { api, LightningElement, track } from 'lwc';

export default class Customer extends LightningElement 
{
    @api
    location;
  //  @track
  user={
      firstname:'shankar',
      lastname:'chinta',
  }
  updateuser()
  {
      //this.user={
        //  firstname:'shiva',
          //lastname:'prakash',
      //};
      this.user.lastname='Senior';
  }
}