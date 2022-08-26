# EN: Parallax effect construction 
#### The native language of the page is Italian, i'm sorry for the inconvenient. Soon i will release an english translation.

# IT: Realizzazione di un effetto di parallasse.

---
id: 2022-08-26-0
titolo: Come creare un semplice effetto di parallasse per la tua pagina web
featured: true
autore: Alexandru Ioan Chindris
data: 2022-08-26
cover: .webp
introduzione: Questo post spiega come creare un effetto di parallasse per il proprio sito web.
sezione: Blog
categorie:
  - Blog
  - Web developing
  - Java Script
  - Front End
---

###### Tempo di lettura: 

## Introduzione

Negli ultimi anni le tecniche di sviluppo web sono migliorate e hanno permesso di integrare nuovi effetti interessanti alle nostre pagine web.
Un effetto che ultimamente sta andando di moda è il _parallax effect_, effetto di parallase. Questi tipi di effetto creano l'illusione della profondità quando la pagina si sposta. 
L'utilizzo di questo effetto è molto gradito dai visitatori della pagina web, le pagine web con effetti di paralasse integrati infatti si differenziano dalle classiche pagine web statiche.
Se non ti fosse mai capitato di imbatterti in una pagina web con effetti di paralasse ti lascio qua sotto alcuni esempi:

- <a href="http://cyclemon.com/" target="_blank">1: Cyclemon</a>
- <a href="http://portfolio.theflock.com/puma_mobium/" target="_blank">2: PUMA</a>
- <a href="http://www.espn.com/espn/eticket/story?page=Dock-Ellis" target="_blank">3: ESPN</a>


In questo post andremo a scoprire come realizzare un semplice effetto di parallasse per la tua pagina web. Premetto che per comprendere il tutorial sono necessarie delle discrete conoscenze in HTML, CSS e Javascript. In questo tutorial non veranno utilizzati framework, tutti gli effetti sono frutto di CSS e Javascript vanilla. Se dovessi trovare difficoltà e/o problemi durante la realizzazione del tuo effetto di paralasse non esitare ad utilizzare la sezione commenti, la trovi al fondo di questa pagina. Inoltre puoi trovare il codice della pagina realizzata da me nel corso del tutorial qua sotto:

- <a href="https://bit.ly/parallax_effect_tutorial" target="_blank">Pagina web</a>
- <a href="https://github.com/Alexandru-Chindris/parallax_effect_tutorial" target="_blank">Codice intero della pagina web</a>



## Inzio realizzazione

Per cominciare creiamo una pagina HTML, CSS e Javascript generica. Ricordiamoci di collegare la pagina CSS e Javascript nel file HTML.

```bash
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css" type="text/css" />
    <title>Parallax Effect Tutorial</title>
</head>
<body>
    <script src="script.js"></script> 
</body>
</html>
```

Proseguiamo creando 4 contenitori contenenti la classe "container" dentro al _body_ e inseriamo un header di livello 1 contenente il nostro testo. Aggiungiamo anche altre 4 classi ai vari contenitori.

```bash
    <div class="container a1"><h1>Lorem Ipsum</h1></div>
    <div class="container b2"><h1>Lorem Ipsum</h1></div>
    <div class="container c3"><h1>Lorem Ipsum</h1></div>
    <div class="container d4"><h1>Lorem Ipsum</h1></div>
```

Ci spostiamo ora dentro al file CSS, dobbiamo definire le regole per le classi "_container_" "_(a1)_""_(b2)_""_(c3)_""_(d4)_". Iniziamo definendo le dimensioni dei 4 contenitori che abbiamo predisposto, successivamente aggiungiamo delle regole per orientare il nostro testo verso il centro. Dentro alle classi 

```bash
*{
  border: 0px;
  padding: 0px;
  margin: 0px;
}

**.container{
  width: 100%;
  height: 600px;
  text-align: center;
}**

.a1{
  background-image: url(src/img/paesaggio.png);
  background-size: cover;
}

.b2{
    background-image: url(src/img/animale.png);
    background-size: cover;
    background-attachment: fixed;
}

.c3{
    background-image: url(src/img/polo.png);
    background-size: cover;
}

.d4{
    background-image: url(src/img/orso.png);
    background-size: cover;
}

```






