import { Injectable } from "@angular/core";
import { Firestore, addDoc, collection, collectionData, doc, getDoc, updateDoc } from "@angular/fire/firestore";
import { Product } from "../models/product";

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    constructor(private fireStore : Firestore) {}

    addProduct(products : Product) {
        const collectionInstance = collection(this.fireStore, 'products');
        return addDoc(collectionInstance, products);
    }

    getProduct() {
        const collectionInstance = collection(this.fireStore, 'products');
        return collectionData(collectionInstance, {idField : 'id'});
    }

    getProductById(id : string) {
        const docRef = doc(this.fireStore, 'products', id);
        return getDoc(docRef);
    }

    updateProduct(id : string, newProduct : Product) {
        const docInstance = doc(this.fireStore, 'products', id);
        const updateData = {
            name: newProduct.name,
            category: newProduct.category,
            price: newProduct.price
        }
        return updateDoc(docInstance, updateData);        
    }
}