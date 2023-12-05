<script setup lang="ts">

</script>

<template>
    <v-container class="contenue">
        <v-row class="justify-center">
            <v-row>
                <v-col>
                    <v-img src="/logo-RealmTech.png"
                        :width="500"
                        class="ma-auto"
                    ></v-img>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <div class="text-h3">Introduction</div>
                    <p>
                        Un petit jeu qui s'inspire de Factorio (dans la partie 2d de la carte)
                        et de Gregtech (pour la mécanique de progression des tier). L'un
                        des buts premiers RealmTech est de changer la mécanique de progression
                        de Factorio pour qu'elle soit moins dans la production massive
                        de fiole, mais dans l'évolution progressive des matériaux pour accéder
                        à de meilleures machines. L'un des buts est aussi de pouvoir avoir
                        une plus grande liberté de construction avec des blocs décoratifs
                        qu'on peut posse n'importe où pour créer ses propres bâtiments.
                    </p>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-img src="/2023-12-05 203028.png"></v-img>
                </v-col>
            </v-row>
        </v-row>
    </v-container>
</template>

<style scoped>
.contenue {
    max-width: 800px;
}
</style>
