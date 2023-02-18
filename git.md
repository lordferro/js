

***branch forcing (-f)***

git commit

git branch [name] - новая ветка

git checkout [name] - выбрать ветку

git checkout -b [yourbranchname] - создать новую ветку и переключиться на неё

git merge [name of branch which one we will merge into currently checkouted ] 

git rebase [under wich branch we want to rebase]

Перемещение на один коммит назад ^
Перемещение на несколько коммитов назад ~<num>

git checkout [commit name] - отделяем голову от ветки -> git checkout HEAD^ -передвигаем голову на предыдущий коммит

git checkout HEAD~4 - на 4 коммита назад, включая текущий.

git branch -f main HEAD~3 - перместить принудительно  main на три коммита назад от HEAD.

git reset HEAD~1
Reset отлично работает на локальных ветках, в локальных репозиториях.
Чтобы отменить изменения и поделиться отменёнными изменениями с остальными, надо использовать git revert
Забавно, появился новый коммит. Дело в том, что новый коммит C2' просто содержит изменения, полностью противоположные тем, что сделаны в коммите C2.
git revert HEAD
После revert можно сделать push и поделиться изменениями с остальными.

Use git stash list to list all previously stashed commits.
stash@{0}: WIP on submit: 6ebd0e2... Update git-stash documentation
stash@{1}: On master: 9cc0589... Add git-stash
Run a version of git stash:
Use git stash pop to redo previously stashed changes and remove them from stashed list.
Use git stash apply to redo previously stashed changes, but keep them on stashed list.
Undo committed local changes


*********************
Ситуация когда у вас уже есть клон репозитория с которым вы работаете, делаете pull и смотрите что там какая то фигня накоммитчена от разработчиков.

Выбираем нужный бранч(ветку), у меня она master
git checkout master

делаем откат изменений в репозитории для примера на два коммита назад
git reset --hard HEAD~2

Можно сделать до какого то определенного коммита по хешу
git reset --hard HEAD hash
Хеш можно взять в вебинтерфейсе гитхаба.

Далее делаем принудительный коммит в основной репо на гитхабе
git push -f origin master
без -f будет ругаться что у вас версия младше чем в гитхабе и вам надо сделать pull