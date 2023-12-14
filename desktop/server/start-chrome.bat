@Echo off

:home
cls

echo ========== chrome http://127.0.0.1:555 ==========
start chrome  https://github.com/frank-gp/lib.git
echo ========== chrome http-server -p 555 --cors==========


pause

