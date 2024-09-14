# MongoDB Database Application
- Node, Express, and MongoDB Server Application
- CRUD API
- MongoDB indexes

## Using 
- NodeJS
- Express
- Nodemon (for dev)
- Dotenv
- MongoDB
- Mongoose

## Routes
### GET / READ
- /posts
- /posts/authors
    - search by author: /posts/authors/:authorname (ex: /posts/authors/machine)
- /posts/tags
    - search by tag /posts/tags?tag=tagName (ex: /posts/tags?tag=China)
- /routes
- /routes/airlines
- /routes?src=srcName&dst=dstName (ex: /routes?src=CEK&dst=KZN)
- /zips
    - search by zipcode /zips/:zipcode
    - search by state /zips?state=stateAbbreviation (ex: /zips?state=PA)

## Requirements 
- [X] Use three different data collections (posts, routes, zips)
- [X] Reasonable data modeling practices
- [X] GET routes for all data expressed to client using query commands
- [] POST, using insertion (at least one w/ client creation)
- [] PATCH or PUT, using update (at least one w/ client manipulation)
- [] DELETE, using delete (at least one w/ client deletion)
- [] Sensible indexes for all fields queried frequently (make comments on those with a high write to read ratio)
- [] Sensible MongoDB data validation rules for a least one data collection
- [] use Mongoose
- [] Utilize reasonable code organization practices
- [] Runs without errors
- [] Commit frequently
- [] README, includes description of avaiable routes and correspodning CRUD operations for reference
- [] Level of Effort


