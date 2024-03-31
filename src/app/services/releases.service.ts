import { Injectable } from '@angular/core';
import { Firestore, collection, getDoc, addDoc } from '@angular/fire/firestore';
import { collectionData, doc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Release } from '@models/release.model';

@Injectable({
  providedIn: 'root'
})
export class ReleasesService {

  constructor(
    private firestore: Firestore,
    private router: Router
    ) { }

  getReleases(): Observable<Release[]> {
    const releaseRef = collection(this.firestore, 'releases');
    return collectionData(releaseRef, { idField: 'id' }) as Observable<Release[]>;
  }

  async getReleaseById(id: string): Promise<Release> {
    const releaseDocRef = doc(this.firestore, `releases/${id}`);
    return getDoc(releaseDocRef).then(docSnap => {
      if (docSnap.exists()) {
        return { id, ...docSnap.data() } as Release;
      } else {
        throw new Error('El release no existe.');
      }
    });
  }

  postRelease(release: Release) {
    const releaseRef = collection(this.firestore, 'releases');
    return addDoc(releaseRef, release);
  }

  async patchRelease(id: string, data: Partial<Release>) {
    const releaseDocRef = doc(this.firestore, `releases/${id}`);
    return updateDoc(releaseDocRef, data);
  }

  deleteRelease(release: Release) {
    const releaseDocRef = doc(this.firestore, `releases/${release.id}`);
    return deleteDoc(releaseDocRef);
  }
}
