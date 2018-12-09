window.onload = function () {

    var nowyElement = document.createElement('li');
    var nowyWezelTekstowy = document.createTextNode('Element trzy');

    nowyElement.appendChild(nowyWezelTekstowy);
    document.getElementById('lista').appendChild(nowyElement);


    var element1 = document.getElementById('element');
    var elementNadrzedny = document.getElementById('lista');
    elementNadrzedny.removeChild(element1);



    document.getElementById('doUkrycia').setAttribute('hidden', true);
    document.getElementById('ukryty').removeAttribute('hidden');



};

