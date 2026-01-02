📌 Descrição
Sistema de Autenticação em React Native com Expo

Este projeto implementa um sistema completo de autenticação em React Native utilizando Expo, com gerenciamento de estado feito com Zustand e persistência segura de dados usando react-native-mmkv.

A autenticação é baseada em JWT (JSON Web Token), com suporte a Access Token e Refresh Token, garantindo maior segurança e uma experiência fluida para o usuário, mesmo após reiniciar o aplicativo.

🚀 Tecnologias Utilizadas

- React Native
- Expo
- Zustand (gerenciamento de estado)
- react-native-mmkv (armazenamento rápido e seguro)
- JWT (Access Token + Refresh Token)
- TypeScript

🔐 Funcionalidades

- Login de usuário
- Persistência de sessão com MMKV
- Refresh automático do token
- Controle de autenticação global via Zustand
- Estrutura organizada e escalável

## 💻 Projeto
Este projeto serve como base para aplicações mobile que necessitam de autenticação moderna, segura e performática.

## 🎨 Layout

<img alt="01" src="https://github.com/user-attachments/assets/2681e852-65c8-4db2-bf37-b25179d222d2" height="270" width="130" />
<img alt="02" src="https://github.com/user-attachments/assets/eee74b9c-4b28-4493-a78d-94e14c1eb65d" height="270" width="130" />
<img alt="03" src="https://github.com/user-attachments/assets/5ff34656-8048-4cc1-84fc-c13ebd715bc2" height="270" width="130" />
<img alt="04" src="https://github.com/user-attachments/assets/c7ea2c23-22dd-4c3e-81df-543910972b4a"  height="270" width="130" />

### Melhorias Mobile

- [x] Tipar retorno de dados de usuários
- [x] Colocar icones nas abas
- [x] Configurar safeArea
- [x] Configurar statusbar
- [x] Apresentar layout no read.me


## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
