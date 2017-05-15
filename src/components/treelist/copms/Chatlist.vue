<template>
    <div id="friends" >
        <mt-index-list>
          <mt-index-section index="A">
            <mt-cell title="Aaron"></mt-cell>
            <mt-cell title="Alden"></mt-cell>
            <mt-cell title="Austin"></mt-cell>
          </mt-index-section>
          <mt-index-section index="B">
            <mt-cell title="Baldwin"></mt-cell>
            <mt-cell title="Braden"></mt-cell>
          </mt-index-section>
          <mt-index-section index="C">
            <mt-cell title="Cack"></mt-cell>
            <mt-cell title="Cane"></mt-cell>
          </mt-index-section>
          <mt-index-section index="D">
            <mt-cell title="Daron"></mt-cell>
            <mt-cell title="Dlden"></mt-cell>
            <mt-cell title="Dustin"></mt-cell>
          </mt-index-section>
          <mt-index-section index="E">
            <mt-cell title="Ealdwin"></mt-cell>
            <mt-cell title="Eraden"></mt-cell>
          </mt-index-section>
          <mt-index-section index="F">
            <mt-cell title="Fack"></mt-cell>
            <mt-cell title="Fane"></mt-cell>
          </mt-index-section>
          <mt-index-section index="F">
            <mt-cell title="Faron"></mt-cell>
            <mt-cell title="Flden"></mt-cell>
            <mt-cell title="Fustin"></mt-cell>
          </mt-index-section>
          <mt-index-section index="G">
            <mt-cell title="Galdwin"></mt-cell>
            <mt-cell title="Graden"></mt-cell>
          </mt-index-section>
          <mt-index-section index="H">
            <mt-cell title="Hack"></mt-cell>
            <mt-cell title="Hane"></mt-cell>
          </mt-index-section>
          <mt-index-section index="I">
            <mt-cell title="Iaron"></mt-cell>
            <mt-cell title="Ilden"></mt-cell>
            <mt-cell title="Iustin"></mt-cell>
          </mt-index-section>
          <mt-index-section index="J">
            <mt-cell title="Jaldwin"></mt-cell>
            <mt-cell title="Jraden"></mt-cell>
          </mt-index-section>
          <mt-index-section index="K">
            <mt-cell title="Kack"></mt-cell>
            <mt-cell title="Kane"></mt-cell>
          </mt-index-section>
          <mt-index-section index="L">
            <mt-cell title="Laron"></mt-cell>
            <mt-cell title="Llden"></mt-cell>
            <mt-cell title="Lustin"></mt-cell>
          </mt-index-section>
          <mt-index-section index="M">
            <mt-cell title="Maldwin"></mt-cell>
            <mt-cell title="Mraden"></mt-cell>
          </mt-index-section>
          <mt-index-section index="N">
            <mt-cell title="Nack"></mt-cell>
            <mt-cell title="Nane"></mt-cell>
          </mt-index-section>
          <mt-index-section index="O">
            <mt-cell title="Oaron"></mt-cell>
            <mt-cell title="Olden"></mt-cell>
            <mt-cell title="Oustin"></mt-cell>
          </mt-index-section>
          <mt-index-section index="P">
            <mt-cell title="Paldwin"></mt-cell>
            <mt-cell title="Praden"></mt-cell>
          </mt-index-section>
          <mt-index-section index="Q">
            <mt-cell title="Qack"></mt-cell>
            <mt-cell title="Qane"></mt-cell>
          </mt-index-section>
          <mt-index-section index="R">
            <mt-cell title="Raron"></mt-cell>
            <mt-cell title="Rlden"></mt-cell>
            <mt-cell title="Rustin"></mt-cell>
          </mt-index-section>
          <mt-index-section index="S">
            <mt-cell title="Saldwin"></mt-cell>
            <mt-cell title="Sraden"></mt-cell>
          </mt-index-section>
          <mt-index-section index="T">
            <mt-cell title="Tack"></mt-cell>
            <mt-cell title="Tane"></mt-cell>
          </mt-index-section>
          <mt-index-section index="U">
            <mt-cell title="Uaron"></mt-cell>
            <mt-cell title="Ulden"></mt-cell>
            <mt-cell title="Uustin"></mt-cell>
          </mt-index-section>
          <mt-index-section index="V">
            <mt-cell title="Valdwin"></mt-cell>
            <mt-cell title="Vraden"></mt-cell>
          </mt-index-section>
          <mt-index-section index="W">
            <mt-cell title="Wack"></mt-cell>
            <mt-cell title="Wane"></mt-cell>
          </mt-index-section>
          <mt-index-section index="X">
            <mt-cell title="Xaron"></mt-cell>
            <mt-cell title="Xlden"></mt-cell>
            <mt-cell title="Xustin"></mt-cell>
          </mt-index-section>
          <mt-index-section index="Y">
            <mt-cell title="Yaldwin"></mt-cell>
            <mt-cell title="Yraden"></mt-cell>
          </mt-index-section>
          <mt-index-section index="Z">
            <mt-cell title="Zack"></mt-cell>
            <mt-cell title="Zane"></mt-cell>
          </mt-index-section>
        </mt-index-list>
    </div>
    
</template>

<script>
import Vue from 'vue'
// import { IndexList, IndexSection } from 'mint-ui';

Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);
  export default {
    
    components:{
      
    },
    data() {
      return {
     
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style>
  #friends {
    width: 100%;
    height: 100%;
    overflow-y: scroll; 
  }
  .mint-indexlist-content {
    float: left;
    width: 96%;
    height: 500px;
    overflow-y: scroll;
  }
 .mint-indexlist-nav {

   position: fixed;
   right: 22px;
 }
 .mint-indexsection-index {
   background: #ccc;
   padding: 10px;
 }
 .mint-cell-title {
   padding: 5px;
 }
 .mint-indexlist-navitem {
   padding: 2px 0;
   text-align: center;
   
 }
 .mint-indexlist-indicator {
   position: absolute;
   top: 100px;
   left: 200px;
   font-size: 100px;
 }
</style>

