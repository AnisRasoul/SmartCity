<template>
  <section class="login">
    <ion-content class="h-scree text-blackn">
      <div class="grid h-screen place-items-center">
        <ion-grid>
          <ion-row>
            <ion-col size="12">
              <ion-card class="bg-transparent border-none shadow-none">
                <ion-card-header class="text-center">
                  <ion-card-title>Login</ion-card-title>
                  <p class="mt-1">
                    Enter your email and password to access your account
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
                  <form @submit="onSubmit" :validation-schema="schema">
                    <ion-row>
                      <ion-col class="p-3">
                        <ion-input
                          class="w-100"
                          clear-input
                          type="text"
                          placeholder="Email"
                          v-model="email"
                        >
                          <slot name="start">
                            <ion-icon
                              :icon="mailOutline"
                              size="large"
                              class="mr-2"
                            />
                          </slot>
                        </ion-input>
                        <small class="text-red-500">{{
                          errorMessageEmail
                        }}</small>
                      </ion-col>
                    </ion-row>
                    <ion-row>
                      <ion-col class="p-3">
                        <ion-input
                          clear-input
                          block
                          type="password"
                          placeholder="Password"
                          v-model="password"
                        >
                          <slot name="start">
                            <ion-icon
                              :icon="keyOutline"
                              size="large"
                              class="mr-2"
                            />
                          </slot>
                        </ion-input>
                        <small class="text-red-500">{{
                          errorMessagePassword
                        }}</small>
                      </ion-col>
                    </ion-row>
                    <ion-button
                      color="primary"
                      class="mt-12"
                      expand="block"
                      type="submit"
                      >Login</ion-button
                    >
                  </form>

                  <div class="flex justify-center mt-5">
                    <p class="text-sm">
                      Don't have an account? <a href="register">Register</a>
                    </p>
                  </div>
                  <div class="flex justify-center mt-5">
                    <ion-button
                      color="secondary"
                      expand="block"
                      @click="loginAsGuest"
                      >Login as Guest</ion-button
                    >
                  </div>
                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </ion-content>
  </section>
</template>

<script setup lang="ts" name="LoginView">
import {
  IonGrid,
  IonContent,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonInput,
  IonButton,
  IonIcon,
  IonImg,
  IonAlert,
} from "@ionic/vue";
import { mailOutline, keyOutline } from "ionicons/icons";
import { useRouter } from "vue-router";
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
import axios from 'axios';
import { ref } from 'vue';

type Model = {
  email: string;
  password: string;
};

const router = useRouter();

const schema = yup.object({
  email: yup.string().required(),
  password: yup.string().required().min(6),
});

const { handleSubmit } = useForm<Model>({
  validationSchema: schema,
  validateOnMount: false,
  initialValues: {
    email: "emilys",
    password: "emilyspass",
  },
});

const { errorMessage: errorMessageEmail, value: email } = useField(
  "email",
  schema
);
const { errorMessage: errorMessagePassword, value: password } = useField(
  "password",
  schema
);

// Add error message ref
const errorMessage = ref('');

function onInvalidSubmit({
  values,
  errors,
  results,
}: {
  values: any;
  errors: any;
  results: any;
}) {
  console.log(values); // current form values
  console.log(errors); // a map of field names and their first error message
  console.log(results); // a detailed map of field names and their validation results
}

// Update onSubmit function
const onSubmit = handleSubmit(async (values) => {
    try {
        const response = await axios.post('https://dummyjson.com/auth/login', {
            username: values.email,
            password: values.password,
        });
        const token:string = response.data.accessToken;
        localStorage.setItem('token', token);
        router.push("/home");
    } catch (error: any) {

        if (error.response) {
            errorMessage.value = error.response.data.message || 'Invalid credentials';
        } else if (error.request) {
            errorMessage.value = 'Network error. Please check your connection.';
        } else {
            errorMessage.value = 'An unexpected error occurred.';
        }
        console.error('Login error:', error);
    }
}, onInvalidSubmit);

function loginAsGuest() {
  router.push("/home");
}
</script>
