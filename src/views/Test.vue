<script>

</script>

<template>
    <!--start grid -->
    <div class="grid">
        <header class="page-header content">
            <h3>Header</h3>
        </header>
        <footer class="page-footer content">
            <h3>Footer</h3>
        </footer>
        <div class="page-leftbar content">
            <ul>
                <li>
                    <router-link to="/all_rider">พนักงานส่งทั้งหมด</router-link>
                </li>
            </ul>
            <ul>
                <li>
                    <router-link to="/all_rider">เมนูอาหารทั้งหมด</router-link>
                </li>
            </ul>
        </div>
        <div class="page-main content">
            <h3>Main</h3>
            <h3>Main</h3>
            <h3>Main</h3>
            <h3>Main</h3>
            <h3>Main</h3>
            <h3>Main</h3>
            <h3>Main</h3>
            <h3>Main</h3>
            <h3>Main</h3>
            <h3>Main</h3>
        </div>
    </div>
    <!-- end grid -->
</template>

<style>
.grid {
    display: grid;
    grid-template-columns: minmax(150px, 250px) auto;
    grid-template-rows: 100px minmax(250px, auto) 200px;
    grid-template-areas:
        'header header'
        'leftbar main'
        'footer footer';
}

.page-header {
    grid-area: header;
}

.page-leftbar {
    grid-area: leftbar;
}

.page-main {
    grid-area: main;
}

.page-footer {
    grid-area: footer;
}

.content {
    background-color: white;
    box-sizing: border-box;
    padding: 10px;
}
</style>