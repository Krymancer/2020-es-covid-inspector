# Documentação
Toda a documentação do projeto pode ser encontrada aqui, como também arquivos que serão citados.

## Tecnologias
Após discutirmos qual seriam as melhores tecnologias a serem usadas, optamos por utilizar javascript devido ao seu poder adicionado de sua facilidade e baixa curva de aprendizado. Decidimos utilizar um padrão de projeto que consta em usar uma API e consumir os dados da mesma em outra aplicação.

Optamos por usar um framework em javascript para consumir os dados da API. (ver seção sobre arquitetura para mais informações).

## Levantamento de requisitos
Devido a necessidade de verificar algumas necessidades e implementações para o projeto, foi feito um formulário online para colher os requisitos para construção do projeto.

No formulário foram feitas perguntas tais como a importância do software sendo uma ferramenta auxiliar no combate ao corona vírus até mesmo com perguntas mais específicas, sobre os dados que seriam repassados para o banco de dados da aplicação.

O [questionário](https://forms.gle/8v2EhX2Hp4uAx54Z7) teve o total de 93 respostas, as quais foram analisadas pela equipe e partindo delas pudemos construir uma base sólida de como seria a aplicação.

## Arquitetura
Dividimos o projeto em duas partes: a API que servirá como backend, processando todas as informações e dados sobre o programa e o frontend. 
 
A arquitetura da API consiste no padrão REST que é um padrão consolidado para desenvolvimento de API 's no contexto de desenvolvimento web. E foi bem alcançado, utilizando do NodeJS e o framework express para configurar um servidor web capaz de receber requisições do tipo POST e enviar respostas no formato JSON.
 
Enquanto ao frontend optámos por usar um framework em javascript para consumir e mostrar as informações. O framework utilizado foi o ReactJS, e partindo do framework utilizamos suas ferramentas para organizar as rotas que foram todas as páginas do programa, com cada rota contendo uma requisição diferente a API mencionada anteriormente e tratando a resposta em JSON também com ferramentas do framework

## UML 
Informações sobre a UML porem ser encontradas no diretorio [UML](https://github.com/Krymancer/2020-es-covid-inspector/tree/master/docs/UML).

## Desing
Informações sobre o desing podem ser encontradas no diretorio [design](https://github.com/Krymancer/2020-es-covid-inspector/tree/master/docs/design).


## Feedback
Como no levantamento de requisitos, fizemos também um formulário para entender como os usuários se sairiam usando a primeira versão do nosso protótipo.

Nele foi abordado assuntos como usabilidade, inconsistência dos dados e um campo mais aberto para sugestões de melhorias.

O [questinário](https://forms.gle/ayK4CufWtA3Z3Qg4A) teve o total de 10 respostas, onde percebemos alguns pontos que ainda precisavam de melhorias para tornar o protótipo mais intuitivo, também foram sugeridas algumas funcionalidades que posteriormente podem ser adicionadas em novas versões do projeto.
