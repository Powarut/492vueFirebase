import { defineStore } from 'pinia'

export const useMenuStore = defineStore('owner-menus',{
    state: () =>({
        list: [],
        loaded: false
    }),
    actions:{
        loadMenu () {
            const menu = localStorage.getItem('owner-menus')
            if (menu) {
                this.list = JSON.parse(menu)
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
            menuData.updatedAt = (newDate()).toISOString()
            this.list.push(menuData)
            localStorage.setItem('owner-menus', JSON.stringify(this.list))
        },
        updateMenu (index, menuData){
            this.list[index].name = menuData.name
            this.list[index].image = menuData.image
            this.list[index].price = menuData.price
            this.list[index].status = menuData.status
            this.list[index].updatedAt = (newDate()).toISOString()
            localStorage.setItem('owner-menus', JSON.stringify(this.list))
        },
        removeMenu (index){
            this.list.splice(index, 1)
            localStorage.setItem('owner-menus', JSON.stringify(this.list))
        } 
    }         
})