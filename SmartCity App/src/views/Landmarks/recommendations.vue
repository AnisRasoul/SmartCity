<template>
    <ion-content>
      <div class="recommendations">
        <h2 class="ion-text-center ion-margin-bottom text-2xl font-bold">Select Your Preferences</h2>
  
        <div class="category">
          <h3 class="font-bold mx-5">Travel Style</h3>
          <ion-grid>
            <ion-row>
              <ion-col
                v-for="(item, index) in travelStyles"
                :key="index"
                size="4"
                class="ion-padding"
              >
                <ion-button
                  expand="block"
                  fill="outline"
                  :color="item.selected ? 'success' : 'medium'"
                  @click="toggleSelection(item)"
                >
                  {{ item.name }}
                </ion-button>
              </ion-col>
            </ion-row>
          </ion-grid>
        </div>
  
        <div class="category">
          <h3 class="font-bold mx-5">Food Preferences</h3>
          <ion-grid>
            <ion-row>
              <ion-col
                v-for="(item, index) in foodPreferences"
                :key="index"
                size="4"
                class="ion-padding"
              >
                <ion-button
                  expand="block"
                  fill="outline"
                  :color="item.selected ? 'success' : 'medium'"
                  @click="toggleSelection(item)"
                >
                  {{ item.name }}
                </ion-button>
              </ion-col>
            </ion-row>
          </ion-grid>
        </div>
  
        <div class="category">
          <h3 class="font-bold mx-5">Places of Interest</h3>
          <ion-grid>
            <ion-row>
              <ion-col
                v-for="(item, index) in places"
                :key="index"
                size="4"
                class="ion-padding"
              >
                <ion-button
                  expand="block"
                  fill="outline"
                  :color="item.selected ? 'success' : 'medium'"
                  @click="toggleSelection(item)"
                >
                  {{ item.name }}
                </ion-button>
              </ion-col>
            </ion-row>
          </ion-grid>
        </div>
      </div>
    </ion-content>
  </template>
  
  <script>
  export default {
    name: "Recommendations",
    data() {
      return {
        travelStyles: [
          { name: "Adventure", selected: false },
          { name: "Relaxation", selected: false },
          { name: "Cultural", selected: false },
          { name: "Budget", selected: false },
          { name: "Luxury", selected: false },
          { name: "Family", selected: false },
          { name: "Solo", selected: false },
        ],
        foodPreferences: [
          { name: "Local", selected: false },
          { name: "Fine Dining", selected: false },
          { name: "Street Food", selected: false },
          { name: "Vegetarian", selected: false },
          { name: "Seafood", selected: false },
          { name: "Vegan", selected: false },
          { name: "Desserts", selected: false },
        ],
        places: [
          { name: "Museums", selected: false },
          { name: "Parks", selected: false },
          { name: "Beaches", selected: false },
          { name: "Historical", selected: false },
          { name: "Shopping", selected: false },
          { name: "Nightlife", selected: false },
          { name: "Nature", selected: false },
        ],
      };
    },
    methods: {
      toggleSelection(item) {
        item.selected = !item.selected;
      },
    },
  };
  </script>
  

  