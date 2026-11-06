//function showMessages() {
//    setTimeout(() => {
//        console.log("¿1, 2, 3?");
//        setTimeout(() => {
//            console.log("¿1, 2, 3?");
//            setTimeout(() => {
//                console.log("¿1, 2, 3?");
//            }, 1000);
//        }, 1000);
//    }, 1000);
//}
//showMessages();




//function getNumberAsync() {
//    return new Promise((resolve, reject) => {
//        const number = Math.floor(Math.random()*10)
//
//        if (number > 5) {
//            resolve(number)
//        } else {
//            reject("Nümero", number, "muy bajo")
//        }
//    }, 1000);
//}

//getNumberAsync()
//    .then((number) => {
//        console.log("El número es:", number);
//    })
//    .catch((error) => {
//        console.error("Error:", error);
//    })
//    .finally(() => {
//        console.log("Esto pasa si o si")
//    })





//CREAR UNA FUNCION QUE SALUDE CON UNA PROMESA

//function greetAsync(name) {
//    return new Promise((resolve, reject) => {
//        if (typeof name !== "string") {
//            reject("El nombre debe ser una cadena de texto");
//        } else {
//            resolve(`¡Hola, ${name}!`);
//        }
//    });
//}

//greetAsync("Lucero")
//    .then((greeting) => {
//        console.log(greeting);
//    })
//    .catch((error) => {
//        console.error(error);
//    })
//    .finally(() => {
//        console.log("...")
//    })


//OTRA FORMA
//function greetAsync(name) {
//    return new Promise((resolve) => {
//        console.log("Esperando para saludar...");
//        setTimeout(() => {
//            resolve(`¡Hola, ${name}!`);
//        }, 1000);
//    });
//}

//greetAsync("Lucero")
//    .then((msg) => {
//        console.log(msg)
//    })






//Async/Await
// async/await permite escribir código asíncrono “como si fuera paso a paso”.
// Detrás de escena, sigue usando promesas, pero con una sintaxis más legible.

//function fetchUser() {
  // Devuelve una promesa que se cumple después de 1 segundo
//  return new Promise((resolve) => {
//    setTimeout(() => resolve("Usuario cargado"), 1000);
//  });
//}

//function fetchPosts() {
  // Devuelve otra promesa (simulamos los posts del usuario)
//  return new Promise((resolve) => {
//    setTimeout(() => resolve(["Post 1", "Post 2"]), 1500);
//  });
//}

// Usamos "async" para poder usar "await" dentro
//async function showData() {
//  console.log("Cargando datos...");

  // "await" pausa la ejecución dentro de esta función
  // hasta que la promesa se resuelva (sin bloquear el resto del programa)
//  const user = await fetchUser();
//  console.log(user);

//  const posts = await fetchPosts();
//  console.log("Posts del usuario:", posts);

//  console.log("Todo cargado!");
//}

//showData();



// ============================================
// CHALLENGE: “Mini Dashboard”
// ============================================
// Simulá un sistema que cargue *dos recursos* en orden usando async/await:
// loadUser() → devuelve "👤 Usuario conectado" .
// loadNotifications() → devuelve ["🔔 Notificación 1", "🔔 Notificación 2"] .
//
// Mostrá los datos en consola en orden, con un mensaje final "✅ Dashboard listo!"  .
// (Pista: usá `await` para esperar cada promesa antes de continuar.)


function LoadUser() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Usuario conectado"), 1000);
    });
};

function LoadNotifications() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(["Nitificación 1", "Notificación 2"]), 1500);
    });
};

async function showDashboard() {
    console.log("Dashboard cargando...")

    const user = await LoadUser();
    console.log(user);

    const notifications = await LoadNotifications();
    console.log("Notificaciones recibidas:", notifications);

    console.log("Dashboard listo!");
}

showDashboard();