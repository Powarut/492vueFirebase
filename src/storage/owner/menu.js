import { defineStore } from 'pinia'

export const useMenuStore = defineStore('owner-menu',{
    state: () =>({
        list: [{
            name: 'test',
            image: '/src/assets/food1.jpg',
            price: 55,
            status: 'open',
            updatesAt: (new Date()).toISOString()
        }]
    }),
    actions:{
        getMenu (index){
            return this.list[index]
        },
        addMenu (foodData){
            foodData.updatesAt = (newDate()).toISOString()
            this.list.push(foodData)
        },
        updateMenu (index, foodData){
            this.list[index].name = foodData.name
            this.list[index].image = foodData.image
            this.list[index].price = foodData.price
            this.list[index].status = foodData.status
            this.list[index].updatesAt = (newDate()).toISOString()
        },
        removeMenu (index){
            this.list.splice(index, 1)
        } 
    }         
})