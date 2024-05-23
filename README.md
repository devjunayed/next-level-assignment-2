### How to run or setup this project locally

1. First of all clone this repository using this url https://github.com/devjunayed/next-level-assignment-2.git

2. After cloning this repository you must create a .env file which will need to have following variables and values:

```js
        PORT=your_port
        DATABASE_URL=your_database_url
```
3. run the command into terminal
```bash
        npm install
```
this will install all respective packages

<mark>Now you are ready to go for further improvment</mark>

### The current endpoints of the project

<p>
<p  style="margin: 0px 20px; display: inline-block; padding: 5px 10px; font-size: 14px; color: white; background-color: #008000; text-align: center; text-decoration: none; border-radius: 5px;">POST</p>
/api/products
</p>
<p>
<p  style="margin: 0px 20px; display: inline-block; padding: 5px 10px; font-size: 14px; color: white; background-color: #008000; text-align: center; text-decoration: none; border-radius: 5px;">POST</p>
/api/orders
</p>


<br>

<p>
<p  style="margin: 0px 20px; display: inline-block; padding: 5px 10px; font-size: 14px; color: white; background-color: #9932CC; text-align: center; text-decoration: none; border-radius: 5px;">GET</p>
/api/products
</p>
<p>
<p  style="margin: 0px 20px; display: inline-block; padding: 5px 10px; font-size: 14px; color: white; background-color: #9932CC; text-align: center; text-decoration: none; border-radius: 5px;">GET</p>
/api/products/:productId
</p>
<p  style="margin: 0px 20px; display: inline-block; padding: 5px 10px; font-size: 14px; color: white; background-color: #9932CC; text-align: center; text-decoration: none; border-radius: 5px;">GET</p>
/api/products?searchTerm
</p>
<p  style="margin: 0px 20px; display: inline-block; padding: 5px 10px; font-size: 14px; color: white; background-color: #9932CC; text-align: center; text-decoration: none; border-radius: 5px;">GET</p>
/api/orders
</p>
<p  style="margin: 0px 20px; display: inline-block; padding: 5px 10px; font-size: 14px; color: white; background-color: #9932CC; text-align: center; text-decoration: none; border-radius: 5px;">GET</p>
/api/orders?email
</p>
<br>
<p  style="margin: 0px 20px; display: inline-block; padding: 5px 10px; font-size: 14px; color: white; background-color: #FFA500; text-align: center; text-decoration: none; border-radius: 5px;">PUT</p>
/api/products/:productId
</p>
<br>
<p  style="margin: 0px 20px; display: inline-block; padding: 5px 10px; font-size: 14px; color: white; background-color: #FF0000; text-align: center; text-decoration: none; border-radius: 5px;">DELETE</p>
/api/products/:productId
</p>



