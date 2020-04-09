<template>

    <div class="justify-content-center" style="width: 60%">
        <div>
            <h4>Login</h4>
        </div>
        <el-form  :model="formVal" :rules="rules" ref="formVal" @submit.prevent="login" label-width="400px">
            <el-form-item label="Email" prop="email" >
                <el-input   v-model="formVal.email"  clearable></el-input>
            </el-form-item>

            <el-form-item label="Password" prop="password">
                <el-input type="password"  v-model="formVal.password" clearable></el-input>
            </el-form-item>

            <el-form-item >
                <el-button type="primary" @click="login">Login </el-button>
            </el-form-item>
        </el-form>

        <div  v-if="authError">
            <p class="error">
                {{ authError }}
            </p>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                authError: null,
                formVal   : {
                    email: "",
                    password: ""
                },
                rules    : {
                    email: [
                        {required: true, message: 'Required'},
                    ],
                    password: [
                        {required: true, message: 'Required'},
                    ],
                }
            };
        },

        methods: {
            login: function() {
                let email = this.formVal.email;
                let password = this.formVal.password;
                this.$store
                    .dispatch("login", { email, password })
                    .then(() => {
                        this.$router.push("/")
                        this.authError = null
                    })
                    .catch(err => {
                        this.authError = "Wrong email or password"
                        console.log( err)
                    });
            }
        }
    };
</script>

<style scoped>
    .error {
        text-align: center;
        color: red;
    }
</style>
