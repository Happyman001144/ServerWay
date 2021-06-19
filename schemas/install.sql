CREATE TABLE users (
    userid varchar(255),
    warns INT,
    kicks INT,
    bans INT,
    mutes INT
);

CREATE TABLE warns (
    userid varchar(255),
    reason text,
    uniqueid varchar(255),
    enforcerid varchar(255)
);

CREATE TABLE chatlvl (
    userid text,
    userxp INT,
    userlvl INT
);

CREATE TABLE offlinebans (
    id varchar(255),
    reason text
);

CREATE TABLE stickymsgs (
    channelid varchar(255),
    msg text,
    enforcerid varchar(255)
);
