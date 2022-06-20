//Der soll zwei Eingaben machen.
//Diese werden an eine Funktion übergeben, die dann das Produkt der beiden Zahlen zurückgibt.
    const mult = (a, b) => {
    const mult = (a, b) => {
        console.log(a * b);
    }
    mult(prompt('wert 1'), prompt('wert 2'));

    //Erzeuge eine Funktion, die für einen übergebenen Parameter überprüft, ob dieser durch 3 teilbar ist.
    const ausgabe = wert => {
    if ( wert % 3 == 0 ) console.log( `${wert} ist durch 3 teilbar` );
    else console.log( `${wert} ist nicht durch 3 teilbar` );
    }
        ausgabe(12);
        ausgabe(13);
    //Erzeuge eine Funktion, die für einen übergebenen Parameter überprüft, ob dieser durch 3 teilbar ist.
    const ausgabe = wert => {
        console.log ( 
            !(wert % 3)
            ? `${wert} ist durch 3 teilbar`
            : `${wert} ist nicht durch 3 teilbar`
        );
    }
    ausgabe(12);
    ausgabe(13);


   // Lege eine Funktion an, welche einen Parameter annimmt. Der Parameter ist Winkel. Dieser soll zu Bogenmaß umgerechnet werden.
   //Das Ergebnis soll als Rückgabewert an den Aufruf zurückgeliefert werden
   const bm = winkel => {
    return winkel /180 * Math.PI;
   }
   bm(45);

  // Lege eine Funktion an, die einen übergebenen Parameter überprüft, ob es sich um eine Primzahl handelt.
  //Sonderfälle: 0 ist keine Primzahl, 1 ist keine Primzahl.
  const isPrim = wert => {    
    if ( wert == 0 || wert == 1) return false;
    for ( let i = 2; (i*i) <= wert; i++ ){
        if ( wert % i == 0 ) return false;
    }
    return true;
}
console.log( isPrim(13) );

  //Lge eine Funktion an, die zwei Parameter annimmt.
  //Die Funktion soll jede Primzahl zwischen den beiden Werten in der Konsole ausgeben.
  const checkIfPrime = num => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
     if (num % i == 0) return false;
    }
    return true;
   }
   
   const checkRangeIfPrime = (min, max) => {
    for (let i = min; i <= max; i++) {
     if(checkIfPrime(i)) console.log(i);
    }
   }
   
   checkRangeIfPrime(
    prompt('Kleinste Zahl'),
    prompt('Größte Zahl?')
   );

    //Funktion wie oben, aber ein dritter Parameter soll bestimmen, wieviele Nachkommastellen die zufällige Zahl haben soll.
    const zufallErzeugen = (min = 1, max = 6, dez = 0) => {
        dez = 10 ** dez;
        let z = Math.random();
        z *= (max - min + (1 / dez));
        z += min;
        z = Math.floor(z * dez) / dez;
        return z;
    }
    
    console.log(zufallErzeugen(10, 100, 2));
    console.log(zufallErzeugen());

     //Lege eine Funktion an, welche den String für eine zufällige Farbe erzeugt.
     const zufallErzeugen = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const zufallFarbe = () => `hsl(${zufallErzeugen(0,360)},100%,50%)`;
console.log(  zufallFarbe() );
    //Lege eine Funktion an, welche den String für eine zufällige Farbe erzeugt.
      let zeichen = '0123456789abcdef'.split('');
const zufallErzeugen = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const zufallFarbe = () => {
    let farbe = '#';
    for ( let i = 0; i < 6; i++){
        farbe += zeichen[zufallErzeugen(0,zeichen.length)];
    }
    return farbe;
}
console.log(  zufallFarbe() );


   //Der Benutzer soll eine Zahl x eingeben.
   //Die Webseite soll dann alle x Sekunden ein neues Inhaltselement erzeugen und in die Seite einhängen.
   let delay = prompt('Delay:');
setInterval(() => {
    let neu = document.createElement('div');
    neu.innerHTML = delay;
    document.body.append(neu);
}, delay*1000);

  //Lege eine Funktion an, die überprüft, ob eine übergebene Zahl Teil der Fibonacci-Reihe ist.
  let isInFibo = wert => {
    let f1 = 1, f2 = 1;
    while (f1 <= wert) {
        if (f1 == wert) return true;
        [f1, f2] = [f2, f1 + f2];
    }
    return false;
}
console.log(isInFibo(10946));