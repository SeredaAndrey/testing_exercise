Це тестове завдання зроблене на основі технічного завдання

Додатково для закріплення знань та навичок у розробці бекендів, замість
запропонованого в технічному завданні використання UI-сервісу mockapi.io був
розроблений власний сервіс АРІ з усім вункціоналом який задовільнив виконання
данного завдання.

Розроблений бекенд задеплоен на ресурс render.com і працює на адрессі
https://prepare-test-api-service.onrender.com/api

бекенд має наступні енд-поінти

POST: "user/" - створення нового юзера (body:{"user":"qwerty"})

GET: "user/" - отримання данних всіх каток юзерів (застосована пагінація)

GET: "user/login" - вхід в аккаунт за допомогою ім'я (body:{"user":"qwerty"})

GET: "user/:userId" - отримання картки юзера по ІД

PATCH: "user/following/:userId" - оформлення підписки на юзера, (треба передати
body:{"user":"qwerty"} для того щоб в картці юзера записати на кого він
підписаний)

При підписці на юзера на беку в картці юзера на якого підписуються змінюється
значення кількості підписників, а в картці юзера який підписується в масив
підписки додається ІД юзера на який підписуєшся, при повторному натисканні
виконується відписка зі зворотними діями

Окрім основного завдання яке було вказане в ТЗ зроблена реєстрація та
логонізація (дуже проста, без пароля, тількі по ім'я користувача), зроблено
роутінг по приватним та публічним роутам

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! При першій загрузці треба трохи
почекати, бекенд задеплоїн на рендер.ком а йому треба біля 30 секунд щоб
прокинутися та дати відповідь фронту !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!