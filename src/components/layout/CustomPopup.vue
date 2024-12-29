<template>
    <div class="ms-form-block-4">
        <div class="ms-form-3">
            <h1 class="ms-form-heading-3">Message</h1>
            <div class="ms-form-sub-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <a href="" class="button-primary w-button">I understand</a>
        </div>
    </div>
</template>

<style scoped>
    
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