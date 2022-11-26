# Welcome to read me
## Instruction to start:   
Please run the below command            

``` docker compose   up```

It starts the following  items 

 * node server for serving API - http://localhost:8000/
 * mongo db server for storing data and running aggregates
 * mongo-express for seeing data - http://localhost:28081/    

## Schema

Below are the fields of the schema for Employee object
        
        name: String, required
        salary: Number, required
        currency: String, required
        department: String, required
        sub_department: String, required
        on_contract: String, optional

## The below API are supported

All the API are protected by an access token set as Bearer in `Authorization` header. Except the hello world

 * / - Just prints a hellow world
 * POST /api/employee - Posts a employee data as per above model.
 * DELETE /api/emplouee/:id - delete employee by id     
 * GET /api/employee/:id - gets the employee by id
 * GET /api/employee - Lists all employee in the store
 * POST /api/testdata - Loads up a predefined test data given in example
 * GET /employeeStats - Gets SS for dataset - examples below

 ## Authentication & Authorization

All the APIs need access token.
TO get access token please invoke 
 * GET /auth/accessToken - This returns a access token that is valid for 1 hour and the token can be set in bearer for authorization
    * For the routes in /auth module, a basic auth has to be provide. 
    * Please check for valid username passwords in `authentication/index.js`

## Stats API (SS)

### Below are the query params it can accept

* filter - A filter condition that can be passed on filter dataset before agreegating. It will use a equals criteria. Should be a valid fieldname.      
If it is unspecified then no filtering is applied     
  Format - `filter=<fieldname>:<fieldvalue>`   
  example format : `filter=currency:USD`    


* aggregateOn - A grouping field that can be used for grouping data while running the aggregate     
If unspeciefied - no grouping is applied and fulldataset is considered.           
Format: `aggregateOn=<fieldname>` - aggregates on a singel field          
Example : `aggregateOn=deparatment`  
Format: `aggregateOn=<fieldname1>.<fieldName2>` - aggeragates while grouping by 2 fields combinations
Example: `aggregateOn=department.currency`       

* numricfield - used to specify on which numeric field to run the SS on.        
If unspecified it is the `salary` column.         
Format :  `numericfield=<fieldname>`      
Example : `numericfield=salary`


### Below are the ways of using it.

* /api/employeeStats/ - gets mean, min, max on full dataset
* /api/employeeStats?filter=currency:USD&aggregateOn=department
    * gets SS with filter and aggregation on single column deparatment 
* /api/employeeStats?filter=currency:USD&aggregateOn=department.currency
    * Gets SS with filter params and also aggregated on 2 columns deparatment and currency
* /api/employeeStats?filter=currency:USD&aggregateOn=department.currency&numericfield=salary
    * Matches the filter criteria and also the aggregate on and also uses the numeric field of salary

### Loading test data
Please send a authenticated request to below API             
* POST /api/testdata - Loads up a predefined test data given in example        
Post with empty body and it will load up a predefined test data set. Before loading it clears all the existing data. 