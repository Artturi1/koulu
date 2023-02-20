<?php
// ------------------------------------------------------------ 
 
header('Content-Type: text/html; charset=UTF-8');
 
mb_internal_encoding('UTF-8'); 
mb_http_output('UTF-8'); 
mb_http_input('UTF-8'); 
mb_regex_encoding('UTF-8'); 
 
// ------------------------------------------------------------ 
?>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Veikkaustililtä pankkitilille</title>
</head>
<body>
<?php
//haetaan tiedot lomakkeen kentistä
$nimi = htmlspecialchars($_POST["nimi"]);
$tnro = htmlspecialchars($_POST["tnro"]);
$maara = htmlspecialchars($_POST["maara"]);
 
print("<h1>Tilisiirron tiedot</h1>");
print("Nimi: ");
print($nimi);
print("<br>");
print("Tilinumero: ");
print($tnro);
print("<br>");
print("Määrä: ");
print($maara);
print("<p>");
 
?>
<a href="index.html">Takaisin lomakkeelle</a>
</body>
</html>