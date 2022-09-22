<template>
    <header sticky inset-x-0 top-0 z-40 bg-white border-b-2 border-gray-100>
        <div flex items-center justify-between h-16 px-4 mx-auto max-w-screen-xl>
            <nav flex items-center>
                <a text-sm flex items-center space-x-2>
                    <span font-medium font-heading>Shopify Exercise</span>
                    <span w-1px h-6 mx-4 bg-gray-200 />
                    <img src="/shopify_logo.png" w-6 h-6 alt="Shopify logo">
                </a>
                <div class="flex items-center sm:hidden">
                    <button class="inline-flex items-center gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg><span class="text-xs font-medium">Menu</span>
                    </button>
                </div>
            </nav>
            <div class="flex items-center justify-end flex-1">
                <a href="https://github.com/NicolaSpadari/shopify-api-exercise" text-xs font-medium hover:opacity-75 rel="noopener noreferrer" target="_blank">
                    GitHub
                </a>
            </div>
        </div>
    </header>
</template>
