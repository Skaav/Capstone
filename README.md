# Capstone
Il mio progetto nasce al fine di permettere agli appassionati di videogiochi, giochi da tavola e giochi di ruolo (GDR), di avere un posto dove poter avere Pc con caratteristiche all'avanguardia o semplicemente un tavolo per potersi divertire con conoscenti e non.

# Built with
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=white")
![Spring](https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Hibernate](https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=Hibernate&logoColor=white)

# How to use
- Installare i framework, le librerie e i linguaggi sovrastanti;
- Creare un nuovo database su pgAdmin e collegarlo all' ![appro](https://img.shields.io/badge/application.properties-198753) del progetto Spring;
- Nell'application properties impostare ![dacre](https://img.shields.io/badge/drop%20and%20create-198753);
- Nel file AuthRunner decommentare per una sola volta il metodo setRoleDefault() e lanciarlo, poi ricommentarlo e impostare ![upd](https://img.shields.io/badge/update-198753) nell'application properties;
- Nel file LanRunner decommentare pcSvc.loadPc(); e slSvc.loadSala(); lanciarli e poi ricommentarli, questo serve per creare nel database i pc e le sale.
- Su Visual Studio Code, runnare il comando ![ngso](https://img.shields.io/badge/ng%20s-198753) nel terminale della cartella "capstone";
- Successivamente il browser dovrebbe aprirsi sul ![localhost](https://img.shields.io/badge/http://localhost:4200-198753);
- Per accedere a tutte le funzionalità, effettuare il la registrazione e successivamente il login;
- EXTRA: *Per effettuare una registrazione, dopo aver fatto il login basterà seguire i passaggi, le prenotazioni verranno aggiornate automaticamente in pagina in comode card.*;