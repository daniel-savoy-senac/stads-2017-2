<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page 
    contentType="text/html" 
    pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Sistema de CHAT em JSP</title>
    </head>
    <body>
        <h1>
            <c:choose>
                <c:when test="${agora.hours > 19}">Boa Noite!</c:when>
                <c:when test="${agora.hours > 15}">Boa Tarde!</c:when>
                <c:when test="${agora.hours > 11}">Bom Dia!</c:when>
                <c:when test="${agora.hours > 5}">Boa Manhã!</c:when>
                <c:otherwise>Vai dormir!!!</c:otherwise>
            </c:choose>
        <h1>
        <form action="/Autenticar" method="post">
            <label for="username">Seu Apelido</label>
            <input name="username" id="username" type="text"/>
        </form>
    </body>
</html>
