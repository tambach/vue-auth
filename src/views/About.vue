<template>
    <div>
        <h1>Here you can see all registered users</h1>

        <div class="col-md-12">
            <el-table   max-height="800" :data="tableData"  >
                <el-table-column label="Name" prop="name" > </el-table-column>
                <el-table-column label="Last Name" prop="lastname" > </el-table-column>
                <el-table-column label="Email" prop="email" > </el-table-column>
                <el-table-column label="Age" prop="age" > </el-table-column>
                <el-table-column label="Address" prop="address" > </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                data: []
            };
        },
        created() {
        },
        methods: {

        },
        computed: {
            tableData() {
                console.log(this.$store.getters.userList)
                return this.$store.getters.userList
            }
        },
    };
</script>