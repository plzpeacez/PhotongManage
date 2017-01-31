import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Car} from '../../editroute/car/car';

@Injectable()
export class CarService {

    constructor(private http: Http) {}

    getCarsMedium() {
        return this.http.get('app/resources/cars.json')
                    .toPromise()
                    .then(res => <Car[]> res.json().data)
                    .then(data => { return data; });
    }
}
