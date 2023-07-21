import {
  FlatList,
  ScrollView,
  TouchableHighlight,
  StyleSheet,
  View,
  Text,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// import { Button } from "react-native-paper";
import { Button, Icon } from "@rneui/base";
import theme from "../theme/theme";
import {
  UpdateCatequistaPromedio,
  addElementToArray,
} from "../Services/ProductosSrv";
import { useEffect, useState } from "react";

export const TarjetaCatequista = (props) => {
  useEffect(() => {
    console.log("..........................................URL", props.pedidos);

    const pedidosOrdenados = props.pedidos.sort(
      (a, b) => b.promedio - a.promedio
    );
    console.log("arrayOrdenado", pedidosOrdenados);
  }, []);
  const [promedio, setPromedio] = useState("0");

  const pedidosOrdenados = props.pedidos.sort(
    (a, b) => a.promedio - b.promedio
  );

  let ItemProduct = ({ prod, indice }) => {
    console.log(
      "------------------------------------------------------------------------------------------"
    );
    // console.log("Prod:", prod.NActivo);
    console.log("CALIFICACIONEs:", prod.calificaciones);
    let suma = 0;
    for (let i = 0; i < prod.calificaciones.length; i++) {
      suma += parseInt(prod.calificaciones[i]);
    }

    const promedio = suma / prod.calificaciones.length;

    console.log("Promedio:", promedio);
    console.log("suma:", suma);
    console.log("divid:", prod.calificaciones.length);

    UpdateCatequistaPromedio(prod.Nactivos, promedio);

    return (
      <ScrollView style={styles.impar}>
        <View style={{ margin: 10 }}>
          <View style={styles.ViewRow}>
            {/* <Text>Evento #</Text> */}
            <View style={{ justifyContent: "center" }}>
              <Text>Nombre: {prod.Nombre} </Text>
              <Text>Promedio: {isNaN(promedio) ? 0 : promedio.toFixed(2)} </Text>
              <Text>Ultimo comentario:{prod?.comentarios[prod?.comentarios.length-1]}</Text>
            </View>
            
          </View>
          <TouchableHighlight
            onPress={() => {
              console.log(
                "prod----------------------------------",
                prod.Nactivos
              );
              props.navegar.navigate("AniadiCatequista", { id: prod.Nactivos });
            }}
          >
            <Text>Calificar</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  };

  return (
    <FlatList
      data={pedidosOrdenados}
      renderItem={(e) => {
        return <ItemProduct indice={e.Nactivos} prod={e.item} />;
      }}
      keyExtractor={(item) => {
        return item.id;
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  impar: {
    width: "98%",
    height: 200,
    margin: 2,
    backgroundColor: "#fff",
    borderRadius: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
    // Aplicar el efecto 3D
    // transform: [{ rotateY: '45deg' }, { perspective: 1000 }],
    // Añadir sombra para resaltar el efecto 3D
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 4, // Para Android,
  },
  ViewRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    // backgroundColor:"blue"
  },

  titulo: {
    fontSize: 30,
    fontFamily: "sans-serif-condensed",
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#F03E0A",
    letterSpacing: 3,
  },
  Inputs: {
    borderBottomColor: "#82B5FA",
    borderBottomWidth: 2,
    borderBottomLeftRadius: 3.7,
    borderBottomRightRadius: 3.7,
    backgroundColor: "#B3DDF2",
    margin: 20,
    marginTop: 2,
    marginLeft: 1,
    shadowColor: "#0000",
    shadowRadius: 100,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonS: {
    borderRadius: 20,
    padding: 30,
    paddingHorizontal: 40,
    backgroundColor: "#6B7FE3",
    margin: 10,
  },
  buttonP: {
    borderRadius: 20,
    padding: 30,
    paddingHorizontal: 40,
    backgroundColor: "#82B5FA",
    margin: 10,
  },
  cajaCabecera: {
    //backgroundColor: 'cyan',
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 50,
  },
  cajaCuerpo: {
    // backgroundColor: 'brown',
    flex: 5,
    alignItems: "stretch",
    paddingHorizontal: 30,
    justifyContent: "flex-start",
  },
  titulo: {
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 39,
  },
  cajaBotones: {
    //backgroundColor: 'red',
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "flex-start",
    flex: 1,
  },
});
