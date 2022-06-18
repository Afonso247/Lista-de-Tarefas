
function atualizarRelogio() {
    const data = new Date();

    // Chuva de letkkkkkkkkk
    let dianome = data.getDay();
    let dianum = data.getDate();
    let mes = data.getMonth();
    let ano = data.getFullYear();
    let horas = data.getHours();
    let mins = data.getMinutes();
    let segs = data.getSeconds();
    let periodo = "AM";
    // Cabo a chuva(grazadeus)


    if (horas > 12) {
        periodo = "PM";
    }

    Number.prototype.pad = function(n) {
        for (var x = this.toString(); x.length < n; x = 0 + x);
            return x;
    }

    const meses = ["Janeiro,","Fevereiro,","Março,","Abril,","Maio,","Junho,","Julho,","Agosto,","Setembro,","Outubro,","Novembro,","Dezembro,"];
    const diasemana = ["Domingo,","Segunda-Feira,","Terça-Feira,","Quarta-Feira,","Quinta-Feira,","Sexta-Feira,","Sábado,"];
    const ids = ["nomedia","numdia","mes","ano","horas","minutos","segundos","periodo"];
    const valores = [diasemana[dianome],dianum.pad(2)+" de",meses[mes],ano,horas.pad(2)+":",mins.pad(2)+":",segs.pad(2),periodo];

    for(let i = 0; i < valores.length; i++) {
        document.getElementById(ids[i]).firstChild.nodeValue = valores[i];
    }

};

function inicializarRelogio() {
    atualizarRelogio();

    window.setInterval("atualizarRelogio()", 1);
};

inicializarRelogio();
