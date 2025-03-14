import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutors',
  templateUrl: './tutors.page.html',
  styleUrls: ['./tutors.page.scss'],
})
export class TutorsPage implements OnInit {
  import { Injectable } from '@angular/core';
  import { HttpClient, HttpErrorResponse } from '@angular/common/http';
  import { Observable, throwError } from 'rxjs';
  import { catchError } from 'rxjs/operators';
  
  interface Tutor {
    id: number;
    name: string;
    speciality: string;
  }
  
  @Injectable({
    providedIn: 'root'
  })
  export class TutorService {
    private apiUrl = 'TU_URL_DE_API/tutors'; // Reemplaza con la URL de tu API
  
    constructor(private http: HttpClient) { }
  
    getTutors(): Observable<Tutor[]> {
      return this.http.get<Tutor[]>(this.apiUrl).pipe(
        catchError(this.handleError)
      );
    }
  
    private handleError(error: HttpErrorResponse) {
      let errorMessage = 'Ocurrió un error desconocido';
      if (error.error instanceof ErrorEvent) {
        // Error del lado del cliente
        errorMessage = `Error: ${error.error.message}`;
      } else {
        // Error del lado del servidor
        errorMessage = `Código de error: ${error.status}\nMensaje: ${error.message}`;
      }
      console.error(errorMessage);
      return throwError(errorMessage);
    }
  }

  import { Injectable } from '@angular/core';
  import { HttpClient, HttpErrorResponse } from '@angular/common/http';
  import { Observable, throwError } from 'rxjs';
  import { catchError } from 'rxjs/operators';
  
  interface User {
    id: number;
    name: string;
    email: string;
  }
  
  @Injectable({
    providedIn: 'root'
  })
  export class UserService {
    private apiUrl = 'TU_URL_DE_API/users'; // Reemplaza con la URL de tu API
  
    constructor(private http: HttpClient) { }
  
    getUsers(): Observable<User[]> {
      return this.http.get<User[]>(this.apiUrl).pipe(
        catchError(this.handleError)
      );
    }
  
    private handleError(error: HttpErrorResponse) {
      let errorMessage = 'Ocurrió un error desconocido';
      if (error.error instanceof ErrorEvent) {
        // Error del lado del cliente
        errorMessage = `Error: ${error.error.message}`;
      } else {
        // Error del lado del servidor
        errorMessage = `Código de error: ${error.status}\nMensaje: ${error.message}`;
      }
      console.error(errorMessage);
      return throwError(errorMessage);
    }
  }
  import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface Booking {
  id: number;
  userId: number;
  tutorId: number;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private apiUrl = 'TU_URL_DE_API/bookings'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) { }

  getBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Ocurrió un error desconocido';
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Error del lado del servidor
      errorMessage = `Código de error: ${error.status}\nMensaje: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
  constructor() { }

  ngOnInit() {
  }

}
