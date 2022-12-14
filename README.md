# Api para gerenciar cadastro de profissionais

Olá! Esta é uma simples API para cadastro, deleção, atualização e listagem de profissionais.
Extremamente útil tanto para MVP's que utilizam um sistema de Login ou até mesmo para um norte inicial de um projeto escalado.
Ela foi feita utilizando Node.JS, Mongoose e Mongo DB como banco de dados.

### 📋 Pré-requisitos

Você precisa possuir Node.js instalado em sua máquina, este projeto foi feito utilizando a versão 17.7.2

```

```

### 🔧 Instalação

- Rode NPM install
- Em seguida você já pode utilizar esta API com npm start

```
- A principal rota é:
http:localhost:8080/user

- Com esta URL você pode realizar uma chamada de get para listar todos usuários cadastros.
- Um POST, enviando um Body com name, salary, approved em formato JSON.
- Ex de Body:
{
	"name": "Raphael",
	"salary": 10.000,
  approved: true
}

```

- Para realizar uma chamada de put, delete ou de um usuário específico, você deve adicionar o ID de um usuário, por exemplo:
- http://localhost:8080/person/63643c323e0cba3871d86d57
- Caso seja uma chamada PUT, deve conter o Body que deseja alterar.

```

```

## 🛠️ Construído com

Mencione as ferramentas que você usou para criar seu projeto

- [Node.JS](https://nodejs.org/en/)
- [Mongoose](https://mongoosejs.com/)
- [MongoDB](https://www.mongodb.com/)

## ✒️ Autores

- **Raphael Mardine** - _Desenvolvedor_ - [RaphaelMardine](https://github.com/RaphaelMardine)

---

⌨️ com ❤️ por [Raphael Mardine](https://gist.github.com/RaphaelMardine) 😊
