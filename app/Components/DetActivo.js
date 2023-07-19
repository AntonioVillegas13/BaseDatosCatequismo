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
export const TarjetaDetalleActivo = (props) => {
  const Pedido = props.item;
  const ObjPedido = props.objPedido;
  console.log("PEDIDO", Pedido);
  console.log("PEDIDO OBJETO", ObjPedido);
  console.log("PEDIDO OBJETO", ObjPedido);
  const openMap = () => {
    const url = `https://www.google.com/maps?q=${ObjPedido.coordenadas?.altitude},${ObjPedido.coordenadas?.accuracy}`;

    Linking.openURL(url);
  };
  return (
    <ScrollView>
      <View style={styles.section}>
        <ScrollView horizontal={true} contentContainerStyle={styles.content}>
          <View style={{ flexDirection: "column" }}>
            <StyledText subtitle bold margin>
              NDonativo{" "}
            </StyledText>
            <StyledText bold margin>
              {/* {ObjPedido?.NActivo} */}
              {ObjPedido?.NActivo}
            </StyledText>
          </View>
          <View style={{ flexDirection: "column" }}>
            <StyledText subtitle bold margin>
              Donador{" "}
            </StyledText>
            <StyledText bold margin>
              {ObjPedido.donador}
            </StyledText>
          </View>

          <View style={{ flexDirection: "column" }}>
            <StyledText subtitle bold margin>
              Tipo{" "}
            </StyledText>
            <StyledText bold margin>
              {ObjPedido.Tipo}
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

          <View style={{ flexDirection: "column" }}>
            <StyledText subtitle bold margin>
              Razon Social{" "}
            </StyledText>
            <StyledText bold margin>
              {ObjPedido.Razon_Social}
            </StyledText>
          </View>

          <View style={{ flexDirection: "column" }}>
            <StyledText subtitle bold margin>
              Ubicacion
            </StyledText>
            <TouchableOpacity
              onPress={openMap}
              style={{ marginHorizontal: 50 }}
            >
              <Icon
                type="FontAwesome"
                name="map-marker"
                size={30}
                color="#000"
              />
            </TouchableOpacity>
            <StyledText center>Click Aqui!!</StyledText>
          </View>
        </ScrollView>

        <View>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
        </View>
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
        <View style={{ flexDirection: "column" ,alignItems:"center" }}>
          <StyledText subtitle bold margin>
            Imagen{" "}
          </StyledText>
          <Image
              style={{ width: 200, height: 200 }}
              resizeMode="contain"F
            source={{
              uri: ObjPedido?.url   }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: 20,
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
  logo:{
    margin:20
  }
});
