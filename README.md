# Amigo Secreto 🎁

## 📄 Descrição

O projeto **Amigo Secreto** é uma aplicação simples e intuitiva, desenvolvida com o objetivo de facilitar o sorteio de amigos secretos em grupos. Com esta aplicação, você pode adicionar até **90 nomes**, e com um clique, realizar o sorteio de forma automatizada. A aplicação também oferece a possibilidade de reiniciar o sorteio com o botão **Novo Sorteio**, para garantir que os sorteios sejam justos e organizados.

Este projeto é ideal para quem deseja realizar sorteios de forma rápida e sem complicação, seja para festas, confraternizações ou qualquer outro evento onde a brincadeira do amigo secreto seja a escolha.

## 🚀 Funcionalidades

- **Adição de até 90 amigos**: Adicione o nome de amigos para participar do sorteio.
- **Botão "Sortear Amigo"**: Sorteia os amigos de forma automática, atribuindo um amigo secreto para cada participante.
- **Botão "Novo Sorteio"**: Reinicia o sorteio, permitindo realizar outra rodada sem problemas.
- **Responsividade**: A interface foi projetada para ser simples e funcional em dispositivos móveis e desktop.

## ⚙️ Tecnologias Utilizadas

- **HTML**: Estruturação do conteúdo da página.
- **CSS**: Estilização visual da aplicação, criando uma interface amigável.
- **JavaScript**: Lógica para o sorteio de amigos secretos, manipulação de eventos e controle das interações do usuário.

## 🛠️ Como Executar o Projeto

### Requisitos

Para rodar este projeto localmente, você só precisa de um navegador moderno. O código está pronto para ser visualizado e executado diretamente em seu navegador, sem a necessidade de servidores ou configuração adicional.

### Passos para Execução

1. **Clone ou baixe o repositório**:
   - Para clonar o repositório, use o comando:
   ```bash
   git clone https://github.com/seuusuario/amigo-secreto.git
   ```

2. **Abra o arquivo `index.html`**:
   - Navegue até a pasta do projeto e abra o arquivo `index.html` em seu navegador de escolha (Google Chrome, Firefox, etc.).

3. **Aproveite a aplicação**:
   - Adicione os nomes dos amigos na lista e clique no botão **Sortear Amigo** para começar a brincadeira.
   - Se precisar reiniciar o sorteio, clique no botão **Novo Sorteio**.

## 🧩 Estrutura do Projeto

O projeto contém os seguintes arquivos principais:

- `index.html`: Arquivo HTML que contém a estrutura da página.
- `style.css`: Arquivo CSS que define o estilo e layout da aplicação.
- `app.js`: Arquivo JavaScript que contém a lógica principal da aplicação, incluindo funções para adicionar nomes, realizar o sorteio e reiniciar o sorteio.

## 📋 Funcionalidade do Código

1. **Adicionando Amigos**: Os usuários podem inserir até 90 nomes na lista para participar do sorteio. A cada nome adicionado, ele é exibido na lista, permitindo que o sorteio seja realizado de forma organizada.
   
2. **Sorteio de Amigos Secretos**: O sorteio é realizado quando o usuário clica no botão "Sortear Amigo". A função `sortearAmigo()` embaralha os nomes e exibe os resultados na tela, garantindo que cada amigo tenha seu par secreto atribuído de forma justa.

3. **Novo Sorteio**: O botão "Novo Sorteio" permite que o sorteio seja reiniciado a qualquer momento, apagando a lista de amigos e permitindo um novo sorteio do zero.

### Detalhamento do Código JavaScript:

- A função `adicionarAmigo()` é responsável por capturar o nome inserido no campo de texto e adicioná-lo à lista de amigos.
- A função `sortearAmigo()` realiza o embaralhamento da lista de amigos e exibe os resultados no formato de uma lista.
- A função `novoSorteio()` reinicia a lista de amigos e limpa o conteúdo gerado pelo sorteio anterior.

## ❓ Problemas Conhecidos e Soluções

- **Erro ao adicionar mais de 90 nomes**: A aplicação está configurada para aceitar no máximo 90 nomes. Caso o usuário tente adicionar mais do que isso, será exibida uma mensagem informando que o limite foi atingido.
- **Resultados não visíveis**: Caso os resultados do sorteio não apareçam, certifique-se de que há nomes suficientes na lista (pelo menos 2). Se não houver amigos suficientes, o sorteio não poderá ser realizado.

## 📚 Como Contribuir

Se você quiser contribuir com o projeto, sinta-se à vontade para fazer um fork do repositório e submeter pull requests com melhorias ou correções. As contribuições são bem-vindas!

## 🔗 Links Importantes

- [GitHub do projeto](https://github.com/seuusuario/amigo-secreto)
- [Instagram da Agência Digital SLZ](https://www.instagram.com/agenciadigitalslz/)
- [LinkedIn - André Lopes](https://www.linkedin.com/in/andre7lopes/)

## 📈 Estatísticas

[![Estatísticas do GitHub](https://github-readme-stats.vercel.app/api?username=agenciadigitalslz&show_icons=true&theme=dracula&count_private=true)](https://github.com/agenciadigitalslz)

## 💬 Fale Comigo

Siga-me nas redes sociais ou entre em contato para sugestões ou dúvidas:

- [Instagram](https://www.instagram.com/agenciadigitalslz/)
- [Discord](https://discord.gg/yujkai)
- [LinkedIn](https://www.linkedin.com/in/andre7lopes/)

---

## 📜 Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
```