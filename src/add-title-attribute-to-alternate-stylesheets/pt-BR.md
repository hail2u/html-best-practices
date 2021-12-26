# Adicione o atributo `title` em folhas de estilo alternativas

Uma legenda entendível por humanos ajuda as pessoas a selecionar a folha de estilos apropriada.

Ruim:

    <link href="/css/tela.css" rel="stylesheet">
    <link href="/css/alto-contraste.css" rel="stylesheet alternativo">

Bom:

    <link href="/css/tela.css" rel="stylesheet">
    <link href="/css/alto-contraste.css" rel="stylesheet alternativo" title="Alto contraste">
