<template>
    <div class="sub-produc-info" ref='scroll'>
        <div style="height: 10px"></div>
        <div v-for="(item,index) in info" class="item-info" ref="item">
            <div class="l-info">
                <div class="imgbox">
                    <img @click="big_img([item.imgUrl])"
                         :src="item.imgUrl"/>

                </div>
                <div class="price">
                    <div v-if="current==0">{{item.goods}}</div>
                    <div v-else>
                        <div>{{item.goods[0]}}</div>
                        <div  v-for="(good,index) in item.goods">
                            <div style="font-size: 11px" v-if="index!=0">{{good}}</div>
                        </div>
                    </div>
                    <div>{{item.article}}</div>
                    <div>￥{{item.price}}</div>
                </div>
            </div>
            <div class="r-info">
                <button @click.prevent="--item.count" v-if="item.count">-</button>
                <span v-if="item.count">{{item.count}}</span>
                <button @click.prevent="++item.count" class="btn">+</button>
            </div>
        </div>
        <div v-if="current==1" style="margin-top: 30px;">
            <span style="margin-left: 10px">备注：</span>
            <textarea style="margin-top: 30px;width: 60%" ></textarea>
        </div>

        <div v-if="current==0"  style="height: 50vh" ref="chudi"></div>
    </div>
</template>

<script>
    import {ImagePreview} from 'vant';

    export default {
        props: {
            info: {
                type: Array,
                default: function () {
                    return []
                }
            },
            current: {
                type: Number
            }
        },
        data() {
            return {

            }
        },
        methods: {
            //图片放大
            big_img(url) {
                ImagePreview(url)
            },
            // 监听item到顶部距离
            to_top_distance() {
                if (window.screen.height/2 >= this.$refs.chudi.getBoundingClientRect().top){
                    this.$emit("changeCurrent")
                }
            }
        },

        mounted() {
            // 监听滚动
            this.$refs.scroll.addEventListener('scroll', this.to_top_distance)
        },
    }
</script>

<style scoped="scoped">
    .sub-produc-info {
        background-color: #F7F8FA;
        overflow: auto;
    }

    .item-info {
        display: flex;
        margin: 0 7px 7px 7px;
        padding-right: 5px;
        height: 100px;
        background-color: #ffffff;
        box-shadow: 0px 0px 4px #ced6e0;
        border-radius: 10px;
    }

    .l-info {
        flex: 5;
        display: flex;
        align-content: space-between;
        margin-right: 10px;
    }

    .r-info {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        margin-left: 10px;
        padding-bottom: 5px;

    }

    .imgbox {
        width: 100px;
        padding: 5px;


    }

    .imgbox img {
        width: 100%;
        border: none;
        height: 100%;
    }

    .price {
        flex: 2;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .price div:nth-child(1) {
        font-size: 14px;
    }

    .price div:nth-child(2) {
        font-size: 12px;
    }

    .r-info button {
        height: 20px;
        width: 20px;
        outline: none;
        background-color: rgba(252, 209, 105);
        border: none;
        color: #990055;
        border-radius: 50%;
        font-weight: 700;
        line-height: 20px;
    }

    .r-info button.btn {
        background-color: rgba(252, 209, 105);
    }

    .r-info span {
        width: 20px;
        text-align: center;
        line-height: 20px;
        font-size: 14px;
        /* flex: 1; */
    }
</style>
