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

