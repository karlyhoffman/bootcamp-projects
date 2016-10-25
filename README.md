# costume-party

## SQL Commands
We create a db for every  project and a specific user in the db for that project. This is for security purposes!
'''
create database costume_party;
create user 'l33tdba'@'localhost' identified by 'yellowpencil';
grant all privileges on costume_party.* to 'l33tdba'@'localhost';
'''