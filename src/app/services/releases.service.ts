import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, 
  doc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Release } from '@models/release.model';

@Injectable({
  providedIn: 'root'
})
export class ReleasesService {

  constructor(private firestore: Firestore) { }

  getReleases(): Observable<Release[]> {
    const releaseRef = collection(this.firestore, 'releases');
    return collectionData(releaseRef, { idField: 'id' }) as Observable<Release[]>;
  }

  postRelease(release: Release) {
    const releaseRef = collection(this.firestore, 'releases');
    return addDoc(releaseRef, release);
  }

  deleteRelease(release: Release) {
    const releaseDocRef = doc(this.firestore, `releases/${release.id}`);
    return deleteDoc(releaseDocRef);
  }
}
