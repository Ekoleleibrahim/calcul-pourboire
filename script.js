var montant = document.getElementById('montant'),
    pourcentage = document.getElementById('pourboire'),
    btnCalcul = document.getElementById('calcul'); 
var divResult = document.createElement('div');
divResult.id = 'divResult';
document.querySelector('form').appendChild(divResult);

// Calcul du pouboire
var calculPourboire = function(nMontant, pourc) {
    pourc = parseFloat('0.' + pourc);
    nMontant = parseInt(nMontant);

    // Prix du pourboire et Total
    var pourboire =  nMontant * pourc;
    var total = nMontant + pourboire;
   
    return divResult.innerHTML = 'Total: ' + parseFloat(total);
}

// Erreur champs
function errorFields(fieldMontant, fieldPourcentage) {
    
    // Renvoyer un message d'erreur lorsque les champs de saisie sont vides ou incorrects
    if (!/^\d+/.test(fieldMontant.value) && !/\d+/.test(fieldPourcentage.value)) {
        fieldMontant.setAttribute('class', 'incorrect');
        fieldPourcentage.setAttribute('class', 'incorrect');
    }

    else if (!/^\d+/.test(fieldMontant.value)) {
        fieldMontant.setAttribute('class', 'incorrect');
    } 

    else if (!/\d+/.test(fieldPourcentage.value)) {
        fieldPourcentage.setAttribute('class', 'incorrect');
    }

    else {
        montant.removeAttribute('class', 'incorrect');
        pourcentage.removeAttribute('class', 'incorrect');
        calculPourboire(montant.value, pourcentage.value);
    }
}

// Supprimer les erreurs des champs
function deleteErrorsFields(fieldMontant, fieldPourcentage) {

    fieldMontant.addEventListener("input", function(e) {

        if (/\d+/.test(fieldMontant.value)) {
            e.target.removeAttribute('class', 'incorrect');
        } 

        else {
            e.target.setAttribute('class', 'incorrect');
            divResult.innerHTML = '';
        }

    }, false);

    fieldPourcentage.addEventListener("input", function(e) {

        if (/\d+/.test(fieldPourcentage.value)) {
            e.target.removeAttribute('class', 'incorrect');
        } 
        
        else {
            e.target.setAttribute('class', 'incorrect');
            divResult.innerHTML = '';
        }

    }, false);
}
deleteErrorsFields(montant, pourcentage);

btnCalcul.addEventListener("click", function() {

    errorFields(montant, pourcentage);

}, false);