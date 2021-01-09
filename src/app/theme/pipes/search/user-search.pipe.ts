import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'UserSearchPipe', pure: false })
export class UserSearchPipe implements PipeTransform {
  transform(value, args?): Array<any> {
    let searchText = new RegExp(args, 'ig');
    //console.log(value)
    if (value) {
      if (value.length) {
        return value.filter(user => {
          if (user.Staff_Name) {
            return user.Staff_Name.search(searchText) !== -1;
          }
          else{
            return user.Staff_Surname.search(searchText) !== -1;
          }
        });
      }
    }
  }
}