<template>
    <div class="text-black-50">
        <span>b: {{currency}}{{ item.budget_price }} </span>
        <span class="ms-4">m: {{currency}} {{ item.market_price }} </span>
        <span class="ms-4">q: {{ item.quantity }}</span>
        <span class="ms-4">ex: {{currency}}{{ item.bought_price }} </span>
    </div>
</template>