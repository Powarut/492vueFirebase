import { defineStore } from 'pinia'

export const useFoodStore = defineStore('menu',{
    state: () =>({
        list: [],
        loaded: false
    }),
    actions:{
        loadMenu () {
            const menuList = localStorage.getItem('food-data')
            if (menuList) {
                this.list = JSON.parse(menuList)
                this.loaded = true
            }
        },
        getMenu (index){
            if (!this.loaded){
                this.loadMenu()
            }
            return this.list[index]
        },
        addMenu (menuData){
            menuData.updatedAt = (new Date()).toISOString()
            this.list.push(menuData)
            localStorage.setItem('food-data', JSON.stringify(this.list))
        },
        updateMenu (index, menuData){
            this.list[index].name = menuData.name
            this.list[index].image = menuData.image
            this.list[index].price = menuData.price
            this.list[index].status = menuData.status
            this.list[index].updatedAt = (new Date()).toISOString()
            localStorage.setItem('food-data', JSON.stringify(this.list))
        },
        removeMenu (index){
            this.list.splice(index, 1)
            localStorage.setItem('food-data', JSON.stringify(this.list))
        } 
    }         
})