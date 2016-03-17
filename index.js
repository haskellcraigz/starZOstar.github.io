
function kosbie_face_event_handler(){
	alert("ouch")
}

function on_doc_ready(){
	$( ".post" ).click( kosbie_face_event_handler )
}

$(document).ready(on_doc_ready)