# 🎥 Explicación de la Clase `YouTubeVideoQueue`

Esta clase permite gestionar una cola de videos de YouTube, obtener los videos más populares y mostrarlos en una interfaz de usuario. A continuación, te explico cómo funciona cada parte:

---

## 🛠 **Constructor**

- **Propósito**: Inicializa la clase y prepara todo para su funcionamiento.
- **Detalles**:
  - 🗝️ Almacena la **clave de API de YouTube** para realizar peticiones.
  - 📥 Crea una **cola vacía** utilizando la clase `Queue`.

---

## 📡 **Método `fetchPopularVideos()`**

- **Propósito**: Obtiene los **20 videos más populares** de YouTube.
- **Detalles**:
  - 🌐 Realiza una petición a la **API de YouTube** para obtener los videos.
  - 🎯 Filtra los videos más populares y solicita detalles como el título, el canal, las vistas y la miniatura.
  - 🧹 Limpia la cola de videos existente antes de agregar los nuevos.
  - 📥 Encola cada video en la cola, almacenando solo la información esencial.
  - 🔄 Retorna la cola llena con los videos populares.

---

## 🖼️ **Método `displayVideos()`**

- **Propósito**: Muestra los videos en la **interfaz de usuario**.
- **Detalles**:
  - 🎬 Obtiene el contenedor HTML donde se mostrarán los videos.
  - 🧹 Limpia el contenedor para evitar duplicados.
  - 📥 Crea una **cola temporal** para preservar los videos mientras se procesan.
  - 🖌️ Genera una **tarjeta** para cada video con:
    - 🖼️ Una **miniatura** del video.
    - 📝 El **título** del video.
    - 📺 El **nombre del canal**.
    - 👀 El **número de vistas** (formateado con separadores de miles).
    - 🔗 Un **enlace** para ver el video en YouTube.
  - 🎉 Agrega las tarjetas al contenedor para que el usuario las vea.
  - 🔄 Restaura la cola original desde la copia temporal.

---

## 🎯 **Resumen**

- 🛠 **Constructor**: Prepara la clase para su uso.
- 📡 **fetchPopularVideos()**: Obtiene y encola los videos más populares.
- 🖼️ **displayVideos()**: Muestra los videos en la interfaz de usuario.

---

Con esta clase, puedes integrar fácilmente los videos más populares de YouTube en tu aplicación web y mostrarlos de manera clara y atractiva. ¡Espero que te sea útil! 🚀

---

### Notas adicionales:
**No tiene la api, aun tengo que ver como colocarla sin que me la roben**
![image](https://github.com/user-attachments/assets/bc085e25-8319-4ec7-93eb-cc5c2fb67c1f)
