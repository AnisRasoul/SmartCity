<template>
    <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar slot="bottom">
            <ion-tab-button tab="tab1" href="/home">
                <ion-icon :icon="bedOutline" />
                <ion-label>Hostels</ion-label>
            </ion-tab-button>

            <ion-tab-button tab="tab2" href="/landmark">
                <ion-icon :icon="locationOutline" />
                <ion-label>Landmarks</ion-label>
            </ion-tab-button>
            <ion-tab-button tab="tab3" href="/about">
                <ion-icon :icon="starOutline" />
                <ion-label>Events</ion-label>
            </ion-tab-button>

            <ion-tab-button tab="tab4" href="/transport">
                <ion-icon :icon="busOutline" />
                <ion-label>Transport</ion-label>
            </ion-tab-button>
        </ion-tab-bar>
    </ion-tabs>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle, bedOutline, starOutline, imageOutline, busOutline, locationOutline,    } from 'ionicons/icons';

export default defineComponent({
    name: 'MenuComponent',
    components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonRouterOutlet },
    setup() {
        return {
            ellipse,
            square,
            triangle,
            locationOutline,
            bedOutline, starOutline, imageOutline, busOutline
        }
    }
});
</script>