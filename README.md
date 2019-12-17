# Bootcamp-Backend-Reprograma
Repositório com o projeto final do curso intensivo de Back End Reprograma desenvolvido por Thiele Nunes.

Curso patrocinado pela Accenture e pela Estação Hack (FACEBOOK)
Grade Curricular:
HTML/CSS
JavaScript
API
Testes Unitários
Scrum
NODE.JS
MongoDB
Orientação Profissional


# API Disk Help 📖 
O projeto "Disk Help", possui como  objetivo de disponibilizar aos usuários um Banco de Dados colaborativo de hospitais e grupos de apoio que façam atendimento psicológico gratuito. 

# Passo a passo da API:

npm init
npm install express
npm install mongoose
npm install -D nodemon
npm install body-parser
.gitignore com node_modules
criar o app.js rodando na porta de sua preferência, a escolhida nesse projeto foi a 3000.

npm install dotenv-safe e verificar a versão ^6.1.0 no package.json.


# Requisitos do projeto
A API deve possuir CRUD (Create, Read, Update e Delete).

# Os pontos construidos desse projeto são:

router.get('', controller.getAll) deve trazer uma lista de hospitais
router.post ('', controller.addHospitais) adiciona um hospital
router.get('/:id', controller.getById) procura o hospital por id
router.patch('/:id', controller.update) atualiza informações sobre o hospital cadastrado
router.delete('/:id', controller.remove) remove um hospital

router.get('', controller.getAll) deve trazer uma lista de grupos
router.post('', controller.addGrupos) adiciona um grupo
router.get('/:id', controller.getById) procura o grupo por id
router.patch('/:id', controller.update) atualiza informações sobre o grupo cadastrado
router.delete('/:id', controller.remove) remove um grupo
