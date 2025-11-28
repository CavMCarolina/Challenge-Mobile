import { StyleSheet } from 'react-native';

// // Cores
const corTexto = '#1E1E1E';
const corTextoClaro = '#F2F2F2';
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
    fontFamily: textoMedio,
    fontSize: 14
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
  },
  // Barra de Navegação
  tabBar: {
    backgroundColor: corPrimaria,
    height: 60,
    borderTopWidth: 0,
    paddingTop: 9
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeIconContainer: {
    backgroundColor: corPrimaria,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -50,
    width: 65,
    height: 65,
    borderWidth: 5,
    borderColor: corTextoClaro
  },
  // Tela Home
  container: {
    padding: 40,
    paddingTop: 70
  },
  titulo: {
    fontFamily: textoMedio,
    color: corPrimaria,
    letterSpacing: 3,
    fontSize: 22
  },
  pontosContainer: {
    borderRadius: 10,
    backgroundColor: corSecundaria,
    marginVertical: 20,
    paddingBottom: 30,
    elevation: 10,
    marginTop: 30
  },
  pontosHome: {
    backgroundColor: 'white',
    borderBottomRightRadius: 300,
    borderBottomLeftRadius: 300,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    alignItems: 'center',
    paddingVertical: 30,
    gap: 5
  },
  pontosHomeTitulo: {
    fontFamily: textoMedio,
    color: corPrimaria,
    fontSize: 20,
    letterSpacing: 3,
    textAlign: 'center'
  },
  lojaHome: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: 8
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  subtitulo: {
    color: corPrimaria,
    fontSize: 16,
    fontFamily: textoNormal
  },
  link: {
    textDecorationLine: 'underline'
  },
  // Tela de Ranking
  cardRankingUser: {
    backgroundColor: corTextoClaro,
    width: '100%',
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    position: 'absolute',
    bottom: -40
  },
  bolinhaRanking: {
    width: 7,
    height: 7,
    borderWidth: 1.5,
    borderColor: corPrimaria,
    borderRadius: 10,
    marginBottom: 7
  },
  posicaoRankingUser: {
    borderRadius: 12,
    paddingVertical: 50,
    paddingHorizontal: 160,
    borderWidth: 2,
    borderColor: corPrimaria,
    position: 'relative'
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: corPrimaria,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5
  },
  numeroRanking: {
    color: corTextoClaro,
    fontSize: 18,
    fontFamily: textoNegrito,
    letterSpacing: 2
  },
  infoRanking: {
    marginLeft: 15,
  },
  // bem gambiarra para fazer a estilização que eu quero :)
  bg: {
    backgroundColor: corTextoClaro,
    paddingHorizontal: 120,
    paddingVertical: 5,
    alignItems: 'center',
    top: 20,
    left: -90,
    flex: 1,
    flexDirection: 'row',
    position: 'absolute'
  },
  nomeRanking: {
    color: corPrimaria,
    fontSize: 16,
    fontFamily: textoMedio,
    marginBottom: 3
  },
  pontosRanking: {
    borderBottomWidth: 1,
    borderColor: corPrimaria,
    width: 130,
    paddingBottom: 3
  },
  // Filtros
  filtros: {
    marginTop: 30,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 70
  },
  botaoFiltro: {
    backgroundColor: corSecundaria,
    borderRadius: 5,
    elevation: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20
  },
  textoFiltro: {
    fontFamily: textoMedio,
    color: corPrimaria,
    fontSize: 16,
    letterSpacing: 2
  },
  botaoAtivo: {
    backgroundColor: corPrimaria,
  },
  textoFiltroAtivo: {
    color: corTextoClaro,
  },
  cardRanking: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 20
  },
  icone :{
    marginLeft: 80,
    marginTop: 15
  },
  // Loja
 botaoComprar: {
  backgroundColor: corPrimaria,
  borderRadius: 7,
  padding: 15,
  alignItems: 'center',
  marginTop: 20
 },
 // Habitos
 pickerContainer: {
  marginVertical: 30
 },
 picker: {
  paddingLeft: 10,
  alignItems: 'center',
  textAlign: 'center',
  fontFamily: textoMedio,
 },
 fotoContainer: {
  flex: 1,
  flexDirection: 'row',
  gap: 80,
  marginVertical: 50,
  alignItems: 'center',
  position: 'relative',
  right: 0,
 },
 foto: {
  width: 150,
  height: 120,
  borderRadius: 7,
  position: 'absolute',
  right: 0,
  elevation: 5
 },
 cameraContainer: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  gap: 5,
  backgroundColor: corPrimaria,
  borderRadius: 50,
  width: 100,
  height: 100,
  position: 'absolute',
  left: 10,
  elevation: 5
 },
 cardTitulo: {
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between'
 },
 fotoCard: {
  width: '100%',
  borderRadius: 10,
  height: 200,
  marginTop: 10,
  elevation: 5
 },
 // Perfil
  headerPerfil: {
    alignItems: 'center',
  },
  fotoPerfil: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  cardInfo: {
    borderWidth: 1,
    borderColor: corPrimaria,
    borderRadius: 12,
    padding: 15,
    gap: 5,
    marginBottom: 15,
  },
  tituloInfo: {
    fontSize: 16,
    fontFamily: textoMedio,
    color: corPrimaria,
  },
  acoesPerfil: {
    marginTop: 20,
  },
  botaoPerfil: {
    backgroundColor: corPrimaria,
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
});