# 🎸 Full-Stack SilverHand

<img
  src="https://i.imgur.com/O1PcqfV.png"
  alt="Página de login de SilverHand"
  width="800"
/>

**SilverHand** é um e-commerce full-stack especializado em instrumentos de corda — como guitarras e contrabaixos, de 4 a 6 cordas — com um nome inspirado em um personagem do universo Cyberpunk.

> Desenvolvido como projeto final da disciplina de **Programação Web** na Fatec, porém este projeto foi feito com liberdade criativa e foco em boas práticas de desenvolvimento.

---

## ⚙️ Tecnologias Utilizadas

| **Front-End**    | **Back-End**       | **Testes / DevOps** |
| ---------------- | ------------------ | ------------------- |
| React            | Node.js            | Jest                |
| TypeScript       | Express.js         | Docker              |
| TailwindCSS      | PostgreSQL/Prisma  |                     |
| React Router DOM | JWT (autenticação) |                     |
| TanStack Query   | Zod                |                     |
| Zustand          | Nodemailer         |                     |

---

🧩 Back-end com **autenticação via JWT** e arquitetura baseada em **Clean Architecture + DDD (Domain-Driven Design)**, garantindo separação de responsabilidades, modularidade e escalabilidade.

---

## 🛠️ Instalação do Servidor (Back-End)

1. Clone o repositório:

   ```bash
   git clone https://github.com/CristianDaniel1/journey-api.git
   ```

2. Acesse a pasta do servidor:

   ```bash
   cd silverhand-fullstack
   cd server
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Configure as variáveis de ambiente baseando-se no `.env.template`:

   ```env
   POSTGRES_URL=postgresql://...
   POSTGRES_USER=seu-usuario
   POSTGRES_DB=
   POSTGRES_PORT=
   POSTGRES_PASSWORD=

   MAILER_SERVICE=
   MAILER_EMAIL=
   MAILER_SECRET_KEY=

   CLOUDINARY_CLOUD_NAME=
   CLOUDINARY_API_KEY=
   CLOUDINARY_API_SECRET=

   JWT_SEED=
   ```

5. Rode o servidor em modo de desenvolvimento:

   ```bash
   npm run dev
   ```

6. Acesse a API via: [http://localhost:3000](http://localhost:3000)

---

## 💻 Instalação do Cliente (Front-End)

1. Clone o repositório:

   ```bash
   git clone https://github.com/CristianDaniel1/silverhand-fullstack.git
   ```

2. Acesse a pasta `client`:

   ```bash
   cd silverhand-fullstack
   cd client
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Rode o projeto:

   ```bash
   npm run dev
   ```

5. Acesse via navegador em: [http://localhost:5173](http://localhost:5173)

---

## 🎯 Endpoints de Instrumentos (Exemplos)

### ✅ GET `/silverhand/api/instruments`

Retorna todos os instrumentos, com filtros opcionais por categoria, número de cordas e paginação.

**Exemplo de Requisição:**

```
GET http://localhost:3000/silverhand/api/instruments?category=contrabaixo&page=1&stringNum=6
```

**Resposta:**

```json
{
  "page": 1,
  "limit": 10,
  "total": 32,
  "lastPage": 4,
  "hasNextPage": true,
  "hasPreviousPage": false,
  "instruments": [
    {
      "id": 206,
      "name": "Contrabaixo Squier Jazz Bass Classic Vibe 70s - Natural",
      "price": 5661,
      "stringNum": 4,
      "quant": 22,
      "category": "CONTRABAIXO",
      "image": "https://res.cloudinary.com/dlqnorek4/image/upload/v1750126389/Contrabaixo_Squier_Jazz_Bass_Classic_Vibe_70s_-_Natural_lxgrcm.webp"
    }
  ]
}
```

---

### ✅ GET `/silverhand/api/instruments/:id`

Retorna um instrumento específico pelo ID.

**Exemplo de Requisição:**

```
GET http://localhost:3000/silverhand/api/instruments/206
```

**Resposta:**

```json
{
  "id": 206,
  "name": "Contrabaixo Squier Jazz Bass Classic Vibe 70s - Natural",
  "price": 5661,
  "stringNum": 4,
  "quant": 22,
  "category": "CONTRABAIXO",
  "image": "https://res.cloudinary.com/dlqnorek4/image/upload/v1750126389/Contrabaixo_Squier_Jazz_Bass_Classic_Vibe_70s_-_Natural_lxgrcm.webp"
}
```

---

## 📸 Imagens Do Projeto

<img
src="https://i.imgur.com/QshcCnL.png"
alt="Detalhes sobre uma guitarra laranja"
width="800"
/>

<img
src="https://i.imgur.com/yp4u8xq.png"
alt="Página de login de SilverHand"
width="800"
/>
