import { http, HttpResponse, rest } from "msw";

export const handlers = [
  // Intercept "GET" requests...
  http.get(
    "https://dummyjson.com/users?limit=20&select=id,firstName,lastName,gender,email,phone,age",
    () => {
      // ...and respond to them using this JSON response.
      return HttpResponse.json(
        {users: [ {
          id: 1,
          firstName: "Emily",
          lastName: "Johnson",
          age: 28,
          gender: "female",
          email: "emily.johnson@x.dummyjson.com",
          phone: "+81 965-431-3024",
          
        },
        {
          id: 2,
          firstName: "Ekundayo",
          lastName: "Samuel",
          age: 30,
          gender: "male",
          email: "emily.johnson@x.dummyjson.com",
          phone: "+81 965-431-3024",
          
        },
        {
          id: 3,
          firstName: "Ogala",
          lastName: "Thomas",
          age: 28,
          gender: "male",
          email: "emily.johnson@x.dummyjson.com",
          phone: "+81 965-431-3024",
          
        }]}
      )
    } 
  
  )
];
