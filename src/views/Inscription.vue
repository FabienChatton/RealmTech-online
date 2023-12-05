<script setup lang="ts">
import { ref } from 'vue';
import authService from "@/services/authService";
import { useRouter } from 'vue-router';

const router = useRouter();

const username = ref("");
const email = ref("");
const password = ref("");
const passwordConfirm = ref("");

const registerLoading = ref(false);
const errorMessage = ref<string | undefined>()

async function register() {
    if (password.value != passwordConfirm.value) {
        errorMessage.value = "Les mots de passe ne sont pas identique.";
        return;
    }
    try {
        authService.register(username.value, email.value, password.value);
        alert(`Bienvenu ${username.value}`);
        router.push("/");
    } catch (e) {
        if (e instanceof Error) {
            errorMessage.value = e.message;
        } else {
            alert(e);
        }
    } finally {
        registerLoading.value = false;
    }
}

</script>
<template>
    <v-container class="contenue">
        <v-row class="justify-center">
            <v-col>
                <v-card>
                    <v-sheet v-if="errorMessage" color="red"><div class="pa-4">{{ errorMessage }}</div></v-sheet> 
                    <v-text-field label="username" v-model="username"  class="ma-4"></v-text-field>
                    <v-text-field label="email (optionnel)" type="email" v-model="email" class="ma-4"></v-text-field>
                    <v-text-field label="password" type="password" v-model="password" class="ma-4"></v-text-field>
                    <v-text-field label="password confirmation" type="password" v-model="passwordConfirm" class="ma-4"></v-text-field>

                    <v-card-actions>
                        <v-btn @click="register" class="bg-green ml-4 mb-4">S'inscrire</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
.contenue {
    max-width: 500px;
}
</style>