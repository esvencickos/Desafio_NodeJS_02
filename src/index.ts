/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);


	// CÓDIGO PARA ATENDER OS REQUERIMENTOS
	// R01, R02, R03, R04, R05
console.log("Desafio 2")

const nome1:string = 'Ameba Silva'
const idade1:number = 1
const peso1:number = 0.9
const altura1:number = 1.93
const ehDev1:boolean = true

const nome2:string = 'Chulapa Silva'
const idade2:number = 10
const peso2:number = 30
const altura2:number = 1.93
const ehDev2:boolean = false

const nome3:string = 'Imbigo Silva'
const idade3:number = 44
const peso3:number = 70
const altura3:number = 1.93
const ehDev3:boolean = true

const nome4:string = 'Sunomono Nukino'
const idade4:number = 30
const peso4:number = 110
const altura4:number = 1.93
const ehDev4:boolean = true

const nome5:string = 'Nobody Silva'
const idade5:number = 15
const peso5:number = 60
const altura5:number = 1.93
const ehDev5:boolean = false

console.log(" ")

const somaR01= idade1 + idade2 + idade3 + idade4 + idade5
console.log("Soma das Idades (R01)= "+somaR01)
console.log(" ")

const nomesR02 = [nome1, nome2, nome3, nome4, nome5]
console.log("Agrupar os nomes (R02)= "+ nomesR02)
console.log(" ")

const imc1 = peso1 / (altura1 * altura1)
const imc2 = peso2 / (altura2 * altura2)
const imc3 = peso3 / (altura3 * altura3)
const imc4 = peso4 / (altura4 * altura4)
const imc5 = peso5 / (altura5 * altura5)

const imcAll = ["IMC Ameba = "+ imc1, "IMC Chulapa = "+ imc2, "IMC Imbigo = "+ imc3, "IMC Sunomono = "+ imc4, "IMC nobody = "+ imc5]
console.log("IMC do Ubuntu1 (R03)= "+ imcAll)
console.log(" ")

const arrayDev = [ehDev1, ehDev2, ehDev3, ehDev4, ehDev5];
const countDev = arrayDev.filter(Boolean).length;
console.log("O total de Devs ,(R04), são = "+countDev);
console.log(" ")

const seTem1 = nome1.includes("Silva", 1);
const seTem2 = nome2.includes("Silva", 1);
const seTem3 = nome3.includes("Silva", 1);
const seTem4 = nome4.includes("Silva", 1);
const seTem5 = nome5.includes("Silva", 1);

const seraQueTem = [seTem1, seTem2, seTem3, seTem4, seTem5]
const seraQueTemResult = seraQueTem.filter(Boolean).length;

console.log("O total de Nomes que contem Silva São (R05)= "+seraQueTemResult);

});
