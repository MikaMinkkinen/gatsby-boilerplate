import React from "react"

const Typography = ({ emphasizeClass }) => (
  <article>
    <img src="https://placehold.it/1280x800" alt="" />
    {"gist:MikaMinkkinen/29c15bf527a8d4cdea31a851b9ab7f49.js"}

    <section>
      <h1>
        Typografia, skaalat ja skaalautuminen- Jukolan talo, eteläisessä
        Hämeessä, seisoo erään mäen pohjoisella rinteellä
      </h1>
      <p>
        Tämä on esimerkkidokumentti, joka sisältää kaikki typografiaan liittyvät
        html -elementit. Dokumentti koostaa yhteen verkkotypografian parhaat
        käytännöt ja toimii hyvänä lähtökohtana tyylikkään, toimivan ja
        saavutettavan projektin aloituksessa.
      </p>

      <h2>
        Harmonia - Jukolan talo, eteläisessä Hämeessä, seisoo erään mäen
        pohjoisella rinteellä
      </h2>
      <p>
        Tämä on esimerkkidokumentti, joka sisältää kaikki typografiaan liittyvät
        html -elementit. Dokumentti koostaa yhteen verkkotypografian parhaat
        käytännöt ja toimii hyvänä lähtökohtana tyylikkään, toimivan ja
        saavutettavan projektin aloituksessa.
      </p>
      <h3>
        H3- Jukolan talo, eteläisessä Hämeessä, seisoo erään mäen pohjoisella
        rinteellä
      </h3>
      <p>
        Tämä on esimerkkidokumentti, joka sisältää kaikki typografiaan liittyvät
        html -elementit. Dokumentti koostaa yhteen verkkotypografian parhaat
        käytännöt ja toimii hyvänä lähtökohtana tyylikkään, toimivan ja
        saavutettavan projektin aloituksessa.
      </p>
      <h4>
        H4 - kolan talo, eteläisessä Hämeessä, seisoo erään mäen pohjoisella
        rinteellä
      </h4>
      <p>
        Tämä on esimerkkidokumentti, joka sisältää kaikki typografiaan liittyvät
        html -elementit. Dokumentti koostaa yhteen verkkotypografian parhaat
        käytännöt ja toimii hyvänä lähtökohtana tyylikkään, toimivan ja
        saavutettavan projektin aloituksessa.
      </p>
      <h5>
        H5 - kolan talo, eteläisessä Hämeessä, seisoo erään mäen pohjoisella
        rinteellä
      </h5>
      <p>
        Tämä on esimerkkidokumentti, joka sisältää kaikki typografiaan liittyvät
        html -elementit. Dokumentti koostaa yhteen verkkotypografian parhaat
        käytännöt ja toimii hyvänä lähtökohtana tyylikkään, toimivan ja
        saavutettavan projektin aloituksessa.
      </p>

      <p>
        Kaikki tekstityylit auttavat kirjoittajaa jaottelemaan tekstiä osiin,
        hierarkisoimaan sisältöä ja tarjoamaan selailelevalle lukijalle useita
        kiintopisteitä, joista tekstin lukemisen voi aloittaa. Hyvän typografian
        pohja on toimii harmonia monessakin suhteessa. Tekstissä tulee olla hyvä{" "}
        <strong>sisäinen harmonia</strong>, jossa kaikki tekstikoot ovat
        sisäisesti harmonisessa suhteessa toisiinsa.
      </p>
      <p>
        Moderni verkkosisältö on myös <strong>responsiivinen</strong> ja
        ensisijaisesti pienimpien näyttökokojen mukaan suunniteltu, ja säilyttää
        harmoniansa eri kokoisilla näytöillä.
      </p>
      <h2>Otsikot</h2>
      <p>
        Otsikoiden harmonia syntyy musiikista tuttujen sävelasteikoiden tapaan.
        Tässä projektipohjassa pienillä näytöillä käytetään Major Third
        asteikkoa, jossa pienimmän ja suurimman otsokon välillä on 1,25 yksikön
        kokoero. Suuremmilla näyttökoilla käytetään suurempaa astevaihtelua, eli
        Major Second asteikkoa, jossa tekstielementtien kokoero on 1,25
        yksikköä.
      </p>
      <h6>Skaalat otsikoissa</h6>
      <p>
        Sivuston tyylimäärityksissä käytetään kokomuuttujia, joiden sisältö
        vaihtelee näyttökoon mukaan. Alla on kuvattuna muuttujasarja, jossa
        isoilla näyttökooilla muuttujina on <strong>Major Second</strong>{" "}
        mukainen asteikko ja pienillä kooilla <strong>Major Third</strong>{" "}
        mukainen asteikko.
      </p>
      <figure>
        <pre>
          <code>
            // Major Second (1.125) on mobile {<br />}
            $scale-06: 2.03; //16px * 2.03 = 32,48px {<br />}
            $scale-05: 1.8; //16px * 1.8 = 28.2px {<br />}
            $scale-04: 1.6; //16px * 1.6 = 25,6px {<br />}
            $scale-03: 1.424; //16px * 1.424 = 22.784px {<br />}
            $scale-02: 1.265; //16px * 1.265 = 20,24px {<br />}
            $scale-01: 1.125; //16px * 1.125 = 18px {<br />}
            {<br />}
            // Major Third (1.250) on desktop {<br />}
            @media screen and (min-width: map-get($grid-breakpoints, md)) {
              "{"
            }{" "}
            {<br />}
            $scale-06: 3.248; //16px * 3.248 = 51,962px {<br />}
            $scale-05: 3.052; //16px * 1.25 = 48.832px {<br />}
            $scale-04: 2.44; //16px * 2.44 = 39.04px {<br />}
            $scale-03: 1.953; //16px * 1.953 = 31.248px {<br />}
            $scale-02: 1.563; //16px * 1.563 = 25.08px {<br />}
            $scale-01: 1.25; //16px * 1.25 = 20px {<br />}
            {"}"}
          </code>
        </pre>
      </figure>
      <h2>Leipäteksti</h2>
      <p>
        Leipätekstin tulee mukautua näyttökokoihin niin että rivin pituus pysyy
        kohtuullisena, eikä teksti ole liian pientä tai suurta.
      </p>
      <p>
        Tekstin koon voi sitoa näyttökokoon joko portaallisesti{" "}
        <strong>fixed typography</strong>, niin että tietyssä pikselileveydessä
        tekstin koko muuttuu, tai portaattomasti{" "}
        <strong>fluid typography</strong>, niin että tekstille annetaan minimi
        ja maksimikoot suhteessa näyttökokoon ja selain laskee kulloinkin
        sopivimman koon.
      </p>
      <p>
        Tässä tyylipohjassa käytetään yksinkertaista portaatonta leipätekstin
        skaalausta. Alla olevassa esimerkissä näytetään kuinka selain laskee
        minimi ja maksimikirjainkoot näytönleveyden mukaan.
      </p>
      <figure>
        <pre>
          <code>
            /** {<br />}* Fluid text size {<br />}*
            https://css-tricks.com/simplified-fluid-typography/ {<br />}
            */
            {<br />}
            {<br />}
            html {"{"} {<br />}
            font-size: 16px;{<br />}
            {"}"} {<br />}
            {<br />}
            @media screen and (min-width: map-get($grid-breakpoints, xs)) {
              "{"
            }{" "}
            {<br />}
            html {"{"} {<br />}
            font-size: calc(16px + 2 * ((100vw - 320px) / 680)); {<br />}
            {"}"} {<br />}
            {"}"} {<br />}
            {<br />}
            @media screen and (min-width: map-get($grid-breakpoints, lg)) {
              "{"
            }{" "}
            {<br />}
            html {"{"} {<br />}
            font-size: 18px; {<br />}
            {"}"} {<br />}
            {"}"} {<br />}
          </code>
        </pre>
      </figure>

      <h2>Napit ja linkkityylit</h2>

      <button>A button</button>

      <button class="cta">A large button</button>

      <h2>Rivinsisäiset tekstityylit</h2>

      <p>
        HTML-merkintäkielessä on käytössä erityismerkkejä varten omia
        tyyppimäärityksiä, jotka usein jäävät huomiotta sivustojen
        tyylimäärityksistä. Jos tyyleille ei ole erikseen määritelty tyylejä,
        selain käyttää oman oletustyylivalikoiman tyylejä.
      </p>
      <h6>Ylä- ja alaindeksit sekä muut erityistyylit</h6>
      <p>
        {" "}
        Usein käytettyjä erityistyylejä ovat esimerkiksi vahvennusmerkinnät{" "}
        {"<strong>"} ja {"<b>"} <strong>kuten tämä teksti</strong>, sekä
        vaimennusmerkinnät {"<small>"} ja {"<s>"}{" "}
        <small>kuten tämä teksti</small>.
      </p>
      <p>
        Typografiassa tulee erikseen huomioida myös harvinaisemmat alaindeksin
        <sub>subscript</sub> ja yläindeksin <sup>superscript</sup>{" "}
        tyylimäärittelyt mahdollistavat esimerkiksi tämän kaltaisen
        matemaattisen lauseen esittämisen: <var>f</var>(<var>x</var>) ={" "}
        <var>a</var>
        <sub>0</sub> + <var>a</var>
        <sub>1</sub>
        <var>x</var> +<var>a</var>
        <sub>2</sub>
        <var>x</var>
        <sup>2</sup>, where <var>a</var>
        <sup>2</sup> ≠ 0
      </p>

      <p>
        {" "}
        Muita kappaleen sisäisiä erikoistyylejä ovat esimerkiksi{" "}
        <s>yliviivaukset</s> tai info-elementti {"<abbr>"}{" "}
        <abbr>tähän malliin.</abbr> Myös päiväykset ja osoitteet on hyvä
        erotella oman {"<time>"} ja {"<address>"}-tagien sisään, tähän malliin{" "}
        <time datetime="2013-09-07" pubdate>
          {" "}
          07 September 2013
        </time>{" "}
        <address>email@email.com</address> joita sitten voi muotoilla
        haluamakseen.
      </p>

      <h2>Kappalekohtaiset tekstityylit</h2>

      <p>
        <em>
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        </em>{" "}
        <a href="https://google.com">ennenkuin talo oli häviöön mennyt</a>,
        aaltoili teräinen vilja. Peltojen alla on niittu, apilaäyräinen,
        halkileikkaama monipolvisen ojan; ja runsaasti antoi se heiniä,
        ennenkuin joutui laitumeksi kylän karjalle. Muutoin on talolla avaria
        metsiä,
        <progress value="80" max="100">
          80 %
        </progress>
        We are this close to the goal:{" "}
        <meter min="0" max="1000" value="824">
          $824
        </meter>
        soita ja erämaita, jotka, tämän tilustan ensimmäisen perustajan
        oivallisen toiminnan kautta, olivat langenneet sille osaksi jo ison jaon
        käydessä entisinä aikoina.
        <blockquote>
          Sitaatit kuten tämä ovat oiva keino luoda tekstiin kiinnekohtia ja
          jakaa sitä osiin
          <small>- Author</small>
        </blockquote>
        Silloinpa <strong>Jukolan isäntä</strong>, pitäen enemmän huolta
        jälkeentulevainsa edusta kuin omasta parhaastansa, otti vastaan
        osaksensa kulon polttaman metsän ja sai sillä keinolla seitsemän vertaa
        enemmän kuin toiset naapurinsa. Mutta kaikki kulovalkean jäljet olivat
        jo kadonneet hänen piiristänsä ja tuuhea metsä kasvanut sijaan. - Ja
        tämä on niiden seitsemän veljen koto, joiden elämänvaiheita tässä nyt
        käyn kertoilemaan.
      </p>
      <img src="https://placehold.it/1280x400" alt="" />
      <h3>Kolmas otsikkotaso h3</h3>
      <h4>Fourth header h4</h4>
      <h5>Fifth header h5</h5>
      <h6>Sixth header h6</h6>
    </section>
    <section className="list">
      <div className="list__unordered">
        <h2>Unordered list</h2>
        <ul>
          <li>Orange</li>
          <li>Apple</li>
          <li>Rhubarb</li>
          <li>Rasberry</li>
          <li>Blueberry</li>
          <li>Cherry</li>
        </ul>
      </div>

      <div className="list__ordered">
        <h2>Ordered list</h2>
        <ol>
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
          <li>Fourth</li>
          <li>Fifth</li>
          <li>Sixth</li>
        </ol>
      </div>

      <div className="list__definition">
        <h2>Definition list</h2>
        <dl>
          <dt>Kick</dt>
          <dd>808</dd>
          <dt>Snare</dt>
          <dd>909</dd>
        </dl>
      </div>
    </section>
  </article>
)

export default Typography
