---------------------aula 01--------------------------

Criando o Projeto com npx create-next-app podcastrnext

---------------------aula 02------------------------------
Instalando o typescript no next pois não é integrado naturalmente

yarn add typescript @types/react @types/node -D

instalar o sass pra estilização

yarn add sass

biblioteca para a data

yarn add date-fns

Instalar o Json server para mockar uma API FAKE em desenvolvimento

yarn add json-server -D

e configurar o script no package.json

---------------------------- Aula 3 ----------------------

Construção da home através dos dados coletados anteriormente na API FAKE

instalando o axios para substituir o fetch para consumir API

yarn add axios

----------------------------------aula 04----------------------
Criação do player Context, onde colocamos: 
PlayerContext.Provider value={''}
por fora dos components e podemos acessar o valor do mesmo dentro do index.tsx

const player = useContext(PlayerContext);

colocando ele dentro de qualquer tag html entre chaves

Últimos lançamentos {player}

instalar o yarn add rc-slider
