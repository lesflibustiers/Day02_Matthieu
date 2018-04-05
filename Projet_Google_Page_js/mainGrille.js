var nbSquare = prompt("Entrez la taille de la grille",1); //On demande un nb au user
var myContent = document.getElementById("myCanvas"); //On récupère l'elt Canvas
var ctx = myContent.getContext("2d"); //On crée une zone de dessin

myContent.width = 500; //Largueur du canvas
myContent.height = 500; //Longueur du canvas

var bigSqrSize = 200; //Largueur du grand carré
var minSqrSize = bigSqrSize/nbSquare; //Largueur du petit carré

for (var i = 1 ; i <= nbSquare ; i++) //Coord Y
{
	for (var j = 1 ; j <= nbSquare ; j++) //Coord X
	{
		ctx.rect(j*minSqrSize,i*minSqrSize,minSqrSize,minSqrSize); //On donne les cara du carré
		ctx.stroke(); //On dessine le carré sur la page
	}
}
