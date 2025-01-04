#server >>starting certain book data
#user register
#subscriber
#This is a book record management API server / Backend for library system or management of records or manuals or book 

fine system:
user :02/01/2023 - 02/03/2023
05/03/2023 =>1 days fine is 50 so 50*3=150/-

#subscripation Types :
3 months(Basics)
6 months(standard)
12 months(Premium)
If the subscripation type is standard && if the subscripation date is 06/03/2023
=>then subscripation valid till 06/09/2023

within subscripation date >> if we miss the renewal >>50/- day
subcripation date is also been missed  >> and also missed the renewal >> 100 + 50-/ day

>> book1
>> basic
>> 06/03/2023 => subscripation date
>> 07/03/2023 => borrowed a book from library
>> book1 renewal date is on 21/03/2023
>> 23/03/2023 =>we need to pay a fine of 50*2=100/-

>> book1
>> basic
>> 06/03/2023 => subscripation date
>> 07/03/2023 => borrowed a book from library
>> book1 renewal date is on 21/03/2023
>> 23/06/2023 =>we need to pay a fine of 100+(50*no of day)

missed by renewal date >>50/-
missed by subscripation date >>100/-
missed by renewal && subscripation date >>150


# routes and Endpoints
# /users
POST :create a new user here
GET :get all the user info here 

# /users/(id)
GET : get a user by id
POST : Update a user by their ID 
DELETE :Delete a user by id(check s he/she still have an issued book) && (is there any fine to be paid)

## /users/subscripation-details/(id)
GET :get user subscripation details 
     >> date of subscripation 
     >>valid till
     >>any fine

## /books
GET : get all the books
POST  :create/Add a new book

## /books/(id)
GET :get a book by id
PUT  :Update a book by id


## /books/issued
GET :get all issued books

## /books/issued/withfine/
GET :get all issued book with their fine 

## npm init
## npm i nodemon --save-dev
## npm run dev


