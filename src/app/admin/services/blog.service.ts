import { Injectable } from "@angular/core";
import { Firestore, addDoc, collection, collectionData, serverTimestamp } from "@angular/fire/firestore";
import { Blog } from "../models/blog";


@Injectable({
    providedIn: "root"
})

export class BlogService {
    constructor(private fireStore : Firestore) {}

    addBlog(blog : Blog) {
        const collectionInstance = collection(this.fireStore, 'blogs');
        const blogWithDate = { ...blog, date: serverTimestamp() }; 
        return addDoc(collectionInstance, blogWithDate);
    }

    getBlog() {
        const collectionInstance = collection(this.fireStore, 'blogs');
        return collectionData(collectionInstance);
        //return collectionData(collectionInstance, {idField : 'id'});
    }
}