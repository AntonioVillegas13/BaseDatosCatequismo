

import { collection, doc, getDocs, setDoc, addDoc, getDoc, query, where, arrayUnion, updateDoc } from 'firebase/firestore'


export const guardar = (producto) => {
    console.log(global.dbCon);
    const productRef = doc(global.dbCon, "Pedidos", producto.codigo);
    setDoc(productRef, producto);
}

export const guardar2 = (producto) => {
    console.log(global.dbCon);
    const productRef = collection(global.dbCon, "Pedidos");
    addDoc(productRef, producto);
}

export const consultar = async (fnsetPedidos) => {
    //console.log("globla",global.dbCon);
    const productoRef = collection(global.dbCon, "Pedidos");
    const SnapPedidos = await getDocs(productoRef);
    let PedidoArray = []
    SnapPedidos.forEach((documento) => {
        console.log("doc", documento.data());
        if (documento.data().codigo === "hX4gT8sDdRPCO5N6qt5mykIUa9g2") {
            console.log("doce", documento.data());
            PedidoArray.push(documento.data());
        }



    });

    fnsetPedidos(PedidoArray)
    console.log("pediFunc", PedidoArray);

}


export const consultarProducto = async () => {
    //console.log("globla",global.dbCon);
    const productoRef = collection(global.dbCon, "Producto");
    const SnapProductos = await getDocs(productoRef);
    let ProductosArray = []
    SnapProductos.forEach((documento) => {
        console.log("doc", documento.data());
        ProductosArray.push(documento.data());

    });

    global.ListaProducto = ProductosArray
    console.log("productoFunc", ProductosArray);

}

export const enviarPedidos = (pedido) => {
    const pedidoRef = doc(global.dbCon, "Pedidos", pedido.codigo);
    setDoc(pedidoRef, pedido);




}

export const CambiarProducto=(producto)=>{
    console.log(global.dbCon);
    const productRef = doc(global.dbCon, "Producto", producto.id);
    setDoc(productRef, producto);
}

export const AddProduct=(producto)=>{
    console.log(global.dbCon);
    const productRef = doc(global.dbCon, "Producto", producto.id);
    setDoc(productRef, producto);

}



export const consultarUnPedido = async (id,fnsetObj) => {
    //console.log("globla",global.dbCon);
    const productoRef = doc(global.dbCon, "Pedidos",id);
    const docSnap = await getDoc(productoRef);
    console.log("dsfdsfdfdsfdsfds",docSnap.data());

    let PedidoObj = {}
    PedidoObj=docSnap.data();
    fnsetObj(PedidoObj);
    // console.log("productoFunc", PedidoObj);

}


export const consultarProcesado = async (fnsetPedidos) => {
    
    // console.log("global--------------------------------",Id);
    // const productoRef = collection(global.dbCon, "Pedidos");
    const productoRef= query(collection(global.dbCon, "Pedidos"), where("StatusPedido", "==", true));
    const SnapPedidos = await getDocs(productoRef);
    let PedidoArray = []
    await SnapPedidos.forEach((documento) => {
        console.log("doc", documento.data());
       
            console.log("doce-------------------", documento.data());
            PedidoArray.push(documento.data());
        



    });

    fnsetPedidos(PedidoArray)
    console.log("pediFunc2", PedidoArray);

}


export const consultarNoProcesado = async (fnsetPedidos) => {
    
    // console.log("global--------------------------------",Id);
    // const productoRef = collection(global.dbCon, "Pedidos");
    const productoRef= collection(global.dbCon, "Certificados");

    const SnapPedidos = await getDocs(productoRef);
    let PedidoArray = []
    await SnapPedidos.forEach((documento) => {
        console.log("doc", documento.data());
       
            console.log("doce-------------------", documento.data());
            PedidoArray.push(documento.data());
            console.log("ARRAY DENTRO SRT")
    });

    fnsetPedidos(PedidoArray)
    console.log("pediFunc2", PedidoArray);

}



export const consultarContenido= async (fnsetPedidos) => {
    
    // console.log("global--------------------------------",Id);
    // const productoRef = collection(global.dbCon, "Pedidos");
    const productoRef= collection(global.dbCon, "Tareas");

    const SnapPedidos = await getDocs(productoRef);
    let PedidoArray = []
    await SnapPedidos.forEach((documento) => {
        console.log("doc", documento.data());
       
            console.log("doce-------------------", documento.data());
            PedidoArray.push(documento.data());
            console.log("ARRAY DENTRO SRT")
    });

    fnsetPedidos(PedidoArray)
    console.log("Contenidosrray", PedidoArray);

}



export const consultarCatequistas= async (fnsetPedidos) => {
    
    // console.log("global--------------------------------",Id);
    // const productoRef = collection(global.dbCon, "Pedidos");
    const productoRef= collection(global.dbCon, "Catequistas");

    const SnapPedidos = await getDocs(productoRef);
    let PedidoArray = []
    await SnapPedidos.forEach((documento) => {
        console.log("doc", documento.data());
       
            console.log("doce-------------------", documento.data());
            PedidoArray.push(documento.data());
            console.log("ARRAY DENTRO SRT")
    });

    fnsetPedidos(PedidoArray)
    console.log("Contenidosrray", PedidoArray);

}


export const addElementToArray = async (userId, newElement) => {
    try {
        const washingtonRef = doc(global.dbCon, "Tareas", userId);
        const docSnap = await getDoc(washingtonRef);
        console.warn(washingtonRef)
        // fnsetObj(PedidoObj);
        // console.log("productoFunc", PedidoObj);
        const arreglo= await docSnap.data()?.Suscriptores
        
        if (!arreglo.includes(newElement)) {
            console.log('El elemento no está presente en el array.');
            await updateDoc(washingtonRef, {
            revisores: arrayUnion(newElement),
            statusTarea:true
        });
          } else {
            console.log('El elemento está presente en el array.');
          }

        // await updateDoc(washingtonRef, {
        //     Suscriptores: arrayUnion(newElement)
        // });

      console.log('Elemento agregado al array correctamente.');
    } catch (error) {
      console.error('Error al agregar el elemento al array:', error);
    }
  };




  export const addElementToArrayCatequista = async (userId, newElement,newElement2) => {
    try {
        const washingtonRef = doc(global.dbCon, "Catequistas", userId);
        const docSnap = await getDoc(washingtonRef);
        console.warn(washingtonRef)

        console.warn("id",userId)
        console.warn("id",newElement)

        // fnsetObj(PedidoObj);
        // console.log("productoFunc", PedidoObj);
        
        
            await updateDoc(washingtonRef, {
            calificaciones: arrayUnion(newElement),
            comentarios:arrayUnion(newElement2)
        });

        // await updateDoc(washingtonRef, {
        //     Suscriptores: arrayUnion(newElement)
        // });

      console.log('Elemento agregado al array correctamente.');
    } catch (error) {
      console.error('Error al agregar el elemento al array:', error);
    }
  };


  export const UpdateCatequistaPromedio = async (userId, newElement) => {
    try {
        const washingtonRef = doc(global.dbCon, "Catequistas", userId);
        const docSnap = await getDoc(washingtonRef);
        console.warn(washingtonRef)

        console.warn("id",userId)
        console.warn("id",newElement)

        // fnsetObj(PedidoObj);
        // console.log("productoFunc", PedidoObj);
        
        
            await updateDoc(washingtonRef, {
            promedio:newElement
        });

        // await updateDoc(washingtonRef, {
        //     Suscriptores: arrayUnion(newElement)
        // });

      console.log('Elemento agregado al array correctamente.');
    } catch (error) {
      console.error('Error al agregar el elemento al array:', error);
    }
  };











export const consultar1Contenido=async(fnsetPedidos)=>{

    

    // console.log("global--------------------------------",Id);
    //console.log("globla",global.dbCon);
    const productoRef = collection(global.dbCon, "Tareas");
    const SnapProductos = await getDocs(productoRef);
    let ProductosArray = []
    SnapProductos.forEach((documento) => {
        console.log("doc", documento.data());
        ProductosArray.push(documento.data());

    });
    console.log("total dentro A-"+(ProductosArray.length+1))
    fnsetPedidos("Tarea-"+(ProductosArray.length+1))
}




export const CambiarPedidoNoProcesado=(PedidoAux)=>{
    console.log(global.dbCon);
    console.log("-----------------------pediAux",PedidoAux)
    const productRef = doc(global.dbCon, "Pedidos", PedidoAux.id);
    setDoc(productRef, PedidoAux);
}