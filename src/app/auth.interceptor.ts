// import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor
// } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {

// constructor() {}

// intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
//       // Get the authentication token from local storage
//       const authToken = localStorage.getItem('token');

//       // Clone the request and add the token as an Authorization header
//       if (authToken) {
//         const authReq = request.clone({
//           setHeaders: {
//             Authorization: `Bearer ${authToken}`
//           }
//         });
//         return next.handle(authReq);
//       } else {
//         // If there is no token, just pass the request through
//         return next.handle(request);
//       }
//     }

// }