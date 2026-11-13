import { API_BASE_URL } from '../config/constants';

// ✍️ LO PROGRAMAS TÚ (Paso 2)
//
// Contrato que la pantalla espera de esta función:
//
//   getCharacters({ page, name })  →  Promise<{ results, hasNextPage }>
//
//   - page : número de página (por defecto 1)
//   - name : texto a buscar (por defecto vacío = sin filtro)
//   - results     : arreglo de personajes
//   - hasNextPage : true si existe una página siguiente
//
// Lee las reglas completas en la GUIA_ALUMNO.md, Paso 2.

export async function getCharacters({ page = 1, name = '' } = {}) {
  // TODO Paso 2: implementa la petición HTTP y devuelve el objeto del contrato.
  const search= name.trim();
  let url = `${API_BASE_URL}/character?page=${page}`;
  if(search) {
    url+=`&name=${encodeURIComponent(search)}`;
  }
//regla 3
  const response =await fetch(url);

  //regla 4

  if(response.status===404)
  {
    return {
      results: [],  hasNextPage: false
    }
  }

  //regls 5 

  if(!response.ok)
  {
    throw new Error('No se pudo obtener la información (código `$(response.status)`. Intenta de nuevo');
  }

  //contrato de salida

  const data = await response.json();
  return {
    results: data.results,
    hasNextPage: data.info.next !== null,

  }
  
}
