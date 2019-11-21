function xdecimal()
{
decimal = document.getElementById("decimal");
hexadecimal = document.getElementById("hexadecimal");
binaire = document.getElementById("binaire");
octal = document.getElementById("octal");

hexadecimal.value = (decimal.value-0).toString(16);
binaire.value = (decimal.value-0).toString(2);
octal.value = (decimal.value-0).toString(8);
}