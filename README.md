# 🌿 Plant Alerts App
O Plant Alerts App foi pensado com a proposta de ajudar os usuários a gerenciar o cuidado com suas plantas, permitindo o cadastro de plantas e a configuração de notificações para lembrá-los de regá-las no momento desejado.

Projeto desenvolvido para a disciplina **Desenvolvimento De Projetos Para Dispositivos Móveis - TSI35A** da UTFPR - Guarapuava.

## 📋 Sobre o app
O Plant Alerts App foi pensado para ajudar pessoas a se lembrarem de regar suas plantas no momento certo, especialmente para aqueles que têm dificuldade de manter uma rotina de cuidados devido à correria do dia a dia. O aplicativo permite cadastrar as plantas e configurar notificações para lembrar o usuário quando é hora de regar.

### 🌟 Funcionalidades principais:
- **Cadastro e login de usuário**:
O app requer nome, email e senha para que o usuário possa acessar e manter suas plantas cadastradas, mesmo em dispositivos diferentes.

- **Página principal**:
Exibe todas as plantas cadastradas e permite que o usuário desative notificações de uma planta sem precisar acessar a edição.

- **Cadastro de novas plantas**:
Ao adicionar uma nova planta, o usuário pode incluir o nome e uma imagem (opicional). Também é possível selecionar os dias e o horário em que deseja receber notificações para regar a planta.

- **Edição de plantas**:
O usuário pode editar as informações de uma planta a qualquer momento e até excluir a planta, caso necessário.

- **Notificações**: Envio de lembretes nos dias e horários escolhidos pelo usuário para lembrar de regar cada planta cadastrada.

- **Desativação de notificações**:
O usuário pode desativar as notificações para plantas individuais diretamente na página principal.

### 💡 Possíveis funcionalidades adicionais (ou trabalhos futuros)
- **Sugestões de cuidados personalizados**: Ao cadastrar uma nova planta, o app poderá sugerir a frequência ideal de rega e oferecer dicas específicas de cuidados, com base no nome informado pelo usuário.
- **Reconhecimento de plantas por imagem**: Utilização de uma API de identificação para sugerir automaticamente o nome da planta a partir de uma foto, facilitando o cadastro e contribuindo para sugestões de cuidados mais precisas.
- **Painel de estatísticas**: Exibição de dados sobre a rotina de cuidados com as plantas, como frequência de rega, histórico de notificações ignoradas e períodos em que a planta ficou sem rega.

### ✅ Checklist
- [ ] Cadastro e login de usuário
- [ ] Página principal
- [ ] Cadastro de novas plantas
- [ ] Edição de plantas
- [ ] Notificações
- [ ] Desativação de notificações
- [ ] Funcionalidades adicionais

## 🖼️ Protótipos de Tela
Visualização geral das telas do aplicativo:
![prototipo](https://github.com/user-attachments/assets/bda9b980-6598-4a28-acc5-0d0ce0d209df)

Você pode visualizar os protótipos das telas do aplicativo no Figma pelo link abaixo:

🔗 [Acessar protótipos no Figma](https://www.figma.com/proto/B4m8SvDlX1qFP5UjzbWzmG/Plant-Alerts-App?node-id=31-22&p=f&t=1eww5TX0ICyZ5NoO-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1)

## 🗃️ Modelagem do banco
![Modelagem do banco de dados](https://github.com/user-attachments/assets/a1ca3fce-3990-4ab3-85a3-e821f174ef33)

## 🗓️ Planejamento de Sprints

### ~~Semana 1 (30/03 a 05/04)~~
- [x] Definir qual será o app
- [x] Definir as funcionalidades

### ~~Semana 2 (06/04 a 12/04)~~
- [x] Criar protótipo
- [ ] Fazer a modelagem do banco de dados
- [x] Criar o repositório

### ~~Semana 3 (13/04 a 19/04) - Checkpoint 1~~
- [x] Verificar requisitos do checkpoint
- [x] Ajustes
- [x] Checkpoint 1

### ~~Semana 4 (20/04 a 26/04)~~
- [x] Configurar o roteamento com Expo Router
- [x] Criar tela
- [x] Criar componente personalizado

### ~~Semana 5 (27/04 a 03/05)~~
- [x] Criar tela
- [x] Criar componente personalizado

### ~~Semana 6 (04/05 a 10/05)~~
- [x] Criar tela
- [x] Garantir que todas as telas estejam populadas
- [x] Garantir navegação entre as telas criadas (pelo menos 3)

### ~~Semana 7 (11/05 a 17/05)~~
- [x] Ter pelo menos 2 componentes personalizados
- [x] Gravar vídeo mostrando a navegação
- [x] Organizar o repositório

### ~~Semana 8 (18/05 a 24/05) - Checkpoint 2~~
- [x] Verificar requisitos do checkpoint
- [x] Checkpoint 2

### Semana 9 (25/05 a 31/05)
- [ ] Implementar cadastro e login de usuário
- [ ] Implementar cadastro de plantas
- [ ] Criar restante das telas
- [ ] Ajustes

### Semana 10 (01/06 a 07/06)
- [ ] Implementar sistema de notificações
- [ ] Adicionar controle de ativar/desativar notificações por planta

### Semana 11 (08/06 a 14/06)
- [ ] Melhorar a experiência de uso (UI/UX)
- [ ] Verificar implementação de funcionalidades extras
- [ ] Testar o app completo em diferentes fluxo

### Semana 12 (15/06 a 21/06)
- [ ] Refatorar código e melhorar organização
- [ ] Ajustes finais
- [ ] Testes finais

### Semana 13 (22/06 a 28/06)
- [ ] Criar APK
- [ ] Gravar vídeo de defesa

### Semana 14 (29/06 a 05/07) - Checkpoint final
- [ ] Verificar requisitos do checkpoint
- [ ] Ajustes
- [ ] Checkpoint final

## Rodando o Projeto

Siga os passos abaixo para configurar e executar o projeto localmente.

### Passos para Instalação e Execução

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/beatriz-alves-silva/plant-alerts-app.git](https://github.com/beatriz-alves-silva/plant-alerts-app.git)
    ```
    *(Se você já tem o projeto clonado, pule esta etapa e apenas navegue até o diretório do projeto)*

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd plant-alerts-app
    ```

3.  **Instale as dependências:**
    O projeto utiliza NPM. Execute:
    ```bash
    npm install
    ```
    *(Se você preferir usar Yarn, pode usar `yarn install`)*

4.  **Execute o aplicativo:**
    ```bash
    npx expo start
    ```

5.  Após o comando `npx expo start`, um QR Code aparecerá no terminal.
    * **Para rodar no seu celular:** Abra o aplicativo Expo Go (disponível para [Android](https://play.google.com/store/apps/details?id=host.exp.exponent) e [iOS](https://apps.apple.com/us/app/expo-go/id982107779)) e escaneie o QR Code.
    * **Para rodar no emulador/simulador:**
        * Pressione `a` no terminal para abrir no emulador Android (requer Android Studio configurado).
        * Pressione `i` no terminal para abrir no simulador iOS (requer Xcode e macOS).
        * Pressione `w` no terminal para abrir a versão web no navegador.

## Atualizações desde o último checkpoint

Nesta etapa foi feita a configuração da estrutura base do aplicativo, no sistema de navegação incial e na criação dos primeiros componentes e telas. O próximo passo será implementar o cadastro de usuários e plantas (no momento é possível somente fazer a navegação entre as telas, sem autenticação, cadastros, etc...)

*A navegação entre telas pode ser vista [AQUI](https://drive.google.com/file/d/1CFQ55V5iAW8bjkjuJ3xdLTmWDtpsx7fi/view?usp=sharing).*

- Foi criado o arquivo store/authStore.ts com uma estrutura inicial de um store *Zustand*. Este store será utilizado para gerenciar o token de autenticação e o estado do login do usuário.
- As funcionalidades estão sendo desenvolvidas seguindo o *Feature Branch Workflow*
- Também criei algumas Issues's como "Configurações iniciais", e PR para integrar as configurações iniciais do *Expo Router* e *Zustand* à branch main utilizando o *Squash and Merge*
- As features foram desenvolvidas em branches dedicadas (*feat/plant-details, docs/readme-checkup*)
- *Expo Router* foi configurado como sistema de navegação. O package.json foi ajustado ("main": "expo-router/entry") e o plugin *expo-router* está no app.json
- O *_layout.tsx* foi criado utilizando *Stack.Navigator* para gerenciar a navegação
- **Telas navegáveis**:
    - *index.tsx* (tela de login)
    - *cadastro.tsx* (tela de cadastro)
    - *minhasPlantas.tsx* (tela principal, onde é possível visualizar todas as plantas cadastradas)
    - *detalhesPlanta.tsx* (tela para exibir os detalhes de cada planta)
- A navegação entre a lista de plantas (*minhasPlantas*) e a tela de detalhes (*detalhePlanta*) foi implementada usando router.push com passagem de parâmetros (*plantID, plantName, plantImageKey*)
- **Componentes reutilizáveis**:
    - *PlantCard.tsx* foi criado para representar cada item da lista da tela *minhasPlantas.tsx*, evitando a repetição desse componente
    - *PlantDetails.tsx* foi criado para encapsular a exibição das informações da planta na tela de detalhes (ainda não constam todas as informações da planta, apenas nome e imagem)
- Os componentes personalizados recebem dados e configurações via props:
    - *PlantCard* recebe id, name, imageSource, imageKey, e nextNotification
    - *PlantDetails* recebe name e imageSource
- Callbacks:
    - O componente *PlantCard.tsx*, ao ser pressionado (*TouchableOpacity*), dispara a função *handleCardPress* que utiliza o router para o evento de navegação, passando dados da planta selecionada