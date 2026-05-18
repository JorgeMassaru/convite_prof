package com.example.atv_ldw_erro

interface Platform {
    val name: String
}

expect fun getPlatform(): Platform