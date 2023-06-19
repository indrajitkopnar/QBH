import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  books: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Define the CORS headers
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      }),
    };

    // Fetch book data from backend API
    this.http
      .get<any[]>('http://localhost:3000/books', httpOptions)
      .subscribe((data) => {
        console.log(data); // Add this line to check the received data
        this.books = data;
        this.fetchAuthorData(); // Call the method to fetch author data
      });
  }

  fetchAuthorData() {
    // Define the CORS headers
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      }),
    };

    // Fetch author data from backend API
    this.http
      .get<any[]>('http://localhost:3000/authors', httpOptions)
      .subscribe((data) => {
        console.log(data); // Add this line to check the received data

        // Merge the author data with the corresponding books
        this.books.forEach((book, index) => {
          const authorId = book.author;
          const author = data.find((author) => author._id === authorId);
          if (author) {
            this.books[index].Author = author;
          }
        });
      });
  }
}
