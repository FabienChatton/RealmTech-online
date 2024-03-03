<script setup lang="ts">
import { ref } from 'vue';
import authServices from "../services/authServices"

const username = ref("");
const email = ref("");
const password = ref("");
const passwordConfirmation = ref("");

const alert = ref("");
const success = ref("");

async function inscription() {
    alert.value = "";
    success.value = "";
    if (password.value != passwordConfirmation.value) {
        alert.value = "password and password confitmation are not the same";
        return;
    }

    try {
        const response = await authServices.register(username.value, email.value, password.value)
        success.value = "Your account has been register"
    } catch (e) {
        const error = (e as any);
        if (error.response) {
            alert.value = error.response.data;
        } else {
            console.error(error);
            
            alert.value = error.message
        }
    }
    
}

</script>

<template>
    <div class="card-body">
        <div v-if="alert != ''" role="alert" class="alert alert-error">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>{{ alert }}</span>
        </div>
        <div v-if="success != ''" role="alert" class="alert alert-success">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>{{ success }}</span>
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text" >Username</span>
            </label>
            <input 
                v-model="username"
                type="text"
                placeholder="username"
                class="input input-bordered"
                required />
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">Email</span>
            </label>
            <label class="input input-bordered flex items-center gap-2">
                <input
                    type="email"
                    class="grow"
                    placeholder="email"
                    v-bind="email"
                    />
                <span class="badge badge-info">Optional</span>
            </label>
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">Password</span>
            </label>
            <input
                v-model="password"
                type="password"
                placeholder="password"
                class="input input-bordered"
                required />
            <label class="label">
                <span class="label-text">Password confirmation</span>
            </label>
            <input
                v-model="passwordConfirmation"
                type="password" 
                placeholder="password confirmation" 
                class="input input-bordered" 
                required />
        </div>
        <div class="form-control mt-6">
            <button class="btn btn-primary"
                @click="inscription"
            >Register</button>
        </div>
    </div>
</template>