create table if not exists log (
    id bigint auto_increment primary key,
    mac_id varchar(256) not null,
    date_created datetime not null,
    content longtext not null
);