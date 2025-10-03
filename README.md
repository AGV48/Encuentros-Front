# 📄 Encuentros – Segunda Entrega

Realizado por:
- Alejandro Gutierrez Vallejo
- Tomas Ramirez Agudelo
- Sara Pineda Valencia

---

## 🎯 Objetivo de la Aplicación
La aplicación **Encuentros** es una SPA (Single Page Application) desarrollada en **Angular**, que busca gestionar los encuentros/salidas/reuniones de los usuarios.  
El objetivo principal de esta entrega es aplicar buenas prácticas de desarrollo vistas en clase, incluyendo separación de componentes, validaciones, uso de servicios y almacenamiento en `localStorage`.

---

## ⚙️ Funcionamiento y Flujos Implementados
Actualmente se encuentran desarrollados los siguientes flujos:

1. **Registro de usuario**
   - Formulario de registro con validaciones de campos.
   - Almacenamiento del usuario en `localStorage`.
   - Control de usuarios duplicados.

2. **Inicio de sesión**
   - Validación de credenciales ingresadas.
   - Redirección al área principal si el login es correcto.
   - Persistencia de sesión en `localStorage`.

3. **Funcionalidades adicionales**
   - Funcionalidad para cerrar sesion y salir de la aplicación.
   - Actualizacion de datos: Nombre usuario, contraseña.
   - Funcionalidad para eliminar cuenta.

### Para la entrega final quedan pendientes:
- Mejoras en validaciones (contraseñas seguras, etc.).
- Implementar funcionalidades principales:
  - Creación de encuentro.
  - Agregar amigos.
  - Añadir amigos a un encuentro.
  - Administrar encuentro.

---

## 🗂 Modelo de Datos
La aplicación almacena los usuarios y sesiones en el `localStorage` con las siguientes estructuras:

### Usuario
```json
{
"id": 1,
"nombre": "Usuario Demo",
"email": "demo@correo.com",
"password": "123456"
} 
```



También guardamos la sesion actual:
```json
{
"usuarioId": 1,
"activo": true
} 
```

---

## ▶️ Instrucciones de Instalación y Ejecución

1. Clonar el repositorio

```bash
git clone https://github.com/AGV48/Encuentros-Front.git

cd Encuentros-Front 
```

2. Instalar dependencias

Asegúrate de tener Node.js y Angular CLI instalados.

- Para verificar Node.js:
```bash
node -v
```

- Para instalar Angular CLI (si no lo tienes):
```bash
npm install -g @angular/cli
```

Luego instala las dependencias del proyecto:
```bash
npm install
```

3. Levantar el servidor de desarrollo
```bash
ng serve -o
```

4. Acceder a la aplicación

Abre el navegador en: `http://localhost:4200/`

---

## 5. Uso básico

**Registro:** crea un nuevo usuario con nombre, correo y contraseña.

**Login:** ingresa con el usuario registrado.

**Gestión de cuenta:** podrás cerrar sesión, actualizar tus datos o eliminar la cuenta.
