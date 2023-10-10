<template>
  
</template>

<script>
import { toast } from 'vue3-toastify';
export default {
    name: 'CartAddRemove',
    props: ['product'],
    data(){
        return{
            qty:1,
            loading:false
        }
    },
    methods : {
        async addOrRemove(number){
            this.loading = true
            if(number == 1){
                if(this.qty < 10){ //add
                    this.qty++
                    this.product.qty = this.qty
                    await this.$store.commit('updateCart',{product:this.product})
                    toast.success('เพิ่มเมนูลงในตะกร้าเรียบร้อย')
                }else{
                    toast.warning('คุณไม่สามารถเพิ่มได้มากกว่านี้')
                }
            }
            if(number == -1){ //remove
                if(this.qty > 1){
                    this.qty--
                    this.product.qty = this.qty
                    await this.$store.commit('updateCart',{product:this.product})
                    toast.success('เพิ่มเมนูลงในตะกร้าเรียบร้อย',{autoClose: 1000})
                }else{
                    toast.warning('คุณไม่สามารถลดได้มากกว่านี้',{autoClose: 3000});
                }
            }
            this.loading = false
        }
    },
    mounted(){
        this.qty = this.product.qty
    }
}
</script>

<style>

</style>