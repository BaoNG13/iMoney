<template>
  <form @submit.prevent="onSubmit">
    <!-- Start: Main form -->
    <div class="row mt-8">
      <div class="bg-white rounded-lg py-4">
        <div class="container mx-auto px-8">
          <div class="row">
            <label for="total" class="flex items-end">
              <div class="w-10 text-right leading-10 mr-4 pb-1">
                <span
                  class="inline-block px-1 text-dark border border-dark rounded text-sm font-bold"
                  >USD</span
                >
              </div>
              <div class="flex flex-col border-b border-gray-100 pb-1">
                <span class="font-semibold text-xs text-dark">Total</span>
                <input
                  id="total"
                  type="text"
                  placeholder="0"
                  class="text-4xl text-dark w-full outline-none mt-1"
                  v-model="total"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label for="category" class="flex items-center">
              <div
                class="flex items-center flex-none w-10 text-right leading-10 mr-4"
              >
                <span
                  class="inline-block ml-auto w-8 h-8 rounded-full bg-blue-300"
                ></span>
              </div>
              <div class="flex-1 border-b border-gray-100 pb-1 py-3">
                <input
                  id="category"
                  type="text"
                  placeholder="Select a category"
                  class="text-xl text-dark w-full outline-none"
                  v-model="category"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label for="note" class="flex items-center">
              <div
                class="flex items-center flex-none w-10 text-right leading-10 mr-4"
              >
                <span class="flex-none w-10 mr-4">
                  <i class="t2ico t2ico-document text-2xl"></i>
                </span>
              </div>
              <div class="flex-1 border-b border-gray-100 pb-1 py-3">
                <input
                  id="note"
                  type="text"
                  placeholder="Note"
                  class="text-dark w-full outline-none"
                  v-model="note"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label for="time" class="flex items-center">
              <div class="flex-none w-10 mr-4">
                <span class="flex items-center justify-end text-dark">
                  <i class="t2ico t2ico-calendar text-2xl"></i>
                </span>
              </div>
              <div class="flex-1 py-2 border-b border-gray-100">
                <div class="text-dark w-full">{{ new Date() }}</div>
              </div>
            </label>
          </div>
          <div class="row">
            <label for="wallet" class="flex items-center">
              <div class="flex-none w-10 mr-4">
                <span class="flex items-center justify-end text-dark">
                  <i class="t2ico t2ico-wallet text-2xl"></i>
                </span>
              </div>
              <div class="flex-1 py-2">
                <div class="text-dark w-full">My Wallet</div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-8" v-if="!isMoreDetails">
      <button
        @click="isMoreDetails = true"
        class="bg-white rounded-lg py-3 w-full text-primary font-semibold"
      >
        More Details
      </button>
    </div>

    <template v-if="isMoreDetails">
      <!-- Start: Advanced form -->
      <div class="row mt-8">
        <div class="bg-white rounded-lg py-4">
          <div class="container mx-auto px-8">
            <div class="row">
              <label for="location" class="flex items-center">
                <div class="flex-none w-10 mr-4">
                  <span class="flex items-center justify-end text-dark">
                    <i class="t2ico t2ico-location text-2xl"></i>
                  </span>
                </div>
                <div class="flex-1 py-2 border-b border-gray-100">
                  <input
                    id="location"
                    type="text"
                    placeholder="Select a location"
                    class="text-dark w-full outline-none"
                    v-model="location"
                  />
                </div>
              </label>
            </div>
            <div class="row">
              <label for="withPerson" class="flex items-center">
                <div class="flex-none w-10 mr-4">
                  <span class="flex items-center justify-end text-dark">
                    <i class="t2ico t2ico-users text-2xl"></i>
                  </span>
                </div>
                <div class="flex-1 py-2 border-b border-gray-100">
                  <input
                    id="withPerson"
                    type="text"
                    placeholder="With person"
                    class="text-dark w-full outline-none"
                    v-model="withPerson"
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <!-- Start: Upload photos -->
      <div class="row mt-8">
        <div class="bg-white rounded-lg py-4">
          <div class="container mx-auto px-8">
            <div class="row">
              <label for="file" class="flex items-center text-primary">
                <div class="flex-none w-10 mr-4">
                  <span class="flex items-center justify-end">
                    <i class="t2ico t2ico-camera text-2xl"></i>
                  </span>
                </div>
                <div class="flex-1 py-2 border-b border-gray-100">
                  <div class="w-full font-semibold">Upload photos</div>
                  <input
                    id="file"
                    type="file"
                    class="w-0 h-0 overflow-hidden absolute"
                    @change="onChangeFile"
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
        <div class="text-red">{{ errorFile }}</div>
      </div>
    </template>

    <button class="bg-primary text-white font-bold rounded-lg w-20 h-10 mx-auto">Button</button>
  </form>
</template>

<script>
import { ref } from "vue";
import { useUser } from "@/composables/useUser";
import useCollection from "@/composables/useCollection";
import useStorage from "@/composables/useStorage";

export default {
  setup() {
    const isMoreDetails = ref(false);
    const { getUser } = useUser();
    const { error, addRecord } = useCollection("transaction");
    const { uploadFile, url } = useStorage("transaction");

    const total = ref(0);
    const category = ref("");
    const note = ref("");
    const time = ref(new Date());
    const file = ref(null);
    const errorFile = ref(null);
    const location = ref("");
    const withPerson = ref("");

    function onChangeFile(event) {
      const selected = event.target.files[0];
      const typesFile = ["image/png", "image/jpg"];

      if (selected && typesFile.includes(selected.type)) {
        file.value = selected;
      } else {
        file.value = null;
        errorFile.value = "Please select file png or jpg.";
      }
    }

    async function onSubmit() {
      if (file.value) await uploadFile(file.value);
      console.log(url);

      const { user } = getUser();
      const transaction = {
        total: parseInt(total.value),
        category: category.value,
        note: note.value,
        time: time.value,
        location: location.value,
        withPerson: withPerson.value,
        userId: user.value.uid,
        thumbnail: url.value,
      };

      await addRecord(transaction);

      console.log(error);
      console.log("Created");
    }
    return {
      onSubmit,
      isMoreDetails,
      total,
      category,
      note,
      time,
      location,
      withPerson,
      errorFile,
      onChangeFile,
    };
  },
};
</script>