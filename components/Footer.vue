<template>
  <footer
    class="z-10 flex flex-col items-center justify-center border-t-gray-300 bg-gray-100 pb-2 dark:bg-gray-800"
  >
    <Tooltip hoveredText="Go to Top" class="-top-3">
      <NuxtLink to="#home">
        <div
          class="relative rounded-lg border border-gray-600 bg-black pt-2 dark:shadow-gray-500"
        >
          <svg
            class="h-6 w-7 animate-bounce fill-current text-gray-200"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18 18L12 12L6 18" stroke-width="2" />
            <path d="M18 12L12 6L6 12" stroke-width="2" />
          </svg>
        </div>
      </NuxtLink>
    </Tooltip>
    <div class="flex gap-4 pb-2">
      <Tooltip hoveredText="Github">
        <NuxtLink to="https://github.com/tongvantruong" target="_blank">
          <svg
            class="h-8 w-8 fill-current text-gray-400 hover:scale-110 hover:text-gray-300"
            viewBox="-2 -2 24 24"
          >
            <path
              d="M18.88 1.099C18.147.366 17.265 0 16.233 0H3.746C2.714 0 1.832.366 1.099 1.099.366 1.832 0 2.714 0 3.746v12.487c0 1.032.366 1.914 1.099 2.647.733.733 1.615 1.099 2.647 1.099H6.66c.19 0 .333-.007.429-.02a.504.504 0 0 0 .286-.169c.095-.1.143-.245.143-.435l-.007-.885c-.004-.564-.006-1.01-.006-1.34l-.3.052c-.19.035-.43.05-.721.046a5.555 5.555 0 0 1-.904-.091 2.026 2.026 0 0 1-.872-.39 1.651 1.651 0 0 1-.572-.8l-.13-.3a3.25 3.25 0 0 0-.41-.663c-.186-.243-.375-.407-.566-.494l-.09-.065a.956.956 0 0 1-.17-.156.723.723 0 0 1-.117-.182c-.026-.061-.004-.111.065-.15.07-.04.195-.059.378-.059l.26.04c.173.034.388.138.643.311a2.1 2.1 0 0 1 .631.677c.2.355.44.626.722.813.282.186.566.28.852.28.286 0 .533-.022.742-.065a2.59 2.59 0 0 0 .585-.196c.078-.58.29-1.028.637-1.34a8.907 8.907 0 0 1-1.333-.234 5.314 5.314 0 0 1-1.223-.507 3.5 3.5 0 0 1-1.047-.872c-.277-.347-.505-.802-.683-1.365-.177-.564-.266-1.215-.266-1.952 0-1.049.342-1.942 1.027-2.68-.32-.788-.29-1.673.091-2.652.252-.079.625-.02 1.119.175.494.195.856.362 1.086.5.23.14.414.257.553.352a9.233 9.233 0 0 1 2.497-.338c.859 0 1.691.113 2.498.338l.494-.312a6.997 6.997 0 0 1 1.197-.572c.46-.174.81-.221 1.054-.143.39.98.424 1.864.103 2.653.685.737 1.028 1.63 1.028 2.68 0 .737-.089 1.39-.267 1.957-.177.568-.407 1.023-.689 1.366-.282.343-.633.63-1.053.865-.42.234-.828.403-1.223.507a8.9 8.9 0 0 1-1.333.235c.45.39.676 1.005.676 1.846v3.11c0 .147.021.266.065.357a.36.36 0 0 0 .208.189c.096.034.18.056.254.064.074.01.18.013.318.013h2.914c1.032 0 1.914-.366 2.647-1.099.732-.732 1.099-1.615 1.099-2.647V3.746c0-1.032-.367-1.914-1.1-2.647z"
            />
          </svg>
        </NuxtLink>
      </Tooltip>
      <Tooltip hoveredText="Email">
        <NuxtLink href="mailto:tong.tvt.truong@gmail.com" target="_blank">
          <svg
            viewBox="0 -3.5 32 32"
            class="h-8 w-8 fill-current text-gray-400 hover:scale-110 hover:text-gray-300"
          >
            <title>mail</title>
            <desc>Created with Sketch Beta.</desc>
            <defs></defs>
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill-rule="evenodd"
              sketch:type="MSPage"
            >
              <g
                id="Icon-Set-Filled"
                sketch:type="MSLayerGroup"
                transform="translate(-414.000000, -261.000000)"
              >
                <path
                  d="M430,275.916 L426.684,273.167 L415.115,285.01 L444.591,285.01 L433.235,273.147 L430,275.916 L430,275.916 Z M434.89,271.89 L445.892,283.329 C445.955,283.107 446,282.877 446,282.634 L446,262.862 L434.89,271.89 L434.89,271.89 Z M414,262.816 L414,282.634 C414,282.877 414.045,283.107 414.108,283.329 L425.147,271.927 L414,262.816 L414,262.816 Z M445,261 L415,261 L430,273.019 L445,261 L445,261 Z"
                  id="mail"
                  sketch:type="MSShapeGroup"
                ></path>
              </g>
            </g>
          </svg>
        </NuxtLink>
      </Tooltip>
      <Tooltip hoveredText="Linkedin">
        <NuxtLink
          to="https://www.linkedin.com/in/truongtong-jay/"
          target="_blank"
        >
          <svg
            viewBox="0 0 50 50"
            class="h-8 w-8 fill-current text-gray-400 hover:scale-110 hover:text-gray-300"
          >
            <path
              d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"
            />
          </svg>
        </NuxtLink>
      </Tooltip>
    </div>
    <span class="text-gray-500">Truong Tong @{{ currentYear }}</span>
  </footer>
</template>
<script setup lang="ts">
import { NuxtLink, Tooltip } from "#components";

const currentYear = computed(() => new Date().getFullYear());
</script>
