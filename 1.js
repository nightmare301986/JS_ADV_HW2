/*
Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, 
а также методы для добавления книги, удаления книги и получения информации о наличии книги.
Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.
Реализуйте геттер allBooks, который возвращает текущий список книг.
Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, 
выбросьте ошибку с соответствующим сообщением.
Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, 
выбросьте ошибку с соответствующим сообщением.
Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, 
есть ли такая книга в списке или нет.
*/
class bibliotheca {

    book = new Map([
        ['The Catcher in the Rye'],
        ['Doom']
    ]);

    constructor(_book) {
        this.title = this.title;
    }

    allBooks() {
        console.log("Список книг:");
        return console.log([...this.book.keys()]);
    }
    addBook(_title) {
        if (!this.book.has(_title)) {
            this.book.set(_title, true);
            return console.log(`Книга ${_title} успешно добавлена в библиотеку.`);
        }
        else {
            console.log(`Книга ${_title} уже расписана в библиотеке.`);
        }

    }

    removeBook(_title) {
        if (this.book.has(_title)) {
            this.book.delete(_title);
            return console.log(`Книга ${_title} успешно удалена.`);
        } else {
            return console.log(`Книга ${_title} не может быть удалена, т.к. отсутствует в библиотеке`);
        }
    }

    hasBook(_title) {
        if (this.book.has(_title)) {
            return console.log(`Книга ${_title} есть в библиотеке.`);
        } else {
            return console.log(`Книга ${_title} отсутствует в библиотеке`);
        }
    }
}

const biblioteca = new bibliotheca();

biblioteca.addBook("To Kill a Mockingbird");

biblioteca.addBook("The Catcher in the Rye");

biblioteca.allBooks();

biblioteca.hasBook("The Catcher in the Rye");

biblioteca.hasBook("Zen");

biblioteca.removeBook("Doom");

biblioteca.removeBook("From the Dark Side of the Moon");

biblioteca.allBooks();

biblioteca.addBook("The Catcher in the Rye");