# week-3-assignment-erdem-ozer

This is a basic todo app.

.env file is private so you need to create one for your keys

You need to insert these to your .env file :
- PORT=3000
- JWT_SECRET=secret

To authenticate a user send an request to this url : http://localhost:3000/userApi/post with a json body and a parameter of "username".

Then you will get your Bearer token for authentication. Take it so you can use it for other requests.

Our url is : http://localhost:3000/api/post
You can access, create, delete or update todos with this url. All you need to do is change the request method.

For authorization please select type as "Bearer Token" and insert your bearer token to Authorization parameter.

If you want to create a todo you can use a json-body like this : { "id":123, "title":"my first todo" } / method : POST
If you want to delete a todo you can use a json-body like this : { "id":123 } / method : DELETE
If you want to update a todo you can use a json-body like this : { "id":123, "title":"my updated todo" } / method : PATCH
If you want to see all todos you can just request the url with GET method without any parameters or body. / method : GET
