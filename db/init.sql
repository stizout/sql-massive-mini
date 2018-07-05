drop table if exists heroes;


create table if not exists heroes (
    id serial primary key,
    name text not null unique,
    street_name text,
    age int,
    powers text,
    picture_url text
);

INSERT INTO heroes (name, street_name, age, powers, picture_url) 
values ('Michael Scott', 'Prison Mike', 42, 'Power against the dementors', 'https://pbs.twimg.com/profile_images/769724771823124480/5gqDhQFk_400x400.jpg'),
('Gamora', 'Danielle', 30, 'guns, swords', 'https://www.herocollector.com/uploads/media/guardians_of_the_galaxy_zoe_saldana_as_gamora.jpg'),
('Cuphead', 'Cuppie', 20, 'Milk shooting, jumping, dodging', 'https://http2.mlstatic.com/camiseta-ou-baby-look-cuphead-jogo-xbox-one-game-modelo-7-D_NQ_NP_938682-MLB26383675962_112017-F.jpg'),
('thor', 'arisztid', 20, 'hammer, lightning, super strength, super good looks, can spit that fire bo-ah','https://files.slack.com/files-pri/T039C2PUY-FBK1R1TEG/image.png');