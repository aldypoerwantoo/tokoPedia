import React,{Component} from 'react';
import { 
    StyleSheet,
   Text,
   View ,
   Image,
   StatusBar,
   FlatList,
   TouchableOpacity,
   ScrollView,
   ImageBackground,
   Button,
   SafeAreaView,
   TextInput,
   TouchableHighlightBase,
   Dimension,
  } from 'react-native';
  //  import { SafeAreaView } from 'react-native-safe-area-context';



const styles = StyleSheet.create({
  
  statusBarWrap: {
    backgroundColor:'#1b1b1b',
    paddingTop: StatusBar.currentHeight,
  },
  
  boxstatusbar: { 
    flex: 1,
    // backgroundColor:'white',
    
  },

  greenBox: {
    width:500,
    height:220,
    paddingTop:10,
    marginTop:-75,
    marginBottom:-40,
    paddingLeft:-30,
    // borderColor: "red",
    
    
    
  },
  emailBox: {
    width:27,
    height:27,
    // backgroundColor:'red',
    flexDirection:'row',
    marginLeft:-93,
    marginBottom:-40,
    tintColor:'white',

  },
  bellBox: {
    width:27,
    height:27,
    // backgroundColor:'red',
    flexDirection:'row',
    marginLeft:-58,
    marginBottom:-30,
    tintColor:'white',
  },
  chartBox: {
    width:27,
    height:27,
    // backgroundColor:'red',
    flexDirection:'row',
    marginLeft:-25,
    marginTop:-3,
    marginBottom:-7,
    tintColor:'white',
  },
  menuBox: {
    width:22,
    height:22,
  //  backgroundColor:'blue',
    flexDirection:'row',
    marginLeft:15,
    marginTop:2,
    marginBottom:-30,
    tintColor:'white',
  },
  boxWrapsearch:  {
    paddingBottom:70,
    marginBottom:-50,
    flexDirection:'row',
  },
  
  boxSearch: {
    // backgroundColor:'yellow',
    marginRight:160,
    paddingLeft:-20,
    paddingTop:15,
    marginTop:30,
  },
  boxSearchicon:  {
    width:17,
    height:17,
    //  backgroundColor:'red',
    flexDirection:'row',
    marginLeft:25,
    marginTop:-29,
    marginBottom:-10,
    tintColor:'grey',
  },
  boxLocationicon: {
    width:17,
    height:17,
    flexDirection:'row',
    // marginTop:10,
    marginLeft:16,
    // marginTop:-9,
     marginBottom:40,
    tintColor:'white',
    // backgroundColor:'red',
  },
  wrapIconLocation:{
    // backgroundColor:'brown',
    marginLeft:1,
    paddingTop:8,
    paddingLeft:-20,
    width:30,
  },
  wrapIconmenu: {
    flexDirection:'row',
    textAlign:'left',
    marginRight:10,
    marginLeft:330,
    paddingLeft:109,
    // marginTop:-10,
    paddingVertical:33,
    paddingHorizontal:100,
    paddingTop:-90,
    marginTop:-100,
    // marginBottom:10, 
    //  backgroundColor:'magenta',
    resizeMode:'cover',
  },
  txtAddresbox: {
    //  backgroundColor:'magenta',
    marginLeft:35,
    marginRight:350,
    paddingTop:50,
    marginTop:-30, 
  },
  txtAddres:  {
    fontSize:14,
    marginLeft:1,
    //  backgroundColor:'red',
    width:100,
    marginTop:-25,
    paddingLeft:1,
    color:'white',
  },
  txtAddresbox2: {
    //  backgroundColor:'darkblue',
    marginLeft:102,
    marginRight:350,
    paddingTop:50,
    marginTop:-40, 
  },
  txtAddres2:  {
    fontSize:14,
    marginLeft:1,
    // backgroundColor:'cyan',
    width:170,
    marginTop:-35,
    paddingLeft:1,
    color:'white',
    fontWeight:'bold',
  },
  downArrowBox:  {
    marginLeft:275,
    // backgroundColor:'blue',
    height:15,
    width:15,
    marginTop:-35,
    paddingLeft:1,
    tintColor:'white',
    
  }, 

  sizeIcons:  {
  // backgroundColor:'red',
    resizeMode:'cover',
    paddingLeft:30,
    paddingTop:15,
    paddingBottom:15,
    height: 35,
    marginLeft:10,
    width:  36,
    marginTop: 20,
    marginBottom: 3,
    marginHorizontal:18,
    justifyContent: 'space-between',
    borderBottomWidth:6,
     
    // height:40,
    // width:40,
    // backgroundColor:'cyan',
    // paddingHorizontal:20,
    // paddingVertical:20,
    
    // justifyContent:'center',
    // alignItems:'center',
    // marginLeft:10,
    // borderRadius:0,

  },
  sizeBanerPromo:{
    height:230,
    width:450,
    justifyContent:'space-between',
    resizeMode:'contain',
    marginRight:1,
    marginLeft:11,
    paddingLeft:10,
    // backgroundColor:'red',
   borderRadius:10,
    marginTop:-35,
    
  },


  boxIcons: {
    // backgroundColor:'purple',
    // justifyContent:'center',
    // // alignItems:'center',
    // // borderRadius:40,
    
    // paddingVertical:10,
    // paddingHorizontal:10,
    // // paddingTop:5,
    // // paddingBottom:5,
    // // paddingLeft:5,
    // // paddingRight:5,
  },
  wrapBoxIcons: {
    // backgroundColor:'darkblue',
    // paddingTop:30,
    // marginTop:40,
    // paddingLeft:-20,
    // marginLeft:-4,
    // paddingBottom:0,
    // justifyContent:'center',
 
  },
  wrapTextIcons: {
  //   marginHorizontal:10,
  //   marginVertical:-2,
  //   paddingTop:5,
    //  backgroundColor:'red',
    // paddingBottom:25,
    paddingLeft:10,
    marginLeft:10,
    // backgroundColor:'magenta',
    // width:61,
    // height:38,
    // marginTop:-10,
    // paddingTop:1,
  },
  wrapTextToys: {
    //   marginHorizontal:10,
    //   marginVertical:-2,
    //   paddingTop:5,
      //  backgroundColor:'red',
      // paddingBottom:25,
      paddingLeft:3,
      marginLeft:7,
      backgroundColor:'white',
      paddingTop:25,
      paddingBottom:10,
      // width:61,
      // height:38,
      // marginTop:-10,
      // paddingTop:1,
  },
   textIcons: {
    fontSize:11,
    width:60,
    height:50,
    color:'black',
    paddingTop:10,
    //  backgroundColor:'pink',
     textAlign:'center',
  },
  boxFlIcons:{
    backgroundColor:'white',
    paddingLeft:17,
    paddingTop:20,
    paddingBottom:10,
  },
  sizeListIcons:{
    resizeMode:'contain',
    paddingTop:15,
    paddingBottom:15,
    height: 37,
    marginLeft:14,
    width:  36,
    marginTop: 20,
    marginBottom: 3,
    marginHorizontal:18,
    justifyContent: 'space-between',
    borderBottomWidth:6, 
  // backgroundColor:'green',

  },
  textListIcons:{
    fontSize:11,
    width:'100%',
    height:40,
    color:'black',
    paddingTop:10,
    // backgroundColor:'pink',
     textAlign:'center',
    //  paddingLeft:10,   
  },
  wrapBoxMenu:{
  //  backgroundColor:'red',
    marginLeft:-8,
    width:80,
    paddingLeft:22,
    marginRight:-5,
    marginTop:-5,
    // paddingBottom:10,
    // paddingTop:10,
  },
  flBoxMenuList:{
    width:'100%',
    backgroundColor:'white',
   
  },
  txtFontTokped:{
    fontSize:17,
    color:'black',
    fontWeight:'bold',
    paddingLeft:18,
    paddingTop:50,
    paddingBottom:30,
    backgroundColor:'white',
  },
  imgSizePromo:{
    height:110,
    width:220,
    marginLeft:-1,
    flexDirection:'row',
    marginTop:-3,
    marginBottom:10,
  },
  imgSizePromo2:{
    height:110,
    width:220,
    marginLeft:10,
    flexDirection:'row',
    marginTop:-3,
    marginBottom:10,
    // backgroundColor:'magenta',
  },
  boxPromo:{
    paddingTop:10,
    // backgroundColor:'cyan',
    flexDirection:'row',
    paddingBottom:10,
    marginTop:-25,
    marginLeft:15,
    marginBottom:-20,
    
  },
  boxPromo2:{
    // backgroundColor:'darkblue',
    flexDirection:'row',
    paddingTop:10,
    marginLeft:15,
    
  },
  imgSizePromo3:{
    height:110,
    width:220,
    marginLeft:1,
    marginTop:4,
    flexDirection:'row',
    //  backgroundColor:'pink',
    paddingTop:10,
  },
  imgSizePromo4:{
    height:110,
    width:220,
    marginLeft:10,
    flexDirection:'row',
    marginTop:4,
    
  //  backgroundColor:'blue',
  },
  imgSizeParfume:{
    height:164,
    width:160,
    resizeMode:'stretch',
    marginLeft:330,
    marginTop:-164,
  },
  fontSale:{
    fontSize:20,
    color:'black',
    fontWeight:'bold',
    //  backgroundColor:'red',
    paddingTop:7,
    marginLeft:-80,
    
  },
  fontSale2:{
    fontSize:20,
    color:'black',
    fontWeight:'bold',
    //  backgroundColor:'red',
    paddingTop:7,
    marginLeft:-80,
    
  },
  fontGreens4:{
    // backgroundColor:'green',
    fontSize:16,
    color:'#05a90e',
    fontWeight:'bold',
    // backgroundColor:'pink',
    marginLeft:166,
    paddingTop:10,  
  },
  fontToys:{
    fontSize:20,
    color:'black',
    fontWeight:'bold',
    //  backgroundColor:'pink',
    paddingTop:7,
    marginLeft:10,
    paddingBottom:10,
    width:140,
    
  },
  beauty:{
    fontSize:20,
    color:'black',
    fontWeight:'bold',
    backgroundColor:'white',
    paddingTop:7,
    marginLeft:10,
    paddingBottom:10,
    width:170,
    paddingLeft:8,
  },
  txtAcc:{
    fontSize:20,
    color:'black',
    fontWeight:'bold',
    //  backgroundColor:'pink',
    paddingTop:7,
    marginLeft:10,
    paddingBottom:10,
    width:270,
    height:45,
    paddingLeft:15,
  },
  fontsGreen:{
    fontSize:16,
    color:'#05a90e',
    fontWeight:'bold',
    // backgroundColor:'pink',
    marginLeft:201,
    paddingTop:10,
  },
  fontGreens:{
    fontSize:16,
    color:'#05a90e',
    fontWeight:'bold',
    // backgroundColor:'purple',
    marginLeft:357,
    paddingTop:2,
    marginTop:-30,
    marginRight:20,
  },
  fontGreens3:{
    fontSize:16,
    color:'#05a90e',
    fontWeight:'bold',
    // backgroundColor:'purple',
    marginLeft:370,
    paddingTop:2,
    marginTop:-30,
    marginRight:20,
  },
  fontsGreen2:{
    fontSize:16,
    color:'#05a90e',
    fontWeight:'bold',
    // backgroundColor:'pink',
    marginLeft:165,
    paddingTop:10,
  },
  fontsGreen4:{
    fontSize:16,
    color:'#05a90e',
    fontWeight:'bold',
    // backgroundColor:'pink',
    marginLeft:165,
    paddingTop:10,
  },
  boxShampo:{
    height:163,
    width:160,
    resizeMode:'stretch',
    marginLeft:175,
    marginTop:-163,
  },
  wrapTextShop:{
    flexDirection:'row',
    backgroundColor:'white',
    width:'100%',
    height:80,
    marginBottom:-12,
    paddingTop:40,
    paddingLeft:97,
    paddingBottom:5,
  },
  boxPromoKecantikan:{
    // backgroundColor:'red',
    width:'100%',
    height:500,
    marginTop:20,
    marginBotom:-110,
    flexDirection:'row',
  },
 
  upBox:{
    flexDirection:'row',
    // backgroundColor:'blue',
    height:200,
    width:'100%',
    // paddingLeft:3,
  },
  imgSizeUnilever:{
    height:150,
    width:175,
    marginTop:3,
    marginBottom:1,
    resizeMode:'stretch',
  },
  imgSizeBodyWash:{
    height:164,
    width:150,
    resizeMode:'stretch',
   marginTop:3,
  },
  imgSizeHandWash:{
    height:164,
    width:170,
    resizeMode:'stretch',
    marginTop:3,
  },
  imgSizeUnileverPart2:{
    height:180,
    width:175,
    resizeMode:'stretch',
    marginTop:-350,
    
  },
  downBox:{
    flexDirection:'row',
    backgroundColor:'pink',
    height:200,
  },
  wrapTextPromo:{
    flexDirection:'row',
    //  backgroundColor:'darkgreen',
    width:'100%',
    height:75,
    marginBottom:-12,
    paddingTop:40,
    paddingLeft:98,
  },
  imgAllYouCanShp:{
    height:350,
    width:140,
    resizeMode:'stretch',
    marginLeft:-40,
    backgroundColor:'black',
   
  },
  wrapImgBaner:{
    height:355,
    width:130,
    marginRight:10,
    paddingLeft:45,
    // backgroundColor:'green',
  },
  boxFlAllYouCanShop:{
    height:400,
    width:'100%',
    backgroundColor:'#be1dbf',
    //  backgroundColor:'red',
    marginTop:20,
    paddingTop:20,
    flexDirection:'row',
    resizeMode:'cover',
    marginBottom:-10,
    
  },
  boxAllYouCanShp:{
    backgroundColor:'#be1dbf',
    // backgroundColor:'red',
    flexDirection:'row',
    // height:320,
     width:140,
     height:100,
    // marginTop:-20,
    marginLeft:20,
    paddingTop:10,
    paddingLeft:10,
    paddingRight:10,
    paddingBottom:10,
  },
  wrapListItem:{
    // marginRight:-0,
    backgroundColor:'transparent',
    paddingLeft:10,
    width:100,
    height:90,
    marginLeft:10,
    paddingTop:10,
  
  },
  flActionFigure:{
    paddingTop:10,
    marginTop:5,
    paddingBottom:30,
    height:400,
    backgroundColor:'#fffeff',
    paddingLeft:10,
    
  },
  wrapListAcc:{
    backgroundColor:'#be1dbf',
    // backgroundColor:'orange',
    // marginRight:10,
    textAlign:'left',
    borderTopRightRadius:8,
    borderTopLeftRadius:8,
    borderBottomLeftRadius:8,
    borderBottomRightRadius:8,
    paddingLeft:-100,
    marginLeft:10,
    paddingTop:5,
    
  },
  boxImgAcc:{
    marginLeft:10,
    paddingLeft:1,
    paddingRight:1,
    backgroundColor:'#be1dbf',
    elevation:10,
   
  },
  wrapBoxActionFigure:{
    marginLeft:10,
    paddingLeft:1,
    paddingRight:1,
    backgroundColor:'white',
    elevation:10,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
   
  },

  imageAcc:{
    width:143,
    height:140,
    resizeMode:'cover',
    borderTopRightRadius:6,
    borderTopLeftRadius:6,
    // elevation:10,
    
  },
  imageActionFigure:{
    width:143,
    height:140,
    resizeMode:'contain',
    borderTopRightRadius:6,
    borderTopLeftRadius:6,
    // elevation:10,
    
  },
  headerTextAcc:{
    fontSize:14,
    paddingLeft:10,
    paddingTop:10,
    // elevation:10,
   
  
  },
  boxHeaderTxt:{
    backgroundColor:'#be1dbf',
    marginLeft:10,
    paddingLeft:1,
    paddingRight:1,
    elevation:10,
    // marginRight:20,
    
  },
  boxHeaderTxtFigure:{
    backgroundColor:'white',
    elevation:10,
    marginLeft:10,
    paddingLeft:1,
    paddingRight:1,
    // marginRight:20,
    
  },
  cosmetic:{
    backgroundColor:'white',
  },
  headerTextWrap:{
    backgroundColor:'white',
    height:55,
    width:143,
    paddingTop:10,
    fontSize:13,
    paddingLeft:10,
    // elevation:10,
    color:'#00031b',
  },
  headerTextWrapFigure:{
    backgroundColor:'white',
    height:55,
    width:140,
    paddingTop:10,
    fontSize:13,
    paddingLeft:10,
    // elevation:10,
    color:'#00031b',
  },
  priceTxt:{
    fontSize:14,
    fontWeight:'bold',
    backgroundColor:'white',
    marginTop:-5,
    paddingLeft:10,
    color:'black',
    // elevation:10,
  },
  priceTxtFigure:{
    fontSize:14,
    fontWeight:'bold',
    // backgroundColor:'red',
    marginTop:-5,
    paddingLeft:1,
    color:'black',
    // elevation:10,
  },
  wrapPriceTxt:{
    backgroundColor:'#be1dbf',
    marginLeft:10,
    paddingLeft:1,
    paddingRight:1,
     elevation:10,

  },
  wrapPriceTxtFigure:{
    backgroundColor:'white',
    marginLeft:10,
    paddingLeft:10,
    paddingRight:1,
    elevation:10,

  },
  toysBox:{
      marginLeft:20,
      paddingVertical:15,
      paddingHorizontal:20,
      borderRadius:15,
      fontSize:13,
      color:'grey',
      // paddingTop:15,
      textAlign:'left',
      // marginHorizontal:5,
      // marginBottom:5,
      // marginTop:10,
      // paddingRight:10
      backgroundColor: 'white',
      marginLeft:1,
      opacity:10,
      marginTop:1,
      elevation:1,
    
  },
  boxFlToys:{
    backgroundColor:'white',
   

  },
  toysWrap:{
    //  backgroundColor:'blue',
    paddingLeft:25,
    // height:70,
    // paddingTop:10,
    marginRight:-5,
    marginLeft:-5,
    // borderRadius:30,
     paddingBottom:15,
    // alignItems:'center',
  },
  wrapTxtLocation:{
    backgroundColor:'#be1dbf',
    marginLeft:10,
    paddingLeft:1,
    paddingRight:1,
     elevation:10,
  },
  wrapTxtLocationFigure:{
    backgroundColor:'white',
    marginLeft:10,
    paddingLeft:1,
    paddingRight:1,
    elevation:10,
  },
  wrapTxtBeauty:{
     backgroundColor:'white',
     paddingBottom:5,
     paddingTop:10,
     
  },
  txtLocation:{
    paddingLeft:9,
    backgroundColor:'white',
    fontSize:14,
    paddingTop:5,
    // elevation:10,
    
  },
  wrapSoldItem:{
    backgroundColor:'#be1dbf',
    marginLeft:10,
    paddingLeft:1,
    paddingRight:1,
    elevation:10,
  },
  wrapSoldFigure:{
    backgroundColor:'white',
    elevation:10,
    marginLeft:10,
    paddingLeft:1,
    paddingRight:1,
   marginBottom:20,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
   
  },
  flFavoriteAcc:{
    backgroundColor:'white',
    paddingTop:10,
    paddingBottom:20,

  },
  soldItem:{
    // elevation:10,
    paddingLeft:10,
    fontSize:14,
    paddingTop:5,
    paddingBottom:80,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    backgroundColor:'white',

  },
  boxBeautyDealight:{
    flexDirection:'row',
    width:'100%',
    height:320,
    backgroundColor:'white',
    paddingTop:10,
    marginTop:-167,
   
     
  },
  menuBoxActionFigure:{
    backgroundColor:'white',
  },
  imgSizeBeautyDealight3:{
   marginBottom:-80,
    resizeMode:'stretch',
    width:170,
    height:300,
  },
  imgSizeBeautyDealight2:{
      paddingTop:10,
      resizeMode:'stretch',
      width:170,
      height:300,
  },
  imgSizeBeautyDealight:{
      paddingTop:10,
      resizeMode:'stretch',
      width:170,
      height:300,
     
  },
  boxBeautyDealight1:{
      resizeMode:'contain',
      width:220,
      height:65,
    //  backgroundColor:'white',
      marginTop:-81,
      paddingTop:10,

  },
  boxBeauty:{
      elevation:10,
    // backgroundColor:'red',
      marginRight:90,
      paddingLeft:110,
      marginLeft:40,
      paddingTop:-20,
      marginTop:80,
      height:90,
      width:90,  
},
wrapBoxCategory:{
   marginLeft:5,
   marginRight:5, 
},
wrapBoxCategory2:{
  marginLeft:5,
  marginRight:5,
},
imageCategory:{
  width:120,
  height:80,
  resizeMode:'stretch',
  elevation:1,
  borderTopRightRadius:10,
  borderTopLeftRadius:10,
},
imageCategory2:{
  width:120,
  height:80,
  resizeMode:'stretch',
  elevation:1,
  borderTopRightRadius:10,
  borderTopLeftRadius:10,
},

boxHeaderCategory:{
  backgroundColor:'white',
  borderWidth: 1,
  borderColor:'#d6dfeb',
  paddingLeft:10,
  marginLeft:6,
  paddingBottom:5,
  marginBotom:15,
  marginTop:-7,
  marginRight:6,
  borderBottomLeftRadius:10,
  borderBottomRightRadius:10,
},

boxHeaderCategory2:{
  backgroundColor:'white',
  borderWidth: 1,
  borderColor:'#d6dfeb',
  paddingLeft:10,
  marginLeft:6,
  paddingBottom:10,
  marginTop:-7,
  marginRight:6,
  marginBotom:10,
  borderBottomLeftRadius:10,
  borderBottomRightRadius:10,
},

headerTextCategory:{
  width:103,
  height:47,
  textAlign:'center',
  fontSize:12,
  paddingTop:10,
  paddingBottom:5,
  fontWeight:'bold',
  color:'black',
},
headerTextCategory2:{
  width:103,
  height:47,
  textAlign:'center',
  fontSize:12,
  paddingTop:10,
  paddingBottom:5,
  marginLeft:-10,
  fontWeight:'bold',
  color:'black',
},
flBoxShopChart:{
// backgroundColor:'red',
marginLeft:25,


},

});





const firstListMenu = [
  {
    id: 1,
    title: 'Official Store',
    image: require('./assets/flatlisticon1/official-store.png')
    
  },
  {
    id: 2,
    title: 'Lihat Semua',
    image: require('./assets/flatlisticon1/flmenu.png')
  },
  {
    id: 3,
    title: 'Handphone & Tablet',
    image: require('./assets/flatlisticon1/gadget.png')
  },

  {
    id: 4,
    title: 'Top-Up & Tagihan',
    image: require('./assets/flatlisticon1/bill.png')
  },
  {
    id: 5,
    title: 'Makanan & Minuman',
    image: require('./assets/flatlisticon1/spoon-and-fork.png')
  },

  {
    id: 6,
    title: 'Fashion Muslim',
    image: require('./assets/flatlisticon1/muslim.png')
  },

  {
    id: 7,
    title: 'Keuangan',
    image: require('./assets/flatlisticon1/money.png')
  },

  {
    id: 8,
    title: 'Travel & Entertaiment',
    image: require('./assets/flatlisticon1/plane.png')
  },  
];
const promoTokped = [  
  {
  id: 1,
  title: '',
  image: require('./assets/banerpromofl/bindinggojeks.png')
  
},
{
  id: 2,
  title: '',
  image: require('./assets/banerpromofl/gebyarelektronik.png')
},
{
  id: 3,
  title: '',
  image: require('./assets/banerpromofl/tempostorebaner.png')
},
];
const iconsMenulist = [
  {
    id: 1,
    title: 'Peduli Lindungi',
    image: require('./assets/menufl2/LogoPeduliLindungi.png')
    
  },
  {
    id: 2,
    title: 'Usaha Lokal',
    image: require('./assets/menufl2/localemarket.png')
  },
  {
    id: 3,
    title: 'Bazar Hari Ini',
    image: require('./assets/menufl2/foodstand.png')
  },
  {
    id: 4,
    title: 'Live Shopping',
    image: require('./assets/menufl2/playbutton.png')
  },
  {
    id: 5,
    title: 'Belanja Harian',
    image: require('./assets/menufl2/menufl2/shoppingbag.png')
  },

  {
    id: 6,
    title: 'Panen Telur',
    image: require('./assets/menufl2/eggs.png')
  },

  {
    id: 7,
    title: 'Bayar di Tempat',
    image: require('./assets/menufl2/delivery.png')
  },


];
const allYouCanShop= [
  {
    id2: 26,
    name:   'Baterai Acer ORI ES1-411-C666 ES1-...',
    price:  'Rp.198.000',
    city:  'Jakarta Timur',
    sold: '| Terjual 270',
    image:  require('./assets/accImg/bateraiLaptop.jpeg'),
    
  },
  {
    id2: 27,
    name:   'ADAPTOR CHARGER MONITOR TV LG O...',
    price:  'Rp.54.900',
    city:  'Jakarta Timur',
    sold: '| Terjual 317',
    image:  require('./assets/accImg/adaptortv.jpeg'),
    
  },
  {
    id2: 28,
    name:   'Keyboard Laptop HP Beats 15 Original...',
    price:  'Rp.198.000',
    city:  'Jakarta Timur',
    sold: '| Terjual 270',
    image:  require('./assets/accImg/keyboardlaptop.jpeg'),
    
  },
  {
    id2: 30,
    name:   'Keyboard and Laptop Logitech MK100...',
    price:  'Rp.198.000',
    city:  'Jakarta Timur',
    sold: '| Terjual 270',
    image:  require('./assets/accImg/keyboard.jpeg'),
    
  },
  {
    id2: 30,
    name:   'Keyboard and Laptop Logitech MK100...',
    price:  'Rp.198.000',
    city:  'Jakarta Timur',
    sold: '| Terjual 270',
    image:  require('./assets/accImg/keyboard.jpeg'),
    
  },
 
];
const toys= [
  {
    id2: 26,
    name:   'Action Figure',
  },
  {
    id2: 27,
    name: 'Figure Set',  
  },
  {
    id: 28,
    name: 'Super Deformed Figure',
  },
  {
    id2: 29,
    name: 'Mecha Box',
  },
  {
    id2: 30,
    name: 'Nendroid',
  },

  {
    id2: 31,
    name: 'Hot Wheels',  
  },
];
const actionFigure= [
 
  {
    id2: 27,
    name:   'Iron Man Mark 50 Action Figure Recast',
    price:  'Rp.85.000',
    city:  'Jakarta Barat',
    sold: '| Terjual 822',
    image:  require('./assets/actionFigure/ironmanmark50.jpeg'),
    
  },
  {
    id2: 28,
    name:   'Godzilla Action Figure / Mainan Go...',
    price:  'Rp.69.500',
    city:  'Jakarta Timur',
    sold: '| Terjual 1,1 rb',
    image:  require('./assets/actionFigure/godzilla.jpeg'),
    
  },
  {
    id2: 30,
    name:   'Nendroid Nezuko Orginial Full Set...',
    price:  'Rp.405.000',
    city:  'Jakarta Utara',
    sold: '| Terjual 870',
    image:  require('./assets/actionFigure/nezuko.jpeg'),
    
  },
  {
    id2: 31,
    name:   'Action Figure Tanjiro Kamado',
    price:  'Rp.205.000',
    city:  'Jakarta Utara',
    sold: '| Terjual 370',
    image:  require('./assets/actionFigure/tanjidor.jpeg'),
    
  },
  {
    id2: 32,
    name:   '[CUSTOM MADE] Kyou no Hako [Chat...',
    price:  'Rp.5.000',
    city:  'Kota Bekasi',
    sold: '| Terjual 11 rb',
    image:  require('./assets/actionFigure/box.jpeg'),
    
  },
  {
    id2: 33,
    name:   'Stand Base Action Figure 3D Motion',
    price:  'Rp.15.000',
    city:  'Jakarta Utara',
    sold: '| Terjual 370',
    image:  require('./assets/actionFigure/stand.jpeg'),
    
  },

 
];
const favoriteAcc= [
 
  {
    id2: 27,
    name:   'Baterai Acer ORIGINAL Garansi...',
    price:  'Rp.185.000',
    city:  'Jakarta Timur',
    sold: '| Terjual 232',
    image:  require('./assets/accFavorite/download.jpeg'),
    
  },
  {
    id2: 28,
    name:   'Senjata Ultraman Beliarok Z DX / Mai...',
    price:  'Rp.89.500',
    city:  'Jakarta Utara',
    sold: '| Terjual 90',
    image:  require('./assets/accFavorite/senjataUltraman.jpeg'),
  },
  {
    id2: 30,
    name:   'STAR WARS CASE IPHONE 6 6S 78 PI...',
    price:  'Rp.15.000',
    realPrice:'Rp.60.000',
    city:  'Jakarta Barat',
    sold: '| Terjual 7rb',
    image:  require('./assets/accFavorite/casingHape.jpeg'),
    
  },
  {
    id2: 31,
    name:   'Action Figure Tanjiro Kamado',
    price:  'Rp.205.000',
    city:  'Jakarta Utara',
    sold: '| Terjual 370',
    image:  require('./assets/actionFigure/tanjidor.jpeg'),
    
  },
  {
    id2: 32,
    name:   '[CUSTOM MADE] Kyou no Hako [Chat...',
    price:  'Rp.5.000',
    city:  'Kota Bekasi',
    sold: '| Terjual 11 rb',
    image:  require('./assets/actionFigure/box.jpeg'),
    
  },
  {
    id2: 33,
    name:   'Stand Base Action Figure 3D Motion',
    price:  'Rp.15.000',
    city:  'Jakarta Utara',
    sold: '| Terjual 370',
    image:  require('./assets/actionFigure/stand.jpeg'),
    
  },

 
];
const shopChart= [
  {
    id: 27,
    categoryName:   'Komputer & Laptop',
    image:  require('./assets/menupilihanimg/laptop.png'),
    categoryName2:   'Buku',
    image2:  require('./assets/menupilihanimg/buku.png'),
    
  },
  {
    id: 28,
    categoryName:   'Elektronik',
    image:  require('./assets/menupilihanimg/elektronik.png'),
    categoryName2:   'Otomotif',
    image2:  require('./assets/menupilihanimg/otomotif.png'),
    
  },
  {
    id: 29,
    categoryName:   'Pertukangan',
    image:  require('./assets/menupilihanimg/pertukangan.png'),
    categoryName2:   'Handphone & Tablet',
    image2:  require('./assets/menupilihanimg/gadget.png'),
    
  },
  {
    id: 30,
    categoryName:   'Dapur',
    image:  require('./assets/menupilihanimg/kameradapur.jpg'),
    categoryName2:   'Kamera',
    image2:  require('./assets/menupilihanimg/dapur.jpg'),
    
  },
];



export default class App extends React.Component {
   render() {

    const renderIcons = ({ item }) => (
      // <View style={styles.wrapBoxIcons}>
      <View>
          {/* <View style={styles.boxIcons}> */}
            <Image style={styles.sizeIcons} source ={item.image}/>
          {/* </View> */}
           {/* <View style={styles.wrapTextIcons}> */}
           <View>
            <Text style={styles.textIcons}>{item.title}</Text>
          </View>  
      </View>
    );
    
    const renderPromoTokped = ({ item }) => (
      
      <View style={{
            backgroundColor:'white',
            marginTop:10,
            marginRight:-10,
            paddingLeft:1,
            marginBottom:-27,
            paddingBottom:20,
            
      }}> 
            <Image style={styles.sizeBanerPromo} source ={item.image}/>
      </View>
    );
    const renderIconsMenuList = ({ item }) => (
      
      <View style={styles.wrapBoxMenu}>
            <Image style={styles.sizeListIcons} source ={item.image}/>
        
           <View>
            <Text style={styles.textListIcons}>{item.title}</Text>
          </View>  
      </View>
    );
    const renderToys = ({ item  }) => (
      <View style={styles.toysWrap}>
       <Text style={styles.toysBox}>{item.name}</Text>
      </View>
    );
    const renderAllYouCanShop = ({ item} ) => (

      <View wrapListItem>
      <View style={styles.boxImgAcc}>
        <Image style={styles.imageAcc}source ={item.image}/>
      </View>
      <View style={styles.boxHeaderTxt}>
        <Text style ={styles.headerTextWrap}>{item.name}</Text>
      </View>
      <View style={styles.wrapPriceTxt}>
          <Text style ={styles.priceTxt}>{item.price}</Text>
      </View>
      <View style={styles.wrapTxtLocation}>
        <Text style ={styles.txtLocation}>{item.city}</Text>
      </View>
      <View style={styles.wrapSoldItem}>
        <Text style ={styles.soldItem}>{item.sold}</Text>
      </View>
      </View>
    );
    const renderActionFigure= ({ item} ) => (

    <View >
      <View style={styles.wrapBoxActionFigure}>
        <Image style={styles.imageActionFigure}source ={item.image}/>
      </View>
      <View style={styles.boxHeaderTxtFigure}>
        <Text style ={styles.headerTextWrapFigure}>{item.name}</Text>
      </View>
      <View style={styles.wrapPriceTxtFigure}>
          <Text style ={styles.priceTxtFigure}>{item.price}</Text>
      </View>
      
      <View style={styles.wrapTxtLocationFigure}>
        <Text style ={styles.txtLocation}>{item.city}</Text>
      </View>
      <View style={styles.wrapSoldFigure}>
        <Text style ={styles.soldItem}>{item.sold}</Text>
      </View>
    </View>
    );
    const renderFavoriteAcc= ({ item } ) => (

      <View >
        <View style={styles.wrapBoxActionFigure}>
          <Image style={styles.imageActionFigure}source ={item.image}/>
        </View>
        <View style={styles.boxHeaderTxtFigure}>
          <Text style ={styles.headerTextWrapFigure}>{item.name}</Text>
        </View>
        <View style={styles.wrapPriceTxtFigure}>
            <Text style ={styles.priceTxtFigure}>{item.price}</Text>
        </View>
        <View style={styles.wrapTxtLocationFigure}>
          <Text style ={styles.txtLocation}>{item.city}</Text>
        </View>
        <View style={styles.wrapSoldFigure}>
          <Text style ={styles.soldItem}>{item.sold}</Text>
        </View>
      </View>
    );
      const renderShopChart= ({ item }) => (

        <View>
          <View style={styles.boxFlLaptop}>
            <View style={styles.wrapBoxCategory}>
              <Image style={styles.imageCategory}source ={item.image}/>
            </View>
            <View style={styles.boxHeaderCategory}>
              <Text style ={styles.headerTextCategory}>{item.categoryName}</Text>
            </View>
          </View>
          <View>
            <View style={styles.wrapBoxCategory2}>
                <Image style={styles.imageCategory2}source ={item.image2}/>
            </View>
            <View style={styles.boxHeaderCategory2}>
                <Text style ={styles.headerTextCategory2}>{item.categoryName2}</Text>
            </View>
          </View>
        </View>
    );
  
    






      
     return (
  <ScrollView >
    <SafeAreaView> 





      <View style={styles.boxstatusbar}>
        <View style={styles.statusbarWrap}>
          <StatusBar barStyle="transparent" translucent backgroundColor="rgba(0,0,0,0)"/>
          
            <ImageBackground style={styles.greenBox}  source ={require('./assets/green.png')}>
             
              <View style={styles.boxSearch}>
              <TextInput
                style={{
                  width:320,
                  height:40,
                  borderColor:'transparent',
                  backgroundColor:'white',
                  borderWidth:3,
                  borderRadius:10,
                  marginLeft:15,
                  paddingLeft:40,
                  color:'grey',
                  textAlign:'left',
                  marginTop:73,
                  flexDirection:'row',
                }}
                defaultValue='Cari kursi kantor'
                />
                </View>
          <View>      
            <View>
              <Image style={styles.boxSearchicon} source ={require('./assets/iconsTokpedatas/loupe.png')}/>
            </View>
          </View>
          <View>
            <View style={styles.wrapIconLocation}>
              <Image style={styles.boxLocationicon} source ={require('./assets/iconsTokpedatas/location.png')}/>
            </View>
          </View> 

          <View style={styles.wrapIconmenu}>
               <View>
                <Image style={styles.emailBox} source ={require('./assets/iconsTokpedatas/email.png')}/>
              </View>
               <View>
                <Image style={styles.bellBox} source ={require('./assets/iconsTokpedatas/notification.png')}/>
              </View>
              <View>
                <Image style={styles.chartBox} source ={require('./assets/iconsTokpedatas/trolley.png')}/>
              </View>
              <View>
                <Image style={styles.menuBox} source ={require('./assets/iconsTokpedatas/menu.png')}/>
              </View> 
          </View>   
            </ImageBackground>    
                <View style={styles.borderGreen}>
                </View>

          <View style={styles.txtAddresbox}>
            <Text style={styles.txtAddres}>
              Dikirim ke
            </Text>
          </View>
          <View style={styles.txtAddresbox2}>
                <Text style={styles.txtAddres2}>
                  Rumah (dekat sdn19) aldy
                </Text>
          </View>
          <View>
            <Image style={styles.downArrowBox} source ={require('./assets/iconsTokpedatas/down-arrow.png')}/>
          </View>
          <View style={{
            backgroundColor:'#20cd7d',
            height:30,
            width:'100%',
            borderBottomRightRadius:190,
            borderBottomLeftRadius:190,
          }}>
            
          </View>
        </View>
      </View>
  
  <View style={styles.boxFlIcons}>
  {/* <View> */}
    <FlatList
      data={firstListMenu}
      renderItem={renderIcons}
      keyExtractor={item => item.id}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      
    /> 
  </View>
  {/* <View style={styles.boxFlIcons}> */}
  <View>
    <FlatList
      data={promoTokped}
      renderItem={renderPromoTokped}
      keyExtractor={item => item.id}
      horizontal={true}
      showsHorizontalScrollIndicator={false} 
    /> 
  </View> 
  <View style={styles.flBoxMenuList}>
    <FlatList
      data={iconsMenulist}
      renderItem={renderIconsMenuList}
      keyExtractor={item => item.id}
      horizontal={true}
      showsHorizontalScrollIndicator={false} 
    /> 
  </View>    
    
  <View>
    <View>
        <Text style={styles.txtFontTokped}>
          Spesial di Tokopedia hari ini
        </Text>
    </View>
      <View style={styles.boxPromo}>
          <Image style={styles.imgSizePromo} source ={
            require('./assets/banner/1promobaner.png')}
          />   
        <View>
          <Image style={styles.imgSizePromo2} source ={
            require('./assets/banner/2promobaner.png')}
          /> 
        </View>
      </View>
      <View style={styles.boxPromo2}>
          <Image style={styles.imgSizePromo3} source ={
            require('./assets/banner/3promobaner.png')}
          />
        <View>
          <Image style={styles.imgSizePromo4} source ={
            require('./assets/banner/4promobaner.png')}
          /> 
        </View>
      </View>
  </View>
    
  <View>
  <View>
    <View style={styles.wrapTextShop}>
      <Text style={styles.fontSale}>
        Belanja lagi,yuk!
      </Text>
          <Text style={styles.fontsGreen}>
          Lihat Semua
        </Text>
      
    </View>
    <View>
    {/* <View style={styles.boxAllYouCanShp}>  */}
        <View>
      
       </View>
    <View style={styles.boxFlAllYouCanShop}> 
    <View style={styles.wrapImgBaner}>
    <Image style={styles.imgAllYouCanShp} source ={
          require('./assets/allYouCanShopimg/allucanshopimg.png')}
          />   
    </View>
    
            <View  style={styles.wrapListAcc}>
      
            <FlatList style={{ marginLeft:-5,}}
            data={allYouCanShop}
            renderItem={renderAllYouCanShop}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            />
            </View>
    </View>
    <View style={styles.wrapTextPromo}>
      <Text style={styles.fontSale2}>
       Perawatan di rumah
      </Text>
      <Text style={styles.fontGreens4}>
          Lihat Semua
      </Text>
      
    </View>
  <View style={styles.boxPromoKecantikan}>  
    <View style={styles.upBox}>
        <Image style={styles.imgSizeUnilever} source ={
          require('./assets/produkKecantikan/imgpart1.png')}
          /> 
            <TouchableOpacity>
              <Image style={styles.imgSizeBodyWash} source ={
                require('./assets/produkKecantikan/sabunmuka.png')}
              />
              </TouchableOpacity>
              <TouchableOpacity>
              <Image style={styles.imgSizeHandWash} source ={
                require('./assets/produkKecantikan/handwash.png')}
             />
              </TouchableOpacity>             
    </View>    
 </View>
      <Image style={styles.imgSizeUnileverPart2} source ={
          require('./assets/produkKecantikan/imgpart2.png')}
          />   
        <TouchableOpacity>
          <Image style={styles.boxShampo} source ={
          require('./assets/produkKecantikan/shampo.png')}
          /> 
        </TouchableOpacity>
        <TouchableOpacity>    
           <Image style={styles.imgSizeParfume} source ={
          require('./assets/produkKecantikan/minyakwangi.png')}
          />      
    </TouchableOpacity> 
    </View>
    <View style={styles.menuBoxActionFigure}>
      <View style={styles.wrapTextToys}>
        <Text style={styles.fontToys}>
          Terlaris hari ini
        </Text>
        <Text style={styles.fontGreens}>
            Lihat Semua
        </Text>
        </View>
          <View style={styles.boxFlToys} >
            <FlatList
              data={toys}
              renderItem={renderToys}
              keyExtractor={item => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
        </View>
       
    <View style={styles.flActionFigure}>
      <FlatList
            data={actionFigure}
            renderItem={renderActionFigure}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
      />
    </View>
    </View> 
  <View style={styles.wrapTxtBeauty}>
      <Text style={styles.beauty}>
        Perawatan diri
      </Text>
          <Text style={styles.fontGreens3}>
          Lihat Semua
      </Text>
  </View>
    
      <View style={styles.boxBeauty}>
          <Image style={styles.boxBeautyDealight1} source ={
           require('./assets/BeautyDelight/boxatas.png')}
          />
      </View>
    
  <View style={styles.boxBeautyDealight}>
      <TouchableOpacity>
        <Image style={styles.imgSizeBeautyDealight} source ={
        require('./assets/BeautyDelight/boxpart1.png')}
        /> 
      </TouchableOpacity>
        <View>
        <TouchableOpacity>
          <Image style={styles.imgSizeBeautyDealight2} source ={
          require('./assets/BeautyDelight/boxpart2.png')}
          /> 
        </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity>
          <Image style={styles.imgSizeBeautyDealight2} source ={
          require('./assets/BeautyDelight/boxpart3.png')}
          /> 
          </TouchableOpacity>
        </View>
  <View>
 
  </View>
    </View>
  <View style={styles.cosmetic}>
  <View style={styles.wrapTxtBeauty}>
      <Text style={styles.txtAcc}>
        Produk pilihan untukmu
      </Text>
          <Text style={styles.fontGreens3}>
          Lihat Semua
          </Text>
  </View>
  <View>
  <View style={styles.flFavoriteAcc}>
      <FlatList
            data={favoriteAcc}
            renderItem={renderFavoriteAcc}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
      />
    </View>
  <View style={styles.wrapTxtBeauty}>
      <Text style={styles.txtAcc}>
        Kategori Pilihan
      </Text>
          <Text style={styles.fontGreens3}>
          Lihat Semua
      </Text>
  </View>
    <View>
      <View style={styles.flBoxShopChart}>
        <FlatList
          data={shopChart}
          renderItem={renderShopChart}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>     
    </View>
  </View>
  </View>
  
    </View>

  </View> 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </SafeAreaView>    
  </ScrollView> 
     );
   }
   

}

