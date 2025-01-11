<template>
    <div class="ms-form-block-4" @click="closePopup">
        <div class="ms-form-3" @click.stop>
            <h1 class="ms-form-heading-3">{{ popupTitle }}</h1>
            <div class="ms-form-sub-heading">{{ popupDetail }}</div>
            <button class="button-primary w-button" @click="handleButtonClick">{{ buttonText }}</button>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits, onMounted, onUnmounted } from 'vue';

// Define props for the popup
defineProps(['popupTitle', 'popupDetail', 'buttonText']);

// Define events that will be emitted
const emit = defineEmits(['buttonClick', 'close']);

// Handle button click (emit the buttonClick event)
const handleButtonClick = () => {
    emit('buttonClick'); // Emit an event when the button is clicked
};

// Handle closing the popup
const closePopup = () => {
    emit('close'); // Emit the close event
};

// Disable body scroll on mount
onMounted(() => {
    document.body.style.overflow = 'hidden';
});

// Restore body scroll on unmount
onUnmounted(() => {
    document.body.style.overflow = 'auto';
});
</script>

<style scoped>
    .ms-form-block-4{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        backdrop-filter: blur(3px);
        background-color: #80808008;
        z-index: 10;
    }
    
    .ms-form-3 {
        background: white;
        position: fixed;
        top: 25%;
        left: 50%;
        transform: translate(-50%, 0);
        grid-column-gap: 16px;
        grid-row-gap: 16px;
        aspect-ratio: auto;
        text-align: center;
        object-fit: fill;
        grid-template-rows: auto auto;
        grid-template-columns: 1fr 1fr;
        grid-auto-columns: 1fr;
        width: 400px;
        min-width: 400px;
        margin-left: auto;
        margin-right: auto;
        padding: 2%;
        display: block;
        border: 3px solid black;
    }

    .button-primary .w-button{ 
        margin-left: auto;
        margin-right: auto;
        padding: auto;
        bottom: 0;
    }

    * {
        box-sizing: border-box;
        margin-bottom: 15px;
    }
</style>
