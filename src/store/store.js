import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {

        /**
         * 将数据转成字符串传入BizObject对象
         */
        PostValue: {
            ActionName: 'CreateBizObject',
            SchemaCode: 'D110601Se60w1b5r7r38xlp90fhf9gyc2',
            BizObject: {},
            IsSubmit: true,
        },
    },
    mutations: {
        getUserId(state, form){
            state.form = form
        }
    }
})
export default store
