const app = {

    init: () => {
        const form = document.getElementById('main-form');
        form.addEventListener('submit', app.generateText);

    },

    generateText: () => {
        
        event.preventDefault();

        // Chapter 1 values // 
        const firstname = document.getElementById('firstname');
        const secondname = document.getElementById('secondname');
        const thirdname = document.getElementById('thirdname');
        const white = document.getElementById('white');
        const nickname = document.getElementById('nickname');
        const color = document.getElementById('color');
        const flaw = document.getElementById('flaw');
        const eyes = document.getElementById('eyes');
        const passion = document.getElementById('passion');
        const past = document.getElementById('past');
        const friend = document.getElementById('friend');

        // Chapter 2 values // 

        const guyname = document.getElementById('guyname');
        const fascination = document.getElementById('fascination');
        const firstencounter = document.getElementById('firstencounter');
        const firstdialogue = document.getElementById('firstdialogue');
        const seconddialogue = document.getElementById('seconddialogue');
        const thirddialogue = document.getElementById('thirddialogue');
        const fourthdialogue = document.getElementById('fourthdialogue');
        const date = document.getElementById('date');
        const hottopic = document.getElementById('hottopic');
        const asset = document.getElementById('asset');

        const mainResult = document.getElementById("main-result");
        mainResult.innerHTML = '';

        const chapter1 = document.createElement('div');
        chapter1.setAttribute("id", "chapter1");
        mainResult.appendChild(chapter1);



        // Chapter 1 creation // 


        chapter1.innerHTML = '<h3> Chapitre 1 </h3> <br> <br> <p> Heeey ! J’ai 16 ans et je m’appelle ' + firstname.value + " " + secondname.value + " " + thirdname.value + ' mais tous mes amis m’appellent ' + nickname.value +". Je suis gentille, généreuse, très intelligente mais j’ai aussi des défauts, je suis "+ flaw.value +"  lol ^^ ! <br> Physiquement, j’ai des beaux cheveux " + color.value + " et de grands yeux " + eyes.value +". Je me mordille les lèvres lorsque je suis nerveuse, ce qui leur donne une teinte rouge cerise très séduisante, et qui contraste joliment avec ma peau " + white.value +". Pourtant, je ne me maquille jamais, ou alors un peu de mascara en soirée pour donner du volume à mes cils déjà incroyablement longs. Oui je sais, je ne suis pas comme les autres filles qui se soucient des vêtements, du maquillage et des garçons… <br>Au contraire, moi "+ passion.value +" et les gens me prennent pour une folle ><’. Côté style, je suis plutôt simple et je m’habille avec des vêtements confortables. J’ai tendance à cacher mon ventre plat et ma poitrine généreuse sous des chemises amples car je n’aime pas attirer l’intention sur moi… <br>A l’école, je n’ai pas beaucoup d’amis, à part Camille, mon "+friend.value+" qui est un peu comme ma sœur mais qui n’apparaitra presque jamais dans cette histoire car iel est là pour les quotas. Néanmoins, on se raconte tout, et c’est d’ailleurs la seule personne à connaitre mon lourd passé : "+past.value+". <br>Aujourd’hui, c’est mon premier jour au lycée George Pompidou de Chicago… Et oui, je viens de déménager, et je vais être la petite nouvelle de service ! Moi qui déteste me faire remarquer, c’est bien ma veine --‘ <br> 60 com’s et je poste le prochain chapitre X3…</p><br><br><div class='main-result-chapters-links'><p>Ajouter un commentaire</p><p>|</p><p>Voir les commentaires (2)</p></div>";
    
        
        const chapter6 = document.createElement('div');
        chapter6.setAttribute("id", "chapter6");
        mainResult.appendChild(chapter6);
        // Chapter 6 creation // 


        chapter6.innerHTML = "<h3> Chapitre 6 </h3> <br> <br> <p> Le soir, dans mon lit, je regarde par la fenêtre la pluie couler, la musique dans mes oreilles, en me mordant les lèvres et passant la main dans mes cheveux. Comme je ne suis pas comme les autres filles de mon âge, je passe des heures à réfléchir à des questions existentielles, comme par exemple : " + hottopic.value + ".<br> Tout à coup, je repense à ma drôle de rencontre avec " + guyname.value + " ce matin. Je rougis en me remémorant ce moment où " + firstencounter.value + ". Quand il a relevé la tête, et que nos regards se sont croisés, j’ai senti mon cœur faire des loopings… <br> J’entends encore ses mots résonner dans ma tête : <br> Lui : "+ firstdialogue.value + " " + seconddialogue.value + "<br> Moi : " + thirddialogue.value + " " + fourthdialogue.value +"<br> Est-ce donc ça qu’on appelle l’amour ? Je secoue la tête : mais non enfin " + firstname.value + " " + secondname.value + " " + thirdname.value + ", ne sois pas idiote ! L’amour c’est un truc pour les autres filles, qui passent leur temps à parler de garçons et de shopping… <br> Moi, je ne suis pas comme elles, je suis " + asset.value +". Pourtant, je ne peux m’empêcher d’être fascinée par "+ fascination.value +" : il a l’air si mystérieux ! Qu’est-ce qu’il pourrait bien me trouver à moi, l’intello de service, avec personnalité atypique et mon corps qui correspond à tous les standards de beauté ? –‘ <br> Il faut vraiment que j’arrête de me faire des films, jamais " + guyname.value +" n’acceptera de " + date.value + "<br>A moins que ? <br> <br> A suivre….</p><br><br><div class='main-result-chapters-links'><p>Ajouter un commentaire</p><p>|</p><p>Voir les commentaires (2)</p></div>";
        
        app.selectEnding();
        
        },

    selectEnding: () => {

        const randomNumber = Math.floor(Math.random() * 4);
        let ending = '';

        switch (randomNumber) {
            case 0:
                ending = "<h3> Et la fin ? </h3> <br> <br> <p>Un happy ending. (Voilà maintenant 3 mois depuis notre premier baiser. Je soupire émue, en jouant avec mon alliance. La cérémonie était très émouvante et tout le lycée était présent à part bien sur la Britney, la cheffe des pompom girls qui est malheureusement morte d’un tragique accident de parapente la semaine précédant notre union. C’est triste, mais c’est la vie ^^’ Le jour J, une nuée de colombes m’ont porté jusqu’à l’autel où Harry Styles m’attendait, afin de mener la cérémonie avec beaucoup d’émotion. <br> Cette soirée s’est terminée en beauté avec la perte de ma virginité lors de la nuit de noce. Après l’avoir fait 16 fois donc 4 fois dans la position du lotus hollandais, ce qui devait arriver arriva… Sous le porche de notre villa à 7 étages avec 8 hectares de jardin au beau milieu de New York City, j’observe nos 3 enfants, Mary-Cassiopée-Absinthe Jean-Jungkook-Henry et Ann-Lady-Melody jouer ensemble avec notre loup domestique. Ils ont les yeux violets fluorescents qui clignotent dans le noir de leur père, mais plus important que tout, comme leur mère, ils ne sont pas comme les autres filles.</p><br><br><div class='main-result-chapters-links'><p>Ajouter un commentaire</p><p>|</p><p>Voir les commentaires (2)</p></div>";
                break;
            case 1:
                ending = "<h3> Et la fin ? </h3> <br> <br> <p>Beaucoup de frustration. (J’ai commencé cette fiction il y a maintenant 4 mois. 4 mois c’est long, j’ai eu le temps de murir et d’évoluer énormément et je ne me reconnais plus dans ce récit qui m’indiffère de plus en plus. Quand j’ai commencé cette fiction je n’étais qu’une simple enfant, mais maintenant, tout est différent car j’ai mon brevet, et j’ai eu mon premier baiser (avec Mélanie, quand on jouait au jeu de la bouteille à la pyjama partie de Laëtitia depuis je l’appelle ma femme lol bisous Mél si tu passe part là jtm pour amitié).<br> Certains diraient que j'ai changé, d'autres encore que j'ai évolué, moi je dirais que je suis devenue une adulte très mature (et vraiment pas du tout comme les autres filles de mon âge). En fait, je n'en sais rien, ma tête est un bordel indescriptible. J'ai besoin de tout quitter… Je m'excuse si je laisse des gens derrière moi, mais ne vous inquiétez pas : je ne quitte pas totalement Skyrock et je serai bientôt de retour avec un nouveau blog de Drarry !!!!)</p><br><br><div class='main-result-chapters-links'><p>Ajouter un commentaire</p><p>|</p><p>Voir les commentaires (2)</p></div>";
                break;
            case 2:
                ending = "<h3> Et la fin ? </h3> <br> <br> <p>DRIIIIIIIIIIIIIIIIIIING ! <br> Je me réveille en sursaut ! Mais, qu’est ce qui s’est passé ? Je me frotte les yeux. Alors comme ça, tout ceci n’était donc qu’un rêve ? C’est fou, tout ça semblait si réel o_O’’ <br> Je regarde mon réveil et réalise avec horreur que je suis en retard pour le lycée. Malgré tous mes efforts pour rattraper ce retard et avoir mon bus, j’arriverai 2h15 après le début du premier cours. Les profs du lycée Georges Pompidou de Chicago me prendront tous en grippe en raison de ma supposée désinvolture, les élèves ne me laisseront pas s’asseoir à leur table au self et me jetteront des cailloux à la pause de 10h, tous les jours jusqu’à la fin de l’année. <br> Morale de l’histoire : les gens en retard finissent seuls et brûlent en enfer. Ne soyez pas en retard.</p><br><br><div class='main-result-chapters-links'><p>Ajouter un commentaire</p><p>|</p><p>Voir les commentaires (2)</p></div>";
                break;
            case 3:
                ending = "<h3> Et la fin ? </h3> <br> <br> <p>- … Et c’est quand il a mis une caméra dans ma chambre pour me regarder dormir toutes les nuits que j’ai su que c’était le bon. <br>  Dr.Phil fronce les sourcils et se redresse sur son fauteuil. <br> - Mademoiselle, il me semble que nous avions déjà pointé du doigt lors de notre précédente séance qu’il était important d’établir des limites dans une relation saine, non seulement elles nous gardent sains d’esprit lorsque nous vivons dans l’intimité de quelqu’un, mais elles offrent à chaque personne un moyen de protéger son individualité. <br>Lorsque votre compagnon ignore vos limites – en traquant votre téléphone avec un puce GPS ou en ne vous autorisant pas à adresser la parole à d’autres garçons  –, il vous indique que vos besoins et vos préférences ne sont pas aussi importants que les siens, ce qui finira par miner votre estime de vous-même. Il regarde sa montre avant de rajouter : <br> - Notre séance touche à sa fin. Je vous laisse prendre rendez-vous avec ma secrétaire en sortant pour la semaine prochaine ? <br> Sacré Dr Phil ^^’</p><br><br><div class='main-result-chapters-links'><p>Ajouter un commentaire</p><p>|</p><p>Voir les commentaires (2)</p></div>";
                break;
            default:
                ending = "<h3> Et la fin ? </h3> <br> <br> <p>Beaucoup de frustration. (J’ai commencé cette fiction il y a maintenant 4 mois. 4 mois c’est long, j’ai eu le temps de murir et d’évoluer énormément et je ne me reconnais plus dans ce récit qui m’indiffère de plus en plus. Quand j’ai commencé cette fiction je n’étais qu’une simple enfant, mais maintenant, tout est différent car j’ai mon brevet, et j’ai eu mon premier baiser (avec Mélanie, quand on jouait au jeu de la bouteille à la pyjama partie de Laëtitia depuis je l’appelle ma femme lol bisous Mél si tu passe part là jtm pour amitié).<br> Certains diraient que j'ai changé, d'autres encore que j'ai évolué, moi je dirais que je suis devenue une adulte très mature (et vraiment pas du tout comme les autres filles de mon âge). En fait, je n'en sais rien, ma tête est un bordel indescriptible. J'ai besoin de tout quitter… Je m'excuse si je laisse des gens derrière moi, mais ne vous inquiétez pas : je ne quitte pas totalement Skyrock et je serai bientôt de retour avec un nouveau blog de Drarry !!!!)</p><br><br><div class='main-result-chapters-links'><p>Ajouter un commentaire</p><p>|</p><p>Voir les commentaires (2)</p></div>";
                break;
            }

            const mainResult = document.getElementById("main-result");

            const theend = document.createElement('div');
            theend.setAttribute("id", "theend");
            mainResult.appendChild(theend);

            theend.innerHTML = ending;
    }

}

document.addEventListener('DOMContentLoaded', app.init);