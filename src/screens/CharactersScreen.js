import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { COLORS } from '../config/constants';
import { useState, useEffect } from 'react';
import { getCharacters } from '../services/charactersService';
import CharacterCard from '../components/CharacterCard';
import StateMessage from '../components/StateMessage';

// ✍️ LO PROGRAMAS TÚ (Pasos 3 al 10)
//
// Sigue la GUIA_ALUMNO.md. Cada TODO indica en qué paso debes trabajar
// en ese punto. Puedes borrar los comentarios TODO conforme los resuelvas.
//
// Los estilos de abajo ya están listos. Nombres disponibles:
//   container, title, input, loader, separator, listContent, footer, footerError

// TODO Paso 3: importa de 'react' lo que necesites y trae getCharacters del servicio.
// TODO Paso 5: importa lo que falte de 'react-native' y el componente CharacterCard.
const Separator = () => <View style={styles.separator} />;

const personajes=[];
export default function CharactersScreen() {
  // TODO Paso 3: declara los estados (personajes, carga, error).

  const [characters, setCharacters]= useState([]);
  const [loading, setLoading]=useState(true);
  const [error, setError]=useState(null);
  const [reloadKey, setReloadKey] = useState(0);

  // TODO Paso 4: primera carga de datos con useEffect.

  useEffect(()=>{
    async function loadFirstPage(){
      setLoading(true); 
      setError(null);
      try{
        const data=await getCharacters({page:1});
        setCharacters(data.results);
        console.log('Llegaron:', data.results.length);
      }
      catch(e)
      {
        setError(e.message);
      } finally{setLoading(false);

      }
    }
    loadFirstPage();
  }, [reloadKey]);
  // TODO Paso 6: estados de carga / error y reintento.
  // TODO Paso 8: paginación (estado extra + función para cargar más).
  // TODO Paso 9: pull to refresh.
  // TODO Paso 10: búsqueda con debounce.

  const handleRetry = () => setReloadKey((prev) => prev + 1);
  let content;
  if (loading) {
    content = <ActivityIndicator size="large" color={COLORS.primary} style={styles.loader} />;
  } else if (error && characters.length === 0) {
    content = <StateMessage message={error} actionLabel="Reintentar" onAction={handleRetry} />;
  } else {
    content = (
      <FlatList
        data={characters}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <CharacterCard character={item} />}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={Separator}
        ListEmptyComponent={<StateMessage message="No hay personajes que mostrar" />}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rick and Morty</Text>

      {/* TODO Paso 10: aquí va el campo de búsqueda. */}

      {/* TODO Paso 5: sustituye este texto por tu FlatList. */}
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background, paddingHorizontal: 16 },
  title: {
    color: COLORS.primary,
    fontSize: 28,
    fontWeight: '800',
    marginTop: 12,
    marginBottom: 12,
  },
  input: {
    backgroundColor: COLORS.card,
    color: COLORS.text,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 12,
  },
  loader: { marginTop: 40 },
  separator: { height: 10 },
  listContent: { paddingBottom: 24 },
  footer: { marginVertical: 16 },
  footerError: { color: COLORS.danger, textAlign: 'center', marginVertical: 16 },
  placeholder: { color: COLORS.textMuted, fontSize: 16, marginTop: 24 },
});
