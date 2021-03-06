import Vue from 'vue'
import Vuex from "vuex"

let state = {
	num:0,
	          info :[
            {"initial":"A",
            list:[
              {
                id:'01',
                Name:'阿三',
                email:'89546312@163.com',
                // pic:require('../../../assets/t1.png'),
                profession:'H5'
              },
              {
                id:'02',
                Name:'阿四',
                email:'89546312@163.com',
                pic:'../../../assets/header.png',
                profession:'H5',
                english:"A"
              }
            ]
          },
           {"initial":"B",
            list:[
              {
                id:'03',
                Name:'巴西',
                email:'89546312@163.com',
                pic:'../../../assets/logo.png',
                profession:'H5'
              },
              {
                id:'04',
                Name:'芭莎',
                email:'89546312@163.com',
                pic:'../../../assets/logo.png',
                profession:'H5'
               
              }
            ]
          }
          ,
          {"initial":"C",
            list:[
              {
                id:'05',
                Name:'陈咬金',
                email:'89546312@163.com',
                pic:'../../../assets/header.png'
              },
              {
                id:'06',
                Name:'成龙',
                email:'89546312@163.com',
                pic:'../../../assets/t1.png',
                profession:'H5'
             }
            ]
          }
          ,
          {"initial":"D",
            list:[
              {
              id:'07',
              Name:'大小龙',
              email:'89546312@163.com',
              pic:'../../../assets/header.png',
              profession:'H5'
              }
            ]
          }
          ,
          {"initial":"E",
            list:[
              {
                id:'08',
                Name:'额',
                email:'89546312@163.com',
                pic:'../../../assets/logo.png',
                profession:'H5'
              }
            ]
          }
          ,
          {"initial":"F",
            list:[
              {
                id:'09',
                Name:'疯子',
                email:'89546312@163.com',
                pic:'../../../assets/t1.png',
                profession:'H5'
              }
            ]
          }
          ,
          {"initial":"G",
            list:[
              {
                id:'10',
                Name:'高手',
                email:'89546312@163.com',
                pic:'../../../assets/logo.png',
                profession:'H5'
              }
            ]
          }
          ,
          {"initial":"H",
            list:[
              {
                id:'11',
                Name:'红军',
                email:'89546312@163.com',
                pic:'../../../assets/header.png',
                profession:'H5'
              },
              {
                id:'12',
                Name:'红人',
                email:'89546312@163.com',
                pic:'../../../assets/t1.png',
                profession:'H5'
              },
              {
                id:'13',
                Name:'弘毅',
                email:'89546312@163.com',
                pic:'../../../assets/logo.png',
                profession:'H5'
               
              }
            ]
          }
          ,
          {"initial":"J",
            list:[
              {
                id:'14',
                Name:'焦裕禄',
                email:'89546312@163.com',
                pic:'../../../assets/header.png',
                profession:'H5'
              },
              {
                id:'15',
                Name:'将军',
                email:'89546312@163.com',
                 pic:'../../../assets/t1.png',
                profession:'H5'
              },
              {
                id:'16',
                Name:'蒋钦',
                email:'89546312@163.com',
                 pic:'../../../assets/logo.png',
                profession:'H5'
              }
            ]
          }
          ,
          {"initial":"K",
            list:[
              {
                id:'17',
                Name:'康雷',
                email:'89546312@163.com',
                profession:'H5',
                pic:'../../../assets/logo.png',
                english:"K"
              },
              {
                id:'18',
              Name:'康康',
              email:'89546312@163.com',
              profession:'H5',
              pic:'../../../assets/logo.png',
              english:"K"
              }
                ]
          },
           {"initial":"L",
            list:[
                {
                  id:'21',
                  Name:'李达康',
                  email:'89546312@163.com',
                  pic:'../../../assets/logo.png',
                  profession:'H5'
                 
                }
              ]
          }
          ,
          {"initial":"M",
            list:[
                {
                  id:'22',
                  Name:'猛汉',
                  email:'89546312@163.com',
                  pic:'../../../assets/logo.png',
                  profession:'H5'
                  
                }
              ]
          }
        ]
}

const mutations = {
	DECEMENT_NUM (state){
		state.num--
	},
	INCEMENT_NUM (state){
		state.num++
	}
}
// import * as actions from "./actions.js"
// import * as getters from './getters.js'
// import mutations from './mutations.js'

Vue.use(Vuex)

export default new Vuex.Store({
	state,
	mutations
	// mutations
})