@echo off
echo Добавление файлов...
git add .

echo Коммит...
git commit -m "автообновление"

echo Пуш на GitHub...
git push origin main

pause
