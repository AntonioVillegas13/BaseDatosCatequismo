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
import {
  AddActive,
  AddContenido,
  consultarActivo,
} from "../../Services/ActivosSrv";
import uuid from "react-native-uuid";
import * as ImagePicker from "expo-image-picker";
import { SubirFoto, SubirIamgen } from "../../Services/ImagesSrv";
import Header from "../../Components/Header";
// import { TouchableOpacity } from "react-native-web";
import StyledText from "../../Components/StyledText";
// import QRCode from "react-native-qrcode-svg";
import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";
import { getLocation } from "../../Services/CoordenadasSrv";
import {
  addElementToArrayCatequista,
  consultar1Contenido,
  consultarContenido,
} from "../../Services/ProductosSrv";

export function AniadiCatequista({ route, navigation }) {
  const { id } = route.params;
  const [Calificacion, setCalificacion] = useState("");
  const [comentario, setComentario] = useState("");

  useEffect(() => {
    const consulta = async () => {
      // await consultar1Contenido(setId);
      console.log("ver:", id);
    };
    consulta();
    // console.log("IDSSSSS:",Idaux)
  }, []);

  const AñadirProducto = async () => {
    // console.log("NUEVO URL", Url1);
    console.log("Objeto", {
      Calificacion: Calificacion,
      comentario:comentario,
      id: id,
    });

    addElementToArrayCatequista(id, Calificacion,comentario);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Header />
        <StyledText subtitle center>
          {" "}
          SUBE TU califica Catequista
        </StyledText>
        <StyledText subtitle> </StyledText>

        <TextInput
          label="Calificacion"
          value={Calificacion}
          onChangeText={setCalificacion}
          mode="outlined"
          keyboardType="number-pad"
        />

        <TextInput
          label="comentario"
          value={comentario}
          onChangeText={setComentario}
          mode="outlined"
          // keyboardType="number-pad"
        />

        <View style={styles.cajaBotones}>
          <Button
            title="Calificar"
            onPress={async () => {
              AñadirProducto();
              // navigation.navigate("ListaCatequistas");
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
