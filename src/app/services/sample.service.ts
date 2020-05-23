import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {
  constructor() {
    console.log("this is a sample service!");
  }
}
