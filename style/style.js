import { StyleSheet } from 'react-native';

// // Cores
const corTexto = '#1E1E1E';
const corTextoClaro = '#FFFFFF';
const corTextoCinza = '#6D6D6D';
const corPrimaria = '#017BC8';
const corSecundaria = '#DAF1FF';

// Fontes
const textoNormal = 'Montserrat_400Regular';
const textoMedio = 'Montserrat_500Medium';
const textoNegrito = 'Montserrat_700Bold';

export default StyleSheet.create({
  // Tela de Login
  loginBG: {
    height: '100%',
    padding: 35,
  },
  loginContainer: {
    justifyContent: 'center',
    marginTop: 50
  },
  logoLogin: {
    width: 300,
    height: 70,
    marginTop: 120
  },
  comentario: {
    fontSize: 15,
    fontFamily: textoNormal,
    color: corTextoCinza,
    marginTop: 30,
    marginBottom: 40
  },
  negrito: {
   fontFamily: textoNegrito 
  },
  texto: {
    color: corTexto,
    fontFamily: textoMedio
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: '#b9b9b9ff',
    color: corTextoCinza,
    fontFamily: textoNormal
  },
  botao : {
    padding: 15,
    backgroundColor: corPrimaria,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 40
  },
  textoBotao: {
    fontSize: 14,
    fontFamily: textoNormal,
    color: corTextoClaro
  },
  contatoLogin: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 10,
    marginBottom: 30
  }
//   // Barra de Navegação
//   tabBar: {
//     backgroundColor: corPrimaria,
//     height: 60,
//     borderTopWidth: 0,
//     paddingTop: 9
//   },
//   iconContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   activeIconContainer: {
//     backgroundColor: corPrimaria,
//     borderRadius: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: -50,
//     width: 65,
//     height: 65,
//     borderWidth: 5,
//     borderColor: corBG,
//   },
//   // Tela Home
//   container: {
//     backgroundColor: corBG,
//     padding: 20,
//     paddingTop: 70
//   },
//   pickerContainer: {
//     backgroundColor: corBG, 
//     borderWidth: 1,  
//     overflow: 'hidden', 
//     borderColor: corPrimaria,
//     borderRadius: 50,
//     marginBottom: 20,
//     paddingHorizontal: 30,
//   },
//   card: {
//     backgroundColor: corTextoClaro,
//     borderRadius: 12,
//     padding: 15,
//     marginBottom: 15,
//     elevation: 10,
//   },
//   cardHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center'
//   },
//   tituloRoxo: {
//     fontSize: 20,
//     fontFamily: textoNegrito,
//     color: corPrimaria,
//   },
//   cardCarga: {
//     fontSize: 14,
//     fontFamily: textoNormal,
//     color: corPrimaria,
//   },
//   cardDescricao: {
//     fontSize: 16,
//     fontFamily: textoNormal,
//     color: corTextoEscuro,
//     marginTop: 8,
//     marginBottom: 20
//   }, 
//   // Tela Exercícios
//   exercicioContainer: {
//     alignItems: 'center'
//   },
//   bolinha: {
//     width: 70,
//     height: 70,
//     borderRadius: 35,
//     backgroundColor: corPrimaria,
//     alignItems: 'center',
//     justifyContent: 'center',
//     elevation: 10,
//     marginBottom: 8
//   },
//   tituloBranco: {
//     color: corTextoClaro,
//     fontFamily: textoNegrito,
//     fontSize: 20,
//   },
//   linha :{
//     width: 4,
//     height: 40,
//     backgroundColor: corPrimaria,
//     marginVertical: 30
//   },
//   // Tela Meus Cursos
//   progressBar: {
//     height: 12,
//     backgroundColor: '#ccc',
//     borderRadius: 6,
//     marginTop: 12,
//     overflow: 'hidden',
//   },
//   progressFill: {
//     height: '100%',
//     backgroundColor: corPrimaria,
//   },
//   botaoCertificado: {
//     padding: 15,
//     marginTop: 20,
//     backgroundColor: '#9237fa', // cor diferente para destacar
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   // Tela Perfil
//   perfilContainer: {
//     alignItems: 'center',
//     marginBottom: 30,
//   },
//   perfilImagem: {
//     width: 200,
//     height: 200,
//     borderRadius: 100,
//     borderWidth: 3,
//     borderColor: corPrimaria,
//     marginBottom: 15,
//   },
//   perfilEmail: {
//     fontSize: 14,
//     fontFamily: textoNormal,
//     color: '#ccc',
//     marginTop: 5,
//   },
//   statsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginBottom: 30,
//   },
//   statBox: {
//     alignItems: 'center',
//   },
//   badgesContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginVertical: 20,
//   },
//   badge: {
//     alignItems: 'center',
//   },
//   badgeIcon: {
//     fontSize: 28,
//   },
//   botoesContainer: {
//     marginTop: 20,
//     gap: 10
//   }
});