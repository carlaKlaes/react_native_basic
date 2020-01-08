import React from 'react';
import { StyleSheet, Text, View, Image, Linking } from 'react-native';

import GordDeppe from '../img/GordDeppe.jpg';
import AlanCross from '../img/AlanCross.jpg';
import DavidBoydJanes from '../img/DavidBoydJanes.jpg';
import SigneMiranda from '../img/SigneMiranda.jpg';
import MontyGreig from '../img/MontyGreig.jpg';
import OlgaKostianiuk from '../img/OlgaKostianiuk.jpg';
import RainaKrangle from '../img/RainaKrangle.jpg';
import DwayneLaForme from '../img/DwayneLaForme.jpg';
import RebeccaRain from '../img/RebeccaRain.jpg';
import CarlosMorgan from '../img/CarlosMorgan.jpg';
import AlyssaPridham from '../img/AlyssaPridham.png';
import DawnGibson from '../img/DawnGibson.jpg';
import ElsaHsieh from '../img/ElsaHsieh.jpg';
import DinosaurEarthSociety from '../img/DinosaurEarthSociety.png';
import NatashaMeister from '../img/NatashaMeister.jpg';
import SuziKory from '../img/SuziKory.jpeg';
import OneInTheChamber from '../img/OneInTheChamber.jpeg';
import TheNoolands from '../img/TheNoolands.jpeg';
import SharonHampson from '../img/SharonHampson.png';
import BreeTaylor from '../img/BreeTaylor.png';


const Autograph = props => {

    return (
        <View style={styles.viewBody}>
            <View style={styles.viewPageTitle}>
                <Text style={styles.pageTitle}>2020 </Text>
                <Text style={styles.pageTitle}>Confirmed Autograph Sessions</Text>
                
            </View>

            <View style={styles.viewImage}>
                <Image source={GordDeppe} style={styles.picture} />
            </View>
            <View>
                <Text style={styles.title}>Gord Deppe</Text>
                <Text style={styles.subTitle}>THE SPOONS, A FLOCK OF SEAGULLS</Text>
                <Text style={styles.description}>The Spoons released a brand new album in March of 2019 called “New Day New World"
                    With a string of smash hits - Nova Heart, Tell No Lies, Old Emotions, Romantic Traffic -
                    the Spoons redefined the musical landscape in the '80s and captured the hearts of fans everywhere.
                </Text>
                <Text style={styles.description}>The Spoons have stayed active to this day, continuing to record new music and perform across the country.
                    Gord Deppe, the band's lead singer and songwriter, recently published the autobiography SpoonFed,
                    a #1 Best Seller on Amazon which will be available for sale at the Music Expo! He is the guitar
                    player with acclaimed A Flock Of Seagulls, known for their hit “I Ran”, who  tour internationally to this day.
                    Gord Deppe will also be selling copies of his book "Spoonfed: My Life with the Spoons" at the event.
                </Text>
            </View>
            <View style={styles.line}></View>

            <View style={styles.viewImage}>
                <Image source={AlanCross} style={styles.picture} />
            </View>
            <View>
                <Text style={styles.title}>Alan Cross</Text>
                <Text style={styles.subTitle}>Ongoing history of new music/Geeks&Beats</Text>
                <Text style={styles.description}>Alan Cross is an internationally known broadcaster, interviewer, writer,
                consultant, blogger and speaker.  His radio documentary series, In his nearly 40 years in the broadcasting
                and music business, Alan has interviewed the biggest names in rock and is also known as a musicologist and
                documentarian through programs like the long-running show, The Ongoing History of New Music.
                </Text>
                <Text style={styles.description} onPress={() => Linking.openURL('https://www.ajournalofmusicalthings.com/')}> 
                    www.ajournalofmusicalthings.com 
                </Text>

            </View>
            <View style={styles.line}></View>

            <View style={styles.viewImage}>
                <Image source={DavidBoydJanes} style={styles.picture} />
            </View>
            <View>
                <Text style={styles.title}>David Boyd Janes</Text>
                <Text style={styles.description}>
                    Born and raised in Toronto Ontario, David Boyd Janes is quickly making himself
                    known among the country music community. His solo career into country music began
                    in September 2017 and he has already had 3 consecutive Top 100 singles: Summertime Feeling,
                    I Ain’t Sticking Around and Whiskey Won't.
                </Text>
                <Text style={styles.description}>
                    David’s newest single “Another Day”  is set to be released August 9th and will be available across
                    all digital platforms. David attended our 2019 Music Expo and we are excited to welcome him back for 2020!
                </Text>
            </View>
            <View style={styles.line}></View>


            <View style={styles.viewImage}>
                <Image source={SigneMiranda} style={styles.picture} />
            </View>
            <View>
                <Text style={styles.title}>Signe Miranda</Text>
                <Text style={styles.subTitle}>
                    Song Creation Formula & Signe Mirandas Veranda
                </Text>
                <Text style={styles.description}>
                    I love inspiring people to follow their hearts and express the songs inside of them. Leading The Song Creation Formula
                    & Get Unstuck With Your Songwriting workshops and doing private songwriting coaching has been an exciting way to witness
                    people learning new ways to express themselves creatively through music and words." - Signe
                </Text>
            </View>
            <View style={styles.line}></View>

            <View style={styles.viewImage}>
                <Image source={MontyGreig} style={styles.picture} />
            </View>
            <View>
                <Text style={styles.title}>Monty Greig</Text>
                <Text style={styles.description}>
                    For 20 years, Monty Greig has been singing and entertaining audiences all over Ontario. Once the lead singer for the popular
                    80’s-style Rock & Roll band “One Night Stand”, he served as the show opener for Canadian rockers “Trooper” and for 60’s legends
                    “Dr. Hook and the Medicine Show”. Even though Rock & Roll was his first love, Monty was eager to dive into something new and
                    challenging. While working in Las Vegas, the whole “rat pack" style of music and entertaining lured him in. Upon arriving home,
                    he started his journey into jazz standards and has never looked back.
                </Text>
                <Text style={styles.description}>
                    Monty attended our 2019 Music Expo and we are excited to have him return for 2020!
                </Text>
            </View>
            <View style={styles.line}></View>

            <View style={styles.viewImage}>
                <Image source={OlgaKostianiuk} style={styles.picture} />
            </View>
            <View>
                <Text style={styles.title}>Olga Kostianiuk</Text>
                <Text style={styles.description}>
                    Olga received her Master’s Degree in Violin Performance and Music Education in 2007 from Donetsk State Music University, Ukraine.
                    She has more than 15 years of international working experience as a performer and over 10 years of experience teaching violin and
                    piano to students from beginners to advanced university majors.
                </Text>
            </View>
            <View style={styles.line}></View>

            <View style={styles.viewImage}>
                <Image source={RainaKrangle} style={styles.picture} />
            </View>
            <View>
                <Text style={styles.title}>Raina Krangle</Text>
                <Text style={styles.description}>
                    A mix between Sheryl Crow, Bonnie Raitt and Stevie Nicks, this Toronto native can go toe to toe with any one of them.
                    A poignant singer-songwriter with catchy, uplifting melodies you will remember, heartfelt lyrics and a soulful voice,
                    Raina has a fresh folk/Americana vibe infused with a splash of country, yet with a style uniquely her own. She’s been
                    performing her original music since her teenage days in the old folk clubs like “Free Times Cafe” & in the Ottawa Valley
                    and Western Canada.
                </Text>
            </View>
            <View style={styles.line}></View>

            <View style={styles.viewImage}>
                <Image source={DwayneLaForme} style={styles.picture} />
            </View>
            <View>
                <Text style={styles.title}>Dwayne LaForme</Text>
                <Text style={styles.subTitle} onPress={() => Linking.openURL('https://dwaynelaforme.weebly.com/')}>
                    Dwayne LaForme's Boogie Blues
                </Text>
                <Text style={styles.description}>
                    Dwayne LaForme is an Indigenous blues singer, songwriter and lead guitarist. Dwayne is also the only Canadian and
                    100% Native American member of the Native American Music Awards house band. Also known at the Nammys, they are
                    sanctioned by the Grammys.
                </Text>
            </View>
            <View style={styles.line}></View>

            <View style={styles.viewImage}>
                <Image source={RebeccaRain} style={styles.picture} />
            </View>
            <View>
                <Text style={styles.title}>Rebecca Rain</Text>
                <Text style={styles.description}>
                    For Wasaga Beach’s Rebecca Rain, there are three things that matter most- family, the small town she grew up in and music.
                    Drawing influences from Loretta Lynn, June Carter Cash, and Patsy Cline, Rain has crafted a sound described as “Roots Country”
                    delivered by a voice that is hauntingly pure and with a reflective songwriting style well beyond her years. Through independently
                    releasing singles with Canadian Music Company Northwood Music and building a local fan base performing, Rebecca has opened for
                    Tim Hicks, James Barker Band and Rogers Hometown Hockey to name a few.
                </Text>
            </View>
            <View style={styles.line}></View>

            <View style={styles.viewImage}>
                <Image source={CarlosMorgan} style={styles.picture} />
            </View>
            <View>
                <Text style={styles.title}>Carlos Morgan</Text>
                <Text style={styles.description}>
                    Carlos Morgan is, a multi award winning singer, songwriter, producer, and performer, poised to break on a global level.
                </Text>
                <Text style={styles.description}>
                    “Feelin’ Alright”, Morgan’s debut album, showcased the diversity of Morgan’s sultry singing style with seductive ballads like
                    “Let Me Love Again” and “Forever For You” to the upbeat R&B tracks “Give It To You”and “Baby C’Mon”. “Feelin’ Alright” went on
                    to garner the Juno Award , 2x Canadian Urban Music Award Recipient, MuchMusic Video Award, SOCAN Music Award, 2x Caribbean
                    Cultural Committee Award  Recipient.
                </Text>
            </View>
            <View style={styles.line}></View>

            <View style={styles.viewImage}>
                <Image source={AlyssaPridham} style={styles.picture} />
            </View>
            <View>
                <Text style={styles.title}>Alyssa Pridham</Text>
                <Text style={styles.description}>
                    Alyssa’s music is a balm for the weary soul. Her songs bring encouragement and inspiration to the listener.
                    Her music is truly an outpouring from her heart to yours with lyrics that are honest, soulful, raw and powerful,
                    looking to the silver lining, she shares her journey and lessons learned along the way. Some people describe her as the
                    love child between Jewel, Norah Johns, Sarah McLachlan and Tori Amos. Alyssa has worked professionally as an actress,
                    singer/songwriter, model, and dancer for 20 years, taking time off over the last few years to start a family, she is back and
                    ready to re-emerge as a Female Soul and Inspirational artist and share her music with the world.
                </Text>
                <Text style={styles.description} style={styles.subTitle} onPress={() => Linking.openURL('https://www.alyssapridham.org/')}>
                    https://www.alyssapridham.org
                </Text>
            </View>
            <View style={styles.line}></View>

            <View style={styles.viewImage}>
                <Image source={DawnGibson} style={styles.picture} />
            </View>
            <View>
                <Text style={styles.title}>Dawn Gibson</Text>
                <Text style={styles.description}>
                    Recently, my drummer from the Darkest Dawn band, Michael Hackman - (brother to the late Paul Hackman, founding member of Helix)
                    - has joined forces with me to create a new band called Becoming Dawn.
                </Text>
                <Text style={styles.description}>
                    Becoming Dawn plays all the popular cover songs you know with their own flavour as well as originals.
                    I am very excited about this new project!  We debuted at The Corktown Pub, in Hamilton, ON., a couple of weeks ago
                    and have a couple more gigs lined up in Simcoe, at The Place 2 B... a venue I have already performed at as a soloist.
                </Text>
                <Text style={styles.description}>
                    We have a high energy performance you do not want to miss and unlike any two piece band you have seen!
                    It's a show you don't want to miss!
                </Text>
            </View>
            <View style={styles.line}></View>

            <View style={styles.viewImage}>
                <Image source={ElsaHsieh} style={styles.picture} />
            </View>
            <View>
                <Text style={styles.title}>Elsa Hsieh</Text>
                <Text style={styles.description}>
                    Elsa Hsieh studied both piano performing and teaching at Birmingham Conservatoire, UK. She was awarded 1st prize in the
                    Wales Tystysgrif piano competition in 1988. Since then her students from her own music studio have won scholarships in the music
                    festivals. Her full house concert events received high praise from the Mayor of the City and were presented with the recognition
                    of music contribution award in 2004 at her " One Moment In Time " concert. Elsa has also been contributing her time towards
                    conducting choirs and was selected as the mass choir conductor in the 2007 Toronto Evangelical Crusade. Elsa was the awardee for
                    both Absolutely Fabulous Women & Dancing Damsels in 2017 and currently an ambassador of Women of Diversity.
                </Text>
            </View>
            <View style={styles.line}></View>

            <View style={styles.viewImage}>
                <Image source={DinosaurEarthSociety} style={styles.pictureDinosaur} />
            </View>
            <View>
                <Text style={styles.title}>Dinosaur Earth Society</Text>
                <Text style={styles.description}>
                    The Dinosaur Earth Society is an up and coming rock n' roll band founded in January of 2019. Started by drummer
                    Stevie Norris, 16 years of age, and Singer/Guitarist Aric Olsen, 17 years of age. Dinosaur Earth Society has a
                    classic rock sound that falls somewhat like that of Led Zeppelin and Aerosmith. The Dinosaur Earthers wasted no
                    time breaking into the scene, playing their first show after just four months in April of 2019 to an awestruck crowd.
                </Text>
            </View>
            <View style={styles.line}></View>

            <View style={styles.viewImage}>
                <Image source={NatashaMeister} style={styles.picture} />
            </View>
            <View>
                <Text style={styles.title}>Natasha Meister</Text>
                <Text style={styles.description}>
                    Natasha Meister is a 28 year old singer/guitarist/songwriter. Born in London, Ontario, Natasha started music at the age of 6.
                    Growing up singing in her local church and entering competitions lead her to pursuing music full time. With tons of performance
                    experience over the last several years on various stages internationally, she captures audiences wherever she goes with her skilful
                    guitar playing and powerful vocals. She is a versatile artist playing anything from blues, jazz, rock, to pop music. Now under her
                    belt is over 10 years experience in the industry with notable performances opening for The Pixies and LIVE on tour in South Africa 2017.
                </Text>
            </View>
            <View style={styles.line}></View>

            <View style={styles.viewImage}>
                <Image source={SuziKory} style={styles.picture} />
            </View>
            <View>
                <Text style={styles.title}>Suzi Kory</Text>
                <Text style={styles.description}>
                    Alt country rock artist Suzi Kory, born in Beirut and raised in Toronto, burst on to the music scene in 2017 with a rock EP,
                    entitled 'Spellcasting',produced by John Angus Macdonald (The Trews).
                </Text>
                <Text style={styles.description}>
                    Following performances in Canada, the USA and Brazil, she found herself writing and recording in Los Angeles with producer Brent Woods (Vince Neil,
                    Sebastian Bach, Chevy Metal), which would have her sound take an organic turn towards country.
                </Text>
                <Text style={styles.description}>
                    This rocker gone country artist has since released two singles, 'The Secret Garden' (2018) and 'Pretty Little Things' (2019),
                    both which have collectively garnered over 26,000 streams online and almost 15,000 views on YouTube.
                </Text>
                <Text style={styles.description}>
                    Listen for Suzi's newest single 'Settle of the Dust' coming on Jan 8th, 2020 to be featured on Sirius XM and available on all streaming platform.
                </Text>
                <Text style={styles.description} style={styles.description} style={styles.subTitle} onPress={() => Linking.openURL('https://www.suzikory.com/')}>
                    For more information on Suzi Kory, check out www.suzikory.com
                 </Text>
            </View>
            <View style={styles.line}></View>

            <View style={styles.viewImage}>
                <Image source={OneInTheChamber} style={styles.picture} />
            </View>
            <View>
                <Text style={styles.title}>One In The Chamber</Text>
                <Text style={styles.description}>
                    Having released their debut studio EP, I've Got Something To Say... on September 22nd, 2018, One In The Chamber has been compared to the
                    likes of Led Zeppelin, Mötley Crüe, Soundgarden, The Red Hot Chili Peppers, Queens Of The Stone, and Guns N’ Roses, among others. The band
                    has also successfully released two music videos for singles “Bills To Pay” and “Itchin’ Back”. Since then, the band was interviewed live on
                    CP24 Breakfast and has been tirelessly touring across Ontario. Their recent summer tour culminated with a sold out Indie Week spotlight. Currently,
                    One In The Chamber are gearing up for an even busier and bigger 2020.
                </Text>
                <Text style={styles.description} style={styles.description} style={styles.description} style={styles.subTitle} onPress={() => Linking.openURL('https://www.oitcband.com/')}>
                    https://www.oitcband.com/
                </Text>
            </View>
            <View style={styles.line}></View>

            <View style={styles.viewImage}>
                <Image source={TheNoolands} style={styles.picture} />
            </View>
            <View>
                <Text style={styles.title}>The Noolands</Text>
                <Text style={styles.description}>
                    We call ourselves The Noolands. An eclectic group of longtime Canadian friends from Barrie Ontario who write rock & roll with some funky
                    gypsy soul and a whole lot of groove! Really, it’s the music of the people. Our people. Our friends and ourselves. We started as a bunch of
                    generation-why boys in our high-school t-shirts that one day decided we should “make a record, man!” and from the living room, to the stage,
                    to the studio, we traversed. By day, we ride the bus to our nine to five and by night, we’re getting loosey goosey with anyone who’s hip to our
                    sound! In-between all of this, we’re writing, eating and recording together. It never seems to stop, and that works for us!
                </Text>
                <Text style={styles.description} style={styles.description} style={styles.description} style={styles.subTitle} onPress={() => Linking.openURL('https://thenoolands.com/')}>
                    https://thenoolands.com
                </Text>
            </View>
            <View style={styles.line}></View>

            <View style={styles.viewImage}>
                <Image source={SharonHampson} style={styles.picture} />
            </View>
            <View>
                <Text style={styles.title}>Sharon Hampson</Text>
                <Text style={styles.description}>
                    Sharon Hampson, a member of Canada's much loved trio of family entertainers Sharon, Lois & Bram, has entertained families across North America
                    since 1978. When Lois stepped away from performing in 2000, Sharon & Bram carried on as a duo. Through their touring, their gold and platinum and
                    multi-platinum recordings, their acclaimed television series The Elephant Show and Skinnamarink TV, they have sung their way into the hearts and
                    homes of young and old alike.
                </Text>
            </View>
            <View style={styles.line}></View>

            <View style={styles.viewImage}>
                <Image source={BreeTaylor} style={styles.picture} />
            </View>
            <View>
                <Text style={styles.title}>Bree Taylor</Text>
                <Text style={styles.description}>
                    Bree Taylor is a force to be reckoned with. Her latest country single release "Drive" hit the airwaves on September 6 hot on the heels of
                    her debut single, "Turn It Up" and is pushing the limits between country music and pop music with huge crossover appeal. Combining the sounds
                    of pop and country was perfect for the singer-songwriter who is also an engaging storyteller. With a career and brand built on authenticity,
                    honesty and resilience, Bree's creative ambitions have no limitations. No matter what life throws at her, Bree is and always will be a fighter
                    and she will keep writing songs, keep singing and will remain truly unapologetically Bree.
                </Text>
            </View>
            <View style={styles.line}></View>

            <View style={styles.footer}>
                <Text style={styles.email}>Are you a musician and want to </Text>
                <Text style={styles.email}>participate? </Text>
                <Text style={styles.email} onPress={() => Linking.openURL('mailto:info@generalmayhem.ca')}>info@generalmayhem.ca</Text>
                <Text style={styles.note}>
                    NOTE:
                </Text>
                <Text style={styles.note}>
                    Musicians will be there at various times through the day - they are not guaranteed to be there the entire show.
                </Text>
                <Text style={styles.note}>
                    Schedule will not be released. Come early, stay the entire day.
                </Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    pageTitle: {
        fontSize: 20,
        alignSelf: 'center'
    },
    viewPageTitle:{
        padding: 20
    },
    picture: {
        width: 300,
        height: 300,
    },
    pictureDinosaur: {
        width: 300,
        height: 200,
    },
    viewImage: {
        alignSelf: 'center',
        padding: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    subTitle: {
        fontSize: 15,
        alignSelf: 'center',
        paddingTop: 10

    },
    description: {
        fontSize: 15,
        alignSelf: 'stretch',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10

    },
    line: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        paddingTop: 20
    },
    footer: {
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    email: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 10,
    },
    note: {
        paddingTop: 10
    },
    viewBody: {
        backgroundColor: 'white',
    }
});

export default Autograph;