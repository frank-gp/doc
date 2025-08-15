// android\app\src\main\java\com\frankgp\tutorial2\ToastModule.kt

package com.frankgp.tutorial2 // <-- cambia esto por tu paquete

import android.widget.Toast
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class ToastModule(private val reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "ToastModule" // Este será el nombre que usarás en JS
    }

    @ReactMethod
    fun show(mensaje: String, duracion: Int) {
        Toast.makeText(reactContext, mensaje, duracion).show()
    }
}
