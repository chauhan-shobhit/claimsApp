# claimsApp

Claims Application built using :

Language : Javascript

Runtime  : Nodejs

Front-end  : ReactJs

Backend  : Express

Database : Mongo DB 

Object Document Mapper (ODM) : Mongoose

Authentication : Passport 
                 passport-jwt is the authentication strategy used for authenticating users using jwt token  

json-rules-engine : Simple json rules engine is used for auto-approval of claims which pass all the eligibility criteria. 




Application can register a user.

A registered user can login using own credentials which are authenticated using jwt tokens.

A user is attached to a policy and claims are submitted against a policy.

User can submit claims and track it progress.

If a claim meet certain criteria, it can be auto-approved. This is accomplished by running the claim through rules engine (json-rules-engine).



Swagger url : {Base URL}/api-docs/ (http://localhost:1221/api-docs/)

APIs:
Claim APIs
![name-of-you-image](https://github.com/chauhan-shobhit/claimsApp/blob/main/Screens/s1.png?raw=true)
![name-of-you-image](https://github.com/chauhan-shobhit/claimsApp/blob/main/Screens/s2.png?raw=true)

Policy APIs
![name-of-you-image](https://github.com/chauhan-shobhit/claimsApp/blob/main/Screens/s3.jpg?raw=true)

User APIs
![name-of-you-image](https://github.com/chauhan-shobhit/claimsApp/blob/main/Screens/s4.jpg?raw=true)


Home Page 

![name-of-you-image](https://github.com/chauhan-shobhit/claimsApp/blob/main/Screens/HomePage.jpg?raw=true)

Registration Page 

![name-of-you-image](https://github.com/chauhan-shobhit/claimsApp/blob/main/Screens/SignUp.jpg?raw=true)

Login Page

![name-of-you-image](https://github.com/chauhan-shobhit/claimsApp/blob/main/Screens/Login.jpg?raw=true)


Claim page

![name-of-you-image](https://github.com/chauhan-shobhit/claimsApp/blob/main/Screens/Claim.jpg?raw=true)

Claim Status 

![name-of-you-image](https://github.com/chauhan-shobhit/claimsApp/blob/main/Screens/ClaimStatus.jpg?raw=true)




