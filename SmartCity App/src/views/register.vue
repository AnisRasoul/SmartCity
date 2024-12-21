<template>
  <section class="register">
    <ion-content class="h-screen">
      <div class="grid h-screen place-items-center">
        <ion-grid>
          <ion-row>
            <ion-col size="12">
              <ion-card class="shadow-none border-none bg-transparent">
                <ion-card-header class="text-center">
                  <ion-card-title>Register</ion-card-title>
                  <p class="mt-1">
                    Create an account, make sure to enter a valid email and a
                    strong password
                  </p>
                </ion-card-header>
                <ion-card-content class="my-12">
                  <form @submit="onSubmit" :validation-schema="schema">
                    <ion-row>
                      <ion-col class="p-3">
                        <ion-input
                          class="w-100"
                          clear-input
                          type="text"
                          placeholder="Name"
                          v-model="name"
                        >
                          <slot name="start">
                            <ion-icon
                              :icon="peopleOutline"
                              size="large"
                              class="mr-2"
                            />
                          </slot>
                        </ion-input>
                        <small class="text-red-500">{{
                          errorMessageName
                        }}</small>
                      </ion-col>
                    </ion-row>
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
                      >Register</ion-button
                    >
                  </form>

                  <div class="flex justify-center mt-5">
                    <p class="text-sm">
                      Already have an account?
                      <a href="login" class="underline">Login here</a>
                    </p>
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


<script setup lang="ts" name="RegisterView">
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
} from "@ionic/vue";
import { mailOutline, keyOutline, peopleOutline } from "ionicons/icons";
import { useRouter } from "vue-router";
import * as yup from "yup";
import { useForm, useField } from "vee-validate";
import axios from "axios";

type Model = {
  name: string;
  email: string;
  password: string;
};

const router = useRouter();

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
});

const { handleSubmit } = useForm<Model>({
  validationSchema: schema,
  validateOnMount: false,
});

const { errorMessage: errorMessageName, value: name } = useField(
  "name",
  schema
);
const { errorMessage: errorMessageEmail, value: email } = useField(
  "email",
  schema
);
const { errorMessage: errorMessagePassword, value: password } = useField(
  "password",
  schema
);

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

const onSubmit = handleSubmit((values) => {
    axios
        .post("http://localhost:3000/register", values)
        .then((response) => {
        router.push("/login");
        })
        .catch((error) => {
        console.log(error);
        });
  
  router.push("/home");
}, onInvalidSubmit);
</script>
