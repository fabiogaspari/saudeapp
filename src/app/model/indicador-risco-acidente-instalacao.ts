import { IndicadorRiscoAcidente } from './indicador-risco-acidente';
import { Instalacao } from './instalacao';
import { CustomDate} from './../generics/utils/custom-date.util';

export class IndicadorRiscoAcidenteInstalacao {
    private id: number;
    private version: number;
    private instalacao: Instalacao;
    private indicadorRisco: IndicadorRiscoAcidente;
    private dataInspecao: Date;
    private avaliacao: number;

    private dataInspecaoCustomDate: CustomDate = new CustomDate(this.dataInspecao);

    
    getId(): number {
        return this.id;
    }
    
    setId(id: number) {
        this.id = id;
    }
    
    getVersion(): number {
        return this.version;
    }
    
    setVersion(version: number) {
        this.version = version;
    }
    
    getInstalacao():Instalacao{
        return this.instalacao;
    }
    
    setInstalacao(instalacao:Instalacao){
        this.instalacao = instalacao;
    }
    
    getIndicadorRisco():IndicadorRiscoAcidente{
        return this.indicadorRisco;
    }
    
    setIndicadorRisco(indicador:IndicadorRiscoAcidente){
        this.indicadorRisco = indicador;
    }
    
    getDataInspecao() {
        this.dataInspecao = this.dataInspecaoCustomDate.getApiDate();
        return this.dataInspecao;
    }
    
    setDataInspecao(dataInspecao: Date) {
        this.dataInspecaoCustomDate.setApiDate(dataInspecao);
        this.dataInspecao = dataInspecao;
    }
    
    getDataInspecaoCustomDate(){
        return this.dataInspecaoCustomDate;
    }
    
    setDataInspecaoCustomDate(dataInspecaoCustomDate: CustomDate){
        this.dataInspecaoCustomDate = dataInspecaoCustomDate;
    }
    
    getAvaliacao():number{
        return this.avaliacao;
    }
    
    setAvaliacao(avaliacao:number){
        this.avaliacao = avaliacao;
    }
}