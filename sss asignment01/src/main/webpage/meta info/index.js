/**
 * Created by praneethjayawickrama on 10/7/17.
 */


<%@page contentType="text/html" pageEncoding="UTF-8"%>
    <!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Login</title>
    </head>
     <body>
      <form action="cookie" method="post">
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
    <table align="center">
    <tr>
    <td>
    Username:
    </td>
     <td>
    <input type="text" name="username">
    </td>
    </tr>
    <tr>
    <td>
    Password:
    </td>
    <td>
    <input type="password" name="password" value="">
    </td>
    </tr>
    <tr>
    </tr>
    <tr>
    </tr>
    <tr>
    <td>
    <input type="checkbox" value=sfTrue name="secf"> Secure Flag
    </td>
    <td>
    <input type="checkbox" value="hofTrue" name="hof"> http Only Flag
    </td>
    </tr>
    <tr>
    <td>
    <input type="Submit" value="Login">
    </td>
    </tr>
    </table>
    </form>
    </body>
    </html>

