import React, { useState, useEffect } from "react";

import axios from "axios";
import moment from "moment";

import style from "./style.module.css";

import ParanaCases from "./../ParanaCases/ParanaCases";

import { GiBrazil, GiWorld } from "react-icons/gi";
import { GoServer } from "react-icons/go";

import ImageCoronaVirus from "./../../assets/ImageCoronaVirus.webp";

export default function Container() {
  /* World Cases*/
  const [totalCasesWorld, setTotalCasesWorld] = useState(0);
  const [totalDeathsWorld, setTotalDeathsWorld] = useState(0);
  const [totalRecoveredWorld, setTotalRecoveredWorld] = useState(0);
  const [newCasesWorld, setNewCasesWorld] = useState(0);
  const [newDeathsWorld, setNewDeathsWorld] = useState(0);
  const [statisticTakenAt, setStatisticTakenAt] = useState(new Date());
  /* */

  /* Brazil Cases*/
  const [cases, setCases] = useState(0);
  const [deaths, setDeaths] = useState(0);
  const [totalRecovered, setTotaRecovered] = useState(0);
  const [newDeaths, setNewDeaths] = useState(0);
  const [newCases, setNewCases] = useState(0);
  const [seriousCritical, setSeriousCritical] = useState(0);
  const [activeCases, setActiveCases] = useState(0);
  const [casesPor1M, setCasesPor1M] = useState(0);
  /* */

  /* China Cases*/
  const [chinaCases, setChinaCases] = useState(0);
  const [chinaDeaths, setChinaDeaths] = useState(0);
  const [chinaTotalRecovered, setChinaTotaRecovered] = useState(0);
  const [chinaNewDeaths, setChinaNewDeaths] = useState(0);
  const [chinaNewCases, setChinaNewCases] = useState(0);
  const [chinaSeriousCritical, setChinaSeriousCritical] = useState(0);
  const [chinaActiveCases, setChinaActiveCases] = useState(0);
  const [chinaCasesPor1M, setChinaCasesPor1M] = useState(0);
  /* */

  /* Italy Cases*/
  const [italyCases, setItalyCases] = useState(0);
  const [italyDeaths, setItalyDeaths] = useState(0);
  const [italyTotalRecovered, setItalyTotaRecovered] = useState(0);
  const [italyNewDeaths, setItalyNewDeaths] = useState(0);
  const [italyNewCases, setItalyNewCases] = useState(0);
  const [italySeriousCritical, setItalySeriousCritical] = useState(0);
  const [italyActiveCases, setItalyActiveCases] = useState(0);
  const [italyCasesPor1M, setItalyCasesPor1M] = useState(0);
  /* */

  /* USA Cases*/
  const [usaCases, setUsaCases] = useState(0);
  const [usaDeaths, setUsaDeaths] = useState(0);
  const [usaTotalRecovered, setUsaTotaRecovered] = useState(0);
  const [usaNewDeaths, setUsaNewDeaths] = useState(0);
  const [usaNewCases, setUsaNewCases] = useState(0);
  const [usaSeriousCritical, setUsaSeriousCritical] = useState(0);
  const [usaActiveCases, setUsaActiveCases] = useState(0);
  const [usaCasesPor1M, setUsaCasesPor1M] = useState(0);
  /* */

  useEffect(() => {
    /* World Cases */
    axios
      .get(
        "https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
            "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
          },
        }
      )
      .then((response) => {
        const data = response.data;
        setTotalCasesWorld(data.total_cases || 0);
        setTotalDeathsWorld(data.total_deaths || 0);
        setTotalRecoveredWorld(data.total_recovered || 0);
        setNewCasesWorld(data.new_cases || 0);
        setNewDeathsWorld(data.new_deaths || 0);
        setStatisticTakenAt(data.statistic_taken_at || 0);
      }, []);
    /*  */

    /* Brazil Cases */
    axios
      .get(
        "https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=Brazil",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
            "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
          },
        }
      )
      .then((response) => {
        const data = response.data.latest_stat_by_country[0];
        setCases(data.total_cases || 0);
        setDeaths(data.total_deaths || 0);
        setTotaRecovered(data.total_recovered || 0);
        setNewDeaths(data.new_deaths || 0);
        setNewCases(data.new_cases || 0);
        setSeriousCritical(data.serious_critical || 0);
        setActiveCases(data.active_cases || 0);
        setCasesPor1M(data.total_cases_per1m || 0);
      }, []);
    /*  */

    /* China Cases */
    axios
      .get(
        "https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=China",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
            "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
          },
        }
      )
      .then((response) => {
        const dataChina = response.data.latest_stat_by_country[0];
        setChinaCases(dataChina.total_cases || 0);
        setChinaDeaths(dataChina.total_deaths || 0);
        setChinaTotaRecovered(dataChina.total_recovered || 0);
        setChinaNewDeaths(dataChina.new_deaths || 0);
        setChinaNewCases(dataChina.new_cases || 0);
        setChinaSeriousCritical(dataChina.serious_critical || 0);
        setChinaActiveCases(dataChina.active_cases || 0);
        setChinaCasesPor1M(dataChina.total_cases_per1m || 0);
      }, []);
    /* */

    /* Italy Cases */
    axios
      .get(
        "https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=Italy",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
            "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
          },
        }
      )
      .then((response) => {
        const dataItaly = response.data.latest_stat_by_country[0];
        setItalyCases(dataItaly.total_cases || 0);
        setItalyDeaths(dataItaly.total_deaths || 0);
        setItalyTotaRecovered(dataItaly.total_recovered || 0);
        setItalyNewDeaths(dataItaly.new_deaths || 0);
        setItalyNewCases(dataItaly.new_cases || 0);
        setItalySeriousCritical(dataItaly.serious_critical || 0);
        setItalyActiveCases(dataItaly.active_cases || 0);
        setItalyCasesPor1M(dataItaly.total_cases_per1m || 0);
      }, []);
    /* */

    /* USA Cases */
    axios
      .get(
        "https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=USA",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
            "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
          },
        }
      )
      .then((response) => {
        const dataItaly = response.data.latest_stat_by_country[0];
        setUsaCases(dataItaly.total_cases || 0);
        setUsaDeaths(dataItaly.total_deaths || 0);
        setUsaTotaRecovered(dataItaly.total_recovered || 0);
        setUsaNewDeaths(dataItaly.new_deaths || 0);
        setUsaNewCases(dataItaly.new_cases || 0);
        setUsaSeriousCritical(dataItaly.serious_critical || 0);
        setUsaActiveCases(dataItaly.active_cases || 0);
        setUsaCasesPor1M(dataItaly.total_cases_per1m || 0);
      }, []);
    /* */
  }, []);

  const hoursupdateserver = moment
    .utc(`${statisticTakenAt}+03:00`)
    .format("HH:mm");

  return (
    <React.Fragment>

      {/* Brasil */}
      <div className={style.container}>
        <div className={style.wrapper}>
          <span className={style.title}>
            Brasil
            <GiBrazil size={18} className={style.icon} />
          </span>
          <ul className={style.card}>
            <li className={style.item}>
              <span className={style.itemLabel}>Casos:</span>
              <span className={style.itemValue}>{cases}</span>
            </li>
            <li className={style.item}>
              <span className={style.itemLabel}>Novos Casos (Hoje):</span>
              <span className={style.itemValue}>+{newCases}</span>
            </li>
            <li className={style.item}>
              <span className={style.itemLabel}>Recuperados:</span>
              <span className={style.itemValue}>{totalRecovered}</span>
            </li>
            <li className={style.item}>
              <span className={style.itemLabel}>Casos Críticos:</span>
              <span className={style.itemValue}>{seriousCritical}</span>
            </li>
            <li className={style.item}>
              <span className={style.itemLabel}>Casos Ativos:</span>
              <span className={style.itemValue}>{activeCases}</span>
            </li>
            <li className={style.item}>
              <span className={style.itemLabel}>Proporção:</span>
              <span className={style.itemValue}>
                {casesPor1M}
                <span className={style.itemCasesPer1M}>
                  
                  a cada 1M de pessoas
                </span>
              </span>
            </li>
            <li className={style.item}>
              <span className={style.itemLabel}>Mortes:</span>
              <span className={style.itemValue}>{deaths}</span>
            </li>
            <li className={style.item}>
              <span className={style.itemLabel}>Mortes Hoje:</span>
              <span className={style.itemValue}>{newDeaths}</span>
            </li>
          </ul>
        </div>

        {/* China */}
        <div className={style.wrapper}>
          <h4 className={style.title}> China</h4>
          <ul className={style.card}>
            <li className={style.item}>
              <span className={style.itemLabel}>Casos:</span>
              <span className={style.itemValue}>{chinaCases}</span>
            </li>
            <li className={style.item}>
              <span className={style.itemLabel}>Novos Casos (Hoje):</span>
              <span className={style.itemValue}>+{chinaNewCases}</span>
            </li>
            <li className={style.item}>
              <span className={style.itemLabel}>Recuperados:</span>
              <span className={style.itemValue}>{chinaTotalRecovered}</span>
            </li>
            <li className={style.item}>
              <span className={style.itemLabel}>Casos Críticos:</span>
              <span className={style.itemValue}>{chinaSeriousCritical}</span>
            </li>
            <li className={style.item}>
              <span className={style.itemLabel}>Casos Ativos:</span>
              <span className={style.itemValue}>{chinaActiveCases}</span>
            </li>
            <li className={style.item}>
              <span className={style.itemLabel}>Proporção:</span>
              <span className={style.itemValue}>
                {chinaCasesPor1M}
                <span className={style.itemCasesPer1M}>
                  
                  a cada 1M de pessoas
                </span>
              </span>
            </li>
            <li className={style.item}>
              <span className={style.itemLabel}>Mortes:</span>
              <span className={style.itemValue}>{chinaDeaths}</span>
            </li>
            <li className={style.item}>
              <span className={style.itemLabel}>Mortes Hoje:</span>
              <span className={style.itemValue}>{chinaNewDeaths}</span>
            </li>
          </ul>
        </div>
        {/* Itália */}
        <div className={style.wrapper}>
          <h4 className={style.title}> Itália</h4>
          <ul className={style.card}>
            <li className={style.item}>
              <span className={style.itemLabel}>Casos:</span>
              <span className={style.itemValue}>{italyCases}</span>
            </li>
            <li className={style.item}>
              <span className={style.itemLabel}>Novos Casos (Hoje):</span>
              <span className={style.itemValue}>+{italyNewCases}</span>
            </li>
            <li className={style.item}>
              <span className={style.itemLabel}>Recuperados:</span>
              <span className={style.itemValue}>{italyTotalRecovered}</span>
            </li>
            <li className={style.item}>
              <span className={style.itemLabel}>Casos Críticos:</span>
              <span className={style.itemValue}>{italySeriousCritical}</span>
            </li>
            <li className={style.item}>
              <span className={style.itemLabel}>Casos Ativos:</span>
              <span className={style.itemValue}>{italyActiveCases}</span>
            </li>
            <li className={style.item}>
              <span className={style.itemLabel}>Proporção:</span>
              <span className={style.itemValue}>
                {italyCasesPor1M}
                <span className={style.itemCasesPer1M}>
                  a cada 1M de pessoas
                </span>
              </span>
            </li>
            <li className={style.item}>
              <span className={style.itemLabel}>Mortes:</span>
              <span className={style.itemValue}>{italyDeaths}</span>
            </li>
            <li className={style.item}>
              <span className={style.itemLabel}>Mortes Hoje:</span>
              <span className={style.itemValue}>{italyNewDeaths}</span>
            </li>
          </ul>
        </div>

        {/* USA */}
        <div className={style.wrapper}>
          <h4 className={style.title}> Estados Unidos</h4>
          <ul className={style.card}>
            <li className={style.item}>
              <span className={style.itemLabel}>Casos:</span>
              <span className={style.itemValue}>{usaCases}</span>
            </li>
            <li className={style.item}>
              <span className={style.itemLabel}>Novos Casos (Hoje):</span>
              <span className={style.itemValue}>+{usaNewCases}</span>
            </li>
            <li className={style.item}>
              <span className={style.itemLabel}>Recuperados:</span>
              <span className={style.itemValue}>{usaTotalRecovered}</span>
            </li>
            <li className={style.item}>
              <span className={style.itemLabel}>Casos Críticos:</span>
              <span className={style.itemValue}>{usaSeriousCritical}</span>
            </li>
            <li className={style.item}>
              <span className={style.itemLabel}>Casos Ativos:</span>
              <span className={style.itemValue}>{usaActiveCases}</span>
            </li>
            <li className={style.item}>
              <span className={style.itemLabel}>Proporção:</span>
              <span className={style.itemValue}>
                {usaCasesPor1M}
                <span className={style.itemCasesPer1M}> 
                  a cada 1M de pessoas
                </span>
              </span>
            </li>
            <li className={style.item}>
              <span className={style.itemLabel}>Mortes:</span>
              <span className={style.itemValue}>{usaDeaths}</span>
            </li>
            <li className={style.item}>
              <span className={style.itemLabel}>Mortes Hoje:</span>
              <span className={style.itemValue}>{usaNewDeaths}</span>
            </li>
          </ul>
        </div>

        {/* World */}
        <div className={style.wrapper}>
          <span className={style.title}>
            Mundo
            <GiWorld size={18} className={style.icon} />
          </span>
          <ul className={`${style.card} ${style.cardWorld}`}>
            <li className={`${style.item} ${style.itemWorld}`}>
              <span className={style.itemLabel}>Casos:</span>
              <span className={style.itemValue}>{totalCasesWorld}</span>
            </li>
            <li className={`${style.item} ${style.itemWorld}`}>
              <span className={style.itemLabel}>Novos Casos (Hoje):</span>
              <span className={style.itemValue}>+{newCasesWorld}</span>
            </li>
            <li className={`${style.item} ${style.itemWorld}`}>
              <span className={style.itemLabel}>Mortes:</span>
              <span className={style.itemValue}>{totalDeathsWorld}</span>
            </li>
            <li className={`${style.item} ${style.itemWorld}`}>
              <span className={style.itemLabel}>Mortes Hoje:</span>
              <span className={style.itemValue}>{newDeathsWorld}</span>
            </li>
            <li className={`${style.item} ${style.itemWorld}`}>
              <span className={style.itemLabel}>Recuperados: </span>
              <span className={style.itemValue}>{totalRecoveredWorld}</span>
            </li>
          </ul>
        </div>

        <ParanaCases />

        {/* last Update Server API */}
        <div className={style.lastupdateServer}>
          <span className={style.lastupdateServerText}>
            <GoServer size={16} color="#9dadcc" className={style.iconServer} />
            Última atualização do Servidor:
            {`${moment(statisticTakenAt).format(
              "DD/MM/YYYY"
            )} às ${hoursupdateserver}`}
          </span>
        </div>

        <div className={style.infoGoogle}>
          <div className={style.containerTitleInfo}>
            <span className={style.title}>
              Informações Gerais Sobre a Covid-19
            </span>
          </div>
          <div className={style.infoGoogleImage}>
            <img
              src={ImageCoronaVirus}
              alt="Corona Vírus no Brasil"
              className={style.imgCoronaVirus}
            />
          </div>
          <div className={style.containerTitle}>
            <span className={style.title}>Visão Geral</span>
          </div>
          <span className={style.descriptionGoogleText}>
            O coronavírus (COVID-19) é uma doença infecciosa causada por um novo
            vírus. Ele causa problemas respiratórios semelhantes à gripe e
            sintomas como tosse, febre e, em casos mais graves, dificuldade para
            respirar. Como prevenção, lave as mãos com frequência e evite tocar
            o rosto e ter contato próximo (um metro de distância) com pessoas
            que não estejam bem.
          </span>

          <div className={style.containerTitle}>
            <span className={style.title}>Transmissão</span>
          </div>
          <span className={style.descriptionGoogleText}>
            A principal forma de contágio do novo coronavírus é o contato com
            uma pessoa infectada, que transmite o vírus por meio de tosse e
            espirros. Ele também se propaga quando a pessoa toca em uma
            superfície ou objeto contaminado e depois nos olhos, nariz ou boca.
          </span>

          <div className={style.containerTitle}>
            <span className={style.title}>Sintomas do Novo Covid-19</span>
          </div>
          <span className={style.descriptionGoogleText}>
            É possível estar com a COVID-19 por até 14 dias antes de apresentar
            os sintomas, que são febre, cansaço e tosse seca. A maioria das
            pessoas (cerca de 80%) se recupera da doença sem a necessidade de
            tratamentos especiais. Em casos mais raros, ela pode ser grave e até
            fatal. Idosos e pessoas com outras condições médicas (como asma,
            diabetes e doença cardíaca) são mais vulneráveis a quadros sérios.
            Possíveis sintomas:
            <p>• Tosse</p>
            <p>• Febre</p>
            <p>• Cansaço</p>
            <p>• Dificuldade para respirar (em casos graves)</p>
          </span>

          <div className={style.containerTitle}>
            <span className={style.title}>Prevenção contra o Corona Vírus</span>
          </div>
          <span className={style.descriptionGoogleText}>
            Atualmente, não há uma vacina para prevenir o coronavírus
            (COVID-19). Para se proteger e evitar a propagação da doença:.
            <p>• O que fazer:</p>
            <p>
              • Lavar as mãos frequentemente por 20 segundos com água e sabão ou
              higienizá-las com álcool em gel
            </p>
            <p>
              • Cobrir o nariz e a boca com um lenço ou o cotovelo ao tossir e
              espirrar
            </p>
            <p>
              • Evitar contato próximo (um metro de distância) com pessoas que
              não estejam bem
            </p>
            <p>
              • Ficar em casa e se isolar das outras pessoas que moram com você
              caso apresente os sintomas da doença
            </p>
            O que não fazer:
            <p>• Tocar os olhos, nariz ou boca sem estar com as mãos limpas</p>
          </span>

          <div className={style.containerTitle}>
            <span className={style.title}>Tratamento para o Corona Vírus</span>
          </div>
          <span className={style.descriptionGoogleText}>
            Não há nenhum medicamento específico para tratar ou prevenir o
            coronavírus (COVID-19). Algumas pessoas podem precisar da ajuda de
            aparelhos para respirar. Se você apresentar sintomas leves, fique em
            casa até se recuperar. Para aliviar os sintomas:
            <p>• descanse e durma;</p>
            <p>• mantenha o corpo aquecido;</p>
            <p>• beba bastante líquido;</p>
            <p>
              • use um umidificador de ar ou tome um banho quente para aliviar a
              tosse e a dor de garganta.
            </p>
          </span>
        </div>
      </div>

    </React.Fragment>
  );
}
