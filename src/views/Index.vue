<template>
    <div id="Index">
        <div class="sub-head">
            <h1>家庭消防器申购平台</h1>
        </div>
        <form>
            <!-- 用户信息组件 接收组件返回信息 -->
            <user-info @userName='newUserName' @userTel='newUserTel'></user-info>
            <!-- tab组件 -->
            <sub-product :data="['单品','套装']" :item_data='item_data'></sub-product>
            <!-- 备注 -->

            <!-- 底部按钮 -->
            <div class="foot">
                <div style="color: red" v-if="AllCount>=5">您买了{{this.AllCount}}个产品，赠送{{Math.floor(this.AllCount/5)}}个面罩！</div>
                <button class="submit" @click.prevent="submit">提交</button>
                <div class="sale">中心担保：统一申购的消防器材，三年包换（质量问题）终身半价换新！支持货到付款！售后电话：4006515119</div>
            </div>
        </form>
    </div>
</template>

<script>
    import http from '@/api/http'
    // 数据存放的js文件
    import data_store from '@/data/data_store'
    // 用户信息组件
    import userInfo from '@/components/userinfo/userInfo'
    // 商品组件
    import subProduct from '@/components/product/subProduct'

    export default {
        name: 'App',
        data() {
            return {
                userName: '', //保存用户名
                userTel: '', //保存手机信息
                item_data: data_store, //死数据
                AllCount: 0,
                form: {
                    F0000001: '',
                    admin_id: '',
                    name: '',
                    person: '',
                    post: '',
                    phone: '',
                    tel: '',
                    gender: '男',
                    address: '',
                    OwnerId: '',
                    OwnerDeptId: '',
                    unit: '',
                    //推荐单位数据
                    D110601Fy3t7m9foxc31v3ykjo81h3kw5: [],
                    //3L水基灭火器，买三送一
                    goods01: 0,
                    goods02: 0,
                    goods03: 0,
                    goods004: 0,
                    goods05: 0,
                    goods06: 0,
                    goods07: 0,
                    goods08: 0,
                    suit01: 0,
                    suit02: 0,
                    salesman: '',
                    yn: '待收货',
                    //赠品：防烟面罩
                    gift: 0,
                    //赠品：燃气报警器
                    gift01: 0,
                    //赠品：3L灭火器
                    gift02: 0
                },
            }
        },
        components: {
            userInfo,
            subProduct
        },
        methods: {
            newUserName(data) {
                this.userName = data
            },
            newUserTel(data) {
                this.userTel = data
            },
            submit() {
                // this.$router.push('/success')
                for (var i=0;i<this.item_data.length;i++){
                    for (var j=0;j<this.item_data[i].length;j++){
                        this.form[this.item_data[i][j].id] = this.item_data[i][j].count
                    }
                }
                console.log(this.form)
            },
            //管理后台
            async fireForm() {
                http.post('https://www.paxf.vip/api/form/addform', this.form).then(res => {
                    if (res.data.code == '200') {
                        this.$router.push('/success')
                    } else {
                        alert(res.data.msg)
                    }
                }).catch(error => {
                    alert('网络错误')
                })
            },
        },
        watch:{
            item_data: {
                deep: true,
                handler: function (val) {
                   var suit01 = val[1][0].count*5;
                   var suit02 = val[1][1].count*12;
                    var suit03 = val[1][2].count*2;
                   var AllGoods = val[0].map((val) => {
                       return val.count;
                   })
                    //
                    var AllCount = suit01+suit02+suit03;
                    AllGoods.forEach(function (item) {
                        AllCount += item;
                    })
                    this.AllCount = AllCount
                }
            }
        }
    }
</script>

<style scoped>
    @import url("../assets/css/base.css");

    #Index {
        height: 100vh;
    }

    form {
        padding-top: 10px;
        padding-right: 10px;
    }
    .sub-head h1 {

        height: 40px;
        line-height: 40px;
        font-size: 18px;
        text-align: center;

        margin: 0;
        background-color: #0078FF;
        opacity: 0.8;
        color: white;
    }
    .foot{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .submit {
        padding-top: 7px;
        padding-bottom: 8px;
        width: 75%;
        margin: 5px 0;
        border-radius: 15px;
        border: none;
        outline: none;
        background: #0078FF;
        color: #FFFFFF;
    }

    .sale {
        font-size: 13px;
        color: red;
        width: 100vw;
        line-height: 20px;
        text-align: center;
        border-radius: 3px;
    }
</style>
