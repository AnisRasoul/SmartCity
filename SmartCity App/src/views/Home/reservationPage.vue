<template>
  <section class="reservation">
    <ion-content class="h-screen">
      <div class="grid h-screen place-items-center">
        <ion-grid>
          <ion-row>
            <ion-col size="12">
              <ion-card class="bg-transparent border-none shadow-none">
                <ion-card-header class="text-center">
                  <ion-card-title>Reservation</ion-card-title>
                  <p class="mt-1">
                    Fill in your details to make a reservation
                  </p>
                </ion-card-header>
                <ion-card-content class="my-12">
                  <!-- Add error alert at the top of the form -->
                  <ion-alert
                    v-if="errorMessage"
                    :is-open="!!errorMessage"
                    header="Error"
                    :message="errorMessage"
                    :buttons="['OK']"
                    @didDismiss="errorMessage = ''"
                  ></ion-alert>

                  <form @submit="onSubmit">
                    <ion-row>
                      <ion-col class="p-3">
                        <ion-input
                          class="w-100"
                          clear-input
                          type="text"
                          placeholder="Full Name"
                          v-model="fullName"
                        />
                        <small class="text-red-500">{{ errorMessageFullName }}</small>
                      </ion-col>
                    </ion-row>
                    <ion-row>
                      <ion-col class="p-3">
                        <ion-input
                          class="w-100"
                          clear-input
                          type="email"
                          placeholder="Email"
                          v-model="email"
                        />
                        <small class="text-red-500">{{ errorMessageEmail }}</small>
                      </ion-col>
                    </ion-row>
                    <ion-row>
                      <ion-col class="p-3">
                        <ion-input
                          class="w-100"
                          clear-input
                          type="tel"
                          placeholder="Phone Number"
                          v-model="phone"
                        />
                        <small class="text-red-500">{{ errorMessagePhone }}</small>
                      </ion-col>
                    </ion-row>
                    <ion-row>
                      <ion-col class="p-3">
                        <ion-input
                          class="w-100"
                          clear-input
                          type="text"
                          placeholder="ID Card Number"
                          v-model="idCard"
                        />
                        <small class="text-red-500">{{ errorMessageIdCard }}</small>
                      </ion-col>
                    </ion-row>
                    <ion-button
                      color="primary"
                      class="mt-12"
                      expand="block"
                      type="submit"
                      >Submit Reservation</ion-button
                    >
                  </form>
                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </ion-content>
  </section>
</template>

<script setup lang="ts">
import {
  IonGrid,
  IonContent,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonInput,
  IonButton,
  IonAlert,
  toastController, // Add this import
} from "@ionic/vue";
import { useRouter } from "vue-router";
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
import { ref } from "vue";
import axios from "axios";

type Model = {
  fullName: string;
  email: string;
  phone: string;
  idCard: string;
};

const router = useRouter();

const schema = yup.object({
  fullName: yup.string().required("Full Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().matches(/^\d{10}$/, "Phone number must be 10 digits").required("Phone is required"),
  idCard: yup.string().min(8, "ID Card number must be at least 8 digits").required("ID Card is required")
});

const { handleSubmit } = useForm<Model>({
  validationSchema: schema,
  validateOnMount: false,
  initialValues: {
    fullName: "",
    email: "",
    phone: "",
    idCard: ""
  },
});

const { errorMessage: errorMessageFullName, value: fullName } = useField("fullName", schema);
const { errorMessage: errorMessageEmail, value: email } = useField("email", schema);
const { errorMessage: errorMessagePhone, value: phone } = useField("phone", schema);
const { errorMessage: errorMessageIdCard, value: idCard } = useField("idCard", schema);

// Add error message ref
const errorMessage = ref('');

// Fix the type annotation in presentToast function
const presentToast = async (message: string, isError = false) => {
  const toast = await toastController.create({
    message: message,
    duration: 2000,
    position: 'bottom',
    color: isError ? 'danger' : 'success'
  });
  await toast.present();
};

// Modify form submission handler
const onSubmit = handleSubmit(async (values) => {
  try {
    axios.post('https://api.example.com/reservations', values);
    await presentToast('Reservation submitted successfully!');
    router.push('/home')
  } catch (error) {
    errorMessage.value = 'An unexpected error occurred.';
    await presentToast('Failed to submit reservation.', true);
    console.error("Error:", error);
  }
});
</script>
