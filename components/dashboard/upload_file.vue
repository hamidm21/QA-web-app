<template>
    <div class="w-full h-full">
      <main class="con mx-auto w-full h-full">
        <!-- file upload modal -->
        <article aria-label="File Upload Modal" class="relative h-full flex flex-col" @drop="dropHandler($event);" @dragover="dragOverHandler($event);" @dragleave="dragLeaveHandler($event);" @dragenter="dragEnterHandler($event);">
          <!-- overlay -->
          <div id="overlay" class="w-full h-full absolute top-0 left-0 pointer-events-none z-50 flex flex-col items-center justify-center rounded-md">
            <i>
              <svg class="fill-current w-12 h-12 mb-3 text-blue-700" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M19.479 10.092c-.212-3.951-3.473-7.092-7.479-7.092-4.005 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408zm-7.479-1.092l4 4h-3v4h-2v-4h-3l4-4z" />
              </svg>
            </i>
            <p class="text-lg text-blue-700">پیوست ها را اینجا رها کنید</p>
          </div>

          <!-- scroll area -->
          <section class="h-full overflow-auto p-8 w-full h-full flex flex-col">
            <header class="border-dashed border-2 border-gray-400 py-12 flex flex-col justify-center items-center">
              <p class="mb-3 font-semibold text-gray-900 flex flex-wrap justify-center">
                <span>پیوست را رها کنید یا کلیک کنید</span>
              </p>
              <input @change="hiddenChange($event)" id="hidden-input" type="file" multiple class="hidden" />
              <div @click="UBHandler($event)" id="button" class="mt-2 rounded-sm px-3 py-1 bg-gray-200 hover:bg-gray-300 focus:shadow-outline focus:outline-none cursor-pointer">
                بارگذاری پیوست
              </div>
            </header>

            <h1 class="pt-8 pb-3 font-semibold sm:text-lg text-gray-900">
              انتخاب شده
            </h1>

            <ul id="gallery" class="flex flex-1 flex-wrap -m-1">

              <li v-if="images.length === 0 && files.length === 0" id="empty" class="h-full w-full text-center flex flex-col items-center justify-center items-center">
                <img class="mx-auto w-20" src="~/assets/icons/empty-box.svg" alt="no data" />
                <span class="text-small text-gray-600 mt-1">هیچ فایلی انتخاب نشده است</span>
              </li>

              <li v-for="image of images" v-bind:key="image.id" class="block p-1 w-1/4 h-24 min-w-32">
                <article tabindex="0" class="group hasImage w-full h-full rounded-md focus:outline-none focus:shadow-outline bg-gray-100 cursor-pointer relative text-transparent hover:text-white shadow-sm">
                <img v-bind:alt="image.name" class="img-preview w-full h-full sticky object-cover rounded-md bg-fixed" v-bind:src="image.id" />

                <section class="flex flex-col rounded-md text-xs break-words w-full h-full z-20 absolute top-0 py-2 px-3">
                    <h1 class="flex-1">{{ image.name.substr(0, 20) }}</h1>
                    <div class="flex items-center">
                    <div @click="cancelOneImage(image.id)" class="delete ml-auto focus:outline-none hover:bg-gray-300 p-1 rounded-md">
                        <svg class="pointer-events-none fill-current w-4 h-4 ml-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path class="pointer-events-none" d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z" />
                        </svg>
                    </div>
                    <span class="p-1">
                        <i>
                        <svg class="fill-current w-4 h-4 ml-auto pt-" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M5 8.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5zm9 .5l-2.519 4-2.481-1.96-4 5.96h14l-5-8zm8-4v14h-20v-14h20zm2-2h-24v18h24v-18z" />
                        </svg>
                        </i>
                    </span>
                      <p class="p-1 size text-xs">{{image.size}}</p>
                    </div>
                </section>
                </article>
            </li>

            <li v-for="file in files" v-bind:key="file.id" class="block p-1 w-1/4 h-24">
                <article tabindex="0" class="group hasImage w-full h-full rounded-md focus:outline-none focus:shadow-outline bg-gray-100 cursor-pointer relative text-transparent hover:text-white shadow-sm">
                <img v-bind:alt="file.name" class="img-preview hidden w-full h-full sticky object-cover rounded-md bg-fixed" />
                <div class="flex w-full h-full justify-center items-center">
                  <img class="w-1/4" src="~/assets/icons/file_icon.svg" v-bind:alt="file.name">
                </div>
                <section class="flex flex-col rounded-md text-xs break-words w-full h-full z-20 absolute top-0 py-2 px-3">
                    <h1 class="flex-1"> {{ file.name.substr(0, 20) }} </h1>
                    <div class="flex items-center">
                    <button @click="cancelOneFile(file.id)" class="delete ml-auto focus:outline-none hover:bg-gray-300 p-1 rounded-md">
                        <svg class="pointer-events-none fill-current w-4 h-4 ml-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                          <path class="pointer-events-none" d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z" />
                        </svg>
                    </button>
                    <span class="p-1">
                        <i>
                          <svg class="fill-current w-4 h-4 ml-auto pt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M15 2v5h5v15h-16v-20h11zm1-2h-14v24h20v-18l-6-6z" />
                          </svg>
                        </i>
                    </span>
                    <p class="p-1 size text-xs"> {{file.size}} </p>
                    </div>
                </section>
                </article>
            </li>

            </ul>
          </section>

          <!-- sticky footer -->
          <footer class="flex justify-start px-8 pb-8 pt-4">
            <button @click="cancel()" id="cancel" class="mr-3 rounded-md px-3 py-1 bg-primary text-white hover:shadow-md focus:shadow-outline focus:outline-none">
              لغو همه
            </button>
          </footer>
        </article>
      </main>
    </div>
</template>

<script>
if (process.client) {
    var 
    overlay = document.getElementById("overlay"),
    hasFiles = ({ dataTransfer: { types = [] } }) =>
    types.indexOf("Files") > -1;

}

export default {
    methods: {
        async addFile(file) {
          if (this.FILES.length < 4) {
            const base = await this.toBase64(file)
            const isImage = file.type.match("image.*"),
                objectURL = URL.createObjectURL(file),
                obj = {};
            obj.name = file.name;
            obj.id = objectURL;
            obj.size =
                file.size > 1024
                ? file.size > 1048576
                    ? Math.round(file.size / 1048576) + "mb"
                    : Math.round(file.size / 1024) + "kb"
                : file.size + "b";

            isImage ? this.images.push(obj) : this.files.push(obj);

            this.FILES.push(file);
            this.$store.commit("addToFiles", {id: objectURL, base})
          } else {
            this.$toast.info('تعداد فایل های بارگذاری شده نمیتواند بیشتر از ۴ باشد')
          }
        },
        toBase64(file) {
          return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
          })
        },
        dropHandler(e) {
            e.preventDefault();
            for (const file of e.dataTransfer.files) {
                this.addFile(file);
                overlay.classList.remove("draggedover");
                this.counter = 0;
            }
        },
        dragOverHandler(e) {
            if (hasFiles(e)) {
                e.preventDefault();
            }
        },
        dragLeaveHandler(e) {
            1 > -- this.counter && overlay.classList.remove("draggedover");
        },
        dragEnterHandler(e) {
            e.preventDefault();
            if (!hasFiles(e)) {
                return;
            }
            ++ this.counter && overlay.classList.add("draggedover");
        },
        dropHandler(e) {
            e.preventDefault();
            for (const file of e.dataTransfer.files) {
                this.addFile(file);
                overlay.classList.remove("draggedover");
                this.counter = 0;
            }
        },
        UBHandler(e) {
            e.preventDefault();
            if (process.client) {
                document.getElementById('hidden-input').click();
            }
        },
        hiddenChange(e) {
            for (const file of e.target.files) {
                this.addFile(file);
            }
        },
        cancel() {
            this.FILES = [];
            this.counter = 0
            this.images = [];
            this.files = [];
            this.$store.commit("removeAllFiles")
        },
        cancelOneImage(id) {
          this.images = this.images.filter(x => x.id !== id)
          this.FILES = this.FILES.filter(x => x.id !== id)
          this.$store.commit("removeFromFiles", id)
        },
        cancelOneFile(id) {
          this.files = this.files.filter(x => x.id !== id)
          this.FILES = this.FILES.filter(x => x.id !== id),
          this.$store.commit("removeFromFiles", id)
        }

    },
    data() {
        return {
            FILES: [],
            counter: 0,
            images: [],
            files: [],
        }
    }
}
</script>

<style>
.hasImage:hover section {
  background-color: rgba(5, 5, 5, 0.4);
}
.hasImage:hover button:hover {
  background: rgba(5, 5, 5, 0.45);
}

#overlay p,
i {
  opacity: 0;
}

#overlay.draggedover {
  background-color: rgba(255, 255, 255, 0.7);
}
#overlay.draggedover p,
#overlay.draggedover i {
  opacity: 1;
}

.group:hover .group-hover\:text-blue-800 {
  color: #2b6cb0;
}
</style>