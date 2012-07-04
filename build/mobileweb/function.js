var indice = 0;
var listaValoresA = [];
var listaValoresB = [];
var fumante = stcFumante.value;
var colesterol = pckColesterol.getSelectedRow(0);
var idade = pckIdade.getSelectedRow(0);
var pa = pckPA.getSelectedRow(0);

if ( colesterol.id == 1 ) {
	indice = 4;
} if ( colesterol.id == 2 ) {
	indice = 3;
} if ( colesterol.id == 3 ) {
	indice = 2;
} if ( colesterol.id == 4 ) {
	indice = 1;
} if ( colesterol.id == 5 ) {
	indice = 0;
}

if ( sexo == 1 ){

	if ( idade.id == 1 ){
		if ( fumante ){
			if ( pa.id == 1 ){
				listaValoresA = ['0', '0', '0', '1', '1'];
				listaValoresB = ['0', '0', '0', '0', '0'];
			} if ( pa.id == 2 ){
				listaValoresA = ['0', '0', '0', '0', '0'];
				listaValoresB = ['0', '0', '0', '0', '0'];
			} if ( pa.id == 3 ){
				listaValoresA = ['0', '0', '0', '0', '0'];
				listaValoresB = ['0', '0', '0', '0', '0'];
			} if ( pa.id == 4 ){
				listaValoresA = ['0', '0', '0', '0', '0'];
				listaValoresB = ['0', '0', '0', '0', '0'];
			}
		}
		
		if ( !fumante ){
			if ( pa.id == 1 ){
				listaValoresA = ['0', '0', '0', '0', '0'];
				listaValoresB = ['0', '0', '0', '0', '0'];
			} if ( pa.id == 2 ){
				listaValoresA = ['0', '0', '0', '0', '0'];
				listaValoresB = ['0', '0', '0', '0', '0'];
			} if ( pa.id == 3 ){
				listaValoresA = ['0', '0', '0', '0', '0'];
				listaValoresB = ['0', '0', '0', '0', '0'];
			} if ( pa.id == 4 ){
				listaValoresA = ['0', '0', '0', '0', '0'];
				listaValoresB = ['0', '0', '0', '0', '0'];
			}
		}
	}
	
	if ( idade.id == 2 ){
		if ( fumante ){
			if ( pa.id == 1 ){
				listaValoresA = ['2', '2', '3', '3', '4'];
				listaValoresB = ['1', '1', '2', '2', '2'];
			} if ( pa.id == 2 ){
				listaValoresA = ['1', '2', '2', '2', '3'];
				listaValoresB = ['1', '1', '1', '1', '1'];
			} if ( pa.id == 3 ){
				listaValoresA = ['1', '1', '1', '1', '2'];
				listaValoresB = ['1', '1', '1', '1', '1'];
			} if ( pa.id == 4 ){
				listaValoresA = ['1', '1', '1', '1', '1'];
				listaValoresB = ['0', '0', '0', '1', '1'];
			}
		}
		
		if ( !fumante ){
			if ( pa.id == 1 ){
				listaValoresA = ['1', '1', '1', '2', '2'];
				listaValoresB = ['1', '1', '1', '1', '1'];
			} if ( pa.id == 2 ){
				listaValoresA = ['1', '1', '1', '1', '1'];
				listaValoresB = ['0', '0', '1', '1', '1'];
			} if ( pa.id == 3 ){
				listaValoresA = ['0', '1', '1', '1', '1'];
				listaValoresB = ['0', '0', '0', '0', '0'];
			} if ( pa.id == 4 ){
				listaValoresA = ['0', '0', '1', '1', '1'];
				listaValoresB = ['0', '0', '0', '0', '0'];
			}
		}
	}
	
	if ( idade.id == 3 ){
		if ( fumante ){
			if ( pa.id == 1 ){
				listaValoresA = ['4', '5', '5', '6', '7'];
				listaValoresB = ['3', '3', '3', '4', '4'];
			} if ( pa.id == 2 ){
				listaValoresA = ['3', '3', '4', '4', '5'];
				listaValoresB = ['2', '2', '2', '3', '3'];
			} if ( pa.id == 3 ){
				listaValoresA = ['2', '2', '2', '3', '3'];
				listaValoresB = ['1', '1', '1', '2', '2'];
			} if ( pa.id == 4 ){
				listaValoresA = ['1', '1', '2', '2', '2'];
				listaValoresB = ['1', '1', '1', '1', '1'];
			}
		}
		
		if ( !fumante ){
			if ( pa.id == 1 ){
				listaValoresA = ['2', '2', '3', '3', '4'];
				listaValoresB = ['1', '1', '2', '2', '2'];
			} if ( pa.id == 2 ){
				listaValoresA = ['1', '2', '2', '2', '3'];
				listaValoresB = ['1', '1', '1', '1', '1'];
			} if ( pa.id == 3 ){
				listaValoresA = ['1', '1', '1', '1', '2'];
				listaValoresB = ['1', '1', '1', '1', '1'];
			} if ( pa.id == 4 ){
				listaValoresA = ['1', '1', '1', '1', '1'];
				listaValoresB = ['0', '0', '1', '1', '1'];
			}
		}
	}
	
	if ( idade.id == 4 ){
		if ( fumante ){
			if ( pa.id == 1 ){
				listaValoresA = ['8', '9', '10', '11', '13'];
				listaValoresB = ['5', '5', '6', '7', '8'];
			} if ( pa.id == 2 ){
				listaValoresA = ['5', '6', '7', '8', '9'];
				listaValoresB = ['3', '4', '4', '5', '5'];
			} if ( pa.id == 3 ){
				listaValoresA = ['3', '4', '5', '5', '6'];
				listaValoresB = ['2', '2', '3', '3', '4'];
			} if ( pa.id == 4 ){
				listaValoresA = ['2', '3', '3', '4', '4'];
				listaValoresB = ['1', '2', '2', '2', '3'];
			}
		}
		
		if ( !fumante ){
			if ( pa.id == 1 ){
				listaValoresA = ['2', '3', '3', '4', '4'];
				listaValoresB = ['1', '2', '2', '2', '3'];
			} if ( pa.id == 2 ){
				listaValoresA = ['3', '3', '3', '4', '5'];
				listaValoresB = ['2', '2', '2', '2', '3'];
			} if ( pa.id == 3 ){
				listaValoresA = ['2', '2', '2', '3', '3'];
				listaValoresB = ['1', '1', '1', '2', '2'];
			} if ( pa.id == 4 ){
				listaValoresA = ['1', '1', '2', '2', '2'];
				listaValoresB = ['1', '1', '1', '1', '1'];
			}
		}
	}
	
	if ( idade.id == 5 ){
		if ( fumante ){
			if ( pa.id == 1 ){
				listaValoresA = ['13', '15', '17', '19', '22'];
				listaValoresB = ['9', '9', '11', '12', '14'];
			} if ( pa.id == 2 ){
				listaValoresA = ['9', '10', '12', '13', '16'];
				listaValoresB = ['6', '6', '7', '8', '10'];
			} if ( pa.id == 3 ){
				listaValoresA = ['6', '7', '8', '9', '11'];
				listaValoresB = ['4', '4', '5', '6', '7'];
			} if ( pa.id == 4 ){
				listaValoresA = ['4', '5', '5', '6', '7'];
				listaValoresB = ['3', '3', '3', '4', '4'];
			}
		}
		
		if ( !fumante ){
			if ( pa.id == 1 ){
				listaValoresA = ['7', '8', '9', '10', '12'];
				listaValoresB = ['4', '5', '6', '6', '7'];
			} if ( pa.id == 2 ){
				listaValoresA = ['5', '5', '6', '7', '8'];
				listaValoresB = ['3', '3', '4', '4', '5'];
			} if ( pa.id == 3 ){
				listaValoresA = ['3', '3', '4', '5', '6'];
				listaValoresB = ['2', '2', '2', '3', '3'];
			} if ( pa.id == 4 ){
				listaValoresA = ['2', '2', '3', '3', '4'];
				listaValoresB = ['1', '1', '2', '2', '2'];
			}
		}
	}
	
}

// MASCULINO
if ( sexo == 2 ){

	if ( idade.id == 1 ){
		if ( fumante ){
			if ( pa.id == 1 ){
				listaValoresA = ['2', '2', '3', '3', '4'];
				listaValoresB = ['1', '1', '1', '2', '2'];
			} if ( pa.id == 2 ){
				listaValoresA = ['1', '2', '2', '2', '3'];
				listaValoresB = ['1', '1', '1', '1', '1'];
			} if ( pa.id == 3 ){
				listaValoresA = ['1', '1', '1', '2', '2'];
				listaValoresB = ['0', '1', '1', '1', '1'];
			} if ( pa.id == 4 ){
				listaValoresA = ['1', '1', '1', '1', '1'];
				listaValoresB = ['0', '0', '0', '1', '1'];
			}
		}
		
		if ( !fumante ){
			if ( pa.id == 1 ){
				listaValoresA = ['1', '1', '1', '2', '2'];
				listaValoresB = ['0', '1', '1', '1', '1'];
			} if ( pa.id == 2 ){
				listaValoresA = ['1', '1', '1', '1', '1'];
				listaValoresB = ['0', '0', '0', '1', '1'];
			} if ( pa.id == 3 ){
				listaValoresA = ['0', '1', '1', '1', '1'];
				listaValoresB = ['0', '0', '0', '0', '0'];
			} if ( pa.id == 4 ){
				listaValoresA = ['0', '0', '1', '1', '1'];
				listaValoresB = ['0', '0', '0', '0', '0'];
			}
		}
	}
	
	if ( idade.id == 2 ){
		if ( fumante ){
			if ( pa.id == 1 ){
				listaValoresA = ['7', '8', '10', '12', '14'];
				listaValoresB = ['4', '4', '5', '6', '7'];
			} if ( pa.id == 2 ){
				listaValoresA = ['5', '6', '7', '8', '10'];
				listaValoresB = ['2', '3', '3', '4', '5'];
			} if ( pa.id == 3 ){
				listaValoresA = ['3', '4', '5', '6', '7'];
				listaValoresB = ['2', '2', '2', '3', '3'];
			} if ( pa.id == 4 ){
				listaValoresA = ['2', '3', '3', '4', '5'];
				listaValoresB = ['1', '1', '2', '2', '2'];
			}
		}
		
		if ( !fumante ){
			if ( pa.id == 1 ){
				listaValoresA = ['4', '4', '5', '6', '7'];
				listaValoresB = ['2', '2', '3', '3', '4'];
			} if ( pa.id == 2 ){
				listaValoresA = ['2', '3', '3', '4', '5'];
				listaValoresB = ['1', '1', '2', '2', '2'];
			} if ( pa.id == 3 ){
				listaValoresA = ['2', '2', '2', '3', '3'];
				listaValoresB = ['1', '1', '1', '1', '2'];
			} if ( pa.id == 4 ){
				listaValoresA = ['1', '1', '2', '2', '2'];
				listaValoresB = ['1', '1', '1', '1', '1'];
			}
		}
	}
	
	if ( idade.id == 3 ){
		if ( fumante ){
			if ( pa.id == 1 ){
				listaValoresA = ['12', '13', '16', '19', '22'];
				listaValoresB = ['6', '7', '8', '10', '12'];
			} if ( pa.id == 2 ){
				listaValoresA = ['8', '9', '11', '13', '16'];
				listaValoresB = ['4', '5', '6', '7', '8'];
			} if ( pa.id == 3 ){
				listaValoresA = ['5', '6', '8', '9', '11'];
				listaValoresB = ['3', '3', '4', '5', '6'];
			} if ( pa.id == 4 ){
				listaValoresA = ['4', '4', '5', '6', '8'];
				listaValoresB = ['2', '2', '3', '3', '4'];
			}
		}
		
		if ( !fumante ){
			if ( pa.id == 1 ){
				listaValoresA = ['6', '7', '8', '10', '12'];
				listaValoresB = ['3', '4', '4', '5', '6'];
			} if ( pa.id == 2 ){
				listaValoresA = ['4', '5', '6', '7', '8'];
				listaValoresB = ['2', '2', '3', '3', '4'];
			} if ( pa.id == 3 ){
				listaValoresA = ['3', '3', '4', '5', '6'];
				listaValoresB = ['1', '2', '2', '2', '3'];
			} if ( pa.id == 4 ){
				listaValoresA = ['2', '2', '3', '3', '4'];
				listaValoresB = ['1', '1', '1', '1', '1'];
			}
		}
	}
	
	if ( idade.id == 4 ){
		if ( fumante ){
			if ( pa.id == 1 ){
				listaValoresA = ['18', '21', '24', '28', '33'];
				listaValoresB = ['10', '11', '13', '15', '18'];
			} if ( pa.id == 2 ){
				listaValoresA = ['12', '14', '17', '20', '24'];
				listaValoresB = ['7', '8', '9', '11', '13'];
			} if ( pa.id == 3 ){
				listaValoresA = ['8', '10', '12', '14', '17'];
				listaValoresB = ['5', '5', '6', '7', '9'];
			} if ( pa.id == 4 ){
				listaValoresA = ['6', '7', '8', '10', '12'];
				listaValoresB = ['3', '4', '4', '5', '6'];
			}
		}
		
		if ( !fumante ){
			if ( pa.id == 1 ){
				listaValoresA = ['9', '11', '13', '15', '18'];
				listaValoresB = ['5', '6', '7', '8', '9'];
			} if ( pa.id == 2 ){
				listaValoresA = ['6', '7', '9', '10', '12'];
				listaValoresB = ['3', '4', '5', '5', '6'];
			} if ( pa.id == 3 ){
				listaValoresA = ['4', '5', '6', '7', '9'];
				listaValoresB = ['2', '3', '3', '4', '4'];
			} if ( pa.id == 4 ){
				listaValoresA = ['3', '3', '4', '5', '6'];
				listaValoresB = ['2', '2', '2', '3', '3'];
			}
		}
	}
	
	if ( idade.id == 5 ){
		if ( fumante ){
			if ( pa.id == 1 ){
				listaValoresA = ['26', '30', '35', '41', '47'];
				listaValoresB = ['15', '17', '20', '23', '26'];
			} if ( pa.id == 2 ){
				listaValoresA = ['18', '21', '25', '29', '34'];
				listaValoresB = ['10', '12', '14', '16', '19'];
			} if ( pa.id == 3 ){
				listaValoresA = ['13', '15', '17', '20', '24'];
				listaValoresB = ['7', '8', '9', '11', '13'];
			} if ( pa.id == 4 ){
				listaValoresA = ['9', '10', '12', '14', '17'];
				listaValoresB = ['5', '5', '6', '8', '9'];
			}
		}
		
		if ( !fumante ){
			if ( pa.id == 1 ){
				listaValoresA = ['14', '16', '19', '22', '26'];
				listaValoresB = ['8', '9', '10', '12', '14'];
			} if ( pa.id == 2 ){
				listaValoresA = ['9', '11', '13', '15', '16'];
				listaValoresB = ['5', '6', '7', '8', '10'];
			} if ( pa.id == 3 ){
				listaValoresA = ['6', '8', '9', '11', '13'];
				listaValoresB = ['4', '4', '5', '6', '7'];
			} if ( pa.id == 4 ){
				listaValoresA = ['4', '5', '6', '7', '9'];
				listaValoresB = ['2', '3', '3', '4', '5'];
			}
		}
	}
	
}
	
alert('Alto Risco: ' + listaValoresA[indice] + '% - Baixo Risco: ' + listaValoresB[indice] + '%');