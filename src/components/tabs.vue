<script>

export default {
    data() {
        return {
            currentTab: 'waiting', // กำหนด Tab ที่แสดงอยู่เริ่มต้น
            ordersWaiting: [],
            ordersCooking: [],
            ordersDelivery: [],
            ordersSuccess: []
        };
    },
    methods: {
        changeTab(tab) {
            this.currentTab = tab;
        },
        // เรียกใช้ API และอัปเดตข้อมูลตามสถานะ
        async fetchData() {
            try {
                const response = await this.$axios.get('/api/orders');
                this.ordersWaiting = response.data.filter(order => order.status === 'waiting');
                this.ordersCooking = response.data.filter(order => order.status === 'cooking');
                this.ordersDelivery = response.data.filter(order => order.status === 'delivery');
                this.ordersSuccess = response.data.filter(order => order.status === 'success');
            } catch (error) {
                console.error('เกิดข้อผิดพลาดในการเรียก API:', error);
            }
        },
    },
    mounted() {
        // เรียก fetchData เมื่อ component ถูก mount
        this.fetchData();
    },
};
</script>

<template>
    <div>
        <div class="tabs">
            <button @click="changeTab('waiting')">รอรับ</button>
            <button @click="changeTab('cooking')">ปรุงอาหาร</button>
            <button @click="changeTab('delivery')">จัดส่ง</button>
            <button @click="changeTab('success')">สำเร็จ</button>
        </div>

        <div class="tab-content">
            <div v-if="currentTab === 'waiting'">
                <h2>รายการรอรับ</h2>
                <ul>
                    <li v-for="order in ordersWaiting" :key="order.id">{{ order.name }}</li>
                </ul>
            </div>

            <div v-if="currentTab === 'cooking'">
                <h2>รายการที่กำลังปรุง</h2>
                <ul>
                    <li v-for="order in ordersCooking" :key="order.id">{{ order.name }}</li>
                </ul>
            </div>

            <div v-if="currentTab === 'delivery'">
                <h2>รายการที่กำลังจัดส่ง</h2>
                <ul>
                    <li v-for="order in ordersDelivery" :key="order.id">{{ order.name }}</li>
                </ul>
            </div>

            <div v-if="currentTab === 'success'">
                <h2>รายการที่สำเร็จ</h2>
                <ul>
                    <li v-for="order in ordersDelivery" :key="order.id">{{ order.name }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>
  

  
<style scoped>
/* สไตล์เฉพาะของ Tabs.vue */
.tabs {
    display: flex;
}

.tabs button {
    cursor: pointer;
    padding: 10px;
    margin-right: 10px;
    background-color: #eee;
}

.tab-content {
    margin-top: 20px;
}
</style>