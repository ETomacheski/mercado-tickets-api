<h1 align=center>
<img src="" />
</h1>

<h3 align="center">
Projeto desenvolvindo durante a MegaHack, evento promovido pela Shawee.
</h3>

## **:rocket: Objetivo**

Somos uma plataforma que tem como objetivo agregar valor ao business do Mercado Livre, atribuindo a plataforma a venda de ingressos para eventos como: teatro, cinema, festas entre outros. Teremos a função de vendas em uma plataforma web, tendo nela dois tipo de usuários: o produtor de eventos e o cliente final. Na visão do cliente ele pode procurar por eventos e comprar os ingressos, já na visão do produtor ele pode criar os eventos e a quantidade de ingressos disponíveis. Para completar a validação do ingresso estamos gerando no aplicativo um QR Code que é lido pelo produtor do evento antes de liberar a entrada no mesmo.
## **:computer: Tecnologias**

#### **Website** React

  - **[React Router Dom][react_router_dom]**
  - **[React Icons][react_icons]**
  - **[Axios][axios]**
  - **[Leaflet][leaflet]**
  - **[React Leaflet][react_leaflet]**

#### **Server** NodeJS

  - **Express**
  - **CORS**
  - **Sequelize**
  - **Postgres**
  - **MercadoPago API**

### **Executando o Projeto**

#### **:rocket: Backend**
> 1. $npm install
> 2. $npm run dev
> 3. $npx sequelize db:migrate  (criação do banco de dados)

#### **:computer: Frontend**
> 1. $cd frontend
> 2. $npm install
> 3. $npm start
> 4. No seu navegador, acesse localhost:3000

#### **:iphone: Mobile**
> 1. $cd mobile
> 2. $npm install
> 3. $npm start
> 4. Abra o Expo no seu dispositivo móvel
> 5. Escaneie o QR Code
> 6. Enjoy!

