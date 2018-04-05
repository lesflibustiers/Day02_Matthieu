var bodyElement = document.getElementById("content"); //On récupère les éléments centraux
bodyElement.style.visibility = "hidden"; //On cache les éléments centraux

function hideBeforeClick() //Fonction qui révèle les objets centraux
{
	var buttonHideShow = document.getElementById("divButtonHideShow"); //On récupère le bouton

	buttonHideShow.parentNode.removeChild(buttonHideShow); //On retire le bouton 
	bodyElement.style.visibility = "visible"; //On rend visible les éléments centraux
}

function googleSearch() //Fonction qui fait les recherches google
{
	var search = document.getElementById("inputSearch"); //On récupère la zone de recherche
	var searchTable = search.value.split(" "); //On transforme la recherche en tableau que l'on sépare par les espaces
	var outputSearch = "https://www.google.fr/#q="; //On crée une var contenant l'url google obligatoire
	for (var i = 0; i < searchTable.length; i++) //On ajoute 1 à 1 les éléments dans outputSearch
	{
		outputSearch += searchTable[i]; //On ajoute l'élément à outputSearch
		(i+1 < searchTable.length)?outputSearch += "+": console.log("nothing"); //On vérifie si ce n'est pas le dernier rajout
	}
	window.open(outputSearch, "_self"); //On ouvre dans la même page le nouvel url
}

setTimeout(function() //Fonction qui met le pop-up
{
	window.alert("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please"); //Fait apparaitre une fenetre
},10000)
