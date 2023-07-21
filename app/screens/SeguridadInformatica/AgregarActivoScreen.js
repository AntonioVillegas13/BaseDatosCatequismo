import { useEffect, useState } from "react";
import { Picker } from "react-native-web";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { Card, Text, TextInput, DropDown } from "react-native-paper";
import theme from "../../theme/theme";
import { Button, Icon } from "@rneui/base";
import { AddActive, consultarActivo } from "../../Services/ActivosSrv";
import uuid from "react-native-uuid";
import * as ImagePicker from "expo-image-picker";
import { SubirFoto, SubirIamgen } from "../../Services/ImagesSrv";
import Header from "../../Components/Header";
// import { TouchableOpacity } from "react-native-web";
import StyledText from "../../Components/StyledText";
// import QRCode from "react-native-qrcode-svg";
import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";
import { getLocation } from "../../Services/CoordenadasSrv";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function AniadirActivos({ route, navigation }) {
  const [Idaux, setId] = useState("Evento-");
  const [Nombre, setNombre] = useState("");
  const [Descripcion, setDescripcion] = useState("");
  const [CedulaResposable, setCedulaResposable] = useState("");

  const [Url1, setUrl1] = useState("");

  const [Urls, setUrls] = useState([]);
  const [Id2, setId2] = useState(0);
  useEffect(() => {
    const consulta = async () => {
      await consultarActivo(setId);
      const data = await AsyncStorage.getItem('@miApp:InfoUser');
      console.log("usuarioInfo:",data)
      setCedulaResposable(data)
    };
    consulta();

    
  }, []);

  // useEffect(() => {
  //   console.log("Idfuera", Id2);

  //   console.log(
  //     parseFloat(Confidencialidad) +
  //       parseFloat(Integridad) +
  //       parseFloat(Disponibilidad)
  //   );
  //   setVA(
  //     (
  //       (parseFloat(Confidencialidad) +
  //         parseFloat(Integridad) +
  //         parseFloat(Disponibilidad)) /
  //       3
  //     ).toFixed(2)
  //   );
  //   console.log("VA", VA);
  // }, [Confidencialidad, Integridad, Disponibilidad]);

  const pickImages = async () => {
    let resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 1,
      // base64:true
    });
    console.log("Imagen Uri:", resultado.assets[0].uri);
    // await setImageBase64(resultado.assets[0].uri);
    await SubirFoto(resultado.assets[0].uri, Idaux + "", Urls);
    //  await
    // console.warn("array", Urls);
  };


  // const pickImages = async () => {
  //   let resultado = await ImagePicker.launchCameraAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //     aspect: [4, 3],
  //     quality: 1,
  //     // base64:true
  //   });
  //   console.log("Imagen Uri:", resultado.assets[0].uri);
  //   // await setImageBase64(resultado.assets[0].uri);
  //   await SubirFoto(resultado.assets[0].uri, Idaux + "", Urls);
  //   //  await
  //   // console.warn("array", Urls);
  // };

  const AñadirProducto = async () => {
    // SubirIamgen();
    const locationCoords = await getLocation();
    const { latitude, longitude } = locationCoords;
    // Alert.alert(
    //   "Coordenas Capturadas",latitude,"+",longitude

    // );
    console.log("latitud:", latitude);
    console.log("lomngitud:", longitude);

    console.log("NUEVO URL", Url1);
    console.log("Objeto", {
      NActivo: Idaux,
      Nombre: Nombre,
      coordenadas: locationCoords,
      Descripcion: Descripcion,
      arrayImagenes: Urls,
    });

    AddActive({
      NActivo: Idaux,
      Nombre: Nombre,
      coordenadas: locationCoords,
      Descripcion: Descripcion,
      arrayImagenes: Urls,
      CedulaResposable:CedulaResposable
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Header />
        <StyledText subtitle center>
          {" "}
        Sube el certificado 
        </StyledText>
        <StyledText subtitle> </StyledText>
        <TextInput
          label="N° de certificado"
          value={Idaux + ""}
          editable={false}
          mode="outlined"
          keyboardType="default"
          textColor="gray"
        />
        <TextInput
          label="Nombre del catequizado"
          value={Nombre}
          onChangeText={setNombre}
          mode="outlined"
          keyboardType="default"
        />
        <TextInput
          label="Descripcion"
          value={Descripcion}
          onChangeText={setDescripcion}
          mode="outlined"
          keyboardType="default"
        />

        <View
          style={{
            alignItems: "center",
            // justifyContent: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              pickImages();
            }}
            style={
              {
                flexDirection:"row",
                alignContent:"space-between",
                margin:20,


              }
            }
          >
            <StyledText >Sube los archivos respectivos</StyledText>
            <View
              style={{
                backgroundColor: theme.colors.jade,
                borderRadius: 10,
                // margin: 30,
                marginHorizontal:10,
                alignItems: "center",
              }}
            >
              <Icon name="add-circle" size={30} color="white" />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.cajaBotones}>
          <Button
            title="Registrar"
            onPress={async () => {
              AñadirProducto();
              navigation.navigate("ListaActivos");
              // console.warn("array", Urls);
            }}
            buttonStyle={{
              borderRadius: 10,
              backgroundColor: theme.colors.jade,
            }}
            containerStyle={{
              width: 100,
              paddingTop: 40,
              marginLeft: 120,
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    // alignItems: 'stretch',
    justifyContent: "center",
    dColor: "gray",
  },
  cajaBotones: {
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
    flex: 2,
    flexDirection: "row",
  },
  scrollView: {
    // backgroundColor: 'pink',
    marginHorizontal: 10,
  },
});
