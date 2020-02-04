import { Component, OnInit } from '@angular/core';
import {ICreateOrderRequest, IPayPalConfig} from "ngx-paypal";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-view-payment',
  templateUrl: './view-payment.component.html',
  styleUrls: ['./view-payment.component.css']
})
export class ViewPaymentComponent implements OnInit {


  constructor(private usersService : UsersService, ) { }
  public payPalConfig1 ? : IPayPalConfig;
  public Formule1 : boolean;
  public Formule2 : boolean;
  public Formule3 : boolean;
  montant=0.0;
  order_id : string;
  ngOnInit() {
    this.initConfig1();

  }
  private initConfig1(): void {
    this.payPalConfig1 = {
      currency: 'EUR',
      clientId: 'Af-Ze-FH44BN5xeJ8kPqLMCpYa750H323OXqYuVqsRKEDgGVCg3K-LS08zx0iC6H9ejABFfY0g1j5A29',
      createOrderOnClient: (data) => < ICreateOrderRequest > {
        intent: 'CAPTURE',
        purchase_units: [{
          amount: {
            currency_code: 'EUR',
            value: this.montant.toString(),
            breakdown: {
              item_total: {
                currency_code: 'EUR',
                value: this.montant.toString(),
              }
            }
          },
          items: [{
            name: 'Enterprise Subscription',
            quantity: '1',
            category: 'DIGITAL_GOODS',
            unit_amount: {
              currency_code: 'EUR',
              value: this.montant.toString(),
            },
          }]
        }]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical'
      },
      onApprove: (data, actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then(details => {
          console.log('onApprove - you can get full order details inside onApprove: ', details);
        });

      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
        this.order_id = data.id;
        this.validetransac();
        //this.showSuccess = true;
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
        //this.showCancel = true;

      },
      onError: err => {
        console.log('OnError');
        console.log(this.payPalConfig1)
        //this.showError = true;
      },
      onClick: (data, actions) => {
        console.log(this.montant)
        console.log('onClick', data, actions);

        //this.resetStatus();
      }
    };
  }

  validetransac(){
    console.log("valid transac");
    this.usersService.validetrans(this.order_id).subscribe(response => {
      if(response.status === 0){
        console.log("achat reussis");
      }else{
        console.log("achat rater");
      }
    });
  }

  montant1(){

    this.montant = 10;
    console.log(this.montant);
    this.Formule2 = false;
    this.Formule3 = false;
  }
  montant2(){
    this.montant = 20;
    console.log(this.montant);
    this.Formule1 = false;
    this.Formule3 = false;
  }
  montant3(){
    this.montant = 50;
    console.log(this.montant);
    this.Formule1 = false;
    this.Formule2 = false;
  }


}
