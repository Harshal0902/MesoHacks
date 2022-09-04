import { ok, badRequest } from 'wix-http-functions';

export function get_multiply(request) {

   const response = {
       "headers": {
           "Content-Type": "application/json"
       }
   };

   try {

       const leftOperand = parseInt(request.query["leftOperand"], 10);
       const rightOperand = parseInt(request.query["rightOperand"], 10);

       response.body = {
           "product": leftOperand * rightOperand
       };
       return ok(response);
       
   } catch (err) {
       response.body = {
           "error": err
       };
       return badRequest(response);
   }
}
