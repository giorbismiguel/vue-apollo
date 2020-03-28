<template>
  <div class="home">
    <ApolloQuery :query="require('@graphql/queries/Categories.gql')">
        <template slot-scope="{ result: { data, loading }, isLoading }">
        <div v-if="loading">Loading...</div>
        <ul v-else>
            <li v-for="category of data.categories" :key="category.id" class="category">
            {{ category.name }} {{ category.name }}
            </li>
        </ul>
        </template>
    </ApolloQuery
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
    name: 'Home',

    components: {

    },

    data(){
        return {
            categories: []
        }
    },

    apollo: {
        categories: gql`{
            categories {
                id
                name
            }
        }`
    }
}
</script>

<style>

</style>