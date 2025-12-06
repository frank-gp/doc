; #	Win (Windows logo key)
; !	Alt
; ^	Ctrl
; +	Shift

#Requires AutoHotkey v2.0
#SingleInstance Force
SendMode("Input")

#n:: Send("ñ")
#a:: Send("á")
#3:: Send("é")
#i:: Send("í")
#o:: Send("ó")
#u:: Send("ú")
#^;:: Send("ñ")
#/:: Send("¿")

#^j:: Send("{Left}")
#^l:: Send("{Right}")
#^i:: Send("{Up}")
#^k:: Send("{Down}")
#^h:: Send("{Home}")
#^':: Send("{End}")
#^\:: Send("{Del}")

#Del:: Send("{Home}{Shift down}{End}{Shift up}{Del}")
#+Enter:: Send("{Home}{Enter}{Up}")
#Enter:: Send("{End}{Enter}")
^#Enter:: Send("{End}{Enter}")
^#u:: Send("{WheelUp}")
^#o:: Send("{WheelDown}")
^#y:: Send("{WheelLeft}")
^#p:: Send("{WheelRight}")

#c:: Send("console.log(){NumpadLeft}")

#+Up::
{
    SetKeyDelay 65, 65
    loop 1
        SendEvent("{WheelUp}{Up}{Up}")
    return
}

#+Down::
{
    SetKeyDelay 65, 65
    loop 1
        SendEvent("{WheelDown}{Down}{Down}")
    return
}
#+i::
{
    SetKeyDelay 65, 65
    loop 1
        SendEvent("{WheelUp}{Up}{Up}")
    return
}
#+k::
{
    SetKeyDelay 65, 65
    loop 1
        SendEvent("{WheelDown}{Down}{Down}")
    return
}
#^Left:: Send("{LButton}")
#^Right:: Send("{RButton}")

#^Up::
{
    SetKeyDelay 65, 65
    loop 2
        SendEvent("{WheelUp}{Up}{Up}")
    return
}
#^Down::
{
    SetKeyDelay 65, 65
    loop 2
        SendEvent("{WheelDown}{Down}{Down}")
    return
}
^#NumpadSub::
{
    SetKeyDelay 65, 65
    loop 3
        SendEvent("{WheelUp}")
    return
}
^#NumPadAdd::
{
    SetKeyDelay 65, 65
    loop 3
        SendEvent("{WheelDown}")
    return
}

:*://.:: {
    SetKeyDelay 15, 15
    SendEvent '========== =========='
    loop 11
        Send("{NumpadLeft}")
    Send '{Ctrl down}{/}{Ctrl up}'
    return
}

:*:cl..::console.log(){NumpadLeft}
:*:log..::console.log(){NumpadLeft}
:*:yyy::https://www.youtube.com/results?search_query=

:*:php..::<?php ?>{NumpadLeft}{NumpadLeft}{NumpadLeft}
:*:echo..::<?php echo ?>{NumpadLeft}{NumpadLeft}{NumpadLeft}
:*:endif..::<?php endif ?>{NumpadLeft}{NumpadLeft}
:*:post..::$_POST['']{NumpadLeft}{NumpadLeft}
:*:get..::$_GET['']{NumpadLeft}{NumpadLeft}

#b:: Run "notepad"
#f:: Run "cmd /k cd D:\"
#t:: Run "https://translate.google.com/"
#g:: Run "https://chatgpt.com"
#Space:: {
    Run("powershell.exe", "C:\")
}

#NumpadDot::
{
    SendInput(" git add . && git commit --amend --no-edit")
    return
}

#NumpadDiv::
{
    SendInput("pm2 logs")
    return
}

#NumpadMult::
{
    SendInput(" git pull --rebase")
    return
}

#Numpad0::
{
    SendInput(" git add . && git commit --amend --no-edit && git push --force")
    return
}

#Numpad1::
{
    SendInput(" git status && git remote -v && echo '' && git log -3 --pretty=format:'%h %ad %s' --date=iso")
    return
}

#Numpad2::
{
    SendInput(" git add . && git commit -m ''{Left}")
    return
}

#Numpad3::
{
    SendInput(" git log --oneline -3")
    return
}

#Numpad4::
{
    ; Ejecuta cmd en una nueva ventana (usando Windows Terminal si es por defecto)
    Run("cmd.exe", "C:\")
    ; Espera a que aparezca una ventana de terminal (cmd tradicional o Windows Terminal)
    WinWait("ahk_exe cmd.exe", , 5)  ; Intenta esperar a cmd tradicional
    if !WinActive("ahk_exe cmd.exe") {
        ; Si no es cmd.exe clásico, prueba Windows Terminal
        WinWait("ahk_exe WindowsTerminal.exe", , 5)
        WinActivate("ahk_exe WindowsTerminal.exe")
    } else {
        WinActivate("ahk_exe cmd.exe")
    }
    Sleep(600) ; espera más larga para asegurar carga
    Send("ssh -i ~/.ssh/ec2_my_key_pair.pem ubuntu@18.117.184.75")
    return
}

#Numpad5::
{
    SendInput(" flutter create myapp --empty --org com.frankgp --platforms android,ios")
    return
}

#Numpad6::
{
    ; Ejecuta cmd en una nueva ventana (usando Windows Terminal si es por defecto)
    Run("cmd.exe", "C:\")
    ; Espera a que aparezca una ventana de terminal (cmd tradicional o Windows Terminal)
    WinWait("ahk_exe cmd.exe", , 5)  ; Intenta esperar a cmd tradicional
    if !WinActive("ahk_exe cmd.exe") {
        ; Si no es cmd.exe clásico, prueba Windows Terminal
        WinWait("ahk_exe WindowsTerminal.exe", , 5)
        WinActivate("ahk_exe WindowsTerminal.exe")
    } else {
        WinActivate("ahk_exe cmd.exe")
    }
    Sleep(600) ; espera más larga para asegurar carga
    Send("ssh -i ~/.ssh/cpanel_systeapp.pem -p 21098 systssym@68.65.122.237")
    return
}

#Numpad7::
{
    Run("cmd.exe", "C:\")
}

#Numpad8::
{
    SendInput(" git checkout head~1")
    return
}

#Numpad9::
{
    SendInput(" git restore . && git clean -fd")
    return
}

#F12::
{
    SendInput(" rm -rf .git && git init && git add . && git commit -m 'initial_commit'")
    return
}

#y::
{
    searchTerm := "frank gp"
    url := "https://www.youtube.com/results?search_query=" . searchTerm
    Run(url)
    return
}

; para la terminal de sql
!+l::
{
    SendInput("system cls{Enter}{Up}{Up}{Enter}")
    return
}

; Suspender
#s:: DllCall("PowrProf.dll\SetSuspendState", "UInt", 0, "UInt", 0, "UInt", 0)
return