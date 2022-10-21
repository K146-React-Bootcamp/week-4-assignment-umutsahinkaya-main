# week-4-assignment-umutsahinkaya-main
# `Class Component Nedir?`
<img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original-wordmark.svg" title="React" alt="React" width="60" height="60"/>&nbsp; 
 Biz React 'ta çalışırken tek bir sayfa üzerinden sayfayı bölümlere ayırarak componentler halinde oluşturup birleştiriyoruz. Componentler ise uygulamanızı 
 tekrar kullanılabilir parçalara ayırmanıza ve her bir parçayı ayrı ayrı düşünmenize izin verir.
 
 2 tür component vardır:
 - Bunlar `fonksiyon component` ve `class componenttir`. 
 
 Componentler aslında fonksiyon gibi çalışır. Parametre gönderilebilir (bunları props diye adlandırıyoruz), yapacağı spesifik işlemi yapar ve ekranda neler
 görüneceğini açıklayan React elementleri return ile döndürürler.
 
 -Fonksiyon geçerli bir React componenti olduğundan, tek bir props parametresini obje olarak alır ve bir React componenti return eder.
 
 - `Class componentleri` ise React kütüphanesi içerisindeki “Component” class ‘ından extend olan javascript class ‘ları olarak tanımlayabiliriz. 
 * Bu class ‘lar React Component ‘ten extend olduğu için Component Lifecycle süreçlerini de barındırır.
 
 ## `Nasıl Çalışırlar?`
 
 # ` React Bileşeni Yaşam Döngüsü`
 3 aşaması vardır:
Mounting – Bağlama
Updating – Güncelleme
Unmouting – Ayırma

1-Mounting
Bir component oluştuğunda ve DOM’a eklendiğinde çalışan metotlardır.
constructor() :             Yapıcı metot bileşen oluşturulurken kullanılır.
getDerivedStateFromProps(): render metodunu çağırmadan hemen önce hem ilk mount işleminde hem de sonraki güncellemelerde (updating) çağrılır. Durumu güncellemek için bir nesneyi, hiçbir şeyi güncellemek için ise null değerini döndürmelidir.
render():                   Görüntünün oluşturulduğu aşamadır. Reach elementleri (JSX), diziler, alt DOM ağaşları, DOM üzerindeki metinler ve sayılar bu aşamada görsel bir forma çevrilir. Hem mount hem de güncelleme aşamalarını içerir.
componentDidMount():        Bileşen bağlanmıştır ve burada yaşam döngüsü devam eder. Çünkü bileşen güncellenebilir.

2-Updating
Bir component props ve state lerdeki değişikliklerden ötürü tekrar render edildiğinde burada ki metotlar devreye girer.
getDerivedStateFromProps()
shouldComponentUpdate():   Bileşen güncellemesi
getSnapshotBeforeUpdate(): Render aşamasındaki çıktıdan hemen sonraki kısımdır. Bileşenleriniz değimeden önce DOM’un bazı bilgiler almasını sağlar. Örneğin bir kaydırma işleminde kaydırma konumu bu aşamada alınır.
render() :                 Tekrar görüntü oluşturulacak
componentDidUpdate():      Bileşen güncellendi

3-Unmouting
Bir component DOM‘ dan çıktığında bu metot çalışmaktadır.
componentWillUnmount: Bileşenin yaşam döngüsü bitmeden önceki son istekleri için bir metot
