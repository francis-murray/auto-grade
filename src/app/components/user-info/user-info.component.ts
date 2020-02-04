import { Component, OnInit } from "@angular/core";
import { UsersService } from "src/app/services/users.service";
import {ICreateOrderRequest, IPayPalConfig} from "ngx-paypal";

@Component({
  selector: "app-user-info",
  templateUrl: "./user-info.component.html",
  styleUrls: ["./user-info.component.css"]
})
export class UserInfoComponent implements OnInit {
  public payPalConfig1 ? : IPayPalConfig;
  order_id = "";
  isLoading = false;
  createdDate: Date;
  isFetching = false;
  montant = 100;
  premium = false;

  dataFromServer: any = {
    status: 0,
    user_data: {
      firstname: "",
      lastname: "",
      email: "",
      type: "",
      created_timestamp: 0,
      organisation: "",
      corrected_programs_left: 0,
      groups: [],
      assignmentsCreated: []
    }
  };

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.initConfig1();
    this.isLoading = true;
    this.usersService.getUserInfo().subscribe(data => {
      this.isLoading = false;
      this.dataFromServer = data;
      console.log(data);
      console.log(data.user_data.is_premium);
      this.premium = data.user_data.is_premium;


      this.createdDate = new Date(this.dataFromServer.user_data.created_timestamp * 1000);

      localStorage.setItem("user_type", this.dataFromServer.user_data.type);

      console.log("dataFromServer", this.dataFromServer);
    }),
      error => {
        this.isLoading = false;
        console.log(error);
      };
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
        size: 'small',
        color: 'gold',
        shape: 'pill',
        label: 'checkout'
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
    this.usersService.validetranspremium(this.order_id).subscribe(response => {
      if(response.status === 0){
        console.log("achat reussis");
      }else{
        console.log("achat rater");
      }
    });
  }

  passerPremium(){
  }




}
