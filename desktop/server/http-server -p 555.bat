@Echo off

:home
cls

echo ========== chrome http://127.0.0.1:555 ==========
start chrome http://127.0.0.1:555
echo ========== chrome http-server -p 555 ==========
@http-server -p 555


pause

