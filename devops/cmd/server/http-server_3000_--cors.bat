@Echo off

:home
cls

echo ========== chrome http://127.0.0.1:3000 ==========
start chrome http://127.0.0.1:3000
echo ========== chrome http-server -p 3000 --cors==========
@http-server -p 3000  --cors


pause

