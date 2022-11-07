import { api, LightningElement, track } from 'lwc';

export default class Student extends LightningElement {
    //Initially iam storing the values by creating user object

    @api
    location;
    @track
    user={
        Name:'prashanth',
        Surname:'chinta',
    };
    updateuser()
    {
       // this.user=
       // {
         // Name:'shankar',
          //Surname:'prathap',
        //};
        this.user.Surname='bandar';
        }
    }
//Decorators-------------@track @api