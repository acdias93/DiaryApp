document.querySelector("#loginform").style.display = "none";
document.querySelector("#createAcc").style.display = "none";

function openwindowLogin() {
  document.querySelector("#loginform").style.display='block';
}

function closewindowLogin() {
  document.querySelector("#loginform").style.display='none';
}

function openwindowSignUp() {
  document.querySelector("#createAcc").style.display='block';
}

function closewindowSignUp() {
  document.querySelector("#createAcc").style.display='none';
}

/* Agora falta é fazer uma só função que faça isto */


/* 

Landing Page:
- Título
- Descrição

- 2 buttons: criar diário vs. Login

  *1º Button: Criar diário:
  - Apresentar um Form com:
    Nome do diário:
    Imagem do diário:
    Username:
    Palavra passe:

  *2º Button:Login:
  - Apresentar um Form com:
    Username:
    Palavra passe:

- Ao se dar Login...

Vai aparecer uma espécie de capa de livro que vai apresentar o nome do Diário e a imagem escolhida, assim como um cadeado.
Ao se carregar no cadeado vamos dar a uma nova página que vai conter:

- Uma listagem de entradas de diário que vai ter um título /data e hora - mais recentes aparecem primeiro
- Um botão para criar novas entradas de diário

Ao se carregar neste botão vamos ter um form com os seguintes dados:
 - Título
 - Texto

 [Mas temos de ter a cena do tempo para assinalar a data/hora que isto aconteceu] -> Ver exercício do extrato bancário!

 Quantas páginas html devo criar? vs. Fazer o código todo dinâmico

 */
