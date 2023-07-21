import { useEffect } from "react";
import {
  FlatList,
  ScrollView,
  TouchableHighlight,
  StyleSheet,
  View,
  Text,
  Linking,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import theme from "../theme/theme";
import PedidoCard from "./PedidoCard";
import StyledText from "./StyledText";
import { Button } from "react-native-paper";
// import { Icon } from "@rneui/base";
import Icon from "react-native-vector-icons/FontAwesome"; // Importa el icono desead
export const TarjetaDetalleContenido = (props) => {
  const Pedido = props.item;
  const ObjPedido = props.objPedido;
  console.log("PEDIDO", Pedido);
  console.log("PEDIDO OBJETO", ObjPedido);
  console.log("PEDIDO OBJETO", ObjPedido);
  const openMap = () => {
    const url = `geo:0,0?q=${ObjPedido.coordenadas?.latitude},${ObjPedido.coordenadas?.longitude}`;
    console.log("url:", url);
    Linking.openURL(url).catch((error) =>
      console.log("Error al abrir Google Maps en el navegador:", error)
    );
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Image
          style={{ width: 200, height: 200 }}
          resizeMode="contain"
          source={{
            uri: item,
          }}
        />
      </View>
    );
  };
  const renderItem2 = ({ item }) => {
    return (
      <View style={styles.item}>
        <StyledText>{item}</StyledText>
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={styles.section}>
        <ScrollView contentContainerStyle={styles.content}>
          <View style={{ flexDirection: "column" }}>
            <StyledText subtitle bold margin>
              Titulo{" "}
            </StyledText>
            <StyledText bold margin>
              {ObjPedido.Titulodelcontenido}
            </StyledText>
          </View>

          <View style={{ flexDirection: "column" }}>
            <StyledText subtitle bold margin>
              Descripcion{" "}
            </StyledText>
            <StyledText bold margin>
              {ObjPedido.Descripcion}
            </StyledText>
          </View>
        </ScrollView>

        <View></View>
        {/* 
        <ScrollView horizontal={true} contentContainerStyle={styles.content}>
          <View style={{ flexDirection: "column" }}>
            <StyledText subtitle bold margin>
              Disponibilidad{" "}
            </StyledText>
            <StyledText bold margin>
              {ObjPedido.Disponibilidad}
            </StyledText>
          </View>
          <View style={{ flexDirection: "column" }}>
            <StyledText subtitle bold margin>
              Integridad{" "}
            </StyledText>
            <StyledText bold margin>
              {ObjPedido.Integridad}
            </StyledText>
          </View>
          <View style={{ flexDirection: "column" }}>
            <StyledText subtitle bold margin>
              Confidencialidad{" "}
            </StyledText>
            <StyledText bold margin>
              {ObjPedido.Confidencialidad}
            </StyledText>
          </View>

          <View style={{ flexDirection: "column" }}>
            <StyledText subtitle bold margin>
              VA{" "}
            </StyledText>
            <StyledText bold margin>
              {ObjPedido.VA}
            </StyledText>
          </View>
        </ScrollView> */}
      </View>

      <View>
        <View style={{ alignItems: "center" }}>
          <StyledText subtitle bold margin>
            Imagen{" "}
          </StyledText>

          <FlatList
            data={ObjPedido?.arrayImagenes}
            renderItem={renderItem}
            horizontal
            // pagingEnabled
            // onEndReachedThreshold={0.1}
            // keyExtractor={item => item.id}
          />
          <StyledText title>Correo de los Suscriptores</StyledText>
          <FlatList
            data={ObjPedido?.Suscriptores}
            renderItem={renderItem2}
            horizontal
            // pagingEnabled
            // onEndReachedThreshold={0.1}
            // keyExtractor={item => item.id}
          />

          {/* <Image
              style={{ width: 200, height: 200 }}
              resizeMode="contain"
            source={{
              uri: ObjPedido?.arrayImagenes[0]  }}
          /> */}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  section: {
    // marginBottom:: 20,
    // backgroundColor:"red"
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  content: {
    paddingHorizontal: 20,
  },
  item: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "gray",
    padding: 20,
    marginHorizontal: 10,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    margin: 20,
  },
  item: {
    // backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    borderRadius: 8,
    flexDirection: "row",
  },
});
