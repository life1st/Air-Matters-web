<template>
  <div>
    <navigator
      :title="naviTitle"
      :showBack="true" />
    <div class="search">
      <input class="search-input" type="text" v-model="searchText">
      <button @click="handleSearch">Go</button>
      <ul class="search-data-list" v-if="searchData" >
        <li 
          :key="place.place_id" 
          v-for="place in searchData"
        >
          <span>{{place.place_id}}</span>
          <span @click="handlePlaceAdd(place)">Add</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import navigator from '../components/navigator'

  export default {
    name: "Search",
    components: {
      navigator
    },
    data() {
      return {
        naviTitle: 'Search',
        searchText: '',
        searchData: []
      }
    },
    methods: {
      handleSearch() {

      }
    }
  }
</script>

<style scoped lang='less'>
  .search {
    padding-top: 68px;
  }
  .search-input {
    border: 1px solid #eee;
    &:focus {
      outline: none;
    }
  }
</style>