<template>
    <div>
        <h4>Register</h4>
   <!--     <form @submit.prevent="register">
            <label for="name">Name</label>
            <div>
                <input id="name" type="text" v-model="formVal.name" required autofocus>
            </div>
            <label for="name">Last Name</label>
            <div>
                <input id="lastname" type="text" v-model="formVal.lastname" required autofocus>
            </div>

            <label for="email" >E-Mail Address</label>
            <div>
                <input id="email" type="text" v-model="formVal.email" required>
            </div>
            <label for="age" >Age</label>
            <div>
                <input id="age" type="text" v-model="formVal.age" required>
            </div>
            <label for="address" >Address</label>
            <div>
                <input id="address" type="text" v-model="formVal.address" required>
            </div>

            <label for="password">Password</label>
            <div>
                <input id="password" type="password" v-model="formVal.password" required>
            </div>

            <div>
                <button type="submit">Register</button>
            </div>
        </form>
-->


        <div class=" justify-content-center" style="width: 70%">
            <el-form  :model="formVal" :rules="rules" ref="formVal" @submit.prevent="register" label-width="400px">
                <el-form-item label="Name" prop="name" >
                    <el-input   v-model="formVal.name"  clearable></el-input>
                </el-form-item>
                <el-form-item label="Last Name" prop="lastname" >
                    <el-input   v-model="formVal.lastname"  clearable></el-input>
                </el-form-item>
                <el-form-item label="Email" prop="email" >
                    <el-input type="email"  v-model="formVal.email"  clearable></el-input>
                </el-form-item>
                <el-form-item label="Age" prop="age" >
                    <el-input   v-model="formVal.age"  clearable></el-input>
                </el-form-item>
                <el-form-item label="Address" prop="address" >
                    <el-input   v-model="formVal.address"  clearable></el-input>
                </el-form-item>
                <el-form-item label="Password" prop="password">
                    <el-input type="password"  v-model="formVal.password" clearable></el-input>
                </el-form-item>

                <el-form-item >
                    <el-button type="primary" @click="register">Register </el-button>
                </el-form-item>
            </el-form>
        </div>


      <!--  <form @submit.prevent="register">
            <label for="name">Name</label>
            <div>
                <input id="name" type="text" v-model="name" required autofocus>
            </div>

            <label for="email" >E-Mail Address</label>
            <div>
                <input id="email" type="email" v-model="email" required>
            </div>

            <label for="password">Password</label>
            <div>
                <input id="password" type="password" v-model="password" required>
            </div>

            <label for="password-confirm">Confirm Password</label>
            <div>
                <input id="password-confirm" type="password" v-model="password_confirmation" required>
            </div>

            <div>
                <button type="submit">Register</button>
            </div>
        </form>
        -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                formVal : {
                    name: "",
                    lastname: "",
                    email: "",
                    age: "",
                    address: "",
                    password: "",
                },
                rules    : {
                    email: [
                        {required: true, message: 'Required', trigger: 'blur'},
                        {type: 'email', message: 'Please input email', trigger: ['blur', 'change']}
                    ],
                    password: [
                        {required: true, message: 'Required'},
                    ],
                },

            };
        },

        methods: {
            register: function() {
                let data = {
                    name: this.formVal.name,
                    lastname: this.formVal.lastname,
                    email: this.formVal.email,
                    age : this.formVal.age,
                    address: this.formVal.address,
                    password: this.formVal.password,
                };
                this.$store
                    .dispatch("register", data)
                    .then(() => this.$router.push("/"))
                    .catch(err => console.log(err));

                this.$store.dispatch("addUser", {
                    name: this.formVal.name,
                    lastname: this.formVal.lastname,
                    email: this.formVal.email,
                    age : this.formVal.age,
                    address: this.formVal.address
                })
                    .then((res) => console.log(res))
                    .catch(err => console.log(err));

               /* let data = {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                };
                this.$store
                    .dispatch("register", data)
                    .then(() => this.$router.push("/"))
                    .catch(err => console.log(err));
                */
            },
        }
    };
</script>