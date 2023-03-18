export function  getUserDataRequest(page: number, size: number) {
    return fetch(
      `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${page}/${size}`
    ).then((response) => response.json());
  }
  
  export function getUserFrindsList( userId: number, page: number, size:number ) {
    return fetch(
      `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${userId}/friends/${page}/${size}`
    ).then((response) => response.json());
  }
  
  export function getSingleUserInfo( userId: number) {
    return fetch(
      `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${userId}`
    ).then((response) => response.json())
  }