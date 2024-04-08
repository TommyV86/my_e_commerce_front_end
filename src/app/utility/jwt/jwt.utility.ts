import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class JwtUtility {

  public decodeToken(token: string): string {
    return jwt_decode.jwtDecode(token);
  }
}