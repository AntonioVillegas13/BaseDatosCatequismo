
import { View, Text, Alert, StyleSheet, FlatList, TouchableHighlight, ScrollView } from "react-native"
import { Button, FAB } from "@rneui/base"
import theme from "../../theme/theme";
import { TarjetaDetallePedidos } from "../../Components/DetPedido";
import { useEffect, useState } from "react";
import { CambiarPedidoNoProcesado, consultarUnPedido } from "../../Services/ProductosSrv";
import StyledText from "../../Components/StyledText";
import Header from "../../Components/Header";
import { TarjetaDetalleActivo } from "../../Components/DetActivo";
import { consultarUnActivo, consultarUnContenido } from "../../Services/ActivosSrv";
import { TarjetaDetalleContenido } from "../../Components/DetContenido";

export const DetalleContenido = ({ route, navigation }) => {
    const { id } = route.params;
    const [ObjPedido, setObjPedido] = useState({});
    useEffect(() => {
        consultar();


    }, [])

    
    const consultar = async () => {


        await consultarUnContenido(id, setObjPedido);
        console.log("---------------------------OBJPedido", ObjPedido)

    }




    return (
        <View>
            <ScrollView>
                <Header back={() => navigation?.goBack()} />
                <StyledText title bold center>Informacion del Contenido</StyledText >
                <View style={{ alignItems: "center" }}>
                </View>




                <View>
                    <TarjetaDetalleContenido
                        item={id}
                        objPedido={ObjPedido}
                    />

                </View>


                <View>



                </View>

            </ScrollView>








           
        </View>
    )

} 
