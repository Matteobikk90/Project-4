var mongoose = require("mongoose");

var databaseURL    = 'mongodb://localhost:27017/cinemapp';
mongoose.connect(process.env.MONGOLAB_URI || databaseURL);

var Movie = require("../models/movie"); 
var Cinema    = require("../models/cinema");

var movie1 = new Movie({
  title: "Avatar",
  description: "Avatar is one of the most visually beautiful movies ever made. Even people who complain about special effects in movies dropped their jaws upon seeing it for the first time. This film pushed modern cinematic technology into a new age, ushering in the age of stereoscopic 3D. Beneath its beauty, the film features a cross-species love story and a social message. Avatar is a must see for any movie fan.",
  actor: "Sam Worthington, Zoe Saldana, Stephen Lang, Michelle Rodriguez",
  year: "2009",
  image:"http://cdn-media-1.lifehack.org/wp-content/files/2013/05/Avatar-Best-Movie1-380x161.jpg",
  website: "https://en.wikipedia.org/wiki/Avatar_(2009_film)"
})

movie1.save(function(err, movie) {
 if (err) return console.log(err);
 console.log("Movie saved! ", movie);
})

var movie2 = new Movie({
  title: "Scarface",
  description: "There are a lot of gangster movies out there, but Scarface is easily the most quoted. The story of Cuban immigrant turned maniacal gangster Tony Montana is gritty from front to back. The chainsaw scene in the beginning still gives me quivers. As he gains more power, his greed starts to get the best of him. He makes a few bad decisions that lead to the one of the best death scenes in movie history.",
  actor: "Al Pacino, Steven Bauer, Michelle Pfeiffer",
  year: "1983",
  image:"http://cdn-media-1.lifehack.org/wp-content/files/2013/05/Scarface-Best-Movie1-380x256.jpg",
  website: "https://en.wikipedia.org/wiki/Scarface_(1983_film)"
})

movie2.save(function(err, movie) {
 if (err) return console.log(err);
 console.log("Movie saved! ", movie);
})

var movie3 = new Movie({
  title: "Bad Boys",
  description: "Hate on Michael Bay all you want, the man knows how to make an entertaining movie. Bad Boys is a buddy cop movie that never gets old, thanks to the personalities of Will Smith and Martin Lawrence. Filled with flashy car chases and spectacular shoot outs, this is a movie that you can sit down and watch anytime it’s on television, no matter how far in it is.",
  actor: "Martin Lawrence, Will Smith",
  year: "1995",
  image:"http://cdn-media-1.lifehack.org/wp-content/files/2013/05/Bad-Boys-Best-Movie1-380x206.jpg",
  website: "https://en.wikipedia.org/wiki/Bad_Boys_(1995_film)"
})

movie3.save(function(err, movie) {
 if (err) return console.log(err);
 console.log("Movie saved! ", movie);
})

var movie4 = new Movie({
  title: "The Hurt Locker",
  description: "War. What is it good for? Fantastic movies. Hurt Locker is a thrilling look at the realities of the Iraq War, and modern warfare in general. It’s not a propaganda film. It doesn’t take sides. It focuses on the decisions faced by soldiers, specifically SFC William James (Jeremy Renner). Hurt Locker is simultaneously a war movie and a technically sound thriller. I don’t believe in war, but I believe Hurt Locker is the second best war movie ever made, showing the good and bad in every soldier.",
  actor: "  Jeremy Renner, Anthony Mackie, Brian Geraghty, Christian Camargo",
  year: "2008",
  image:"http://cdn-media-2.lifehack.org/wp-content/files/2013/05/The-Hurt-Locker-Best-Movie-380x213.jpg",
  website: "https://en.wikipedia.org/wiki/The_Hurt_Locker"
})

movie4.save(function(err, movie) {
 if (err) return console.log(err);
 console.log("Movie saved! ", movie);
})

var movie5 = new Movie({
  title: "Inside Man",
  description: "A cop (Denzel Washington) tries talking down a criminal mastermind (Clive Owen) in the best bank heist movie ever put on film. What makes Inside Man so great is the cat and mouse tension. As the story progresses, you find out this is much more than your average bank robbery. It’s not just money these guys are after, and even knowing they get away with it won’t take away the shock of seeing how… and why…",
  actor: "  Denzel Washington, Clive Owen, Jodie Foster, Christopher Plummer",
  year: "2006",
  image:"http://cdn-media-1.lifehack.org/wp-content/files/2013/05/Inside-Man-Best-Movie1-380x213.jpg",
  website: "https://en.wikipedia.org/wiki/Inside_Man"
})

movie5.save(function(err, movie) {
 if (err) return console.log(err);
 console.log("Movie saved! ", movie);
})

var movie6 = new Movie({
  title: "Mr. & Mrs. Smith",
  description: "This is the movie where Brad Pitt & Angelina Jolie met. Watching their onscreen chemistry, it’s easy to see how they’ve lasted so long. No matter how many times this movie is on TV, it’s hard not to watch. Filled with shootouts, explosions, comedy, romance, and flat out sex appeal, Mr. & Mrs. Smith is a spy film with something for everyone. It doesn’t make you think; it just invites you to sit, stare, and smile.",
  actor: "Brad Pitt, Angelina Jolie, Vince Vaughn, Kerry Washington",
  year: "2005",
  image:"http://cdn-media-2.lifehack.org/wp-content/files/2013/05/Mr-and-Mrs-Smith-Best-Movie-380x175.jpg",
  website: "https://en.wikipedia.org/wiki/Mr._%26_Mrs._Smith_(2005_film)"
})

movie6.save(function(err, movie) {
 if (err) return console.log(err);
 console.log("Movie saved! ", movie);
})

var movie7 = new Movie({
  title: "Back to the Future",
  description: "Back to the Future is a time travel movie packed with memorable characters. Biff (Thomas Wilson) is a quintessential bully with some of the best quotable lines in cinematic history. Doc Brown (Christopher Lloyd) inspired a generation of kids to become scientists. What makes the movie so great, though, is that protagonist Marty McFly (Michael J Fox) is just a normal kid in a crazy situation, and he overcomes. If he can overcome, anyone can.",
  actor: "Neil Canton, Michael J. Fox, Bob Gale, Crispin Glover",
  year: "1985",
  image:"http://cdn-media-1.lifehack.org/wp-content/files/2013/05/Back-to-the-Future-Best-Movie1-380x200.jpg",
  website: "http://www.backtothefuture.com/"
})

movie7.save(function(err, movie) {
 if (err) return console.log(err);
 console.log("Movie saved! ", movie);
})

var movie8 = new Movie({
  title: "Pirates of the Caribbean: The Curse of the Black Pearl",
  description: "When the teaser for this movie first appeared in theaters, we all had doubts. How in the world could Disney turn a subpar ride into a two hour epic? Three words: Captain. Jack. Sparrow. Johnny Depp’s role as a drunken, smart-mouthed, and shockingly resourceful captain without a ship made Pirates an instant classic. With a well-rounded cast, beautiful sets, and a brilliant mix of comedy, action, and drama, Curse of The Black Pearl is everything we love about Disney rolled into a rare live action gem.",
  actor: "Johnny Depp, Geoffrey Rush, Orlando Bloom, Keira Knightley",
  year: "2013",
  image:"http://www.ilgiornale.it/sites/default/files/foto/2015/06/03/1433317101-pirati-dei-caraibi-4-1.jpg",
  website: "https://en.wikipedia.org/wiki/Pirates_of_the_Caribbean:_The_Curse_of_the_Black_Pearl"
})

movie8.save(function(err, movie) {
 if (err) return console.log(err);
 console.log("Movie saved! ", movie);
})

var movie9 = new Movie({
  title: "Braveheart",
  description: "Braveheart is the best war movie ever made… period. Mel Gibson both directed and starred in this epic film depicting William Wallace’s (Gibson) war for Scotland’s freedom from English rule. The battles are brutal and graphic. The speeches are inspiring. The cinematography and soundtrack in Braveheart is so moving, you’ll find yourself actually enjoying bagpipe music. By the closing credits, you’ll find yourself wanting to paint your face blue and scream out “FREEDOOOOMMM!!!” until your last breath.",
  actor: "Mel Gibson, Sophie Marceau, Patrick McGoohan, Catherine McCormack",
  year: "1995",
  image:"http://cdn-media-2.lifehack.org/wp-content/files/2013/05/Braveheart-Best-Movie1-380x213.jpg",
  website: "https://en.wikipedia.org/wiki/Braveheart"
})

movie9.save(function(err, movie) {
 if (err) return console.log(err);
 console.log("Movie saved! ", movie);
})

var movie10 = new Movie({
  title: "Dark Knight",
  description: "When it was announced Heath Ledger would play The Joker in a new Batman movie, The Dark Knight, the internet erupted with fury. “He’ll never be as good as Jack Nicholson,” we cried. I wish Heath Ledger could have lived to see the collective jaw of the world drop. Ledger’s Joker is the best character performance in movie history. The Dark Knight isn’t just the best Batman movie. It’s not just the best superhero movie. It’s one of the undisputed best films ever made.",
  actor: "Christian Bale, Michael Caine, Heath Ledger, Gary Oldman",
  year: "2008",
  image:"http://cdn-media-2.lifehack.org/wp-content/files/2013/05/Dark-Knight-Best-Movie1-380x253.jpg",
  website: "https://en.wikipedia.org/wiki/The_Dark_Knight_(film)"
})

movie10.save(function(err, movie) {
 if (err) return console.log(err);
 console.log("Movie saved! ", movie);
})

var movie11 = new Movie({
  title: "Forrest Gump",
  description: "Forrest Gump is the best movie ever made. It spans generations to tell the fictional story of the most likeable, honest, caring, and genuinely good person this world will ever see. If everyone in this world had even a fraction of Gump’s heart, we’d solve all the world’s problems. The soundtrack is a classic. Tom Hanks is amazing. Forrest continuously overcomes adversity throughout the movie. His life is comprised of every heroic act in the news on any given day. From the first second to the last credit, everything about this movie is flawless. You can watch it 100 times and never tire of it. Forrest Gump is the reason movies exist.",
  actor: "Tom Hanks,Robin Wright,Gary Sinise,Mykelti Williamson",
  year: "1994",
  image:"http://cdn-media-2.lifehack.org/wp-content/files/2013/05/Forrest-Gump-Best-Movie1-380x213.jpg",
  website: "https://en.wikipedia.org/wiki/Forrest_Gump"
})

movie11.save(function(err, movie) {
 if (err) return console.log(err);
 console.log("Movie saved! ", movie);
})

var movie12 = new Movie({
  title: "Toy Story",
  description: "Toy Story is about the 'secret life of toys' when people are not around. When Buzz Lightyear, a space-ranger, takes Woody's place as Andy's favorite toy, Woody doesn't like the situation and gets into a fight with Buzz. Accidentaly Buzz falls out the window and Woody is accused by all the other toys of having killed him. He has to go out of the house to look for him so that they can both return to Andys room. But while on the outside they get into all kind of trouble while trying to get home.",
  actor: "Tom Hanks, Tim Allen, Don Rickles, Wallace Shawn",
  year: "1995",
  image: "http://az801229.vo.msecnd.net/wetpaint/2015/11/toy-story-20th-anniversary.jpg",
  website: "http://toystory.disney.com/"
})

movie12.save(function(err, movie) {
 if (err) return console.log(err);
 console.log("Movie saved! ", movie);
})

var movie13 = new Movie({
  title: "V per vendetta",
  description: "Tells the story of Evey Hammond and her unlikely but instrumental part in bringing down the fascist government that has taken control of a futuristic Great Britain. Saved from a life-and-death situation by a man in a Guy Fawkes mask who calls himself V, she learns a general summary of V's past and, after a time, decides to help him bring down those who committed the atrocities that led to Britain being in the shape that it is in.",
  actor: "Hugo Weaving, Natalie Portman, Rupert Graves",
  year: "2005",
  image:"https://i.ytimg.com/vi/m_k7al0yL3U/maxresdefault.jpg",
  website: "https://it.wikipedia.org/wiki/V_per_Vendetta"
})

movie13.save(function(err, movie) {
 if (err) return console.log(err);
 console.log("Movie saved! ", movie);
})

var movie14 = new Movie({
  title: "The Lord of the Rings: The Fellowship of the Ring ",
  description: "An ancient Ring thought lost for centuries has been found, and through a strange twist in fate has been given to a small Hobbit named Frodo. When Gandalf discovers the Ring is in fact the One Ring of the Dark Lord Sauron, Frodo must make an epic quest to the Cracks of Doom in order to destroy it! However he does not go alone. He is joined by Gandalf, Legolas the elf, Gimli the Dwarf, Aragorn, Boromir and his three Hobbit friends Merry, Pippin and Samwise. Through mountains, snow, darkness, forests, rivers and plains, facing evil and danger at every corner the Fellowship of the Ring must go. Their quest to destroy the One Ring is the only hope for the end of the Dark Lords reign!",
  actor: " Elijah Wood, Ian McKellen, Orlando Bloom, Sean Bean, Cate Blanchett",
  year: "2001",
  image:"http://static.scuolazoo.com/wp-content/uploads/2015/01/tesina-di-maturit%C3%A0-Il-Signore-degli-Anelli.jpg",
  website: "www.lordoftherings.net/"
})

movie14.save(function(err, movie) {
 if (err) return console.log(err);
 console.log("Movie saved! ", movie);
})

var movie15 = new Movie({
  title: "Hugo Cabret",
  description: "Hugo is an orphan boy living in the walls of a train station in 1930s Paris. He learned to fix clocks and other gadgets from his father and uncle which he puts to use keeping the train station clocks running. The only thing that he has left that connects him to his dead father is an automaton (mechanical man) that doesn't work without a special key. Hugo needs to find the key to unlock the secret he believes it contains. On his adventures, he meets George Melies, a shopkeeper, who works in the train station, and his adventure-seeking god-daughter. Hugo finds that they have a surprising connection to his father and the automaton, and he discovers it unlocks some memories the old man has buried inside regarding his past.",
  actor: "Ben Kingsley, Sacha Baron Cohen, Asa Butterfield, Chloë Grace Moretz",
  year: "2011",
  image:"http://bluraymedia.ign.com/bluray/image/article/121/1219490/Hugo_Bluray_2_1330325141.jpg",
  website: "https://en.wikipedia.org/wiki/Hugo_(film)"
})

movie15.save(function(err, movie) {
 if (err) return console.log(err);
 console.log("Movie saved! ", movie);
})

var movie16 = new Movie({
  title: "Pulp Fiction",
  description: "Jules Winnfield and Vincent Vega are two hitmen who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace. Wallace has also asked Vincent to take his wife Mia out a few days later when Wallace himself will be out of town. Butch Coolidge is an aging boxer who is paid by Wallace to lose his next fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.",
  actor: " John Travolta, Uma Thurman, Samuel L. Jackson",
  year: "1994",
  image:"http://i2.cdn.turner.com/cnn/dam/assets/140922202605-08-pulp-fiction-story-top.jpg",
  website: "https://en.wikipedia.org/wiki/Pulp_Fiction"
})

movie16.save(function(err, movie) {
 if (err) return console.log(err);
 console.log("Movie saved! ", movie);
})

var movie17 = new Movie({
  title: "Trainspotting",
  description: "A wild, freeform, Rabelaisian trip through the darkest recesses of Edinburgh low-life, focusing on Mark Renton and his attempt to give up his heroin habit, and how the latter affects his relationship with family and friends: Sean Connery wannabe Sick Boy, dimbulb Spud, psycho Begbie, 14-year-old girlfriend Diane, and clean-cut athlete Tommy, who's never touched drugs but can't help being curious about them...",
  actor: " Ewan McGregor, Ewen Bremner, Jonny Lee Miller",
  year: "1996",
  image:"https://i-d-images.vice.com/images/articles/meta/2015/09/07/get-ready-for-a-trainspotting-sequel-1441638121.jpg?crop=1xw:0.83128078817734xh;center,top&resize=2000:*&output-format=image/jpeg&output-quality=75",
  website: "https://en.wikipedia.org/wiki/Trainspotting_(film)"
})

movie17.save(function(err, movie) {
 if (err) return console.log(err);
 console.log("Movie saved! ", movie);
})

var movie18 = new Movie({
  title: "Gone in 60 Seconds",
  description: "Car theft in Long Beach went down 47% when Randall Memphis Raines walked away from the life. He gets dragged back into it by assuming the job his brother Kip screwed up for stolen-car broker Raymond Calitri: steal 50 exotic cars and have them on a container ship by 8 AM Friday morning, and he got this news on a Monday. With Calitri threatening to kill him and Kip, and the police GRAB unit breathing down his neck, Memphis reassembles his old crew and attempts to pull off the logistically impossible.",
  actor: "Nicolas Cage, Angelina Jolie, Giovanni Ribisi, Delroy Lindo",
  year: "2000",
  image:"https://upload.wikimedia.org/wikipedia/en/2/2a/Gone_in_sixty_seconds.jpg",
  website: "https://en.wikipedia.org/wiki/Gone_in_60_Seconds_(2000_film)"
})

movie18.save(function(err, movie) {
 if (err) return console.log(err);
 console.log("Movie saved! ", movie);
})

var movie19 = new Movie({
  title: "Gone Girl",
  description: "On the occasion of his fifth wedding anniversary, Nick Dunne reports that his wife, Amy, has gone missing. Under pressure from the police and a growing media frenzy, Nick's portrait of a blissful union begins to crumble. Soon his lies, deceits and strange behavior have everyone asking the same dark question: Did Nick Dunne kill his wife?",
  actor: " Ben Affleck, Rosamund Pike, Neil Patrick Harris",
  year: "2014",
  image:"http://images.wired.it/wp-content/uploads/2014/09/1411550111_GoneGirlFincerSpecialShoot.jpg",
  website: "https://en.wikipedia.org/wiki/Gone_Girl_(film)"
})

movie19.save(function(err, movie) {
 if (err) return console.log(err);
 console.log("Movie saved! ", movie);
})

var movie20 = new Movie({
  title: "Goodfellas",
  description: "Henry Hill is a small time gangster, who takes part in a robbery with Jimmy Conway and Tommy De Vito, two other gangsters who have set their sights a bit higher. His two partners kill off everyone else involved in the robbery, and slowly start to climb up through the hierarchy of the Mob. Henry, however, is badly affected by his partners' success, but will he stoop low enough to bring about the downfall of Jimmy and Tommy?",
  actor: "Robert De Niro, Ray Liotta, Joe Pesci, Lorraine Bracco, Paul Sorvino",
  year: "1990",
  image:"http://images.popmatters.com/misc_art/f/feature-film-goodfellas-cosby-650.jpg",
  website: "https://en.wikipedia.org/wiki/Goodfellas"
})

movie20.save(function(err, movie) {
 if (err) return console.log(err);
 console.log("Movie saved! ", movie);
})

var cinema1 = new Cinema({
  name: "The Lexi Cinema",
  address: "194B Chamberlayne Road, London, NW103JU",
  phone: "08717042069",
  image: "http://www.whereisthenomad.com/sites/default/files/styles/letterbox/public/lexi-letterbox.jpg?itok=9tw06mlq",
  description: "The Lexi Cinema is a digital arthouse cinema, offering world cinema, mainstream films and retrospectives. All profits from the cinema support a sustainable living project in South Africa.",
  website: "https://thelexicinema.co.uk/",
  movies: [movie1, movie2, movie4, movie7]
})

cinema1.save(function(err, cinema) {
 if (err) return console.log(err);
 console.log("Cinema saved! ", cinema);
})

var cinema2 = new Cinema({
  name: "BFI Southbank",
  address: "21 Stephen Street, London, W1T1LN",
  phone: "02072551444",
  image: "http://i1.cdnds.net/12/42/618x415/-4.jpg",
  description: "BFI Southbank screens classic, contemporary, avant garde and traditional films from around the world and much closer to home. Visitors can also browse hundreds of hours of film and TV from the BFI (British Film Institute) National Archive, check out the drop-in studio cinema, and shop for a range of films and books at the Filmstore.",
  website: "http://www.bfi.org.uk/",
  movies: [movie14, movie10, movie6, movie7]
})

cinema2.save(function(err, cinema) {
 if (err) return console.log(err);
 console.log("Cinema saved! ", cinema);
})

var cinema3 = new Cinema({
  name: "Tricycle Cinema",
  address: "269 Kilburn High Rd, London, NW67JR",
  phone: "02073726611",
  image: "http://cdn.londonandpartners.com/asset/76d780db6c4876c17c3b0942d6520741.jpg",
  description: "The Tricycle's output reflects the diversity of its community in the London borough of Brent. In 2009, more than 40,000 young people visited to see films and plays, or to take part in workshops. As well as a theatre, the Tricycle houses a modern, 300-seater cinema, showing the best independent and arthouse films from around the world.",
  website: "http://www.tricycle.co.uk/",
  movies: [movie12, movie20, movie8, movie19]
})

cinema3.save(function(err, cinema) {
 if (err) return console.log(err);
 console.log("Cinema saved! ", cinema);
})

var cinema4 = new Cinema({
  name: "Ritzy Cinema Brixton",
  address: "Coldharbour Lane, Brixton, London, SW21JG",
  phone: "08717042065",
  image: "https://files.list.co.uk/images/r/ritzy-exterior-02-lst145691.jpg",
  description: "The Ritzy in Brixton is one of the UK's largest specialist cinemas. Run by the Picturehouse group, it shows a mix of arthouse, mainstream and world movies on its five screens. Built in 1910, the Ritzy retains its unique proscenium arch, as well as a few stray cherubs, making it one of the most complete examples of London's early cinemas. ",
  website: "https://www.picturehouses.com/cinema/Ritzy_Picturehouse",
  movies: [movie17, movie13, movie12, movie18]
})

cinema4.save();

var cinema5 = new Cinema({
  name: "Phoenix Cinema",
  address: "52 High Road, London, N29PJ",
  phone: "02084446789",
  image: "http://cdn.londonandpartners.com/asset/d3221bd35ed7b37052fb08cf597c7431.jpg",
  description: "East Finchely's Grade II listed Phoenix Cinema is the UK's oldest purpose-built cinema still in operation. A £1.1 million refurb was completed in 2010. Phoenix's film programme includes new releases, independent, foreign-language and specialist films, plus a repertoire of old and new classics. The venue regularly hosts a kids club, festivals, talks, screenings and school workshops.",
  website: "https://phoenixcinema.co.uk/PhoenixCinema.dll/Home",
  movies: [movie1, movie3, movie4, movie5]
})

cinema5.save();

var cinema6 = new Cinema({
  name: "Prince Charles Cinema",
  address: "7 Leicester Place, London, WC2H7BY",
  phone: "02074943654",
  image: "http://sheloveslondon.com/wp-content/uploads/2012/03/prince-charles-cinema.jpg",
  description: "Just off Leicester Square, the Prince Charles is an independent cinema offering cut-price tickets for a range of films: blockbusters as well as specialist screenings. Don't miss the sing-a-long nights, where audience participation is strongly encouraged. Belt out your favourites from The Sound of Music, Grease or the Rocky Horror Picture Show.",
  website: "http://www.princecharlescinema.com/",
  movies: [movie8, movie9, movie10, movie2]
})

cinema6.save();

var cinema7 = new Cinema({
  name: "Electric Cinema",
  address: "64-66 Redchurch St,Shoreditch London, E27DP",
  phone: "02033503490",
  image: "https://i.ytimg.com/vi/xHhLlPxGFVQ/maxresdefault.jpg",
  description: "The Electric Cinema Shoreditch provides plush leather armchairs for up to 50 cinema-goers. The film programme covers a broad range of quality mainstream and arthouse films and there is a full bar and deli serving quality food and drinks. Formerly the Aubin Cinema, The Electric is part of the Soho House Group.",
  website: "https://www.electriccinema.co.uk/shoreditch",
  movies: [movie11, movie13, movie14, movie17]
})

cinema7.save();

var cinema8 = new Cinema({
  name: "Rich Mix",
  address: "35-47 Bethnal Green Road, London, E16LA",
  phone: "02076137498",
  image: "http://www.constructionphotography.com/ImageThumbs/A088-05450/3/A088-05450_Exterior_of_the_Rich_Mix_cultural_centre_in_Bethnal_Green_East_London_UK.jpg",
  description: "Rich Mix is a cultural and community space in Shoreditch, East London, which houses three digital cinema screens showing main releases alongside independent, arthouse and world films, as well as documentaries. There is a full bar serving drinks and snacks before screenings and all profits go back into the community.",
  website: "http://www.richmix.org.uk/",
  movies: [movie10, movie16, movie3, movie16]
})

cinema8.save();

var cinema9 = new Cinema({
  name: "Gate Picturehouse",
  address: "87 Notting Hill Gate, London, W113JZ",
  phone: "08719025731",
  image: "https://files.list.co.uk/images/g/gate-exterior-view-lst145695.jpg",
  description: "Part of the Picturehouse group of cinemas, the Gate is a beautiful and intimate Edwardian single-screen cinema in Notting Hill. Specialising in foreign language and arthouse films, the Gate also shows mainstream releases and has a well-stocked bar and famously plush seats.",
  website: "https://www.picturehouses.com/cinema/Gate_Picturehouse",
  movies: [movie9, movie7, movie5, movie18]
})

cinema9.save();

var cinema10 = new Cinema({
  name: "Rio Cinema",
  address: "107 Kingsland High Street, London, E82PB",
  phone: "02072419410",
  image: "https://media.timeout.com/images/101720849/617/347/image.jpg",
  description: "The 100-year-old Rio Cinema on Kingsland High Street in Dalston proudly claims to serve sections of the community who are often ignored by mainstream commercial cinema. Annual film festivals showcase the work of Turkish, Kurdish, Spanish and Gay & Lesbian filmmakers. Plus there's midweek classic matinées, a kids' film club and babes-in-arms sessions.",
  website: "http://riocinema.org.uk/RioCinema.dll/Home",
  movies: [movie5, movie6, movie14, movie15]
})

cinema10.save();
