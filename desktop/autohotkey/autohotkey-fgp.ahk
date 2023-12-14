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
        Loop 1
            SendEvent("{WheelUp}{Up}{Up}")
        return
    }

    #+Down::
    {
        SetKeyDelay 65, 65
        Loop 1
            SendEvent("{WheelDown}{Down}{Down}")
        return
    }
    #+i::
    {
        SetKeyDelay 65, 65
        Loop 1
            SendEvent("{WheelUp}{Up}{Up}")
        return
    }
    #+k::
    {
        SetKeyDelay 65, 65
        Loop 1
            SendEvent("{WheelDown}{Down}{Down}")
        return
    }
    #^Left:: Send("{LButton}")
    #^Right:: Send("{RButton}")

    #^Up::
    {
        SetKeyDelay 65, 65
        Loop 2
            SendEvent("{WheelUp}{Up}{Up}")
        return
    }
    #^Down::
    {
        SetKeyDelay 65, 65
        Loop 2
            SendEvent("{WheelDown}{Down}{Down}")
        return
    }
    ^#NumpadSub::
    {
        SetKeyDelay 65, 65
        Loop 3
            SendEvent("{WheelUp}")
        return
    }
    ^#NumPadAdd::
    {
        SetKeyDelay 65, 65
        Loop 3
            SendEvent("{WheelDown}")
        return
    }

    :*:bdd::border{:} 1px dashed {#}0808{;}

    :*:h..:: {
        SetKeyDelay 15, 15
        SendEvent '<{!}DOCTYPE html>`n'
        SendEvent '<html lang="en">`n</html>'
        Loop 7
            SendEvent("{left}")
        SendEvent '<head>`n</head>'
        Loop 7
            SendEvent("{left}")
        SendEvent '<meta charset="UTF-8">`n'
        SendEvent '<meta name="viewport" content="width=device-width, initial-scale=1.0">`n'
        SendEvent '<title>Document</title>`n'
        SendEvent '{down}'
        SendEvent '<body>`n`n'
        SendEvent '</body>`n'
        return
    }

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
        Loop 1
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

    :*:/..:: {
        SetKeyDelay 15, 15
        SendEvent '==========  =========='
        Loop 11
            Send("{NumpadLeft}")
        Send '{Ctrl down}{/}{Ctrl up}'
        return
    }

    :*:v..::var(--){NumpadLeft}
    :*:v-::var(-){NumpadLeft}

    :*:console..::console.log(){NumpadLeft}
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
    #c:: Run "cmd /k cd D:\Inbox\"
    #t:: Run "https://translate.google.com/"
    #w:: Run "https://web.whatsapp.com/"
    #g:: Run "https://github.com/fgp555?tab=repositories"


    #Numpad0::
    {
        SendInput("git add . && git commit --amend --no-edit && git push --force")
        Return
    }
    
    #Numpad3::
    {
        SendInput("git pull --rebase")
        Return
    }

    #Numpad4::
    {
        SendInput("cd /home/fgpooswu/public_html/wp-content/themes")
        Return
    }

    #Numpad5::
    {
        SendInput("git add . && git commit --amend --no-edit && git push --force")
        Return
    }

    #NumpadDot::
    {
        SendInput("git add . && git commit --amend --no-edit && git push --force")
        Return
    }

    #F5::
    {
        command := "winver"
        Run(A_ComSpec " /c " command)
        Return
    }

    #y::
    {
        searchTerm := "cats"
        url := "https://www.youtube.com/results?search_query=" . searchTerm
        Run(url)
        Return
    }

    !+l::
    {
        SendInput("system cls{Enter}{Up}{Up}{Enter}")
        Return
    }