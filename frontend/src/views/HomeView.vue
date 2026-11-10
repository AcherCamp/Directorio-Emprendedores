<script setup>
import Navbar from '../components/layout/Navbar.vue'
import Footer from '../components/layout/Footer.vue'

import SearchBar from '../components/home/SearchBar.vue'
import ReferenceCarousel from '../components/home/ReferenceCarousel.vue'
import PopularBusinesses from '../components/home/PopularBusinesses.vue'
import CommunityWall from '../components/home/CommunityWall.vue'
import CommunityNotices from '../components/home/CommunityNotices.vue'

import {
  referencePoints,
  popularBusinesses,
  muralNotices,
  communityNotices
} from '../data/demoData.js'
</script>

<template>
  <div class="home-page">
    <Navbar />

    <main>
      <section class="hero container">
        <span class="eyebrow">TU COMUNIDAD, MÁS CERCA</span>
        <h1>
          Descubre lo que<br />
          <span>nuestra comunidad</span> ofrece.
        </h1>
        <p>
          Encuentra negocios, servicios y emprendimientos locales.
        </p>

        <SearchBar />
      </section>

      <div class="container page-content">
        <ReferenceCarousel :items="referencePoints" />

        <PopularBusinesses :businesses="popularBusinesses" />

        <CommunityWall :notices="muralNotices" />

        <CommunityNotices :notices="communityNotices" />
      </div>
    </main>

    <Footer />
  </div>
</template>