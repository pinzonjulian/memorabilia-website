function actualizarPrecioSugerido(){precioBase=$("#planSugerido1").is(":checked")?plan1:$("#planSugerido2").is(":checked")?plan2:plan3}function actualizarRecordatorioInvitados(){$("#invitadosClasico").is(":checked")?(precioRecordatoriosInvitados=precioInvitadoClasico,$outputInvitados.html("Para tus invitados: Recordatorios clásicos.")):$("#invitadosSobre").is(":checked")?(precioRecordatoriosInvitados=precioInvitadoSobre,$outputInvitados.html("Para tus invitados: Tiras de fotos entregadas en un sobre personalizado.")):(precioRecordatoriosInvitados=precioInvitadoPortarretratos,$outputInvitados.html("Para tus invitados: Tiras de fotos entregadas en un portarretratos de papel."))}function actualizarRecordatorioCliente(){$("#clienteClasico").is(":checked")?(precioRecordatoriosCliente=precioClienteClasico,$outputCliente.html("Para ti: Recordatorios clásicos.")):$("#clienteCuadro").is(":checked")?(precioRecordatoriosCliente=precioClienteCuadro,$outputCliente.html("Para ti: Marco con todas las tiras de fotos colgadas.")):(precioRecordatoriosCliente=precioClienteAlbum,$outputCliente.html("Para ti: Álbum fotográfico con todas las tiras de fotos y firmas de los asistentes."))}function actualizarPrecioFinal(e,o,a,i){if(isNaN(i)||0>=i||0===i.length)$outputPrecio.html("Ingresa la cantidad de invitados para obtener el valor.");else{precioFinal=e+o*i+a;var t=Number("1.2").toLocaleString().substr(1,1),r=precioFinal.toLocaleString(),n=String(r).split(t),s=n[0],c="$ "+s;$outputPrecio.html("El precio de tu plan es: "+c+" COP.")}}$(".span-invitados").hide(),$("#plan-especial").hide(),$("#output-caracteristicas").hide(),$("#elejimosPlan").hide();var $cantidadDeInvitados=$("#cantidadDeInvitados"),$labels=$("label"),$outputPrecio=$("#precio-final"),$outputHoras=$("#output-horas"),$outputInvitados=$("#output-invitados"),$outputCliente=$("#output-cliente"),nombrePlan,plan1=65e4,plan2=77e4,plan3=84e4,precioBase=plan1,precioInvitadoClasico=0,precioInvitadoSobre=1e3,precioInvitadoPortarretratos=1200,precioRecordatoriosInvitados=precioInvitadoClasico,precioClienteClasico=0,precioClienteCuadro=11e4,precioClienteAlbum=16e4,precioRecordatoriosCliente=precioClienteClasico,precioFinal=precioBase+precioRecordatoriosInvitados*parseInt($cantidadDeInvitados.val())+precioRecordatoriosCliente;$("#cantidadDeInvitados").keypress(function(e){(10===e.keyCode||13===e.keyCode)&&e.preventDefault()}),$cantidadDeInvitados.keyup(function(){var e=parseInt($cantidadDeInvitados.val());0>=e||isNaN($cantidadDeInvitados.val())||0===$cantidadDeInvitados.val().length?($(".span-invitados").show("fast"),$outputPrecio.html("Ingresa la cantidad de invitados para obtener el valor."),$("#planSugerido1").prop("checked",!1),$("#planSugerido2").prop("checked",!1),$("#planSugerido3").prop("checked",!1),$("#output-caracteristicas").hide("fast"),$("#elejimosPlan").hide()):e>170?($(".span-invitados").hide(),$("#opciones").hide(),$("#costo-final-del-plan").hide(),$("#plan-diferente").hide(),$("#reserva").hide(),$("#plan-sugerido").hide(),$("#plan-especial").show("fast"),$("#output-caracteristicas").hide()):($(".span-invitados").hide(),$("#opciones").show(),$("#plan-especial").hide(),$("#costo-final-del-plan").show(),$("#plan-sugerido").show(),$("#plan-diferente").show(),$("#reserva").show(),$("#output-caracteristicas").show(),$("#output-caracteristicas").show(),e>0&&70>=e?(precioBase=plan1,$("#planSugerido1").prop("checked",!0),$outputHoras.html("2 horas"),nombrePlan="Plan 1"):e>70&&119>=e?(precioBase=plan2,$("#planSugerido2").prop("checked",!0),$outputHoras.html("3 horas"),nombrePlan="Plan 2"):(precioBase=plan3,$("#planSugerido3").prop("checked",!0),$outputHoras.html("4 horas"),nombrePlan="Plan 3"),$("#elejimosPlan").show("slow"),$("#elejimosPlan").html("¡Elejimos para ti el "+nombrePlan+", ideal para "+e+" invitados! Sin embargo, si quieres escoger un plan diferente, puedes hacerlo a continuación:"),actualizarPrecioFinal(precioBase,precioRecordatoriosInvitados,precioRecordatoriosCliente,parseInt($cantidadDeInvitados.val())))}),$labels.click(function(){setTimeout(actualizarRecordatorioInvitados,200),setTimeout(actualizarRecordatorioCliente,200),setTimeout(actualizarPrecioSugerido,200),setTimeout(function(){actualizarPrecioFinal(precioBase,precioRecordatoriosInvitados,precioRecordatoriosCliente,parseInt($cantidadDeInvitados.val()))},200)}),actualizarRecordatorioInvitados(),actualizarRecordatorioCliente();