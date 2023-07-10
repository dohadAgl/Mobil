import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'

export default function HomePage() {
    return (
        <ScrollView>
            <View style={{width:'100%', height:200, justifyContent:'center', alignItems:'center', marginBottom:50}}>
                <Image style={{width:'100%', height:300}} source={require('../assets/img/banner.jpg')} resizeMode='cover'/>
                <Image style={{width:'50%', height:60, position:'absolute', top:50}} source={require('../assets/img/dohadlogo-small-transparent.png')}/>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <Text style={{color:'#6b7770', fontSize:20, fontWeight:600}}>DEPREMLER TAHMİN EDİLEBİLİR Mİ?</Text>
                <Text style={{marginVertical:10, fontSize:18}}>
                17 Ağustos 1999
                </Text>
            <Text style={{textAlign:'justify', fontSize:16, lineHeight:22}}>
                Topraklarının tamamına yakını deprem kuşağı içerisinde bulunan ülkemizde deprem belki de
                ilk kez kendisini bu kadar acı bir şekilde hissettirdi. Binlerce kayıp, yok olan aileler ve milyarlarca dolarlık maddi hasar…
                17 Ağustos depreminden sonra ‘DEPREMLERİN TAHMİN EDİLEBİLİRLİĞİNİ’ araştırmak ve bunca acıyı en azından sonraki depremlerde
                yaşamamak adına bir avuç insan internete girdi ve bu doğal afeti önceden görebilmek amacıyla Türkçe ve yabancı dillerde tüm interneti taradılar.
                İşte bu sıralarda Yahoo’daki bir mesaj grubunda tamamen tesadüfen bir araya gelen bu gönüllü topluluk, ülkemizde beklenen büyük
                depremlerin yol açabileceği can kaybı ve milyarlarca dolarlık maddi hasar konularında bilinçlendikçe bu işin ciddiyetini daha da kavrayarak
                depremlerin önceden tahmin edilebilmesine yönelik çalışmalarına hız verdi ve 2002 yılı Nisan ayında DOHAD kuruldu.
                Ve evet , depremler aynen hava durumu gibi tahmin edilebilir. Ancak bu inancımız yaşadığımız binalarımızın sağlam
                olmasına dikkat etmememizi gerektirmez. Öncelikle tedbirlerimizi almamız, güvenliğimizi sağlamamız gerekmektedir.
                Biz depremlerin tahmin edilebilirliğini amatör ruhlu bilimsel bir araştırma olarak kabul ediyoruz ve AFAD Deprem Kurulu üyesi olarak hem
                AFAD'ın "Deprem Kestirimi ve Tahmininde Etik Kurallar"ına hem de Avrupa birliğinin yayınladığı "Deprem Kestiriminde Avrupa Etik Kuralları"na uymaktayız.
            </Text>
        </View>
        </ScrollView>
        
    )
}