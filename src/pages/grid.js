import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <h1>Grid</h1>

    <div class="grid">
      <div class="col__1">
        <img src="https://placehold.it/900x1500" alt="" />
        <div className="test">
          <div className="test__1">eka</div>
          <div className="test__2">toka</div>
        </div>
      </div>
      <div class="col__2">
        1 - Jukolan talo, eteläisessä Hämeessä, seisoo erään mäen pohjoisella
        rinteellä, liki Toukolan kylää. Sen läheisin ym­päristö on kivinen
        tanner, mutta alempana alkaa pellot, joissa, ennenkuin talo oli häviöön
        mennyt, aaltoili teräinen vilja. Peltojen alla on niittu, apilaäyräinen,
        halkileikkaama monipolvisen ojan; ja runsaasti antoi se heiniä,
        ennenkuin joutui laitumeksi kylän karjalle. Muutoin on talolla avaria
        metsiä, soita ja erämaita, jotka, tämän tilustan ensimmäisen perustajan
        oivallisen toiminnan kautta, olivat langenneet sille osaksi jo ison jaon
        käydessä entisinä aikoina. Silloinpa Jukolan isäntä, pitäen enemmän
        huolta jälkeentulevainsa edusta kuin omasta parhaastansa, otti vastaan
        osaksensa kulon polttaman metsän ja sai sillä keinolla seitsemän vertaa
        enemmän kuin toiset naapurinsa. Mutta kaikki kulovalkean jäljet olivat
        jo kadonneet hänen piiristänsä ja tuuhea metsä kasvanut sijaan. - Ja
        tämä on niiden seitsemän veljen koto, joiden elämänvaiheita tässä nyt
        käyn kertoilemaan.
      </div>
    </div>

    <div class="grid-2">
      <div class="col-1">1</div>
      <div class="col-2">2</div>
      <div class="col-3">3</div>
      <div class="col-4">4</div>
      <div class="col-5">5</div>
      <div class="col-6">6</div>
      <div class="col-7">7</div>
      <div class="col-8">8</div>
      <div class="col-9">9</div>
      <div class="col-10">10</div>
      <div class="col-11">11</div>
      <div class="col-12">12</div>
    </div>
  </Layout>
)

export default IndexPage
