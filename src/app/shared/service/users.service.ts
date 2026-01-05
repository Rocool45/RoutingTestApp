import { Injectable } from '@angular/core';
import { IUser } from '../model/users';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
 usersArr: IUser[] = [
  {
    id: 'U201',
    fname: 'Irshad',
    lname: 'Khan',
    email: 'irshad@gmail.com',
    contact: '9000011111',
    role: 'Admin',
    isActive: true,
    img: 'https://randomuser.me/api/portraits/men/11.jpg'
  },
  {
    id: 'U202',
    fname: 'Sunny',
    lname: 'Malhotra',
    email: 'sunny@gmail.com',
    contact: '9000022222',
    role: 'User',
    isActive: true,
    img: 'https://randomuser.me/api/portraits/men/12.jpg'
  },
  {
    id: 'U203',
    fname: 'Balaji',
    lname: 'Rao',
    email: 'balaji@gmail.com',
    contact: '9000033333',
    role: 'Manager',
    isActive: false,
    img: 'https://randomuser.me/api/portraits/men/13.jpg'
  },
  {
    id: 'U204',
    fname: 'Ayesha',
    lname: 'Shaikh',
    email: 'ayesha@gmail.com',
    contact: '9000044444',
    role: 'User',
    isActive: true,
    img: 'https://randomuser.me/api/portraits/women/14.jpg'
  },
  {
    id: 'U205',
    fname: 'Nikhil',
    lname: 'Jain',
    email: 'nikhil@gmail.com',
    contact: '9000055555',
    role: 'Admin',
    isActive: true,
    img: 'https://randomuser.me/api/portraits/men/15.jpg'
  },
  {
    id: 'U206',
    fname: 'Pritam',
    lname: 'Das',
    email: 'pritam@gmail.com',
    contact: '9000066666',
    role: 'User',
    isActive: false,
    img: 'https://randomuser.me/api/portraits/men/16.jpg'
  },
  {
    id: 'U207',
    fname: 'Farhan',
    lname: 'Ali',
    email: 'farhan@gmail.com',
    contact: '9000077777',
    role: 'Manager',
    isActive: true,
    img: 'https://randomuser.me/api/portraits/men/17.jpg'
  },
  {
    id: 'U208',
    fname: 'Kavya',
    lname: 'Iyer',
    email: 'kavya@gmail.com',
    contact: '9000088888',
    role: 'User',
    isActive: true,
    img: 'https://randomuser.me/api/portraits/women/18.jpg'
  },
  {
    id: 'U209',
    fname: 'Sameer',
    lname: 'Qureshi',
    email: 'sameer@gmail.com',
    contact: '9000099999',
    role: 'Admin',
    isActive: false,
    img: 'https://randomuser.me/api/portraits/men/19.jpg'
  },
  {
    id: 'U210',
    fname: 'Meghana',
    lname: 'Kulkarni',
    email: 'meghana@gmail.com',
    contact: '9000101010',
    role: 'User',
    isActive: true,
    img: 'https://randomuser.me/api/portraits/women/20.jpg'
  }
];

  constructor() { }

  FetchAllUsers():Observable<Array<IUser>>{
    return of(this.usersArr)
  }

  user(id:string):Observable<IUser>{
    return of(this.usersArr.find(u=>u.id===id)!)
  }

  AddUser(obj:IUser):Observable<IUser>{
    this.usersArr.unshift(obj)
    return of(obj)
  }

  UpdateUser(obj:IUser):Observable<IUser>{
    let getindex= this.usersArr.findIndex(u=>u.id===obj.id)
    this.usersArr[getindex] = obj
    return of(obj)
  }

  RemoveUser(id:string){
    let getindex= this.usersArr.findIndex(u=>u.id===id)
    this.usersArr.splice(getindex,1)
    return of(id)
  }
}
