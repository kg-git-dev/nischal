import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import {Validators, FormBuilder,FormGroup ,FormControl} from '@angular/forms';
import {SaveData} from '../../providers/save-data';
import { Geolocation } from 'ionic-native';



/*
  Generated class for the Detail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})

export class DetailPage {
  // myGroup = new FormGroup({
  //     firstname: new FormControl(),
  //     lastname: new FormControl(),
  //     address: new FormGroup({
  //       street: new FormControl(),
  //       zip: new FormControl(),
  //       city: new FormControl()
  //     })
  //   });
  questions = new FormGroup({
      ques1: new FormControl(),
      ques2: new FormControl(),
      ques3: new FormControl(),
      lat: new FormControl(),
      lng: new FormControl(),
      alltitude: new FormControl(),
      accuracy: new FormControl()
    });
  constructor(public navCtrl: NavController ,
              private formBuilder: FormBuilder,
              private saveData: SaveData
              ) {


  }
  save(){
    console.log("asdas ::");
    console.log(this.questions.value);
    this.saveData.add(this.questions.value);
    this.navCtrl.pop();
  }

getGPS(){
  Geolocation.getCurrentPosition().then((position) => {
    console.log( position.coords.latitude+"::::"+ position.coords.longitude+"::::"+position.coords.accuracy );
    this.questions.value.lat = position.coords.latitude;
    this.questions.value.lng = position.coords.longitude;
    this.questions.value.accuracy=position.coords.accuracy
  });

}

  ionViewDidLoad() {
    // console.log('Hello DetailPage Page');
    // this.registerForm = this.formBuilder.group({
    //   firstname: '',
    //   lastname: '',
    //   address: this.formBuilder.group({
    //     street: '',
    //     zip: '',
    //     city: ''
    //   })
    // });
    this.questions = this.formBuilder.group({
       ques1: '',
       ques2: '',
       ques3: ''

    });
  }

}
