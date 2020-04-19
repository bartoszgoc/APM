import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

import { IProduct } from './product';

@Injectable({
  providedIn: "root"
})
export class ProductService {
  private productUrl = "api/products/products.json";

  //productsList: AngularFirestoreCollection<IProduct>;

  public dataCollection: Observable<IProduct[]>;

  constructor(private http: HttpClient,
    private firestore: AngularFirestore
  ) { }


  addProduct(product: IProduct) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("products")
        .add(product)
        .then(res => "Added new product", err => reject(err));
    });
  }

  getProductsList() {
    let vat = this.firestore.collection('products').snapshotChanges();
    console.log(vat);
    return this.firestore.collection('products').snapshotChanges();
  }

  deleteProduct(data) {
    return this.firestore
      .collection("products")
      .doc(data.payload.doc.id)
      .delete();
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}