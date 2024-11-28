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

:*:bdd::border{:} 1px dashed {#}0808{;}

:*:link..:: {
    SetKeyDelay 15, 15
    SendEvent '<link rel="stylesheet" http{bs 4}href="./style.css"/>'
}

:*:essential..:: {
    SetKeyDelay 20, 20
    SendEvent '<link rel="stylesheet" http{bs 4}href="https://fgp.one/essential.css"/>'
}

:*:icon..:: {
    SetKeyDelay 20, 20
    SendEvent '<link rel="stylesheet" http{bs 4}href="https://fgp.one/icon.css"/>'
}

:*:script..:: {
    SetKeyDelay 65, 65
    SendEvent '<script>'
    loop 1
        Send("{Left}")
    SendEvent ' src="{Left}./script.js{Right} defer'
    return
}

:*:c..:: {
    SetKeyDelay 50, 50
    SendEvent '<style>{Enter}'
}

:*:j..:: {
    SetKeyDelay 50, 50
    SendEvent '<script>{Enter}'
}

:*://.:: {
    SetKeyDelay 15, 15
    SendEvent '========== =========='
    loop 11
        Send("{NumpadLeft}")
    Send '{Ctrl down}{/}{Ctrl up}'
    return
}

:*:v..::var(--){NumpadLeft}
:*:v-::var(-){NumpadLeft}

:*:log..::console.log(){NumpadLeft}
:*:api..::https://api.1rodemayo.com/movies
:*:api3..::https://api.1rodemayo.com/movies?quantity=3
:*:discord..::https://fgp.one/discord_soyhenry
:*:crud..::https://api.1rodemayo.com/crud/api
:*:cl..::console.log(){NumpadLeft}
:*:cccc::console.log(){NumpadLeft}
:*:yyy::https://www.youtube.com/results?search_query=
:*:ggg::https://github.com/fgp555/tutorial.git

:*:php..::<?php ?>{NumpadLeft}{NumpadLeft}{NumpadLeft}
:*:echo..::<?php echo ?>{NumpadLeft}{NumpadLeft}{NumpadLeft}
:*:endif..::<?php endif ?>{NumpadLeft}{NumpadLeft}
:*:post..::$_POST['']{NumpadLeft}{NumpadLeft}
:*:get..::$_GET['']{NumpadLeft}{NumpadLeft}

#b:: Run "notepad"
#f:: Run "cmd /k cd D:\frankgp.com\"
#c:: Run "https://chatgpt.com"
#t:: Run "https://translate.google.com/"
#w:: Run "https://web.whatsapp.com/"
#g:: Run "https://github.com/fgp555?tab=repositories"

#NumpadDot::
{
    SendInput("git pull --rebase")
    return
}

#Numpad0::
{
    SendInput("git add . && git commit --amend --no-edit && git push --force")
    return
}

#Numpad1::
{
    SendInput("git log --oneline")
    return
}

#Numpad2::
{
    SendInput("git add . && git commit -m ''{Left}")
    return
}

#Numpad3::
{
    SendInput("git add . && git commit --amend --no-edit")
    return
}

#Numpad4::
{
    SendInput("git status && git remote -v && git log --oneline")
    return
}

#Numpad5::
{
    SendInput("git remote add origin2 https://github.com/fgp555/tutorial.git")
    return
}

#Numpad6::
{
    SendInput("git clone https://github.com/fgp555/nestjs-initial.git .")
    return
}

#Numpad8::
{
    SendInput("git checkout head~1")
    return
}

#Numpad9::
{
    SendInput("git restore . && git clean -fd")
    ; SendInput("rm -rf .git && git init && git add . && git commit -m 'initial commit'")
    return
}

#NumpadDiv::
{
    SendInput("git restore .")
    return
}

#NumpadMult::
{
    SendInput("git restore . && git clean -fd")
    return
}

#F5::
{
    command := "winver"
    Run(A_ComSpec " /c " command)
    return
}

#F12::
{
    SendInput("rm -rf .git && git init && git add . && git commit -m 'initial commit'")
    return
}

#y::
{
    searchTerm := "yasmine js"
    url := "https://www.youtube.com/results?search_query=" . searchTerm
    Run(url)
    return
}

!+l::
{
    SendInput("system cls{Enter}{Up}{Up}{Enter}")
    return
}

#k::
{
    Run("cmd.exe", "C:\")
    Sleep(500)
    SendInput("cd\{Enter}")
    Sleep(500)
    SendInput('docker exec -it kafka-containers-kafka-1 /bin/bash')
    return
}

#s:: DllCall("PowrProf.dll\SetSuspendState", "UInt", 0, "UInt", 0, "UInt", 0)
return