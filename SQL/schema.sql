create database chat;

use chat;

create table messages (
  objectId int(4),
  userId int(4),
  username varchar(10),
  content varchar(140),
  roomname varchar(10),
  createdAt date
);


create table users (
  userId int(4),
  username varchar(10)
);

create table rooms (
  roomId int(4),
  roomname varchar(10)
);




/*  Execute this file from the command line by typing:
 *    mysql < schema.sql
 *  to create the database and the tables.*/




