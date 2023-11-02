import { defineStore } from 'pinia'

export const useOwnerRiderStore = defineStore('owner-rider',{
    state: () => ({
        list: [
            {
                fullname: 'Mr.test',
                role: 'rider',
                status: 'active',
                updatedAt:(new Date).toISOString()
            }
        ]
    }),
    actions:{
        getRider (index){
            return this.list[index]
        },
        updateRider (index, riderData) { 
            const fields = ['fullname','role','status','updatedAt']
            for (let field of fields){
                console.log(field)
                this.list[index][field] = riderData[field]
            }
            this.list[index].updatedAt = (new Date).toISOString()
        },
        removeRider (index){
            this.list.splice(index, 1)
        }
    }
}) 