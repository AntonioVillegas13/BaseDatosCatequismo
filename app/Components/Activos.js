import {
  FlatList,
  ScrollView,
  TouchableHighlight,
  StyleSheet,
  View,
  Text,
  Image,
} from "react-native";

export const TarjetaActivos = (props) => {
  let ItemProduct = ({ prod, indice }) => {
    console.log("Prod:", prod);
    console.log("Prod:", prod.NActivo);

    return (
      <View style={styles.impar}>
        <TouchableHighlight
          onPress={() => {
            console.log("prod----------------------------------", prod.NActivo);
            props.navegar.navigate("DetalleActivo", { id: prod.NActivo });
          }}
        >
          <View style={{ margin: 10 }}>
            <View style={styles.ViewRow}>
              {/* <Text>Evento #</Text> */}
              <View style={{ justifyContent: "center" }}>
                <Text> {prod.NActivo + "" + prod.Nombre} </Text>
              </View>
              <Image
                source={{ uri: prod?.arrayImagenes[0] }}
                style={{ width: 100, height: 100, margin: 20 }}
              />
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  };

  return (
    <FlatList
      data={props.pedidos}
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
    height: 140,
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
