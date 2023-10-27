import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { Dashboard } from './src/screens/Dashboard';


export default function App() {
  return (
    <NativeBaseProvider>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#333' }}>
        <Dashboard />
      </View>
    </NativeBaseProvider>
  );
}


// interface Pergunta {
//   id: number;
//   pergunta: string;
//   resposta: string;
//   dicas: {
//     dica1: string;
//     dica2: string;
//     dica3: string;
//   };
// }

// const App: React.FC = () => {
//   const [perguntaAleatoria, setPerguntaAleatoria] = useState<Pergunta | null>(null);

//   const gerarPerguntaAleatoria = () => {
//     const indiceAleatorio = Math.floor(Math.random() * perguntas.length);
//     const perguntaSelecionada = perguntas[indiceAleatorio];
//     setPerguntaAleatoria(perguntaSelecionada);
//   };

//   useEffect(() => {
//     gerarPerguntaAleatoria();
//   }, []);

//   return (
//     <View>
//       <Text>Pergunta Aleatória do JSON:</Text>
//       {perguntaAleatoria && (
//         <View key={perguntaAleatoria.id}>
//           <Text>{perguntaAleatoria.pergunta}</Text>
//           <Text>Resposta: {perguntaAleatoria.resposta}</Text>
//           <Text>Dica 1: {perguntaAleatoria.dicas.dica1}</Text>
//           <Text>Dica 2: {perguntaAleatoria.dicas.dica2}</Text>
//           <Text>Dica 3: {perguntaAleatoria.dicas.dica3}</Text>
//         </View>
//       )}
//       <Button title="Nova Pergunta Aleatória" onPress={gerarPerguntaAleatoria} />
//     </View>
//   );
// };

// export default App;
