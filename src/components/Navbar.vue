<template>
    <header sticky inset-x-0 top-0 z-40 bg-white border-b-2 border-gray-100>
        <div crate flex items-center justify-between h-16>
            <nav flex items-center>
                <a text-sm flex items-center space-x-2>
                    <span font-medium font-heading hidden lg="inline">Shopify Exercise</span>
                    <span w-1px h-6 mx-4 bg-gray-200 hidden lg="inline" />
                    <img src="/shopify_logo.png" w-6 h-6 alt="Shopify logo">
                </a>
            </nav>
            <div class="flex items-center justify-end flex-1">
                <a href="https://github.com/NicolaSpadari/shopify-api-exercise" text-xs font-medium rel="noopener noreferrer" target="_blank">
                    <span align-middle>
                        GitHub
                    </span>

                    <i-heroicons-solid-arrow-top-right-on-square w-4 h-4 ml-1 />
                </a>
            </div>
        </div>
    </header>
</template>
