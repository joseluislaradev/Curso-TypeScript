interface Avenger {
  readonly name: string;
  readonly power: string;
  battle: (enemy: Avenger) => void;
}

class AvengerHero implements Avenger {
  //SE PUEDE TIPAR DIRECTAMENTE AQUI
  readonly name: string; //Se pueden agrgar readonly para solo lectura y no permitir modificacion, o los modificacidores de private y protected que son de TypeScript solo funcioann en compilacion
  readonly power: string; //La foma nativa de hacerl power privada es #power

  constructor(name: string, power: string) {
    this.name = name;
    this.power = power;
  }

  displayInfo(): void {
    console.log(`Name: ${this.name}, Power: ${this.power}`);
  }

  battle(enemy: Avenger): void {
    console.log(`${this.name} is battling ${enemy.name}`);
  }
}

const thor2 = new AvengerHero("Thor", "God of Thunder");
thor2.displayInfo();
thor2.battle(new AvengerHero("Loki", "God of Mischief"));
