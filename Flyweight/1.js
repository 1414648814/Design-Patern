/**
 * Created by George on 16/6/28.
 */
//构造函数
var Book = function (id, title, author, genre, pageCount, publisherID, ISBN,
    checkoutDate, checkoutMember, dueReturnDate, availability) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pageCount = pageCount;
    this.publisherID = publisherID;
    this.ISBN = ISBN;

    this.checkoutDate = checkoutDate;   //借出日期
    this.checkoutMember = checkoutMember  //借出人
    this.dueReturnDate = dueReturnDate; //还书日期
    this.availability = availability;  //是否可用
};

//书籍
Book.prototype = {
    getTitle : function() {
        return this.title;
    },

    getAuthor : function() {
        return this.author;
    },

    getISBN : function () {
        return this.ISBN;
    },

    //.....所有属性的get方法,省略


    //更新借出状态
    updateCheckoutStatus : function(bookID, newStatus, checkoutDate, checkoutMember, newReturnDate) {
        this.id = bookID;
        this.availability = newStatus;
        this.checkoutDate = checkoutDate;
        this.checkoutMember = checkoutMember;
        this.dueReturnDate = newReturnDate;
    },

    //续借
    extendCheckoutPeriod : function(bookID, newReturnDate) {
        this.id = bookID;
        this.dueReturnDate = newReturnDate;
    },

    //是否到期
    isPastDue : function(bookID) {
        var currentDate = new Date();
        return currentDate.getTime() > Date.parse(this.dueReturnDate);
    }

};

/*
检查之前是否创建该book的对象，如果有就返回，没有就重新创建并存储以便后面可以继续访问，
这确保我们为每一种书只创建一个对象
这里使用到了工厂模式
 */
var BookFactory = (function () {
    var existingBooks = {};

    return {

        createBook : function (title, author, genre, pageCount, publisherID, ISBN) {
            var existingBook = existingBooks[ISBN];
            if (existingBook) {
                return existingBook;
            }
            else {
                var book = new Book(title, author, genre, pageCount, publisherID, ISBN);
                existingBooks[ISBN] = book;
                return book;
            }
        }
    };
});

/*
借书管理类，用到了单例模式
 */
var BookRecordManager = (function () {
    var bookRecordDatabase = {};

    return {
        //添加借书记录
        addBookRecord : function (id, title, author, genre, pageCount, publisherID
            , ISBN, checkoutDate, checkoutMember, dueReturnDate, availability) {
            var book = BookFactory.createBook(title, author, genre, pageCount, publisherID, ISBN);

            bookRecordDatabase[id] = {
                checkoutDate : checkoutDate,
                checkoutMember : checkoutMember,
                dueReturnDate : dueReturnDate,
                availability : availability,
                book : book
            };
        },

        pdateCheckoutStatus : function(bookID, newStatus, checkoutDate, checkoutMember, newReturnDate) {
            var record = bookRecordDatabase[bookID];
            record.availability = newStatus;
            record.checkoutDate = checkoutDate;
            record.checkoutMember = checkoutMember;
            record.dueReturnDate = newReturnDate;
        },

        //续借
        extendCheckoutPeriod : function(bookID, newReturnDate) {
            var record = bookRecordDatabase[bookID];
            record.dueReturnDate = newReturnDate;
        },

        //是否到期
        isPastDue : function(bookID) {
            var record = bookRecordDatabase[bookID];
            var currentDate = new Date();
            return currentDate.getTime() > Date.parse(record.dueReturnDate);
        },


    };

});

