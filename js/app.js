// Clases para agregar estilos

$('#opciones-invitados input:radio').addClass('input_hidden');
$('#opciones-invitados label').click(function(){
    $(this).addClass('selected').siblings().removeClass('selected');
});

$('#opciones-cliente input:radio').addClass('input_hidden');
$('#opciones-cliente label').click(function(){
    $(this).addClass('selected').siblings().removeClass('selected');
});

// Inicio app

